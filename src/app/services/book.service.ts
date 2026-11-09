import { Injectable } from '@angular/core';
import { Chapitre, Projet } from '../models/book';

/**
 * Le « livre » entier est décrit ici : la table des matières
 * (chapitres) et le contenu du chapitre « Projets ».
 * Modifier ce fichier suffit pour ajouter ou retirer un chapitre ou un projet.
 */
@Injectable({ providedIn: 'root' })
export class BookService {
  /** Table des matières, dans l'ordre de lecture. */
  readonly chapitres: Chapitre[] = [
    {
      slug: 'description',
      numero: 1,
      titre: 'Qui suis-je ?',
      sousTitre: 'Mon parcours, mes qualités et mes passions',
      resume:
        'Ma présentation : formation, expériences en alternance, qualités humaines et ce qui me motive au quotidien.',
    },
    {
      slug: 'experiences',
      numero: 2,
      titre: 'Mes expériences',
      sousTitre: 'Trois années d\'alternance en entreprise',
      resume:
        'Mon parcours professionnel chez Sygecom puis Grant Thornton : missions, technologies et ce que j\'en ai retenu.',
    },
    {
      slug: 'competences',
      numero: 3,
      titre: 'Mes compétences',
      sousTitre: 'La boîte à outils d\'un développeur full stack',
      resume:
        'Langages, frameworks et outils que je pratique, du back-end au front-end, des données au cloud.',
    },
    {
      slug: 'projets',
      numero: 4,
      titre: 'Mes projets',
      sousTitre: 'Des réalisations professionnelles et personnelles',
      resume:
        'Une sélection de projets détaillés : contexte, technologies utilisées et points clés de chacun.',
    },
    {
      slug: 'loisirs',
      numero: 5,
      titre: 'Mes loisirs',
      sousTitre: 'En dehors du code',
      resume:
        'Sport, jeux vidéo et projets personnels : ce qui m\'anime quand je ne suis pas devant un écran de travail.',
    },
    {
      slug: 'contact',
      numero: 6,
      titre: 'Contact',
      sousTitre: 'Envie d\'échanger ?',
      resume:
        'Mes coordonnées et mes liens pour discuter d\'une opportunité, d\'un projet ou simplement de tech.',
    },
  ];

  /** Les projets du chapitre « Projets », dans l'ordre de lecture. */
  readonly projets: Projet[] = [
    {
      slug: 'automatisation-comptable',
      titre: 'Automatisation comptable vers un ERP',
      accroche:
        'Application métier d\'automatisation du traitement des données comptables, reliée à l\'ERP du cabinet.',
      contexte: 'Professionnel',
      periode: 'Grant Thornton · 2024 – 2026',
      stack: ['Java', 'Spring Boot', 'Angular', 'Azure AD', 'API REST'],
      description: [
        'Au sein de Grant Thornton, j\'ai travaillé deux ans sur une application d\'automatisation du traitement des données comptables. L\'objectif : fiabiliser et accélérer le flux entre les données collectées et l\'ERP du cabinet, en supprimant les saisies manuelles.',
        'J\'ai participé à la conception des règles de validation métier, au développement des API internes et à l\'interface Angular utilisée par les équipes comptables. L\'authentification était assurée par Azure AD, dans une logique de sécurité d\'entreprise.',
      ],
      points: [
        'Automatisation d\'un flux comptable complet jusqu\'à l\'ERP',
        'Règles de validation métier et API internes en Spring Boot',
        'Interface Angular pensée pour les équipes comptables',
        'Authentification et habilitations via Azure AD',
      ],
    },
    {
      slug: 'import-ecritures-excel',
      titre: 'Import d\'écritures comptables depuis Excel',
      accroche:
        'Application d\'import de fichiers Excel avec règles comptables, tests automatisés et conteneurisation.',
      contexte: 'Professionnel',
      periode: 'Grant Thornton · 2025',
      stack: ['Java', 'Spring Boot', 'Angular', 'JUnit', 'Mockito', 'Docker'],
      description: [
        'Pour faciliter la reprise de données clients, j\'ai développé une application d\'import d\'écritures comptables depuis des fichiers Excel. Les données sont contrôlées par un ensemble de règles comptables avant d\'être intégrées.',
        'Le projet a été couvert de tests JUnit et Mockito pour garantir la fiabilité des traitements, puis conteneurisé avec Docker afin d\'être déployé simplement dans l\'environnement du cabinet.',
      ],
      points: [
        'Lecture et validation de fichiers Excel volumineux',
        'Règles comptables applicables avant intégration',
        'Tests unitaires JUnit / Mockito sur toute la chaîne',
        'Déploiement conteneurisé avec Docker',
      ],
    },
    {
      slug: 'transferts-sftp-sharepoint',
      titre: 'Transferts sécurisés SFTP vers SharePoint',
      accroche:
        'Bibliothèque de transferts de fichiers sécurisés entre serveurs SFTP et SharePoint.',
      contexte: 'Professionnel',
      periode: 'Grant Thornton · 2025',
      stack: ['Java', 'Azure AD', 'Microsoft Graph', 'SFTP'],
      description: [
        'J\'ai conçu une bibliothèque réutilisable de transferts sécurisés de fichiers, du SFTP vers SharePoint. Elle s\'appuie sur Azure AD et l\'API Microsoft Graph pour l\'authentification et le dépôt des documents.',
        'Cette brique est aujourd\'hui utilisée par plusieurs applications du cabinet, ce qui a permis d\'harmoniser la manière dont les fichiers sensibles circulent entre les systèmes.',
      ],
      points: [
        'Bibliothèque réutilisée par plusieurs applications internes',
        'Authentification Azure AD et appels Microsoft Graph',
        'Sécurisation des échanges de fichiers sensibles',
      ],
    },
    {
      slug: 'gestion-client-sygecom',
      titre: 'Application de gestion client',
      accroche:
        'Application de gestion client avec API REST, développée en Python/Django et React.',
      contexte: 'Professionnel',
      periode: 'Sygecom · 2023 – 2024',
      stack: ['Python', 'Django', 'React', 'API REST'],
      description: [
        'Lors de ma première année d\'alternance chez Sygecom, j\'ai développé une application de gestion client en Python/Django et React, organisée autour d\'une API REST.',
        'Ce projet m\'a permis de découvrir le travail en environnement professionnel : compréhension du besoin métier, conception d\'API, développement front-end et mise en production itérative.',
      ],
      points: [
        'API REST conçue avec Django',
        'Interface React pour la gestion des clients',
        'Première expérience complète en entreprise',
      ],
    },
    {
      slug: 'site-ecommerce',
      titre: 'Site e-commerce avec back-office',
      accroche:
        'Boutique en ligne Symfony/React sécurisée par JWT, avec catalogue administrable et tableau de bord des ventes.',
      contexte: 'Personnel',
      periode: 'Projet personnel',
      stack: ['Symfony', 'React', 'JWT', 'PHP'],
      description: [
        'J\'ai développé un site e-commerce complet avec un back-office d\'administration : gestion des articles et des catégories (images comprises), suivi des commandes et tableau de bord d\'analyse des ventes.',
        'L\'application est sécurisée par une authentification par jetons JWT, et le front-end React communique avec l\'API Symfony de manière sécurisée.',
      ],
      points: [
        'Catalogue administrable (articles, catégories, images)',
        'Tableau de bord avec graphiques et suivi des ventes',
        'Authentification JWT sur toute l\'application',
      ],
    },
    {
      slug: 'prediction-resultats-sportifs',
      titre: 'Prédiction de résultats sportifs',
      accroche:
        'Modèle et application d\'aide à la prédiction de résultats, à partir de l\'analyse des matchs antérieurs.',
      contexte: 'Personnel',
      periode: 'Projet personnel · en cours',
      stack: ['Python', 'Machine Learning', 'Data'],
      description: [
        'Ce projet personnel vise à estimer les résultats les plus probables de matchs à partir de l\'analyse des rencontres passées. Une attention particulière est portée au tennis, avec une application dédiée à la prédiction des résultats de matchs.',
        'L\'idée est de croiser les statistiques historiques des joueurs pour construire un modèle qui donne une tendance fiable, plutôt qu\'une intuition.',
      ],
      points: [
        'Analyse de matchs antérieurs pour estimer les probabilités',
        'Application dédiée à la prédiction de matchs de tennis',
        'Approche data : les chiffres plutôt que l\'instinct',
      ],
    },
    {
      slug: 'stats-fc26',
      titre: 'Statistiques FC 26 contre la réalité',
      accroche:
        'Comparaison des statistiques d\'une carrière FC 26 avec celles des joueurs réels, via un agent autonome de collecte.',
      contexte: 'Personnel',
      periode: 'Projet personnel · en cours',
      stack: ['Python', 'Agent autonome', 'Collecte de données'],
      description: [
        'Dans ce projet, je compare les statistiques de mon joueur en mode carrière sur EA Sports FC 26 avec celles des vrais joueurs, par saison, club et compétition : buts, passes décisives, apparitions.',
        'Un agent autonome décide lui-même quelles sources consulter pour récupérer les données manquantes, même quand elles sont dispersées entre plusieurs sites. Le but : classer les meilleurs buteurs et situer mon joueur virtuel face à la réalité.',
      ],
      points: [
        'Comparaison par saison, club et compétition',
        'Agent autonome qui choisit ses sources de données',
        'Classement des meilleurs buteurs face au joueur carrière',
      ],
    },
    {
      slug: 'finetuning-llm-sportif',
      titre: 'Fine-tuning d\'un LLM sur des données sportives',
      accroche:
        'Adaptation d\'un modèle de langage open source à un jeu de données sportives, avec un objectif de performance.',
      contexte: 'Personnel',
      periode: 'Projet personnel · en cours',
      stack: ['Python', 'LLM', 'Fine-tuning', 'Machine Learning'],
      description: [
        'Ce projet consiste à adapter un modèle de langage open source à un jeu de données sportives personnalisé. L\'objectif est la performance : un modèle vraiment utile pour analyser et commenter des données sportives, pas un simple exercice pédagogique.',
        'Il complète mes projets de prédiction en apportant la brique « langage » : résumés, analyses et explications en français des statistiques collectées.',
      ],
      points: [
        'Fine-tuning d\'un modèle open source',
        'Jeu de données sportives personnalisé',
        'Objectif : un assistant performant, pas une démo',
      ],
    },
  ];

  /**
   * Ordre de lecture complet du livre, page par page :
   * accueil, chapitres, et pages des projets insérées dans le chapitre III.
   * Sert à numéroter les pages, à calculer l'épaisseur des pages restantes
   * et à savoir dans quel sens tourner la page.
   */
  readonly ordreDeLecture: string[] = [
    '/',
    ...this.chapitres.flatMap((chapitre) => {
      const page = `/chapitre/${chapitre.slug}`;
      return chapitre.slug === 'projets'
        ? [page, ...this.projets.map((projet) => `/projet/${projet.slug}`)]
        : [page];
    }),
  ];

  /** Position d'une URL dans l'ordre de lecture (0 = accueil). */
  indexDeLecture(url: string): number {
    const chemin = (url.split(/[?#]/)[0] || '/').replace(/\/+$/, '') || '/';
    const index = this.ordreDeLecture.indexOf(chemin);
    return index === -1 ? 0 : index;
  }

  /** Titre courant affiché en haut de page (titre courant d'un livre). */
  titreCourant(url: string): string {
    const chemin = this.ordreDeLecture[this.indexDeLecture(url)];
    if (chemin === '/') {
      return 'Randy Sapa · Portfolio';
    }
    const slug = chemin.startsWith('/projet/') ? 'projets' : chemin.split('/').pop()!;
    const chapitre = this.chapitreParSlug(slug);
    return chapitre
      ? `Chapitre ${this.enChiffresRomains(chapitre.numero)} · ${chapitre.titre}`
      : 'Randy Sapa · Portfolio';
  }

  /** Retourne un chapitre à partir de son slug, ou undefined. */
  chapitreParSlug(slug: string): Chapitre | undefined {
    return this.chapitres.find((chapitre) => chapitre.slug === slug);
  }

  /** Position d'un chapitre dans la table des matières, ou -1. */
  indexDuChapitre(slug: string): number {
    return this.chapitres.findIndex((chapitre) => chapitre.slug === slug);
  }

  /** Retourne un projet à partir de son slug, ou undefined. */
  projetParSlug(slug: string): Projet | undefined {
    return this.projets.find((projet) => projet.slug === slug);
  }

  /** Position d'un projet dans le chapitre, ou -1. */
  indexDuProjet(slug: string): number {
    return this.projets.findIndex((projet) => projet.slug === slug);
  }

  /** Numéro de chapitre en chiffres romains, pour l'ambiance « livre ». */
  enChiffresRomains(numero: number): string {
    const romains = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
    return romains[numero - 1] ?? String(numero);
  }
}
