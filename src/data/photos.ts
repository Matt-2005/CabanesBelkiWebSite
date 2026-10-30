// Toutes les images de src/assets/img sont chargées automatiquement.
// Pour remplacer une photo, il suffit de déposer un fichier portant le même nom
// (ex. cabane-nuit.jpg) : Vite l'optimise et le site l'utilise sans autre changement.

const files = import.meta.glob<string>('../assets/img/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  import: 'default',
});

const byName: Record<string, string> = {};
for (const [path, url] of Object.entries(files)) {
  const name = path.split('/').pop()!.replace(/\.[^.]+$/, '');
  byName[name] = url;
}

export function photo(name: string): string {
  const url = byName[name];
  if (!url && import.meta.env.DEV) console.warn(`Photo introuvable : ${name}`);
  return url ?? '';
}

export type Photo = { name: string; alt: string; caption?: string };
