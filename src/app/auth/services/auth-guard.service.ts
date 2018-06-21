import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  // mock variable to test the guard
  private authorized = true;
  constructor(private router: Router) {}

  canActivate(): Observable<boolean> {
    if (this.authorized) {
      return of(true);
    } else {
      this.router.navigate(['/login']);
      return of(false);
    }
  }
}
