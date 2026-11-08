import { Component } from '@angular/core';

import { ChapterShell } from '../../shared/chapter-shell/chapter-shell';

/** Chapitre 4 — loisirs et passions hors du code. */
@Component({
  selector: 'app-loisirs',
  imports: [ChapterShell],
  templateUrl: './loisirs.html',
  styleUrl: './loisirs.scss',
})
export class Loisirs {}
