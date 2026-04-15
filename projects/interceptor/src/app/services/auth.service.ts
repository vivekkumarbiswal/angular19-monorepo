import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  // 🔐 LOGIN (REAL TOKEN)
  login() {
    return this.http.post<any>('https://dummyjson.com/auth/login', {
      username: 'emilys',
      password: 'emilyspass',
    });
  }

  // 🔒 PROTECTED API
  getProfile() {
    return this.http.get<any>('https://dummyjson.com/auth/me');
  }
}
