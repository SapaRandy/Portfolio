# Portfolio — Randy Sapa

Portfolio de développeur sous forme de **livre** (Angular 21 + SSR) : le recruteur
arrive sur la couverture, parcourt le sommaire, puis lit le site chapitre par chapitre,
avec une navigation « précédent / accueil / suivant » en bas de chaque page.

## Chapitres

| Chapitre | Route | Contenu |
| --- | --- | --- |
| Couverture | `/` | Photo, présentation et sommaire cliquable |
| I. Qui suis-je ? | `/chapitre/description` | Parcours, qualités humaines, passions |
| II. Mes compétences | `/chapitre/competences` | Stack technique par famille |
| III. Mes projets | `/chapitre/projets` | Grille de projets, chacun avec sa page `/projet/:slug` |
| IV. Mes loisirs | `/chapitre/loisirs` | Sport, jeux vidéo, analyse sportive... |
| V. Contact | `/chapitre/contact` | E-mail, GitHub, LinkedIn |

## Commandes

```bash
npm install
npm start                      # développement sur http://localhost:4200
npm test                       # tests unitaires (Vitest)
npm run build                  # build + prérendu de toutes les pages dans dist/Portfolio
npm run serve:ssr:Portfolio    # sert le build SSR sur http://localhost:4000
```

## Structure

```
src/app/
├── app.routes.ts              # routes du livre
├── app.routes.server.ts       # prérendu (dont une page par projet)
├── models/book.ts             # types Chapitre et Projet
├── services/book.service.ts   # LE CONTENU DU LIVRE (chapitres + projets)
├── shared/chapter-shell/      # gabarit commun : en-tête + navigation page à page
└── pages/
    ├── home/                  # couverture + sommaire
    ├── description/           # chapitre I
    ├── competences/           # chapitre II
    ├── projets/               # chapitre III (liste)
    ├── projet-detail/         # page dédiée à chaque projet
    ├── loisirs/               # chapitre IV
    └── contact/               # chapitre V
```

## Personnaliser

Tout le contenu des chapitres et des projets est centralisé dans
`src/app/services/book.service.ts`.

- **Ajouter un projet** : ajoutez un objet dans `projets` avec un `slug` unique. Sa carte,
  sa page `/projet/:slug`, sa navigation et son prérendu sont générés automatiquement.
- **Ajouter un chapitre** : ajoutez un objet dans `chapitres`, créez un composant dans
  `pages/`, ajoutez sa route dans `app.routes.ts` et enveloppez son contenu dans
  `<app-chapter-shell slug="...">...</app-chapter-shell>`. La navigation précédent/suivant
  suit l'ordre du tableau.
- **Photo** : remplacez `public/photo.svg` par votre photo et mettez à jour
  `<img src="photo.svg">` dans `src/app/pages/home/home.html`.
- **Liens de contact** : à compléter dans `src/app/pages/contact/contact.html`.

## Déploiement

`npm run build` prérend chaque page en HTML statique dans `dist/Portfolio/browser`.
Ce dossier peut être publié tel quel sur un hébergement statique (Netlify, Vercel,
Firebase Hosting, GitHub Pages...). Pour GitHub Pages dans un sous-dossier, construisez avec
`npx ng build --base-href /Portfolio/`.
