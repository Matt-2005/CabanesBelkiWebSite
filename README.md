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

### Remplacer les photos

Les photos actuelles ont été découpées dans la maquette. Leur résolution est donc limitée (environ 400 à 800 px de large).
Pour un rendu net, **remplacez-les par les photos originales** en gardant le même nom de fichier dans `src/assets/img/`
(ex. `cabane-nuit.jpg`). Rien d'autre à changer : Vite les détecte et les optimise tout seul.
Une largeur de 2000 px environ suffit pour les grandes images de fond.

Le logo est dans `public/logo.png` et l'icône d'onglet dans `public/favicon.png`.

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
