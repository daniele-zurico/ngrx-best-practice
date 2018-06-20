import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'bc-selected-book-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <bc-book-detail
      [book]=""
      [inCollection]=""
      (add)="addToCollection($event)"
      (remove)="removeFromCollection($event)">
    </bc-book-detail>
  `,
})
export class SelectedBookPageComponent {

  constructor() {
  }

  addToCollection(book: Book) {

  }

  removeFromCollection(book: Book) {

  }
}
