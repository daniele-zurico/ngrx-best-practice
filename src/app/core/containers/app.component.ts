import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bc-app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <bc-layout>
    <bc-sidenav [open]="showSidenav">
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
  showSidenav = false;
  closeSidenav() {
    this.showSidenav = false;
  }

  openSidenav() {
    this.showSidenav = true;
  }

  logout() {
    this.closeSidenav();
  }
}
