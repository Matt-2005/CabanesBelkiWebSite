import { Fragment, useEffect, useState, type ReactNode } from 'react';
import { Link } from 'react-router';
import { LINKS } from '../data/site';
import { FAQ, FEATURES } from '../data/content';
import { Icon } from './Icon';
import { Img } from './Media';
import { Reveal } from './Reveal';
import { useAppReady } from '../hooks/useAppReady';
import { prefersReducedMotion } from '../hooks/useInView';

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
const d = (ms: number) => ({ '--d': `${ms}ms` }) as React.CSSProperties;

/** Déclenche l'animation d'entrée une fois l'écran de chargement terminé. */
function useEntered() {
  const appReady = useAppReady();
  const [entered, setEntered] = useState(false);
  useEffect(() => {
    if (!appReady) return;
    const f = requestAnimationFrame(() => requestAnimationFrame(() => setEntered(true)));
    return () => cancelAnimationFrame(f);
  }, [appReady]);
  return entered;
}

/** Une ou plusieurs photos en fondu enchaîné, avec un zoom très lent. */
function HeroMedia({ photos, alt, index }: { photos: string[]; alt: string; index: number }) {
  return (
    <div className="hero__media">
      {photos.map((p, i) => (
        <div key={p} className={`hero__slide${i === index ? ' is-active' : ''}`} aria-hidden={i !== 0}>
          <Img name={p} alt={i === 0 ? alt : ''} eager={i === 0} sizes="100vw" />
        </div>
      ))}
    </div>
  );
}

function ScrollCue() {
  return (
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
  );
}

export function Hero({
  photo,
  alt,
  script,
  title,
  buttons = true,
}: {
  photo: string;
  alt: string;
  script?: string;
  title: string;
  buttons?: boolean;
}) {
  const entered = useEntered();
  return (
    <>
      <section className={`hero hero--page${entered ? ' is-in' : ''}`}>
        <HeroMedia photos={[photo]} alt={alt} index={0} />
        <div className="hero__inner">
          {script && <p className="hero__script fade-in" style={d(200)}>{script}</p>}
          <h1 className="hero__title split" style={{ '--base': '350ms' } as React.CSSProperties}>
            <SplitWords text={title} />
          </h1>
          {buttons && (
            <div className="btn-row fade-in" style={d(1000)}>
              <Link className="btn" to={LINKS.reserve}>Réserver <Icon name="arrow" /></Link>
              <Link className="btn btn--ghost" to="/contact">Contact</Link>
            </div>
          )}
        </div>
        <ScrollCue />
      </section>
      <span id="suite" />
    </>
  );
}

const HOME_SLIDE_MS = 7000;

/** Haut de la page d'accueil : citation, diaporama et informations clés. */
export function HomeHero({ photos, alt }: { photos: string[]; alt: string }) {
  const entered = useEntered();
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (!entered || photos.length < 2 || prefersReducedMotion()) return;
    const t = setTimeout(() => setIndex((i) => (i + 1) % photos.length), HOME_SLIDE_MS);
    return () => clearTimeout(t);
  }, [entered, index, photos.length]);

  const pad = (n: number) => String(n).padStart(2, '0');
  return (
    <>
      <section className={`hero hero--home${entered ? ' is-in' : ''}`}>
        <HeroMedia photos={photos} alt={alt} index={index} />
        <div className="hero__inner">
          <h1 className="hero__kicker fade-in" style={d(150)}>
            <span>Cabanes Belki</span><i aria-hidden="true" /><span>Supersaxel · 1200 m</span>
          </h1>
          <figure className="hero__quote">
            <blockquote className="split" style={{ '--base': '400ms' } as React.CSSProperties}>
              <p><SplitWords text="« Tout art est une imitation de la nature »" /></p>
            </blockquote>
            <figcaption className="fade-in" style={d(1150)}>
              <span className="hero__rule" aria-hidden="true" />
              <cite>Sénèque</cite>
              <span className="hero__rule" aria-hidden="true" />
            </figcaption>
          </figure>
          <p className="hero__sub fade-in" style={d(1350)}>
            Trois cabanes en rondins, isolées dans la forêt, face au lac Léman. Ni électricité ni réseau : le silence, le feu de bois et les étoiles.
          </p>
          <div className="btn-row fade-in" style={d(1550)}>
            <Link className="btn" to={LINKS.reserve}>Réserver votre nuit <Icon name="arrow" /></Link>
            <Link className="btn btn--ghost" to="/concept">Découvrir</Link>
          </div>
        </div>
        <div className="hero__bar fade-in" style={d(1800)}>
          <ul className="hero__facts">
            <li>3 cabanes isolées</li>
            <li>Vue sur le Léman</li>
            <li>100 % hors réseau</li>
          </ul>
          {photos.length > 1 && (
            <div className="hero__counter" aria-hidden="true">
              <span>{pad(index + 1)}</span>
              <i><b key={index} style={{ animationDuration: `${HOME_SLIDE_MS}ms` }} /></i>
              <span>{pad(photos.length)}</span>
            </div>
          )}
        </div>
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
