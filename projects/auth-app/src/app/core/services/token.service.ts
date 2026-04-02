import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private KEY = 'auth_toke';

  setToken(token: string) {
    localStorage.setItem(this.KEY, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.KEY);
  }

  removeToken() {
    localStorage.removeItem(this.KEY);
  }

  isTokenValid(): boolean {
    const token = this.getToken();
    // return token ? true : false
    return !!token; // if token exists then it will give true if not then false
  }
}
