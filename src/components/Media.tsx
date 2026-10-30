import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { photo, type Photo } from '../data/photos';
import { Icon, QuoteMark } from './Icon';
import { useInView, prefersReducedMotion } from '../hooks/useInView';
import { useLightbox } from './Lightbox';

/* ---------- Image ---------- */
export function Img({ name, alt, className, eager }: { name: string; alt: string; className?: string; eager?: boolean }) {
  return (
    <img
      src={photo(name)}
      alt={alt}
      className={className}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      {...(eager ? { fetchPriority: 'high' as const } : {})}
    />
  );
}

/* ---------- Défilement automatique (images ou citations) ---------- */
function useAutoplay(count: number, delay: number) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const go = useCallback((i: number) => setIndex(((i % count) + count) % count), [count]);

  useEffect(() => {
    if (paused || count < 2 || prefersReducedMotion()) return;
    const t = setTimeout(() => go(index + 1), delay);
    return () => clearTimeout(t);
  }, [index, paused, count, delay, go]);

  const touchX = useRef<number | null>(null);
  const handlers = {
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    onTouchStart: (e: React.TouchEvent) => { touchX.current = e.touches[0].clientX; },
    onTouchEnd: (e: React.TouchEvent) => {
      if (touchX.current === null) return;
      const dx = e.changedTouches[0].clientX - touchX.current;
      if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
      touchX.current = null;
    },
  };
  return { index, go, handlers };
}

function Dots({ count, index, go, label }: { count: number; index: number; go: (i: number) => void; label: string }) {
  return (
    <div className="slider__dots">
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          className={`slider__dot${i === index ? ' is-active' : ''}`}
          aria-label={`${label} ${i + 1}`}
          aria-current={i === index}
          onClick={() => go(i)}
        />
      ))}
    </div>
  );
}

export function Slider({ items, className = '', delay = 5500 }: { items: Photo[]; className?: string; delay?: number }) {
  const { index, go, handlers } = useAutoplay(items.length, delay);
  return (
    <div className={`slider ${className}`} {...handlers} role="region" aria-roledescription="carrousel" aria-label="Photos">
      <div className="slider__track">
        {items.map((p, i) => (
          <div key={p.name} className={`slider__slide${i === index ? ' is-active' : ''}`} aria-hidden={i !== index}>
            <Img name={p.name} alt={p.alt} />
          </div>
        ))}
      </div>
      {items.length > 1 && (
        <>
          <Dots count={items.length} index={index} go={go} label="Image" />
          <button type="button" className="slider__arrow slider__arrow--prev" aria-label="Image précédente" onClick={() => go(index - 1)}>
            <Icon name="prev" />
          </button>
          <button type="button" className="slider__arrow slider__arrow--next" aria-label="Image suivante" onClick={() => go(index + 1)}>
            <Icon name="next" />
          </button>
        </>
      )}
    </div>
  );
}

export function QuoteSlider({ quotes, delay = 7000 }: { quotes: { text: string; author: string }[]; delay?: number }) {
  const { index, go, handlers } = useAutoplay(quotes.length, delay);
  return (
    <div className="quote-slider" {...handlers}>
      {quotes.map((q, i) => (
        <figure key={q.author} className={`quote-slider__item${i === index ? ' is-active' : ''}`} aria-hidden={i !== index}>
          <QuoteMark />
          <blockquote>{q.text}</blockquote>
          <cite>{q.author}</cite>
        </figure>
      ))}
      <Dots count={quotes.length} index={index} go={go} label="Avis" />
    </div>
  );
}

/* ---------- Image de fond avec parallaxe ---------- */
export function ParallaxBg({ name, speed = 0.12 }: { name: string; speed?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const parent = el.parentElement;
      if (!parent) return;
      const r = parent.getBoundingClientRect();
      const vh = window.innerHeight;
      if (r.bottom < -100 || r.top > vh + 100) return;
      const offset = (r.top + r.height / 2 - vh / 2) * -speed;
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [speed]);
  return (
    <div className="section__bg" ref={ref} aria-hidden="true">
      <Img name={name} alt="" />
    </div>
  );
}

/* ---------- Compteur animé ---------- */
export function Counter({ to }: { to: number }) {
  const [ref, inView] = useInView<HTMLSpanElement>(0.5);
  const [value, setValue] = useState(to);
  useEffect(() => {
    if (!inView || prefersReducedMotion()) return;
    let frame = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / 1800);
      setValue(Math.round(to * (1 - Math.pow(1 - p, 4))));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to]);
  return <span ref={ref}>{value}</span>;
}

/* ---------- Vignette cliquable (ouvre la visionneuse) ---------- */
export function Tile({
  item,
  group,
  index,
  className = '',
  caption,
  delay = 0,
}: {
  item: Photo;
  group: Photo[];
  index: number;
  className?: string;
  caption?: ReactNode;
  delay?: number;
}) {
  const { open } = useLightbox();
  const [ref, inView] = useInView<HTMLElement>();
  return (
    <figure
      ref={ref}
      data-reveal=""
      style={delay ? ({ '--d': `${delay}ms` } as React.CSSProperties) : undefined}
      className={`tile ${className}${inView ? ' is-visible' : ''}`}
      role="button"
      tabIndex={0}
      aria-label={`Agrandir : ${item.alt}`}
      onClick={() => open(group, index)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          open(group, index);
        }
      }}
    >
      <Img name={item.name} alt={item.alt} />
      <span className="tile__zoom"><Icon name="zoom" /></span>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

/** Mosaïque de photos (la mise en page vient de la classe de chaque vignette). */
export function Mosaic({ items, layout = [], style }: { items: Photo[]; layout?: string[]; style?: React.CSSProperties }) {
  return (
    <div className="mosaic" style={style}>
      {items.map((p, i) => (
        <Tile key={p.name} item={p} group={items} index={i} className={layout[i] ?? ''} caption={p.caption} delay={(i % 2) * 120} />
      ))}
    </div>
  );
}
