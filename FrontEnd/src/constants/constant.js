import htmlLogo from '../assets/html_logo.png';
import pythonLogo from '../assets/python_logo.png';
import cssLogo from '../assets/css_logo.png';
import jsLogo from '../assets/javascript_logo.png';
import reactLogo from '../assets/react_logo.svg.png';
import tailwindLogo from '../assets/Tailwind_logo.svg.png';
import gitLogo from '../assets/git_logo.png';
import githubLogo from '../assets/github_logo.png';
import javaLogo from '../assets/Java_Logo.png';
import typescriptLogo from '../assets/typescript_logo.svg';
import nodeLogo from '../assets/nodejs_logo.svg';
import expressLogo from '../assets/express_logo.svg';
import mysqlLogo from '../assets/mysql_logo.svg';
import postgresLogo from '../assets/postgresql_logo.svg';
import linuxLogo from '../assets/linux_logo.svg';
import wordpressLogo from '../assets/wordpress_logo.svg';
import captureCrm from '../assets/projets/crm.jpg';
import captureEchec from '../assets/projets/echec.jpg';
import capturePortfolio from '../assets/projets/portfolio.jpg';
import captureSql from '../assets/projets/sql.jpg';
import capturePython from '../assets/projets/python.jpg';
import captureRecueil from '../assets/projets/recueil.jpg';
import captureEconomie from '../assets/projets/economie.jpg';

export const LIENS = {
  email: 'harizsan38@gmail.com',
  github: 'https://github.com/hariz0212',
  linkedin: 'https://www.linkedin.com/in/hariz-piratheepan-0b1937361',
  cv: '/cv_hariz_piratheepan.pdf',
};

// Photo de l'accueil : mets ta photo dans public/photos/ puis indique son chemin ici
// (ex. '/photos/foret.jpg'). Tant que c'est null, un paysage dessiné s'affiche.
export const PHOTO_ACCUEIL = null;

// Galerie : ajoute tes photos ici, la section apparaît dès qu'il y en a une
// (ex. { src: '/photos/lac.jpg', legende: 'Lac d’Annecy, au lever du soleil' }).
export const PHOTOS = [];

// Sections de la page, dans l'ordre (menu pause, boussole et flèches du clavier)
export const SECTIONS = [
  { id: 'projets', label: 'Projets' },
  { id: 'parcours', label: 'Parcours' },
  { id: 'competences', label: 'Compétences' },
  { id: 'galerie', label: 'Galerie photo' },
  { id: 'avis', label: 'Avis' },
  { id: 'contact', label: 'Contact' },
];

// Avancement dans le BUT, affiché dans la barre de joueur
export const NIVEAU = { label: 'Niv. 3 — BUT Informatique', progression: 80 };

export const QUETE = {
  titre: 'Décrocher un stage de fin d’études',
  objectifs: [
    { texte: 'Stage de 2e année : CRM mis en production', fait: true },
    { texte: '14 à 16 semaines, départ le 8 mars 2027', fait: false },
    { texte: 'Paris et Île-de-France', fait: false },
  ],
};

export const SUCCES = 'Premier logiciel en production';

export const EXPERIENCES = [
  {
    poste: 'Stagiaire développeur web',
    lieu: 'IUT de Bobigny — Université Sorbonne Paris Nord',
    periode: 'Févr. – mars 2026, 8 semaines',
    points: [
      'Conception, développement et mise en production, seul et à mon initiative, d’un CRM interne remplaçant le fichier Excel de suivi des entreprises partenaires.',
      'API REST Node.js/Express et base MySQL modélisée en Entité-Association (clés étrangères, requêtes préparées contre l’injection SQL).',
      'Interface React + TypeScript : authentification et rôles, recherche et pagination, tableau de bord de tâches type Trello, export Excel.',
      'Audit et mise à jour du site WordPress de l’IUT en une semaine avant la Journée Portes Ouvertes.',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'Tailwind CSS', 'WordPress'],
  },
  {
    poste: 'Professeur de cours particuliers',
    periode: 'Depuis juin 2024',
    points: ['Vulgarisation de notions complexes, diagnostic des lacunes et supports de cours personnalisés.'],
  },
  {
    poste: 'Vendeur',
    periode: 'Juil. – août 2023',
    points: ['Accueil et conseil client, efficacité lors des pics d’affluence.'],
  },
];

export const FORMATIONS = [
  {
    titre: 'BUT Informatique — IUT de Villetaneuse',
    sousTitre: 'Université Sorbonne Paris Nord',
    lien: 'https://iutv.univ-paris13.fr',
    periode: '2024 – 2027',
  },
  {
    titre: 'Baccalauréat général — Lycée Charles Baudelaire',
    sousTitre: 'Spécialités Mathématiques, Physique-Chimie',
    lien: 'https://lyc-baudelaire-fosses.ac-versailles.fr',
    periode: '2021 – 2024',
  },
];

export const LANGUES = [
  { langue: 'Français', niveau: 'Langue maternelle' },
  { langue: 'Tamoul', niveau: 'Langue maternelle' },
  { langue: 'Anglais', niveau: 'Courant' },
];

export const PROJETS = [
  {
    titre: 'CRM full-stack',
    description: 'CRM développé pendant mon stage pour suivre les entreprises partenaires de l’IUT : authentification, rôles, fiches entreprises et contacts, tableau de tâches, export Excel.',
    techs: ['React', 'TypeScript', 'Node.js', 'Express', 'MySQL'],
    lien: 'https://github.com/hariz0212/CRM',
    image: captureCrm,
    phare: true,
  },
  {
    titre: 'Jeu d’échecs en Java',
    description: 'Simulateur d’échiquier réalisé en équipe : programmation orientée objet, Git et méthode agile.',
    techs: ['Java', 'POO', 'Git'],
    lien: 'https://github.com/hariz0212/echec',
    image: captureEchec,
    phare: true,
  },
  {
    titre: 'Ce portfolio',
    description: 'Ce site : React, avis des visiteurs stockés dans Supabase, déploiement continu GitHub → Netlify.',
    techs: ['React', 'Vite', 'Tailwind CSS', 'Supabase'],
    lien: 'https://github.com/hariz0212/Portfolio',
    image: capturePortfolio,
    phare: true,
  },
  {
    titre: 'Base de données PostgreSQL',
    description: 'Modélisation Entité-Association, script de création de la base et script Python d’automatisation des requêtes.',
    techs: ['PostgreSQL', 'SQL', 'Python'],
    lien: 'https://github.com/hariz0212/hariz0212/tree/main/S1/Sql',
    image: captureSql,
  },
  {
    titre: 'Communautés dans un réseau social',
    description: 'Analyse de communautés sur un réseau social en Python, en deux versions dont une avancée.',
    techs: ['Python'],
    lien: 'https://github.com/hariz0212/hariz0212/tree/main/S1/python',
    image: capturePython,
  },
  {
    titre: 'Recueil de besoins',
    description: 'Enquête pour améliorer l’espace consacré à la vie étudiante et à la formation au sein de l’IUT.',
    techs: ['Analyse du besoin'],
    lien: 'https://github.com/hariz0212/hariz0212/tree/main/S1/receuil%20de%20besoin',
    image: captureRecueil,
  },
  {
    titre: 'Économie numérique',
    description: 'Analyse de la stratégie de Nintendo pour réduire son empreinte numérique au fil des années.',
    techs: ['Analyse'],
    lien: 'https://github.com/hariz0212/hariz0212/tree/main/S1/%C3%A9conomie',
    image: captureEconomie,
  },
];

export const COMPETENCES = [
  { categorie: 'Langages', liste: [
    { nom: 'Java', img: javaLogo, favori: true },
    { nom: 'TypeScript', img: typescriptLogo },
    { nom: 'JavaScript', img: jsLogo },
    { nom: 'Python', img: pythonLogo },
  ] },
  { categorie: 'Front-end', liste: [
    { nom: 'React', img: reactLogo },
    { nom: 'HTML', img: htmlLogo },
    { nom: 'CSS', img: cssLogo },
    { nom: 'Tailwind', img: tailwindLogo },
  ] },
  { categorie: 'Back-end et données', liste: [
    { nom: 'Node.js', img: nodeLogo },
    { nom: 'Express', img: expressLogo },
    { nom: 'MySQL', img: mysqlLogo },
    { nom: 'PostgreSQL', img: postgresLogo },
  ] },
  { categorie: 'Outils', liste: [
    { nom: 'Git', img: gitLogo },
    { nom: 'GitHub', img: githubLogo },
    { nom: 'Linux', img: linuxLogo },
    { nom: 'WordPress', img: wordpressLogo },
  ] },
];
