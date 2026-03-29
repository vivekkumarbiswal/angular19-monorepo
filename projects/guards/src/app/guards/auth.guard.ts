import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}
  canActivate(): Observable<boolean | UrlTree> {
    return this.auth.isAuthenticated().pipe(
      tap((res: any) => console.log(res)),
      map((isLoggedIn) =>
        isLoggedIn ? true : this.router.createUrlTree(['/login']),
      ),
    );
  }
}
