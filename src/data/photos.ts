// Toutes les images de src/assets/img sont chargées automatiquement.
//
// Chaque photo existe en trois tailles, pour que chaque écran charge la plus légère suffisante :
//   nom.webp (1920 px), nom-md.webp (1200 px), nom-sm.webp (640 px)
// Une photo peut aussi n'exister qu'en une seule taille (nom.webp ou nom.jpg).
// Les originaux (HEIC, DNG…) restent dans photos-originales/, hors du site.

const files = import.meta.glob<string>('../assets/img/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  import: 'default',
});

type Source = { src: string; srcSet?: string };

const variants: Record<string, { lg?: string; md?: string; sm?: string }> = {};
for (const [path, url] of Object.entries(files)) {
  const file = path.split('/').pop()!.replace(/\.[^.]+$/, '');
  const match = file.match(/^(.*)-(md|sm)$/);
  const name = match ? match[1] : file;
  const size = (match ? match[2] : 'lg') as 'lg' | 'md' | 'sm';
  (variants[name] ??= {})[size] = url;
}

const WIDTHS = { sm: 640, md: 1200, lg: 1920 } as const;

export function photoSource(name: string): Source {
  const v = variants[name];
  if (!v) {
    if (import.meta.env.DEV) console.warn(`Photo introuvable : ${name}`);
    return { src: '' };
  }
  const sizes = (['sm', 'md', 'lg'] as const).filter((s) => v[s]);
  const src = v.lg ?? v.md ?? v.sm!;
  if (sizes.length < 2) return { src };
  return { src, srcSet: sizes.map((s) => `${v[s]} ${WIDTHS[s]}w`).join(', ') };
}

/** Plus grande version d'une photo (visionneuse plein écran). */
export function photo(name: string): string {
  return photoSource(name).src;
}

/*
 * Point d'intérêt de chaque photo (position horizontale puis verticale).
 * Les photos sont en portrait : sur un écran large, seule une bande est visible ;
 * ce réglage choisit laquelle. Par défaut : le centre.
 */
export const FOCUS: Record<string, string> = {
  'pleine-lune': '50% 30%',
  'foret-coucher-soleil': '50% 40%',
  'cabane-automne': '50% 55%',
  'cabane-neige': '50% 55%',
  'cabane-neige-vue': '50% 58%',
  'cabanes-neige': '50% 58%',
  'lumieres-leman': '50% 52%',
  'ciel-etoile': '50% 35%',
  'nuit-neige': '50% 62%',
  'lever-soleil-neige': '50% 45%',
  'crepuscule-montagne': '50% 42%',
  'sapins-neige': '50% 40%',
  'terrasse-couchant': '50% 45%',
  'barbecue-couchant': '50% 62%',
  'sentier-neige': '50% 62%',
  'interieur-chambre': '50% 55%',
  'interieur-bois': '50% 60%',
  'cabane-crepuscule': '50% 50%',
  'fenetre-givre': '50% 55%',
  'cabane-vue-leman': '45% 50%',
};

export type Photo = { name: string; alt: string; caption?: string };
