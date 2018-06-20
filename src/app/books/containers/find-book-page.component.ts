import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bc-find-book-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <bc-book-search [query]="" [searching]="" [error]="" (search)="search($event)"></bc-book-search>
    <bc-book-preview-list [books]="books$"></bc-book-preview-list>
  `,
})
export class FindBookPageComponent {

  constructor() {
  }

  search(query: string) {

  }
}
