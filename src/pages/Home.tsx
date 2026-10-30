import { Link } from 'react-router';
import { Icon } from '../components/Icon';
import { Counter, Img, Mosaic, ParallaxBg, QuoteSlider } from '../components/Media';
import { Reveal } from '../components/Reveal';
import { HomeHero, SectionHead } from '../components/Sections';
import { ContactSection } from '../components/ContactSection';
import type { Photo } from '../data/photos';

const APERCU: Photo[] = [
  { name: 'cabane-automne', alt: "Cabane en rondins dans les couleurs de l'automne", caption: "L'automne" },
  { name: 'poele-feu', alt: 'Le poêle à bois allumé dans la cabane', caption: 'Le feu de bois' },
  { name: 'fenetre-givre', alt: 'La forêt enneigée vue à travers une fenêtre givrée', caption: 'Le givre' },
  { name: 'barbecue-couchant', alt: 'Barbecue au coin feu face au coucher de soleil', caption: 'Le coin feu' },
  { name: 'lever-soleil-neige', alt: 'Lever de soleil sur la neige et la mer de nuages', caption: 'Le matin' },
  { name: 'cabanes-neige', alt: 'Cabanes sous la neige fraîche', caption: "L'hiver" },
];

const QUOTES = [
  { text: "Merci beaucoup pour ce magnifique séjour dans votre cabane ! Nous avons fait d'autres Smartbox, mais celui-là est de loin le plus inoubliable.", author: 'Alain & Agnès' },
  { text: 'Nous quittons la cabane enchantée, tout enchantés : nuit magique sous la voûte étoilée.', author: 'Véro & Pierre-Yves' },
  { text: 'Un très bon séjour au milieu de la nature avec une vue splendide sur le Léman. Cabane et environnement bien agencés, confortables même sans eau ni électricité.', author: 'Matthieu' },
];

const DISCOVER = [
  { to: '/concept', photo: 'sapins-neige', alt: 'Sapins enneigés baignés de soleil', title: 'Le concept', text: "Renouer avec nos rêves d'enfant : dormir dans une cabane, en pleine nature.", cta: 'Découvrir' },
  { to: '/sejourner', photo: 'fenetre-foret', alt: 'La forêt vue depuis la fenêtre de la cabane', title: 'Séjourner', text: 'Tarifs, équipements, accès et conditions : préparez votre venue.', cta: 'Tarifs & infos' },
  { to: '/experience', photo: 'terrasse-couchant', alt: 'La terrasse au coucher du soleil, face au Léman', title: "L'expérience", text: 'Randonnées, détente, étoiles… et les mots de nos hôtes.', cta: 'Explorer' },
];

export default function Home() {
  return (
    <>
      <title>Cabanes Belki · Cabanes en pleine nature face au lac Léman</title>
      <meta name="description" content="Trois cabanes en rondins perchées à 1200 m d'altitude à Saxel (Haute-Savoie), face au lac Léman. Une nuit hors du temps, sans eau ni électricité, en pleine nature." />

      <HomeHero
        photos={['pleine-lune', 'cabane-neige', 'cabane-automne', 'lumieres-leman']}
        alt="Pleine lune sur le lac Léman depuis les Cabanes Belki"
      />

      <section className="section section--cream">
        <div className="container split-row">
          <Reveal className="split-row__text" variant="left">
            <span className="eyebrow">Bienvenue</span>
            <h2 className="script">Les Cabanes Belki</h2>
            <p className="lead">Découvrez le charme unique de nos cabanes et plongez dans une aventure naturelle inoubliable.</p>
            <p>Sur les hauteurs de Saxel, l'ancienne station de ski de Supersaxel abrite trois cabanes en rondins, éloignées les unes des autres et entièrement autonomes. Ici, on retrouve le plaisir simple de dormir au cœur de la forêt, entre ciel et terre.</p>
            <div className="btn-row">
              <Link className="btn" to="/concept">Découvrir <Icon name="arrow" /></Link>
              <Link className="btn btn--ghost btn--ghost-dark" to="/sejourner#tarifs">Voir les tarifs</Link>
            </div>
          </Reveal>
          <Reveal className="collage" variant="right">
            <Reveal className="frame c1" variant="clip"><Img name="cabane-neige-vue" alt="Cabane en rondins sous la neige, face à la vallée" /></Reveal>
            <Reveal className="frame c2" variant="clip" delay={200}><Img name="interieur-chambre" alt="Le lit face à la grande baie vitrée" /></Reveal>
            <div className="collage__badge"><span><b>1200 m</b>d'altitude</span></div>
          </Reveal>
        </div>

        <div className="container" style={{ marginTop: 'clamp(70px, 9vw, 120px)' }}>
          <Reveal className="stats">
            <div className="stat"><div className="stat__num"><Counter to={3} /></div><div className="stat__label">Cabanes isolées</div></div>
            <div className="stat"><div className="stat__num"><Counter to={1200} /><small>m</small></div><div className="stat__label">D'altitude</div></div>
            <div className="stat"><div className="stat__num"><Counter to={12} /><small>m²</small></div><div className="stat__label">De douceur</div></div>
            <div className="stat"><div className="stat__num">2012</div><div className="stat__label">Depuis</div></div>
          </Reveal>
        </div>
      </section>

      <section className="section section--wood">
        <div className="container">
          <SectionHead eyebrow="En images" title="Un petit aperçu…" />
          <Mosaic items={APERCU} layout={['tile--wide', 'tile--tall', '', '', 'tile--wide', '']} />
          <Reveal as="p" className="center" style={{ marginTop: 44 }}>
            <Link className="btn btn--ghost" to="/galerie">Voir toute la galerie <Icon name="arrow" /></Link>
          </Reveal>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <SectionHead eyebrow="Explorer" title="Votre escapade">
            <p className="lead">Tout ce qu'il faut savoir pour préparer une nuit hors du temps.</p>
          </SectionHead>
          <div className="discover">
            {DISCOVER.map((d, i) => (
              <Reveal as={Link} key={d.to} to={d.to} className="discover-card" delay={i * 120}>
                <Img name={d.photo} alt={d.alt} />
                <div className="discover-card__body">
                  <span className="discover-card__num">0{i + 1}</span>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                  <span className="link-arrow"><span>{d.cta}</span><Icon name="arrow" /></span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--photo">
        <ParallaxBg name="ciel-etoile" />
        <div className="container">
          <SectionHead eyebrow="Livre d'or" title="Ce que disent nos hôtes" />
          <Reveal><QuoteSlider quotes={QUOTES} /></Reveal>
          <Reveal as="p" className="center" style={{ marginTop: 40 }}>
            <Link className="btn btn--ghost" to="/experience#avis">Lire tous les avis <Icon name="arrow" /></Link>
          </Reveal>
        </div>
      </section>

      <ContactSection bg="interieur-bois" title="Des questions ?" intro="Une envie de réserver, une question sur l'accès ou l'hiver ? Je vous réponds avec plaisir." />
    </>
  );
}
