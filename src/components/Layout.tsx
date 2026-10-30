import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router';
import { CONTACT, LINKS, NAV } from '../data/site';
import { Icon } from './Icon';
import { LightboxProvider } from './Lightbox';

const navClass = ({ isActive }: { isActive: boolean }) => `nav__link${isActive ? ' is-active' : ''}`;

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      if (y > 500 && y > lastY.current + 4) setHidden(true);
      else if (y < lastY.current - 4 || y <= 500) setHidden(false);
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', menuOpen);
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <>
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}${hidden && !menuOpen ? ' is-hidden' : ''}`}>
        <nav className="nav" aria-label="Navigation principale">
          <ul className="nav__list nav__list--left">
            {NAV.slice(0, 3).map((n) => (
              <li key={n.to}><NavLink className={navClass} to={n.to} end>{n.label}</NavLink></li>
            ))}
          </ul>
          <Link className="nav__logo" to="/" aria-label="Cabanes Belki, accueil">
            <img src="/logo.png" alt="Cabanes Belki" width={311} height={222} />
          </Link>
          <ul className="nav__list nav__list--right">
            {NAV.slice(3).map((n) => (
              <li key={n.to}><NavLink className={navClass} to={n.to}>{n.label}</NavLink></li>
            ))}
          </ul>
          <button
            className="nav__burger"
            type="button"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </nav>
      </header>
      <div className="mobile-menu" id="menu-mobile" aria-hidden={!menuOpen}>
        {NAV.map((n) => (
          <NavLink key={n.to} to={n.to} end={n.to === '/'} className={({ isActive }) => (isActive ? 'is-active' : '')} tabIndex={menuOpen ? 0 : -1}>
            {n.label}
          </NavLink>
        ))}
        <div className="mobile-menu__foot">
          Une question ?
          <a href={`tel:${CONTACT.phoneLink}`} tabIndex={menuOpen ? 0 : -1}>{CONTACT.phone}</a>
          <a href={`mailto:${CONTACT.email}`} tabIndex={menuOpen ? 0 : -1}>{CONTACT.email}</a>
        </div>
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/logo.png" alt="Cabanes Belki" width={311} height={222} loading="lazy" />
            <p>Trois cabanes en rondins perchées à 1200 m d'altitude, face au lac Léman. Une nuit hors du temps, en pleine nature.</p>
          </div>
          <div>
            <h4>Navigation</h4>
            <ul className="footer-list">
              {NAV.map((n) => <li key={n.to}><Link to={n.to}>{n.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <h4>Séjour</h4>
            <ul className="footer-list">
              <li><Link to="/sejourner#tarifs">Tarifs</Link></li>
              <li><Link to="/sejourner#infos">Infos pratiques</Link></li>
              <li><Link to="/sejourner#conditions">Conditions de séjour</Link></li>
              <li><Link to="/sejourner#localisation">Localisation</Link></li>
              <li><Link to="/sejourner#faq">Questions fréquentes</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul className="footer-list">
              <li><span className="lbl">Téléphone</span><br /><a className="val" href={`tel:${CONTACT.phoneLink}`}>{CONTACT.phone}</a></li>
              <li><span className="lbl">Email</span><br /><a className="val" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
              <li>
                <span className="lbl">Adresse</span><br />
                {CONTACT.place}, France<br />
                <a href={LINKS.googleMaps} target="_blank" rel="noopener noreferrer">GPS : {CONTACT.lat}, {CONTACT.lng}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Cabanes Belki · Saxel, Haute-Savoie</span>
          <span>Depuis 2012 · Nuits en pleine nature</span>
        </div>
      </div>
    </footer>
  );
}

function ToTop() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(window.scrollY > 700);
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <button className={`to-top${visible ? ' is-visible' : ''}`} type="button" aria-label="Revenir en haut" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <svg className="ring" viewBox="0 0 50 50" aria-hidden="true">
        <circle cx="25" cy="25" r="24" fill="none" stroke="rgba(236,213,150,.8)" strokeWidth="1" strokeDasharray="151" strokeDashoffset={151 - 151 * progress} />
      </svg>
      <Icon name="up" />
    </button>
  );
}

/** Remonte en haut à chaque changement de page, ou descend jusqu'à l'ancre (#tarifs…). */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => {
        document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
      return () => clearTimeout(t);
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);
  return null;
}

export function Layout() {
  const { pathname } = useLocation();
  return (
    <LightboxProvider>
      <a className="visually-hidden" href="#contenu">Aller au contenu</a>
      <ScrollManager />
      <Header />
      <main id="contenu" className="page" key={pathname}>
        <Outlet />
      </main>
      <Footer />
      <ToTop />
    </LightboxProvider>
  );
}
