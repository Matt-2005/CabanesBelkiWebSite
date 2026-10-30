import { useState } from 'react';
import { Link } from 'react-router';
import { Icon, type IconName } from '../components/Icon';
import { Img, Mosaic, ParallaxBg, Slider } from '../components/Media';
import { Reveal } from '../components/Reveal';
import { Hero, ReserveButton, SectionHead } from '../components/Sections';
import { ContactSection } from '../components/ContactSection';
import { ACTIVITIES, REVIEWS } from '../data/content';

const WELLNESS: { icon: IconName; label: string }[] = [
  { icon: 'fire', label: 'Barbecue' },
  { icon: 'leaf', label: 'Méditation' },
  { icon: 'sun', label: 'Lecture' },
  { icon: 'eye', label: 'Photographie' },
  { icon: 'star', label: 'Étoiles' },
];

const INITIAL_REVIEWS = 9;

export default function Experience() {
  const [allReviews, setAllReviews] = useState(false);
  const reviews = allReviews ? REVIEWS : REVIEWS.slice(0, INITIAL_REVIEWS);

  return (
    <>
      <title>L'expérience · Activités & avis · Cabanes Belki</title>
      <meta name="description" content="Randonnées au Mont Billiat et aux Voirons, Yvoire, Évian, détente, étoiles… et les avis de nos hôtes aux Cabanes Belki." />

      <Hero photo="foret-coucher-soleil" alt="Coucher de soleil sur le lac Léman depuis la forêt" script="Vivez des expériences inoubliables" title="Découvrez les activités ainsi que les retours de nos hôtes" small />

      <section className="section section--light">
        <div className="container">
          <SectionHead eyebrow="Aux alentours" title="Activités en plein air">
            <p className="lead">Entre lac et montagnes, le Chablais offre des balades pour tous les niveaux et des villages pleins de charme.</p>
          </SectionHead>
          <div className="activities">
            {ACTIVITIES.map((a, i) => (
              <Reveal as="article" className="activity" key={a.title} delay={(i % 2) * 120}>
                <div className="activity__media"><Img name={a.photo} alt={a.alt} /></div>
                <div className="activity__body">
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                  <div className="activity__meta">
                    {a.tags.map((t) => <span className="pill pill--outline" key={t.label}><Icon name={t.icon} />{t.label}</span>)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container split-row">
          <Reveal className="frame-deco" variant="left">
            <Slider
              className="slider--tall"
              items={[
                { name: 'terrasse-soleil', alt: 'Terrasse en bois baignée de soleil' },
                { name: 'barbecue', alt: 'Barbecue au coin feu' },
                { name: 'terrasse-lac', alt: 'Deux chaises sur la terrasse face au lac' },
                { name: 'cabane-nuit', alt: 'Cabane sous les étoiles' },
              ]}
            />
          </Reveal>
          <Reveal className="split-row__text" variant="right">
            <span className="eyebrow">Sur place</span>
            <h2 className="script">Détente et Bien-être</h2>
            <p>Laissez-vous emporter par la sérénité des lieux. Détendez-vous sur la terrasse, profitez d'un barbecue ou méditez face à un paysage à couper le souffle.</p>
            <p>
              Chaque terrasse est équipée d'un coin feu pour savourer un <em>barbecue en plein air</em>. Le calme environnant est parfait pour la <em>méditation</em> ou une <em>lecture relaxante</em>. Les paysages photogéniques font le bonheur des amateurs de <em>photographie</em>. Enfin, loin de toute pollution lumineuse, le ciel dégagé est idéal pour <em>l'observation des étoiles</em>.
            </p>
            <div className="pills">
              {WELLNESS.map((w) => <span className="pill" key={w.label}><Icon name={w.icon} />{w.label}</span>)}
            </div>
            <ReserveButton />
          </Reveal>
        </div>
      </section>

      <section className="section section--photo" id="avis">
        <ParallaxBg name="mer-de-nuages" speed={0.08} />
        <div className="container">
          <SectionHead eyebrow="Livre d'or" title="Ce que disent nos hôtes">
            <p className="lead" style={{ color: 'rgba(255,255,255,.8)' }}>Quelques mots laissés au moment du départ. Le renard, lui, n'a pas encore écrit.</p>
          </SectionHead>
          <div className="reviews">
            {reviews.map((r, i) => (
              <Reveal as="figure" className="review" key={r.author + i} delay={(i % 3) * 100}>
                <blockquote>{r.text}</blockquote>
                <figcaption>{r.author}</figcaption>
              </Reveal>
            ))}
          </div>
          {!allReviews && REVIEWS.length > INITIAL_REVIEWS && (
            <div className="reviews-more">
              <button className="btn btn--ghost" type="button" onClick={() => setAllReviews(true)}>Lire plus d'avis</button>
            </div>
          )}
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <SectionHead eyebrow="Souvenirs" title="Galerie photo" />
          <Mosaic
            layout={['', '', '', 'tile--wide', '']}
            items={[
              { name: 'cabanes-printemps', alt: 'Deux cabanes au printemps' },
              { name: 'interieur-poele', alt: 'Intérieur avec poêle à bois' },
              { name: 'interieur-chauffage', alt: 'Intérieur lumineux' },
              { name: 'roue-charrette', alt: 'Roue de charrette face au panorama' },
              { name: 'cabane-hiver-ciel', alt: 'Cabane sous la neige' },
            ]}
          />
          <Reveal as="p" className="center" style={{ marginTop: 44 }}>
            <Link className="btn" to="/galerie">Voir toute la galerie <Icon name="arrow" /></Link>
          </Reveal>
        </div>
      </section>

      <ContactSection title="Une envie d'évasion ?" intro="Je vous conseille volontiers sur les balades et les meilleures saisons." bg="terrasse-foret" />
    </>
  );
}
