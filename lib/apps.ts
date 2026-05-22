export const APPS = [
  { slug: 'fractimath', nom: 'Fractimath', description: 'Maîtrise les fractions' },
  {
    slug: 'targetmath',
    nom: 'Targetmath',
    description: "Relève les informations pertinentes dans un énoncé",
  },
  { slug: 'pourcentimath', nom: 'Pourcentimath', description: 'Maîtrise les pourcentages' },
  {
    slug: 'vocabulomath',
    nom: 'Vocabulomath',
    description: 'Deviens incollable sur le vocabulaire mathématique essentiel',
  },
  {
    slug: 'astucimath',
    nom: 'Astucimath',
    description:
      'Manipule des astuces pour calculer plus vite et éviter les pièges courants',
  },
  {
    slug: 'divisimath',
    nom: 'Divisimath',
    description: 'Joue avec les critères de divisibilité',
  },
  {
    slug: 'variamath',
    nom: 'Variamath',
    description: "Calcule plus vite à l'aide d'une opération de référence",
  },
  {
    slug: 'decomposmath',
    nom: "Décompos'math",
    description: 'Calcule plus facilement en décomposant',
  },
  {
    slug: 'opereciproque',
    nom: 'Opéréciproque',
    description: "Découvre les liens entre les couples d'opérations réciproques",
  },
  {
    slug: 'compensmath',
    nom: "Compens'math",
    description:
      'Restaure des équilibres mathématiques en trouvant la bonne compensation',
  },
  {
    slug: 'estimath',
    nom: 'Estimath',
    description: "Entraîne-toi à estimer sans calculatrice",
  },
  {
    slug: 'justepoint',
    nom: 'Justepoint',
    description: 'Place le point juste au bon endroit sur la droite graduée',
  },
  {
    slug: 'classimath',
    nom: 'Classimath',
    description:
      'Classe nombres, fractions et pourcentages par ordre croissant ou décroissant',
  },
  {
    slug: 'horlomath',
    nom: 'Horlomath',
    description: "Entraîne-toi à lire l'heure sur une horloge analogique",
  },
  {
    slug: 'propormath',
    nom: "Propor'math",
    description: 'Résous des exercices de proportionnalité',
  },
  {
    slug: 'convertimath',
    nom: 'Convertimath',
    description: "Travaille tes compétences en conversion d'unités",
  },
] as const

export type App = (typeof APPS)[number]
