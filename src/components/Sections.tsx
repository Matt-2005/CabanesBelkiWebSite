import { Fragment, useEffect, useState, type ReactNode } from 'react';
import { Link } from 'react-router';
import { LINKS } from '../data/site';
import { FAQ, FEATURES } from '../data/content';
import { Icon } from './Icon';
import { Img } from './Media';
import { Reveal } from './Reveal';
import { useAppReady } from '../hooks/useAppReady';

/* ---------- Titre animé mot par mot ---------- */
function SplitWords({ text, start = 0 }: { text: string; start?: number }) {
  return (
    <>
      {text.split(' ').map((word, i) => (
        <Fragment key={i}>
          <span className="w"><span style={{ '--i': start + i } as React.CSSProperties}>{word}</span></span>{' '}
        </Fragment>
      ))}
    </>
  );
}

/* ---------- Bannière du haut de page ---------- */
export function Hero({
  photo,
  alt,
  script,
  title,
  author,
  sub,
  home = false,
  buttons = true,
  small = false,
}: {
  photo: string;
  alt: string;
  script?: string;
  title: string;
  author?: string;
  sub?: string;
  home?: boolean;
  buttons?: boolean;
  small?: boolean;
}) {
  const appReady = useAppReady();
  const [entered, setEntered] = useState(false);
  useEffect(() => {
    if (!appReady) return;
    const f = requestAnimationFrame(() => requestAnimationFrame(() => setEntered(true)));
    return () => cancelAnimationFrame(f);
  }, [appReady]);

  const words = title.split(' ').length;
  return (
    <>
      <section className={`hero${home ? '' : ' hero--page'}${entered ? ' is-in' : ''}`}>
        <div className="hero__media"><Img name={photo} alt={alt} eager /></div>
        <div className="hero__inner">
          {script && <p className="hero__script fade-in" style={{ '--d': '200ms' } as React.CSSProperties}>{script}</p>}
          <h1 className={`hero__title split${small ? ' hero__title--sm' : ''}`} style={{ '--base': '350ms' } as React.CSSProperties}>
            <SplitWords text={title} />
            {author && <span className="hero__author"><SplitWords text={author} start={words} /></span>}
          </h1>
          {sub && <p className="hero__sub fade-in" style={{ '--d': '900ms' } as React.CSSProperties}>{sub}</p>}
          {buttons && (
            <div className="btn-row fade-in" style={{ '--d': '1100ms' } as React.CSSProperties}>
              <Link className="btn" to={LINKS.reserve}>Réserver <Icon name="arrow" /></Link>
              <Link className="btn btn--ghost" to="/contact">Contact</Link>
            </div>
          )}
        </div>
        <a
          className="hero__scroll"
          href="#suite"
          aria-label="Défiler vers le contenu"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('suite')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <i />Défiler
        </a>
      </section>
      <span id="suite" />
    </>
  );
}

/* ---------- En-tête de section ---------- */
export function SectionHead({ eyebrow, title, children, center = true }: { eyebrow: string; title: string; children?: ReactNode; center?: boolean }) {
  return (
    <Reveal className={`section-head${center ? ' center' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="script">{title}</h2>
      {children}
    </Reveal>
  );
}

export function ReserveButton({ label = 'Réserver' }: { label?: string }) {
  return <Link className="btn" to={LINKS.reserve}>{label} <Icon name="arrow" /></Link>;
}

/* ---------- Équipements ---------- */
export function Features() {
  return (
    <div className="features">
      {FEATURES.map((f, i) => (
        <Reveal key={f.title} className="feature" delay={(i % 4) * 90}>
          <div className="feature__icon"><Icon name={f.icon} /></div>
          <h3>{f.title}</h3>
          <p>{f.text}</p>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------- Questions fréquentes ---------- */
export function Faq() {
  return (
    <Reveal className="faq">
      {FAQ.map((item) => (
        <details key={item.q}>
          <summary>{item.q}<i /></summary>
          <div className="faq__body">{item.a}</div>
        </details>
      ))}
    </Reveal>
  );
}

/* ---------- Image encadrée ---------- */
export function Framed({ name, alt, tall = true, lightbox }: { name: string; alt: string; tall?: boolean; lightbox?: () => void }) {
  return (
    <Reveal className="frame-deco" variant="left">
      <Reveal
        as="figure"
        variant="clip"
        className={`frame ${tall ? 'frame--tall' : 'frame--landscape'}`}
        style={{ margin: 0, cursor: lightbox ? 'zoom-in' : undefined }}
        onClick={lightbox}
      >
        <Img name={name} alt={alt} />
      </Reveal>
    </Reveal>
  );
}
