import { useState, type FormEvent } from 'react';
import { useSearchParams } from 'react-router';
import { CONTACT, LINKS, PRICES } from '../data/site';
import { Icon } from './Icon';
import { Img } from './Media';
import { Reveal } from './Reveal';
import { SectionHead } from './Sections';

/*
 * Envoi du formulaire :
 *  - si VITE_FORM_ENDPOINT est défini (fichier .env, ex. Formspree), le message est envoyé directement ;
 *  - sinon, la messagerie du visiteur s'ouvre avec le message pré-rempli.
 */
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;

const SUBJECTS = [
  { value: 'reservation', label: 'Je souhaite réserver une cabane', mail: 'Demande de réservation' },
  { value: 'question', label: "J'ai une question", mail: "Demande d'information" },
  { value: 'cadeau', label: 'Je souhaite offrir un séjour', mail: 'Séjour à offrir' },
];

const LABELS: Record<string, string> = {
  nom: 'Nom',
  email: 'Email',
  telephone: 'Téléphone',
  arrivee: "Date d'arrivée",
  nuits: 'Durée du séjour',
  message: 'Message',
};

type Status = { kind: 'ok' | 'err'; text: string } | null;

function Field({
  id, name, label, type = 'text', required, autoComplete, error, invalid, onInput,
}: {
  id: string; name: string; label: string; type?: string; required?: boolean; autoComplete?: string;
  error?: string; invalid?: boolean; onInput?: () => void;
}) {
  return (
    <div className={`field${invalid ? ' is-invalid' : ''}`}>
      <input id={id} name={name} type={type} placeholder=" " autoComplete={autoComplete} required={required} onInput={onInput} />
      <label htmlFor={id}>{label}{required && <> <span className="req">*</span></>}</label>
      {error && <p className="field__error">{error}</p>}
    </div>
  );
}

function ContactForm({ full }: { full: boolean }) {
  const [params] = useSearchParams();
  const [invalid, setInvalid] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<Status>(null);
  const [sending, setSending] = useState(false);
  const initialSubject = SUBJECTS.some((s) => s.value === params.get('sujet')) ? params.get('sujet')! : 'reservation';
  const today = new Date().toISOString().split('T')[0];

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus(null);
    if (data.get('site')) return; // piège à robots

    const errors: Record<string, boolean> = {};
    form.querySelectorAll<HTMLInputElement>('[required]').forEach((input) => {
      if (!input.checkValidity() || !input.value.trim()) errors[input.name] = true;
    });
    setInvalid(errors);
    if (Object.keys(errors).length) {
      setStatus({ kind: 'err', text: 'Merci de compléter les champs obligatoires.' });
      return;
    }

    const subject = SUBJECTS.find((s) => s.value === data.get('sujet')) ?? SUBJECTS[1];

    if (ENDPOINT) {
      setSending(true);
      try {
        data.set('_subject', `${subject.mail} · Cabanes Belki`);
        const res = await fetch(ENDPOINT, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
        if (!res.ok) throw new Error(String(res.status));
        form.reset();
        setStatus({ kind: 'ok', text: 'Merci ! Votre message a bien été envoyé, je vous réponds très vite.' });
      } catch {
        setStatus({ kind: 'err', text: `L'envoi n'a pas abouti. Écrivez-moi directement à ${CONTACT.email} ou appelez le ${CONTACT.phone}.` });
      } finally {
        setSending(false);
      }
      return;
    }

    let body = '';
    for (const [key, value] of data.entries()) {
      if (LABELS[key] && String(value).trim()) body += `${LABELS[key]} : ${value}\n`;
    }
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(`${subject.mail} · Cabanes Belki`)}&body=${encodeURIComponent(body)}`;
    setStatus({ kind: 'ok', text: "Votre messagerie va s'ouvrir avec le message pré-rempli : il ne vous reste qu'à l'envoyer." });
  };

  const clear = (name: string) => () => invalid[name] && setInvalid((v) => ({ ...v, [name]: false }));

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      {full ? (
        <div className="field full">
          <select id="f-sujet" name="sujet" defaultValue={initialSubject}>
            {SUBJECTS.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
          </select>
          <label htmlFor="f-sujet">Objet de votre demande</label>
        </div>
      ) : (
        <input type="hidden" name="sujet" value="question" />
      )}
      <div className="full"><Field id="f-nom" name="nom" label="Nom et prénom" autoComplete="name" /></div>
      <Field id="f-email" name="email" type="email" label="Email" required autoComplete="email" error="Indiquez une adresse email valide." invalid={invalid.email} onInput={clear('email')} />
      <Field id="f-tel" name="telephone" type="tel" label="Téléphone" required autoComplete="tel" error="Indiquez un numéro de téléphone." invalid={invalid.telephone} onInput={clear('telephone')} />
      {full && (
        <>
          <div className="field">
            <input id="f-arrivee" name="arrivee" type="date" min={today} />
            <label htmlFor="f-arrivee">Date d'arrivée souhaitée</label>
          </div>
          <div className="field">
            <select id="f-nuits" name="nuits" defaultValue="1 nuit">
              {PRICES.map((p) => <option key={p.option} value={p.option}>{p.option} · {p.price} €</option>)}
              <option value="Plus de 3 nuits">Plus de 3 nuits</option>
            </select>
            <label htmlFor="f-nuits">Durée du séjour</label>
          </div>
        </>
      )}
      <div className="field full">
        <textarea id="f-msg" name="message" placeholder=" " />
        <label htmlFor="f-msg">Votre message</label>
      </div>
      <div className="hp" aria-hidden="true">
        <label>Ne pas remplir <input type="text" name="site" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <p className={`form__status${status ? ` is-${status.kind}` : ''}`} role="status" aria-live="polite">{status?.text}</p>
      <div className="form__foot full">
        <p className="form__hint">Je vous réponds personnellement, en général sous 24 h.</p>
        <button className="btn" type="submit" disabled={sending}>
          {sending ? 'Envoi…' : <>Envoyer <Icon name="arrow" /></>}
        </button>
      </div>
    </form>
  );
}

export function ContactSection({
  title,
  intro,
  full = false,
  bg = 'rondins-soleil',
  id,
}: {
  title: string;
  intro?: string;
  full?: boolean;
  bg?: string;
  id?: string;
}) {
  return (
    <section className="section section--cream" id={id}>
      <div className="container">
        <SectionHead eyebrow="Contact" title={title}>{intro && <p className="lead">{intro}</p>}</SectionHead>
        <Reveal className="contact-block" variant="zoom">
          <div className="contact-block__bg"><Img name={bg} alt="" /></div>
          <div className="panel">
            <h3>Coordonnées</h3>
            <div className="coord">
              <span className="coord__icon"><Icon name="phone" /></span>
              <div><small>Téléphone</small><a href={`tel:${CONTACT.phoneLink}`}>{CONTACT.phone}</a></div>
            </div>
            <div className="coord">
              <span className="coord__icon"><Icon name="mail" /></span>
              <div><small>Email</small><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></div>
            </div>
            <div className="coord">
              <span className="coord__icon"><Icon name="pin" /></span>
              <div><small>Localisation</small><span className="v">{CONTACT.place} · {CONTACT.region}</span></div>
            </div>
            <div className="map">
              <iframe src={LINKS.mapEmbed} title="Carte : Les Cabanes Belki à Saxel" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
          <div className="panel">
            <h3>{full ? 'Votre demande' : 'Écrivez-moi'}</h3>
            <ContactForm full={full} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
