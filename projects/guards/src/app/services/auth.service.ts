import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedin$ = new BehaviorSubject<boolean>(false);

  login() {
    this.isLoggedin$.next(true);
  }

  logout() {
    this.isLoggedin$.next(false);
  }

  isAuthenticated() {
    return this.isLoggedin$.asObservable();
  }
}
