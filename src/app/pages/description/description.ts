import { Component } from '@angular/core';

import { ChapterShell } from '../../shared/chapter-shell/chapter-shell';

/** Chapitre 1 — présentation personnelle. */
@Component({
  selector: 'app-description',
  imports: [ChapterShell],
  templateUrl: './description.html',
})
export class Description {}
