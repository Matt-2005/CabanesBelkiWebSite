import { Icon } from '../components/Icon';
import { Reveal } from '../components/Reveal';
import { Hero } from '../components/Sections';
import { ContactSection } from '../components/ContactSection';
import { CONTACT, LINKS } from '../data/site';

export default function Contact() {
  return (
    <>
      <title>Contact & réservation · Cabanes Belki</title>
      <meta name="description" content="Réservez votre cabane ou posez vos questions : 06 10 50 52 05 · cabanebelki@gmail.com. Supersaxel, 74420 Saxel." />

      <Hero photo="cabane-vue-lac" alt="Cabane en bois face au lac Léman" script="Je suis à votre écoute !" title="Contactez-moi" buttons={false} />

      <ContactSection
        id="formulaire"
        full
        title="Réservation & questions"
        intro="Pour réserver, indiquez vos dates et la durée souhaitée : je vous confirme la disponibilité et vous rappelle deux jours avant votre arrivée."
        bg="cabane-nuit"
      />

      <section className="section section--light">
        <div className="container">
          <div className="features features--3">
            <Reveal className="feature">
              <div className="feature__icon"><Icon name="phone" /></div>
              <h3>Par téléphone</h3>
              <p><a href={`tel:${CONTACT.phoneLink}`}><strong>{CONTACT.phone}</strong></a><br />Le plus simple pour vérifier une date rapidement.</p>
            </Reveal>
            <Reveal className="feature" delay={100}>
              <div className="feature__icon"><Icon name="mail" /></div>
              <h3>Par email</h3>
              <p><a href={`mailto:${CONTACT.email}`}><strong>{CONTACT.email}</strong></a><br />Je réponds personnellement à chaque message.</p>
            </Reveal>
            <Reveal className="feature" delay={200}>
              <div className="feature__icon"><Icon name="pin" /></div>
              <h3>Sur place</h3>
              <p><strong>{CONTACT.place}</strong><br /><a href={LINKS.googleMaps} target="_blank" rel="noopener noreferrer">Ouvrir l'itinéraire →</a></p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
