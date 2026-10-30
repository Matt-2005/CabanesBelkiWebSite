import type { IconName } from '../components/Icon';
import type { Photo } from './photos';

export const FEATURES: { icon: IconName; title: string; text: string }[] = [
  { icon: 'fire', title: 'Chauffage douillet', text: 'Poêle à bois dans deux cabanes, chauffage gaz et pétrole dans la troisième.' },
  { icon: 'bulb', title: 'Lumière solaire', text: 'Ampoules LED rechargées par un petit panneau solaire.' },
  { icon: 'home', title: '12 m² en rondins', text: 'Grandes baies vitrées et fenêtres latérales pour une vue imprenable.' },
  { icon: 'eye', title: 'Vue sur le Léman', text: 'Terrasse panoramique sur le lac et la chaîne du Jura.' },
  { icon: 'leaf', title: 'Toilettes sèches', text: 'Dans un petit chalet en madriers attenant, confortables et impeccables.' },
  { icon: 'sun', title: 'Terrasse & coin feu', text: 'Pour les barbecues, les pique-niques et les couchers de soleil.' },
  { icon: 'drop', title: '100 % hors réseau', text: 'Ni eau courante ni électricité : une immersion totale dans la nature.' },
  { icon: 'trees', title: 'Intimité préservée', text: 'Chaque cabane est à plusieurs centaines de mètres des autres.' },
];

export const DISTANCES = [
  { cabin: 'Cabane 1', meters: 250, climb: 40 },
  { cabin: 'Cabane 2', meters: 350, climb: 50 },
  { cabin: 'Cabane 3', meters: 500, climb: 70 },
];

export const FAQ = [
  {
    q: "Y a-t-il de l'eau et de l'électricité ?",
    a: "Non, et c'est tout l'esprit des cabanes : une immersion totale, sans raccordement. L'éclairage est assuré par des ampoules LED rechargées par un petit panneau solaire, et chaque cabane est chauffée (poêle à bois pour deux d'entre elles, gaz et pétrole pour la troisième). Des toilettes sèches se trouvent dans un petit chalet attenant.",
  },
  {
    q: 'Faut-il marcher pour rejoindre les cabanes ?',
    a: 'Oui, un peu : depuis le parking, la première cabane est à 250 m (+40 m de dénivelé), la deuxième à 350 m (+50 m) et la troisième à 500 m (+70 m).',
  },
  {
    q: "Comment se passe l'arrivée ?",
    a: "L'arrivée se fait à partir de 17h00, et avant la nuit en hiver pour ne pas vous perdre. Je vous appelle deux jours avant votre séjour pour vous donner toutes les informations pratiques, adaptées à la météo.",
  },
  {
    q: 'Peut-on venir en hiver ?',
    a: "Bien sûr, c'est même une saison magique. Les cabanes sont chauffées, mais pneus neige et/ou chaînes sont indispensables en cas de neige, de novembre à avril.",
  },
  {
    q: 'Peut-on venir à trois, avec un enfant ou un animal ?',
    a: 'Non : les cabanes sont strictement réservées à deux personnes, sans possibilité de troisième couchage même avec supplément. Les animaux de compagnie ne sont pas acceptés, et les cabanes sont non-fumeur.',
  },
  {
    q: 'Les tarifs changent-ils selon la saison ?',
    a: "Non, les tarifs sont fixes toute l'année : 80 € pour une nuit, 160 € pour deux nuits et 210 € pour trois nuits.",
  },
  {
    q: 'Comment trouver les cabanes avec un GPS ?',
    a: '« Supersaxel » sur votre GPS, ou « Cabane Belki » sur Waze ou Google Maps. Depuis le village de Saxel, vous pouvez aussi suivre les panneaux « Accroparc ».',
  },
];

export const ACTIVITIES: {
  photo: string;
  alt: string;
  title: string;
  text: string;
  tags: { icon: IconName; label: string }[];
}[] = [
  {
    photo: 'mont-billiat',
    alt: 'Le sommet herbeux du Mont Billiat',
    title: 'Le Mont Billiat',
    text: 'Une randonnée exigeante pour les amateurs de défis. Le parcours offre des vues spectaculaires sur le lac Léman et les Alpes, avec un panorama à 360° au sommet, des paysages variés, une faune et une flore locales.',
    tags: [{ icon: 'mountain', label: 'Difficile' }, { icon: 'clock', label: '5 à 6 h aller-retour' }],
  },
  {
    photo: 'voirons',
    alt: 'Le Monastère des Voirons dans la forêt',
    title: 'Le Monastère des Voirons',
    text: 'Une randonnée accessible pour découvrir le Monastère des Voirons, avec des vues magnifiques et un cadre paisible.',
    tags: [{ icon: 'walk', label: 'Facile à modérée' }, { icon: 'clock', label: '2 h aller-retour' }],
  },
  {
    photo: 'yvoire',
    alt: "Ruelle fleurie du village médiéval d'Yvoire",
    title: 'Yvoire',
    text: "Explorez le charmant village médiéval d'Yvoire, réputé pour ses ruelles pittoresques, ses jardins fleuris et son patrimoine historique : château, jardin des Cinq Sens, boutiques artisanales et restaurants.",
    tags: [{ icon: 'home', label: 'Village médiéval' }, { icon: 'leaf', label: 'Jardins' }],
  },
  {
    photo: 'evian',
    alt: 'Évian-les-Bains vue depuis le lac',
    title: 'Évian-les-Bains',
    text: "La ville thermale renommée : thermes, promenade au bord du lac, jardins de l'eau, casino… Et une traversée relaxante du Léman jusqu'à Lausanne en bateau.",
    tags: [{ icon: 'drop', label: 'Bord du lac' }, { icon: 'clock', label: 'Lausanne ≈ 1 h en bateau' }],
  },
];

export const REVIEWS: { text: string; author: string }[] = [
  { text: "Nous sommes déjà sur la route du retour, merci pour ce séjour, c'était vraiment top ! On a apprécié la beauté du coucher du soleil. Sous vos conseils nous avons grimpé au sommet du mont Billiat, on ne regrette vraiment pas tellement c'était beau. Nous n'avons pas eu la chance de voir le petit renard. Bonne continuation !!", author: 'Jean-Michel & Delphine' },
  { text: "Merci beaucoup pour ce magnifique séjour dans votre cabane ! Nous avons fait d'autres Smartbox, mais celui-là est de loin le plus inoubliable. Bonne continuation !", author: 'Alain & Agnès' },
  { text: 'Nous avons passé un agréable séjour, très belle vue depuis notre petite cabane. Ce matin nous avons eu la chance de voir le renard, on lui a donné à manger. Merci à vous pour votre accueil chaleureux, bonne continuation.', author: 'Monsieur L.' },
  { text: 'Bonjour Ludovic, nous quittons maintenant, nous avons passé un merveilleux séjour, endroit et cabane superbes. Merci beaucoup, nous reviendrons certainement en hiver. PS : les Figolu sont excellents ;-)', author: 'Matthieu & Marilou' },
  { text: 'Nous quittons la cabane enchantée, tout enchantés : nuit magique sous la voûte étoilée. Tout est en ordre, clefs à leur place. Merci, bon dimanche, nous vous envoyons un petit mail un jour prochain.', author: 'Véro & Pierre-Yves' },
  { text: 'Nous venons de partir, merci pour votre gentil accueil. Nous avons passé un super week-end, vue magnifique, cabane très propre et confiture délicieuse. À bientôt !', author: 'Elsa & Vincent' },
  { text: 'Encore un grand merci pour votre accueil, nous avons passé un fabuleux week-end dans cette sublime cabane :D Et comme prévu, la petite renarde est venue quelques minutes après vous nous dire bonjour :D Bonne continuation.', author: 'Isabelle' },
  { text: 'Nous avons quitté la cabane après un très bon séjour au milieu de la nature avec une vue splendide sur le Léman. La randonnée au mont Billiat et la vue depuis les crêtes est splendide et mérite le détour. Cabane et environnement bien agencés permettant un séjour confortable même sans eau ni électricité.', author: 'Matthieu' },
  { text: "Nous voilà repartis, ressourcés, après un très agréable moment dans votre cabane. Pique-nique, barbecue et petit-déjeuner en compagnie de la renarde qui a très bon appétit ))). Merci pour votre accueil, nous reviendrons certainement tester d'autres saisons !!", author: 'Élodie & Charles' },
  { text: 'Nous avons beaucoup apprécié ce séjour avec cette vue magnifique et cette agréable petite cabane. Merci ! PS : la confiture était très bonne !!!', author: 'Anne-Sophie & Tomy' },
  { text: "Je m'excuse de vous écrire seulement maintenant mais le retour pour la rentrée a été rapide. On tient à vous remercier pour ces deux jours passés dans cette superbe cabane. On se souviendra de notre première douche solaire qui a été raccourcie par des randonneurs… LOL. En tout cas merci pour tout, on a passé un super beau séjour dans votre région.", author: 'Des hôtes ravis' },
  { text: "Nous voici repartis. Le cadre est superbe, mais nous n'avons pas eu l'honneur de rencontrer madame renarde )) Merci beaucoup, très jolie expérience !", author: 'Séverine & Sacha' },
  { text: "Nous quittons la cabane, ravis d'avoir fait la connaissance du petit renard. Belles photos !! Cordialement.", author: 'Thierry & Corinne' },
  { text: "Nous venons de quitter la cabane, deux jours très agréables avec la vue d'un fabuleux coucher de soleil sur le lac. Merci pour le petit-déjeuner copieux, 3 petits pains ont disparu… mais nous n'avons pas vu la renarde !! Bonne journée.", author: 'Des hôtes gourmands' },
  { text: 'Nous sommes partis. Ce fut très agréable et vos cabanes sont super. Un week-end fort sympathique. Bonne journée !!!', author: 'Des hôtes de passage' },
];

export type GalleryCategory = 'cabanes' | 'interieur' | 'nature' | 'hiver';

export const GALLERY: (Photo & { cats: GalleryCategory[] })[] = [
  { name: 'pleine-lune', alt: 'Pleine lune sur le Léman et les lumières de la vallée', cats: ['nature'] },
  { name: 'cabane-neige', alt: 'Cabane sous la neige, au soleil', cats: ['cabanes', 'hiver'] },
  { name: 'poele-feu', alt: 'Le poêle à bois', cats: ['interieur'] },
  { name: 'foret-coucher-soleil', alt: 'Le Léman au couchant', cats: ['nature'] },
  { name: 'interieur-chambre', alt: 'Le lit face à la grande baie vitrée', cats: ['interieur'] },
  { name: 'cabane-automne', alt: "Cabane d'automne", cats: ['cabanes'] },
  { name: 'sapins-neige', alt: 'Sapins enneigés au soleil', cats: ['nature', 'hiver'] },
  { name: 'barbecue-couchant', alt: 'Le coin feu au coucher du soleil', cats: ['nature'] },
  { name: 'cabane-neige-vue', alt: 'Cabane enneigée face à la vallée', cats: ['cabanes', 'hiver'] },
  { name: 'fenetre-givre', alt: 'La forêt vue à travers la fenêtre', cats: ['interieur', 'hiver'] },
  { name: 'ciel-etoile', alt: 'Ciel étoilé au-dessus de la forêt', cats: ['nature'] },
  { name: 'cabane-vue-leman', alt: 'Façade en rondins face au Léman', cats: ['cabanes'] },
  { name: 'lever-soleil-neige', alt: 'Lever de soleil sur la neige', cats: ['nature', 'hiver'] },
  { name: 'fenetre-foret', alt: 'Vue sur la forêt depuis la cabane', cats: ['interieur'] },
  { name: 'cabanes-neige', alt: 'Cabanes sous la neige fraîche', cats: ['cabanes', 'hiver'] },
  { name: 'terrasse-couchant', alt: 'La terrasse au coucher du soleil', cats: ['nature', 'cabanes'] },
  { name: 'cabane-crepuscule', alt: 'Une cabane au crépuscule', cats: ['cabanes'] },
  { name: 'lumieres-leman', alt: 'Crépuscule sur les lumières du Léman', cats: ['nature'] },
  { name: 'interieur-bois', alt: 'Intérieur en bois de la cabane', cats: ['interieur'] },
  { name: 'sentier-neige', alt: 'Sentier dans la neige', cats: ['nature', 'hiver'] },
  { name: 'crepuscule-montagne', alt: 'Crépuscule sur la montagne', cats: ['nature'] },
  { name: 'nuit-neige', alt: "Nuit d'hiver et lumières de la vallée", cats: ['nature', 'hiver'] },
];
