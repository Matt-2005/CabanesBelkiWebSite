import { Icon } from '../components/Icon';
import { Img, ParallaxBg } from '../components/Media';
import { Reveal } from '../components/Reveal';
import { Faq, Features, Framed, Hero, ReserveButton, SectionHead } from '../components/Sections';
import { ContactSection } from '../components/ContactSection';
import { useLightbox } from '../components/Lightbox';
import { DISTANCES } from '../data/content';
import { LINKS, PRICES } from '../data/site';

const PLAN = [{ name: 'plan-cabanes', alt: 'Vue aérienne : emplacement des trois cabanes depuis le parking' }];

export default function Sejourner() {
  const { open } = useLightbox();
  return (
    <>
      <title>Séjourner · Tarifs & infos pratiques · Cabanes Belki</title>
      <meta name="description" content="Tarifs fixes toute l'année (80 € la nuit), équipements, conditions de séjour et accès aux Cabanes Belki à Supersaxel, Saxel (74)." />

      <Hero photo="cabane-automne" alt="Cabane en rondins à l'automne" script="Séjourner dans nos cabanes" title="Tarifs, disponibilités et infos pratiques" />

      <section className="section section--cream" id="infos">
        <div className="container split-row">
          <Framed name={PLAN[0].name} alt={PLAN[0].alt} lightbox={() => open(PLAN, 0)} />
          <Reveal className="split-row__text" variant="right">
            <span className="eyebrow">Sur place</span>
            <h2 className="script">Informations Pratiques</h2>
            <p>Trois cabanes Belki sont implantées sur le site de Supersaxel, chacune éloignée des autres de plusieurs centaines de mètres, offrant une totale immersion dans la nature.</p>
            <div className="distances" role="table" aria-label="Distance à pied depuis le parking">
              {DISTANCES.map((d) => (
                <div className="distances__row" role="row" key={d.cabin}>
                  <b role="cell">{d.cabin}</b>
                  <span role="cell"><strong>{d.meters}</strong>m à pied</span>
                  <span role="cell"><strong>+{d.climb}</strong>m de dénivelé</span>
                </div>
              ))}
            </div>
            <p style={{ marginTop: 22 }}>
              Les cabanes sont conçues pour une immersion totale, <strong>sans raccordement à l'électricité ni à l'eau</strong>. Chaque cabane dispose d'une terrasse avec une vue panoramique sur le lac Léman.
            </p>
          </Reveal>
        </div>
        <div className="container" style={{ marginTop: 'clamp(70px, 9vw, 120px)' }}>
          <SectionHead eyebrow="Équipements" title="Simple, mais tout confort" />
          <Features />
        </div>
      </section>

      <section className="section section--photo" id="tarifs">
        <ParallaxBg name="interieur-chambre" />
        <div className="container">
          <SectionHead eyebrow="Tarifs" title="Tarifs">
            <p className="lead" style={{ color: 'rgba(255,255,255,.85)' }}>
              Je vous propose des tarifs fixes pour votre séjour, quelle que soit la saison. Les cabanes sont attribuées en fonction des disponibilités et de vos préférences.
            </p>
          </SectionHead>
          <div className="pricing">
            {PRICES.map((p, i) => (
              <Reveal as="article" className="price-card" key={p.title} delay={i * 120}>
                {p.tag && <span className="price-card__tag">{p.tag}</span>}
                <div className="price-card__media"><Img name={p.photo} alt={p.alt} /></div>
                <div className="price-card__body">
                  <h3>{p.title}</h3>
                  <div className="price-card__price">{p.price}<sup>€</sup></div>
                  <div className="price-card__per">{p.per}</div>
                  <p className="price-card__detail">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal as="p" className="pricing-note">Tarifs identiques toute l'année · Cabane pour 2 personnes · Modalités de paiement communiquées lors de la réservation</Reveal>
          <Reveal as="p" className="center" style={{ marginTop: 30 }}><ReserveButton /></Reveal>
        </div>
      </section>

      <section className="section section--cream" id="conditions">
        <div className="container split-row">
          <Reveal className="split-row__text" variant="left">
            <span className="eyebrow">Bon à savoir</span>
            <h2 className="script">Conditions de Séjour</h2>
            <div className="note-alert">
              <Icon name="alert" />
              <span>Les cabanes sont strictement réservées pour deux personnes et sont non-fumeur. Il n'est pas possible de loger une troisième personne, même avec supplément, et les animaux de compagnie ne sont pas acceptés.</span>
            </div>
            <ul className="check-list">
              <li><Icon name="users" /><span><strong>2 personnes</strong> maximum par cabane</span></li>
              <li><Icon name="nosmoke" /><span>Cabanes <strong>non-fumeur</strong></span></li>
              <li><Icon name="paw" /><span>Animaux de compagnie <strong>non acceptés</strong></span></li>
              <li><Icon name="clock" /><span>Arrivée <strong>à partir de 17h00</strong> (avant la nuit en hiver pour éviter de se perdre)</span></li>
              <li><Icon name="call" /><span>Je vous appelle <strong>deux jours avant</strong> votre séjour pour vous communiquer toutes les informations pratiques, adaptées à la météo du moment.</span></li>
            </ul>
            <ReserveButton />
          </Reveal>
          <Framed name="cabanes-neige" alt="Cabanes sous la neige en hiver" />
        </div>
      </section>

      <section className="section section--photo" id="localisation">
        <ParallaxBg name="foret-coucher-soleil" speed={0.1} />
        <div className="container">
          <SectionHead eyebrow="Accès" title="Localisation" />
          <div className="split-row split-row--wide-media" style={{ alignItems: 'start' }}>
            <Reveal className="map map--lg" variant="left">
              <iframe src={LINKS.mapEmbed} title="Carte : accès aux Cabanes Belki à Supersaxel" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </Reveal>
            <Reveal className="split-row__text on-dark" variant="right">
              <p>Les cabanes Belki se trouvent sur la commune de <strong>Saxel (74420)</strong>, au bout de la route des Grands Communs menant au site de Supersaxel.</p>
              <ul className="check-list">
                <li><Icon name="pin" /><span>Indiquez <strong>« Supersaxel »</strong> sur votre GPS, ou suivez les panneaux <strong>« Accroparc »</strong> depuis le village de Saxel.</span></li>
                <li><Icon name="pin" /><span>Sur Waze ou Google Maps, entrez directement <strong>« Cabane Belki »</strong>.</span></li>
                <li><Icon name="home" /><span>Au parking, vous trouverez un grand chalet, ancien restaurant de la station, aujourd'hui habitation privée.</span></li>
                <li><Icon name="walk" /><span>Les cabanes sont visibles sur la pente, sauf de nuit. Par brouillard, un balisage de <strong>flèches rouges</strong> vous guide jusqu'à la première cabane.</span></li>
              </ul>
              <div className="note-alert">
                <Icon name="snow" />
                <span>Équipements spéciaux, pneus neige et/ou chaînes indispensables en cas de neige (novembre à avril).</span>
              </div>
              <div className="btn-row" style={{ marginTop: 26 }}>
                <a className="btn btn--sm" href={LINKS.googleMaps} target="_blank" rel="noopener noreferrer">Google Maps <Icon name="arrow" /></a>
                <a className="btn btn--sm btn--ghost" href={LINKS.waze} target="_blank" rel="noopener noreferrer">Waze</a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--light" id="faq">
        <div className="container--narrow">
          <SectionHead eyebrow="FAQ" title="Questions fréquentes" />
          <Faq />
        </div>
      </section>

      <ContactSection id="reserver" full title="Réservez votre nuit" intro="Indiquez-moi vos dates : je vous confirme la disponibilité au plus vite." bg="pleine-lune" />
    </>
  );
}
