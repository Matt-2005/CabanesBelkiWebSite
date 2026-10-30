// Informations générales du site : modifier ici pour mettre à jour tout le site.

export const CONTACT = {
  phone: '06 10 50 52 05',
  phoneLink: '+33610505205',
  email: 'cabanebelki@gmail.com',
  place: 'Supersaxel, 74420 Saxel',
  region: 'Haute-Savoie',
  lat: '46.246868',
  lng: '6.408167',
};

export const LINKS = {
  mapEmbed: `https://maps.google.com/maps?q=${CONTACT.lat},${CONTACT.lng}&z=12&output=embed&hl=fr`,
  googleMaps: `https://www.google.com/maps/dir/?api=1&destination=${CONTACT.lat},${CONTACT.lng}`,
  waze: `https://waze.com/ul?ll=${CONTACT.lat},${CONTACT.lng}&navigate=yes`,
  reserve: '/contact?sujet=reservation#formulaire',
};

export const NAV = [
  { to: '/', label: 'Accueil' },
  { to: '/concept', label: 'Concept' },
  { to: '/sejourner', label: 'Séjourner' },
  { to: '/galerie', label: 'Galerie' },
  { to: '/experience', label: 'Expérience' },
  { to: '/contact', label: 'Contact' },
] as const;

export const PRICES = [
  {
    title: 'Une Nuitée',
    price: 80,
    per: 'la nuit · 2 personnes',
    text: "L'escapade idéale pour une première nuit en pleine nature.",
    photo: 'cabane-automne',
    alt: "Cabane en rondins à l'automne",
    option: '1 nuit',
  },
  {
    title: 'Deux Nuitées',
    price: 160,
    per: 'pour deux nuits · 2 personnes',
    text: 'Le temps de vraiment déconnecter et de profiter des randonnées alentour.',
    photo: 'terrasse-couchant',
    alt: 'La terrasse au coucher du soleil, face au Léman',
    option: '2 nuits',
  },
  {
    title: 'Trois Nuitées',
    price: 210,
    per: 'pour trois nuits · 2 personnes',
    text: 'La parenthèse complète, au rythme de la nature et des saisons.',
    photo: 'cabane-neige',
    alt: 'Cabane sous la neige, au soleil',
    option: '3 nuits',
    tag: '70 € / nuit',
  },
];
