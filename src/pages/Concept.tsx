import { Icon } from '../components/Icon';
import { Mosaic, ParallaxBg, Slider } from '../components/Media';
import { Reveal } from '../components/Reveal';
import { Framed, Hero, ReserveButton, SectionHead } from '../components/Sections';
import { ContactSection } from '../components/ContactSection';

export default function Concept() {
  return (
    <>
      <title>Le concept · Cabanes Belki</title>
      <meta name="description" content="Le concept des Cabanes Belki : trois cabanes autonomes en rondins sur l'ancienne station de Supersaxel, à 1200 m, pour se reconnecter à la nature." />

      <Hero photo="cabane-prairie" alt="Cabane sur pilotis dans la prairie au printemps" script="Découvrez notre concept de cabanes en pleine nature" title="L'expérience unique des Cabanes Belki" />

      <section className="section section--cream">
        <div className="container split-row">
          <Framed name="cabane-neige-sapins" alt="Cabane nichée sous les sapins enneigés" />
          <Reveal className="split-row__text" variant="right">
            <span className="eyebrow">L'idée</span>
            <h2 className="script">Le Concept</h2>
            <p>Le concept des cabanes Belki prend racine à partir d'un constat simple : <em>nous sommes tous consciemment ou inconsciemment attachés à la Nature, notre Terre nourricière.</em></p>
            <p><em>Nos rêves d'enfant de dormir dans une cabane en pleine nature se sont effacés, mais nos gènes en gardent une mémoire infaillible…</em></p>
            <p><em>Le contact avec celle-ci est essentiel pour notre équilibre, souvent perturbé par notre vie quotidienne dictée par des impératifs économiques.</em></p>
            <ReserveButton />
          </Reveal>
        </div>
      </section>

      <section className="section section--photo">
        <ParallaxBg name="interieur-poele" />
        <div className="container">
          <SectionHead eyebrow="Le lieu" title="Les Cabanes Belki">
            <p className="lead" style={{ color: 'rgba(255,255,255,.85)' }}>
              Les cabanes Belki sont implantées sur l'ancienne station de ski de Supersaxel en Haute-Savoie, à 1200 mètres d'altitude. De la station démantelée en 2001, seul subsiste l'ancien chalet d'accueil, éloigné et isolé. La vue sur le lac Léman et la chaîne du Jura est à couper le souffle, donnant souvent l'impression d'être entre ciel et terre.
            </p>
          </SectionHead>
          <Reveal className="container--narrow" variant="zoom">
            <Slider
              className="slider--wide"
              items={[
                { name: 'cabane-prairie', alt: 'Cabane sur pilotis au printemps' },
                { name: 'cabane-automne', alt: "Cabane en rondins à l'automne" },
                { name: 'cabane-givre', alt: 'Cabane sous la neige' },
                { name: 'cabane-hiver-ciel', alt: "Cabane sous un ciel bleu d'hiver" },
                { name: 'cabane-neige-fumee', alt: 'Cabane enneigée, la cheminée fume' },
              ]}
            />
          </Reveal>
          <Reveal as="p" className="center" style={{ marginTop: 44 }}><ReserveButton /></Reveal>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container split-row split-row--reverse">
          <Reveal className="frame-deco" variant="right">
            <Slider
              className="slider--tall"
              items={[
                { name: 'cabane-nuit', alt: 'Cabane illuminée la nuit' },
                { name: 'interieur-poele', alt: 'Intérieur avec poêle à bois et banquettes' },
                { name: 'interieur-chauffage', alt: 'Intérieur lumineux en rondins' },
                { name: 'rondins-soleil', alt: 'Façade en rondins au soleil couchant' },
              ]}
            />
          </Reveal>
          <Reveal className="split-row__text" variant="left">
            <span className="eyebrow">L'intérieur</span>
            <h2 className="script">Confort et authenticité au rendez-vous</h2>
            <p>À l'intérieur, chaque cabane offre une sensation immédiate de confort et de sécurité, avec des espaces intérieurs de <strong>12 mètres carrés</strong>.</p>
            <p>Les grandes baies vitrées et les fenêtres latérales apportent une luminosité naturelle et une vue imprenable.</p>
            <p>Chaque cabane dispose d'une terrasse avec un coin feu pour profiter des barbecues et des couchers de soleil.</p>
            <ReserveButton />
          </Reveal>
        </div>
      </section>

      <section className="section section--photo">
        <ParallaxBg name="foret-coucher-soleil" />
        <div className="container split-row">
          <Reveal className="split-row__text on-dark" variant="left">
            <span className="eyebrow">Notre engagement</span>
            <h2 className="script">Impact Écologique</h2>
            <p className="caps" style={{ fontSize: 'clamp(20px, 2vw, 26px)', color: '#fff', marginTop: '-.3em' }}>Respect de l'environnement</p>
            <p>De structure autoportante et sans raccordement, nos cabanes ont un impact écologique quasi nul.</p>
            <p>Construites par des artisans passionnés, elles respectent l'environnement et s'intègrent harmonieusement au paysage naturel.</p>
            <ul className="check-list">
              <li><Icon name="check" /><span>Aucun raccordement à l'eau ni à l'électricité</span></li>
              <li><Icon name="check" /><span>Éclairage par panneau solaire</span></li>
              <li><Icon name="check" /><span>Toilettes sèches</span></li>
              <li><Icon name="check" /><span>Une faune préservée : le renard vient souvent dire bonjour</span></li>
            </ul>
          </Reveal>
          <Mosaic
            style={{ gridAutoRows: 'clamp(120px, 13vw, 180px)' }}
            layout={['tile--wide', 'tile--tall', '', '']}
            items={[
              { name: 'roue-charrette', alt: 'Vieille roue de charrette face au panorama' },
              { name: 'cloche-foret', alt: "Cloche suspendue à une cabane, forêt de bouleaux" },
              { name: 'renard', alt: "Renard près d'une cabane" },
              { name: 'cabanes-hiver', alt: 'Deux cabanes dans la neige' },
            ]}
          />
        </div>
      </section>

      <section className="section section--cream">
        <div className="container split-row">
          <Reveal className="frame-deco" variant="left">
            <Slider
              items={[
                { name: 'mer-de-nuages', alt: 'Mer de nuages au lever du soleil' },
                { name: 'vue-lac-arbre', alt: 'Vue sur le lac Léman entre les arbres' },
                { name: 'foret-lumiere', alt: 'Rayons de soleil dans la forêt' },
                { name: 'ciel-lac', alt: 'Ciel nuageux sur le Léman' },
              ]}
            />
          </Reveal>
          <Reveal className="split-row__text" variant="right">
            <span className="eyebrow">Ralentir</span>
            <h2 className="script">Vivre une expérience unique</h2>
            <p>Au fil des jours, vous dominerez le lac, observerez mille lumières scintillantes, et découvrirez des paysages époustouflants.</p>
            <p>Vous serez les invités privilégiés de la Nature, de sa faune abondante et de sa flore variée. Ici, vous ressentirez l'urgence de ralentir et de vivre pleinement l'instant présent.</p>
            <ReserveButton />
          </Reveal>
        </div>
      </section>

      <ContactSection title="Envie de vous reconnecter avec la nature ?" intro="Écrivez-moi pour vérifier les disponibilités ou poser vos questions." bg="interieur-chauffage" />
    </>
  );
}
