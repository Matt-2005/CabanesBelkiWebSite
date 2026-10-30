import { useMemo, useState } from 'react';
import { Tile } from '../components/Media';
import { Reveal } from '../components/Reveal';
import { Hero, SectionHead } from '../components/Sections';
import { ContactSection } from '../components/ContactSection';
import { GALLERY, type GalleryCategory } from '../data/content';

const FILTERS: { value: GalleryCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'Toutes' },
  { value: 'cabanes', label: 'Cabanes' },
  { value: 'interieur', label: 'Intérieur' },
  { value: 'nature', label: 'Nature' },
  { value: 'hiver', label: 'Hiver' },
];

export default function Galerie() {
  const [filter, setFilter] = useState<GalleryCategory | 'all'>('all');
  const items = useMemo(() => (filter === 'all' ? GALLERY : GALLERY.filter((p) => p.cats.includes(filter))), [filter]);

  return (
    <>
      <title>Galerie photo · Cabanes Belki</title>
      <meta name="description" content="Photos des Cabanes Belki au fil des saisons : cabanes en rondins, intérieurs chaleureux, lac Léman, neige et forêt." />

      <Hero photo="cabane-hiver-ciel" alt="Cabane sous la neige et ciel bleu" script="Découvrez la beauté et la sérénité de nos cabanes en pleine nature" title="Images et souvenirs de nos hôtes" small />

      <section className="section section--wood">
        <div className="container">
          <SectionHead eyebrow="Au fil des saisons" title="Galerie" />
          <Reveal className="filters" role="group" aria-label="Filtrer les photos">
            {FILTERS.map((f) => (
              <button key={f.value} type="button" className={`filter${filter === f.value ? ' is-active' : ''}`} aria-pressed={filter === f.value} onClick={() => setFilter(f.value)}>
                {f.label}
              </button>
            ))}
          </Reveal>
          {/* la clé force une nouvelle animation à chaque changement de filtre */}
          <div className="gallery" key={filter}>
            {items.map((p, i) => (
              <Tile key={p.name} item={p} group={items} index={i} caption={p.alt} delay={(i % 3) * 90} />
            ))}
          </div>
        </div>
      </section>

      <ContactSection title="Des questions ?" intro="Envie de découvrir ces paysages en vrai ? Écrivez-moi." bg="cabane-givre" />
    </>
  );
}
