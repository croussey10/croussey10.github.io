export interface Project {
    id: string;
    title: string;
    slug: string;
    imgCard: string;
    techIcons: string[];
    lienDeploy: string;
    repo: string;
    objectif: string;
    contraintes: string[];
    appris: string;
    galerieImgs: string[];
}

const images = import.meta.glob("../assets/**/*.{png,jpg,jpeg,svg,webp}", {
    eager: true,
});

const getImg = (path: string) => {
    const fullPath = `../assets/${path}`;
    return (images[fullPath] as any)?.default || "";
};

export const projectsData: Project[] = [
    {
        id: "saas-auto-ecole",
        title: "SaaS Auto-Ecole",
        slug: "saas-auto-ecole",
        imgCard: getImg("saas-auto-ecole/saas-auto-ecole-1.png"),
        techIcons: [
            getImg("icons/angular-icon.svg"),
            getImg("icons/sql-icon.svg"),
        ],
        lienDeploy: "https://auto-ecole-project-cr10.vercel.app/auth/login/la-chouette",
        repo: "https://github.com/croussey10/auto-ecole-project.git",
        objectif:
            "L’objectif de ce projet était de concevoir un SaaS multi-écoles (DriveConnect) pour digitaliser et centraliser la relation entre les auto-écoles, les moniteurs et les élèves. Le but était de redonner de l'autonomie aux élèves grâce à la réservation sur mobile, tout en simplifiant drastiquement la charge administrative et le suivi pédagogique pour les équipes.",
        contraintes: [
            "Livrer un MVP fonctionnel en totale autonomie sur une durée stricte de 6 semaines",
            "Gérer une architecture multi-tenant pour garantir l'isolation totale et la sécurité des données entre les différentes auto-écoles",
            "Implémenter des règles métiers strictes côté serveur (ex: impossibilité d'annuler une leçon à moins de 48h, décompte sécurisé des heures via Triggers SQL)",
            "Assurer une synchronisation fluide et réactive entre la base de données et l'interface utilisateur",
        ],
        appris:
            "- Structurer et prioriser mon travail rigoureusement seul avec la méthode agile MoSCoW\n" +
            "- Maîtriser une stack Front-End moderne avec Angular 18, notamment la réactivité avec les Signals\n" +
            "- Sécuriser une base de données PostgreSQL avec Supabase en écrivant des règles de niveau ligne (Row Level Security) et des fonctions SQL\n" +
            "- Développer des composants algorithmiques complexes, comme un calendrier dynamique de réservation en gérant la manipulation temporelle\n" +
            "- Concevoir une interface orientée \"Mobile-First\" tout en intégrant des principes d'éco-conception (sobriété des requêtes) et d'accessibilité\n",
        galerieImgs: [
            getImg("saas-auto-ecole/saas-auto-ecole-1.png"),
            getImg("saas-auto-ecole/saas-auto-ecole-2.png"),
            getImg("saas-auto-ecole/saas-auto-ecole-3.png"),
            getImg("saas-auto-ecole/saas-auto-ecole-4.png"),
            getImg("saas-auto-ecole/saas-auto-ecole-5.png"),
            getImg("saas-auto-ecole/saas-auto-ecole-6.png"),
        ],
    },

    {
        id: "region-bfc",
        title: "Région BFC",
        slug: "region-bfc",
        imgCard: getImg("region-bfc/region-bfc-1.png"),
        techIcons: [
            getImg("icons/react-icon.svg"),
            getImg("icons/sql-icon.svg"),
        ],
        lienDeploy: "",
        repo: "https://github.com/projet-region-bfc/projet-region.git",
        objectif:
            "L’objectif de ce projet était de créer une plateforme web pour l’entreprise “La Région Bourgogne-Franche-Comté” dans le but d’améliorer la communication entre les managers et agents avec un système de questionnaire pour chaque rôle.",
        contraintes: [
            "Livrer un produit fonctionnel et testé en seulement 3 semaines",
            "Adapter les exigences techniques aux besoins et aux retours concrets d'un client",
            "Gérer le système d’authentification et de rôle",
        ],
        appris:
            "Ce projet a été réalisé en 3 semaines. Nous étions 5 et j’avais le rôle de chef d’équipe.\n" +
            "Cela m'a appris à : \n" +
            "- répartir les tâches de chacun en faisant en sorte que ce qu’ils fassent leur plaisent\n" +
            "- d’aider un membre quand il était bloqué\n" +
            "- que le travail de chacun soit livré dans les temps\n" +
            "- d’organiser des réunions chaque fin de semaine savoir qui a fait quoi\n" +
            "- Communiquer avec un client réel\n",
        galerieImgs: [
            getImg("region-bfc/region-bfc-1.png"),
            getImg("region-bfc/region-bfc-2.png"),
            getImg("region-bfc/region-bfc-3.png"),
            getImg("region-bfc/region-bfc-4.png"),
            getImg("region-bfc/region-bfc-5.png"),
        ],
    },

    {
        id: "bataille-navale",
        title: "BATAILLE NAVALE",
        slug: "bataille-navale",
        imgCard: getImg("bataille-navale/bataille-navale-4.png"),
        techIcons: [getImg("icons/java-icon.svg")],
        lienDeploy: "",
        repo: "https://github.com/croussey10/bataille-navale",
        objectif:
            "L’objectif de ce projet était de réaliser le jeu de la bataille navale en Java avec une interface graphique en combattant contre un bot.",
        contraintes: [
            "Utilisation de JavaFX",
            "Lié le Backend Java avec l’interface JavaFX",
            "Implémentation d'un système de coordonnées via des tableaux 2D pour la gestion des grilles et la détection des collisions",
            "Conception d'un bot capable de jouer de manière autonome",
        ],
        appris: "Ce projet a été réalisé en 1 semaine en groupe de 3. Ce projet m’a appris à :\n"+
            "- maîtriser des concepts de classes, d'héritage et d'encapsulation,\n" +
            "- l'intégration de SoundFX et gestion des événements graphiques en temps réel\n",
        galerieImgs: [
            getImg("bataille-navale/bataille-navale-1.png"),
            getImg("bataille-navale/bataille-navale-2.png"),
            getImg("bataille-navale/bataille-navale-3.png"),
            getImg("bataille-navale/bataille-navale-4.png"),
            getImg("bataille-navale/bataille-navale-5.png"),
        ],
    },

    {
        id: "pokedex",
        title: "POKEDEX",
        slug: "pokedex",
        imgCard: getImg("pokedex/pokedex-1.png"),
        techIcons: [getImg("icons/ts-icon.svg")],
        lienDeploy: "https://croussey10.github.io/pokedex-cours-js/",
        repo: "https://github.com/croussey10/pokedex-cours-js.git",
        objectif:
            "L’objectif de ce projet était de faire un site web pokédex de pokémon en utilisant le langage TS et l’intégration de l’api PokeAPI.",
        contraintes: [
            "Système de pagination",
            "Filtre avancé avec : recherche par nom, id, type, génération, talent",
            "Créateur d’équipe",
            "Gestion du local storage",
            "Intégrer l’api de PokeAPI",
        ],
        appris:
            "- Améliorer mes compétences en TS avec l’utilisation d’api, du local storage et de fonctions asynchrones.\n" +
            "- Travailler en pair-progrmaming, développer mes compétences en algorithmie et faire du code plus lisible.",
        galerieImgs: [
            getImg("pokedex/pokedex-1.png"),
            getImg("pokedex/pokedex-2.png"),
            getImg("pokedex/pokedex-3.png"),
            getImg("pokedex/pokedex-4.png"),
            getImg("pokedex/pokedex-5.png"),
        ],
    },

    {
        id: "y-remake-twitter",
        title: "REMAKE TWITTER",
        slug: "y-remake-twitter",
        imgCard: getImg("y-remake-twitter/y-2.png"),
        techIcons: [
            getImg("icons/symfony-icon.svg"),
            getImg("icons/php-icon.svg"),
            getImg("icons/sql-icon.svg"),
        ],
        lienDeploy: "",
        repo: "https://github.com/croussey10/pokedex-cours-js.git",
        objectif:
            "L’objectif de ce projet était de refaire l’application Twitter ou X à notre sauce avec un système d’authentification, de gestion de base de données, de pouvoir créer des posts, liker, commenter et follow des personnes.\n",
        contraintes: [
            "Utilisation du framework Symfony",
            "Intégré un système de rôle et authentification",
            "Manipulation d’une BDD Postgres",
            "Enregistrer des images en BDD",
        ],
        appris: "Ce projet a été réalisé à 3 en un temps limité d’un mois. Ce projet m’a appris à :\n" +
            "- utiliser le framework Symfony\n " +
            "- Faire des queries SQL postgres dans symfony\n " +
            "- Comprendre et maîtriser le système MVC\n" +
            "-  Améliorer ma communication en équipe et la division des tâches.",
        galerieImgs: [
            getImg("y-remake-twitter/y-1.png"),
            getImg("y-remake-twitter/y-2.png"),
            getImg("y-remake-twitter/y-3.png"),
            getImg("y-remake-twitter/y-4.png"),
            getImg("y-remake-twitter/y-5.png"),
        ],
    },

    {
        id: "lowify",
        title: "REMAKE SPOTIFY",
        slug: "lowify",
        imgCard: getImg("lowify/lowify-1.png"),
        techIcons: [getImg("icons/php-icon.svg"), getImg("icons/sql-icon.svg")],
        lienDeploy: "https://lowify.alwaysdata.net",
        repo: "https://github.com/croussey10/2025-php-project/tree/main/004-php-lowify",
        objectif:
            "L’objectif de ce projet était de refaire une application dynamique inspirée de spotify avec une base de données contenant les chanteurs, leurs musiques, leurs albums et encore pleins d’informations.",
        contraintes: [
            "Intégré une BDD postgres",
            "manipulation de docker",
            "utilisation des méthodes POST, GET pour interagir avec la BDD",
            "gestion des erreurs avec des pages personnalisé",
            "filtre par nom ou chanson d’un artiste",
        ],
        appris: "Ce projet a été réalisé seul en un temps limité de 2 semaines. Il m’a appris à :\n" +
            "- Utiliser PHP\n" +
            "- Devoir gérer une base de données\n " +
            "- Utilisation des méthodes global",
        galerieImgs: [
            getImg("lowify/lowify-1.png"),
            getImg("lowify/lowify-2.png"),
            getImg("lowify/lowify-3.png"),
            getImg("lowify/lowify-4.png"),
            getImg("lowify/lowify-5.png"),
        ],
    },

    {
        id: "tier-list",
        title: "TIER LIST",
        slug: "tier-list",
        imgCard: getImg("tier-list/tier-list-1.png"),
        techIcons: [
            getImg("icons/html-icon.svg"),
            getImg("icons/css-icon.svg"),
        ],
        lienDeploy: "",
        repo: "https://github.com/croussey10/tier-list-website.git",
        objectif:
            "L’objectif de ce projet était de faire un site web de tier list static avec une page d’accueil, la liste des tier list dans l’app, l’avant/après d’une tier list et la création d’une tier list\n",
        contraintes: [
            "Avoir tous les score lighthouse dans le vert",
            "Site Responsive",
            "Ajouter une autre langue",
        ],
        appris: "Ce projet a été réalisé en groupe de 3 en un temps limité et il m’a appris à :\n" +
            "- Améliorer ma communication, la gestion de mon temps et de prioriser les tâches\n " +
            "- Faire un css responsive clean avec la gestion des grid box / flex box et également des mediaqueries",
        galerieImgs: [
            getImg("tier-list/tier-list-1.png"),
            getImg("tier-list/tier-list-2.png"),
            getImg("tier-list/tier-list-6.png"),
            getImg("tier-list/tier-list-3.png"),
            getImg("tier-list/tier-list-4.png"),
            getImg("tier-list/tier-list-5.png"),
        ],
    },

    {
        id: "svg-editor-1",
        title: "EDITEUR SVG",
        slug: "svg-editor",
        imgCard: getImg("svg-editor.png"),
        techIcons: [getImg("icons/c-icon.svg")],
        lienDeploy: "",
        repo: "https://github.com/croussey10/svg-project",
        objectif:
            "L’objectif de ce projet était de faire un éditeur SVG avec un menu dans le terminal pour ajouter des formes, choisir une couleur, une taille, son emplacement sur la viewport.\n",
        contraintes: [
            "Utilisation d’énumération / interface",
            "Gestion de la mémoire",
            "Utilisation de liste chainé",
        ],
        appris: "Ce projet à été réaliser en C et il m’a permis de découvrir la programmation bas niveau, de développer mes capacités en algorithmie et également de me retourner le cerveau avec les pointeurs.",
        galerieImgs: [getImg("svg-editor.png")],
    },
];
