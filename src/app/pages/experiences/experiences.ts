import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { BookService } from '../../services/book.service';
import { ChapterShell } from '../../shared/chapter-shell/chapter-shell';

interface Experience {
  entreprise: string;
  periode: string;
  duree: string;
  poste: string;
  resume: string;
  missions: string[];
  stack: string[];
  /** Projets du chapitre « Projets » réalisés pendant cette expérience. */
  projets: string[];
}

/** Chapitre 2 — expériences professionnelles, de la plus récente à la plus ancienne. */
@Component({
  selector: 'app-experiences',
  imports: [ChapterShell, RouterLink],
  templateUrl: './experiences.html',
  styleUrl: './experiences.scss',
})
export class Experiences {
  private readonly book = inject(BookService);

  readonly experiences: Experience[] = [
    {
      entreprise: 'Sygecom',
      periode: '2023 – 2024',
      duree: '1 an',
      poste: 'Développeur full stack en alternance',
      resume:
        'Ma première expérience en entreprise : le développement d\'une application de gestion client, du back-end à l\'interface, qui m\'a donné les bases du travail en équipe sur un produit réel.',
      missions: [
        'Développement d\'une application de gestion client',
        'Conception et exposition d\'une API REST en Python/Django',
        'Réalisation de l\'interface utilisateur en React',
      ],
      stack: ['Python', 'Django', 'React', 'API REST'],
      projets: ['gestion-client-sygecom'],
    },
    {
      entreprise: 'Grant Thornton',
      periode: '2024 – 2026',
      duree: '2 ans',
      poste: 'Développeur full stack en alternance',
      resume:
        'Au sein d\'un cabinet d\'audit et de conseil, j\'ai développé des applications métier pour les équipes comptables, dans un écosystème Java/Spring Boot et Angular, avec de fortes exigences de fiabilité et de sécurité.',
      missions: [
        'Automatisation du traitement des données comptables jusqu\'à l\'ERP du cabinet',
        'Conception de règles de validation métier et d\'API internes',
        'Bibliothèque de transferts sécurisés SFTP vers SharePoint (Azure AD, Microsoft Graph)',
        'Import d\'écritures comptables depuis Excel, couvert par des tests JUnit/Mockito et conteneurisé avec Docker',
      ],
      stack: ['Java', 'Spring Boot', 'Angular', 'Azure AD', 'Microsoft Graph', 'JUnit', 'Mockito', 'Docker'],
      projets: ['automatisation-comptable', 'import-ecritures-excel', 'transferts-sftp-sharepoint'],
    },
  ];

  titreProjet(slug: string): string {
    return this.book.projets.find((projet) => projet.slug === slug)?.titre ?? slug;
  }
}
