import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { App } from './app';
import { routes } from './app.routes';
import { BookService } from './services/book.service';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('crée l application', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('affiche le livre', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('main.livre')).toBeTruthy();
  });
});

describe('BookService', () => {
  const book = new BookService();

  it('a des slugs de projets uniques', () => {
    const slugs = book.projets.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('numérote les chapitres dans l ordre', () => {
    expect(book.chapitres.map((c) => c.numero)).toEqual([1, 2, 3, 4, 5]);
  });
});
