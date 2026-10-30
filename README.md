# Cabanes Belki: site web

Site vitrine des Cabanes Belki (Supersaxel, 74420 Saxel), fait avec **React 19 + Vite + TypeScript**.
Il n'a que 3 dépendances (`react`, `react-dom`, `react-router`) : les animations, le carrousel et la visionneuse photo sont faits maison, sans bibliothèque à maintenir.

## Démarrer

Il faut Node.js 20.19 ou plus récent.

```bash
npm install
npm run dev       # site de développement sur http://localhost:5173
npm run build     # vérifie le code (TypeScript) puis génère le site final dans dist/
npm run preview   # affiche le site final en local
```

## Modifier le contenu

| Quoi | Où |
| --- | --- |
| Téléphone, email, coordonnées GPS, tarifs, menu | `src/data/site.ts` |
| Équipements, distances, FAQ, activités, avis, galerie | `src/data/content.ts` |
| Textes de chaque page | `src/pages/*.tsx` |
| Couleurs, polices, mise en page | `src/styles/global.css` (variables en haut du fichier) |

### Photos

Les photos du site sont dans `src/assets/img/`, en WebP, chacune en trois tailles :
`nom.webp` (1920 px), `nom-md.webp` (1200 px) et `nom-sm.webp` (640 px).
Le navigateur charge automatiquement la plus légère qui suffit à l'écran.
Les originaux (HEIC, DNG…) sont rangés dans `photos-originales/`. Ce dossier n'est pas envoyé sur GitHub.

**Ajouter ou remplacer une photo :** déposez un fichier `.jpg` ou `.webp` dans `src/assets/img/`
(environ 2000 px de large suffisent), puis utilisez son nom (sans extension) dans les pages ou dans `src/data/content.ts`.
Une seule taille fonctionne aussi. Les trois tailles servent seulement à alléger le chargement.
Si une photo est mal cadrée sur grand écran, ajustez son point d'intérêt dans `FOCUS` (`src/data/photos.ts`).

Les photos des activités (Yvoire, Voirons, Mont Billiat, Évian) et le plan aérien sont encore les anciennes images, de basse résolution.

Le logo est dans `public/logo.png`, l'icône d'onglet dans `public/favicon.png` et l'aperçu des réseaux sociaux dans `public/og-image.jpg`.

## Formulaire de contact

Sans configuration, le bouton « Envoyer » ouvre la messagerie du visiteur avec le message pré-rempli.
Pour recevoir les messages directement (sans que le visiteur ouvre sa messagerie), créez un formulaire
gratuit sur [Formspree](https://formspree.io), puis copiez `.env.example` en `.env` et renseignez :

```
VITE_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx
```

Relancez ensuite `npm run build`.

## Mise en ligne

Le dossier `dist/` est un site statique, hébergeable gratuitement :

- **Netlify** : commande de build `npm run build`, dossier `dist`. Le fichier `public/_redirects` est déjà prêt.
- **Vercel** : détection automatique de Vite. Le fichier `vercel.json` est déjà prêt.

Ces deux fichiers font fonctionner les liens directs du type `/sejourner` ou `/galerie`.

## Organisation

```
src/
  main.tsx              entrée + routes (une route par page)
  components/           en-tête, pied de page, bannière, carrousel, visionneuse, formulaire…
  pages/                Accueil, Concept, Séjourner, Expérience, Galerie, Contact, 404
  data/                 tout le contenu modifiable
  hooks/                apparition au défilement, écran de chargement
  styles/global.css     tout le style du site
public/                 fichiers servis tels quels (logo, favicon, redirections)
```
