import { Component, ChangeDetectionStrategy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRoot from '../../reducers';
import * as LayoutActions from '../store/layout.actions';

@Component({
  selector: 'bc-app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <bc-layout>
    <bc-sidenav [open]="showSidenav$ | async">
      <bc-nav-item (navigate)="closeSidenav()" routerLink="/" icon="book" hint="View your book collection">
        My Collection
      </bc-nav-item>
      <bc-nav-item (navigate)="closeSidenav()" routerLink="/books/find" icon="search" hint="Find your next book!">
        Browse Books
      </bc-nav-item>
      <bc-nav-item (navigate)="closeSidenav()">
        Sign In
      </bc-nav-item>
      <bc-nav-item (navigate)="logout()">
        Sign Out
      </bc-nav-item>
    </bc-sidenav>
    <bc-toolbar (openMenu)="openSidenav()">
      Book Collection
    </bc-toolbar>
    <router-outlet></router-outlet>
  </bc-layout>`,
})
export class AppComponent {
  showSidenav$: Observable<boolean>;
  loggedIn$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.showSidenav$ = this.store.pipe(
      select(fromRoot.getShowSidenav)
    );
    // TODO when we have the store from auth we can check if logged in
  }

  closeSidenav() {
    this.store.dispatch(new LayoutActions.CloseSidenav());
  }

  openSidenav() {
    this.store.dispatch(new LayoutActions.OpenSidenav());
  }

  logout() {
    this.closeSidenav();
    // TODO when we have the store fro auth we can dispatch the action to logout
  }
}
