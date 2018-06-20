import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { generateMockBook } from '../models/book';

@Component({
  selector: 'bc-collection-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <mat-card>
    <mat-card-title>My Collection</mat-card-title>
  </mat-card>
  <bc-book-preview-list [books]="books$"></bc-book-preview-list>`,
  styles: [
    `
    mat-card-title {
      display: flex;
      justify-content: center;
    }
  `,
  ]
})
export class CollectionPageComponent implements OnInit {
  books$ = [];
  constructor() {
  }

  ngOnInit() {
  }

}
