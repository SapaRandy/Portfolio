import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Description } from './pages/description/description';
import { Experiences } from './pages/experiences/experiences';
import { Competences } from './pages/competences/competences';
import { Projets } from './pages/projets/projets';
import { ProjetDetail } from './pages/projet-detail/projet-detail';
import { Loisirs } from './pages/loisirs/loisirs';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home, title: 'Portfolio — Randy Sapa' },
  { path: 'chapitre/description', component: Description, title: 'Chapitre I — Qui suis-je ?' },
  { path: 'chapitre/experiences', component: Experiences, title: 'Chapitre II — Mes expériences' },
  { path: 'chapitre/competences', component: Competences, title: 'Chapitre III — Mes compétences' },
  { path: 'chapitre/projets', component: Projets, title: 'Chapitre IV — Mes projets' },
  { path: 'projet/:slug', component: ProjetDetail },
  { path: 'chapitre/loisirs', component: Loisirs, title: 'Chapitre V — Mes loisirs' },
  { path: 'chapitre/contact', component: Contact, title: 'Chapitre VI — Contact' },
  { path: '**', redirectTo: '' },
];
