/** Un chapitre du livre-portolio. */
export interface Chapitre {
  /** Identifiant utilisé dans l'URL : /chapitre/:slug */
  slug: string;
  /** Numéro d'ordre dans le sommaire (1, 2, 3...) */
  numero: number;
  titre: string;
  sousTitre: string;
  /** Courte description affichée dans le sommaire de la couverture. */
  resume: string;
}

/** Un projet exposé dans le chapitre « Projets ». */
export interface Projet {
  /** Identifiant utilisé dans l'URL : /projet/:slug */
  slug: string;
  titre: string;
  /** Phrase d'accroche affichée sur la carte du projet. */
  accroche: string;
  contexte: 'Professionnel' | 'Personnel';
  periode: string;
  stack: string[];
  /** Paragraphes de description, affichés dans l'ordre. */
  description: string[];
  /** Points clés du projet. */
  points: string[];
}
