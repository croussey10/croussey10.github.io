export interface Project {
    id: string;
    title: string;
    slug: string;
    thumbnail: string;
    techIcons: string[];
    repo: string;
    objectif: string;
    contraintes: string[];
    appris: string;
    galerieImgs: string[];
}

const images = import.meta.glob('../assets/**/*.{png,jpg,jpeg,svg,webp}', {eager: true});

const getImg = (path: string) => {
    const fullPath = `../assets/${path}`;
    return (images[fullPath] as any)?.default || "";
};

export const projectsData: Project[] = [

    {
        id: "bataille-navale",
        title: "BATAILLE NAVALE",
        slug: "bataille-navale",
        thumbnail: getImg("bataille-navale/bataille-navale-4.png"),
        techIcons: [
            getImg("icons/java-icon.svg"),
        ],
        repo: "https://github.com/croussey10/bataille-navale",
        objectif: "L’objectif de ce projet était de réaliser le jeu de la bataille navale en Java avec une interface graphique en combattant contre un bot.",
        contraintes: [
            "Utilisation de JavaFX",
            "Lié le Backend Java avec l’interface JavaFX",
            "Implémentation d'un système de coordonnées via des tableaux 2D pour la gestion des grilles et la détection des collisions",
            "Conception d'un bot capable de jouer de manière autonome"
        ],
        appris: "Ce projet a été réalisé en 1 semaine en groupe de 3. Ce projet m’a appris à maîtriser des concepts de classes, d'héritage et d'encapsulation, l'intégration de SoundFX et gestion des événements graphiques en temps réel",
        galerieImgs: [
            getImg("bataille-navale/bataille-navale-1.png"),
            getImg("bataille-navale/bataille-navale-2.png"),
            getImg("bataille-navale/bataille-navale-3.png"),
            getImg("bataille-navale/bataille-navale-4.png"),
            getImg("bataille-navale/bataille-navale-5.png"),
        ]
    },

    {
        id: "pokedex",
        title: "POKEDEX",
        slug: "pokedex",
        thumbnail: getImg("pokedex/pokedex-1.png"),
        techIcons: [getImg("icons/ts-icon.svg")],
        repo: "https://github.com/croussey10/pokedex-cours-js.git",
        objectif: "L’objectif de ce projet était de faire un site web pokédex de pokémon en utilisant le langage TS et l’intégration de l’api PokeAPI.",
        contraintes: [
            "Système de pagination",
            "Filtre avancé avec : recherche par nom, id, type, génération, talent",
            "Créateur d’équipe",
            "Gestion du local storage",
            "Intégrer l’api de PokeAPI"
        ],
        appris: "Ce projet m’a permis d’améliorer mes compétences en TS avec l’utilisation d’api, du local storage et de fonctions asynchrones.\n" +
            "Ce projet m’a également appris a travailler en pair-progrmaming, développer mes compétences en algorithmie et faire du code plus lisible.",
        galerieImgs: [
            getImg("pokedex/pokedex-1.png"),
            getImg("pokedex/pokedex-2.png"),
            getImg("pokedex/pokedex-3.png"),
            getImg("pokedex/pokedex-4.png"),
            getImg("pokedex/pokedex-5.png"),
        ]
    },

    {
        id: "y-remake-twitter",
        title: "REMAKE TWITTER",
        slug: "y-remake-twitter",
        thumbnail: getImg("y-remake-twitter/y-2.png"),
        techIcons: [
            getImg("icons/symfony-icon.svg"),
            getImg("icons/php-icon.svg"),
            getImg("icons/bdd-icon.svg"),
        ],
        repo: "https://github.com/croussey10/pokedex-cours-js.git",
        objectif: "L’objectif de ce projet était de refaire l’application Twitter ou X à notre sauce avec un système d’authentification, de gestion de base de données, de pouvoir créer des posts, liker, commenter et follow des personnes.\n",
        contraintes: [
            "Utilisation du framework Symfony",
            "Intégré un système de rôle et authentification",
            "Manipulation d’une BDD Postgres",
            "Enregistrer des images en BDD"
        ],
        appris: "Ce projet a été réalisé à 3 en un temps limité d’un mois. Ce projet m’a appris à utiliser le framework Symfony, a faire des queries SQL postgres dans symfony, à comprendre et maîtriser le système MVC. Ce projet m'a également permis d'améliorer ma communication en équipe et la division des tâches.",
        galerieImgs: [
            getImg("y-remake-twitter/y-1.png"),
            getImg("y-remake-twitter/y-2.png"),
            getImg("y-remake-twitter/y-3.png"),
            getImg("y-remake-twitter/y-4.png"),
            getImg("y-remake-twitter/y-5.png"),
        ]
    },

    {
        id: "lowify",
        title: "LOWIFY",
        slug: "lowify",
        thumbnail: getImg("lowify/lowify-1.png"),
        techIcons: [
            getImg("icons/php-icon.svg"),
            getImg("icons/bdd-icon.svg")
        ],
        repo: "https://github.com/croussey10/2025-php-project/tree/main/004-php-lowify",
        objectif: "L’objectif de ce projet était de refaire une application dynamique inspirée de spotify avec une base de données contenant les chanteurs, leurs musiques, leurs albums et encore pleins d’informations.",
        contraintes: [
            "Intégré une BDD postgres",
            "manipulation de docker",
            "utilisation des méthodes POST, GET pour interagir avec la BDD",
            "gestion des erreurs avec des pages personnalisé",
            "filtre par nom ou chanson d’un artiste"
        ],
        appris: "Ce projet a été réalisé seul en un temps limité de 2 semaines. Il m’a appris à utiliser PHP, devoir gérer une base de données avec du PHP, l’utilisation des méthodes global.",
        galerieImgs: [
            getImg("lowify/lowify-1.png"),
            getImg("lowify/lowify-2.png"),
            getImg("lowify/lowify-3.png"),
            getImg("lowify/lowify-4.png"),
            getImg("lowify/lowify-5.png"),
        ]
    },

    {
        id: "tier-list",
        title: "TIER LIST",
        slug: "tier-list",
        thumbnail: getImg("tier-list/tier-list-1.png"),
        techIcons: [
            getImg("icons/html-icon.svg"),
            getImg("icons/css-icon.svg")
        ],
        repo: "https://github.com/croussey10/tier-list-website.git",
        objectif: "L’objectif de ce projet était de faire un site web de tier list static avec une page d’accueil, la liste des tier list dans l’app, l’avant/après d’une tier list et la création d’une tier list\n",
        contraintes: [
            "Avoir tous les score lighthouse dans le vert",
            "Site Responsive",
            "Ajouter une autre langue"
        ],
        appris: "Ce projet a été réalisé en groupe de 3 en un temps limité et il m’a permis d’améliorer ma communication, la gestion de mon temps et de prioriser les tâches. Coté technique ce projet m'a permis de faire un css responsive clean avec la gestion des grid box / flex box et également des mediaqueries",
        galerieImgs: [
            getImg("tier-list/tier-list-1.png"),
            getImg("tier-list/tier-list-2.png"),
            getImg("tier-list/tier-list-6.png"),
            getImg("tier-list/tier-list-3.png"),
            getImg("tier-list/tier-list-4.png"),
            getImg("tier-list/tier-list-5.png"),
        ]
    },

    {
        id: "svg-editor-1",
        title: "EDITEUR SVG",
        slug: "svg-editor",
        thumbnail: getImg("svg-editor.png"),
        techIcons: [getImg("icons/c-icon.svg")],
        repo: "https://github.com/croussey10/svg-project",
        objectif: "L’objectif de ce projet était de faire un éditeur SVG avec un menu dans le terminal pour ajouter des formes, choisir une couleur, une taille, son emplacement sur la viewport.\n",
        contraintes: [
            "Utilisation d’énumération / interface",
            "Gestion de la mémoire",
            "Utilisation de liste chainé",
        ],
        appris: "Ce projet à été réaliser en C et il m’a permis de découvrir la programmation bas niveau, de développer mes capacités en algorithmie et également de me retourner le cerveau avec les pointeurs.",
        galerieImgs: [
            getImg("svg-editor.png"),
        ]
    },

];