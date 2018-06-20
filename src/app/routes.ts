import { Routes } from '@angular/router';
import { AuthGuard } from './auth/services/auth-guard.service';

export const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  {
    path: 'books',
    loadChildren: './books/books.module#BooksModule',
    canActivate: [AuthGuard],
  }
];
