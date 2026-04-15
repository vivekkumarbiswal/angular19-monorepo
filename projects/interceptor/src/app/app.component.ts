import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  user: any;
  storedToken: string | null = null;
  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.storedToken = localStorage.getItem('token');
  }

  login() {
    this.auth.login().subscribe({
      next: (res) => {
        console.log('✅ TOKEN RECEIVED:', res.accessToken);
        localStorage.setItem('token', res.accessToken);
        this.storedToken = res.accessToken;
        console.log('📦 LOGGED IN STORAGE:', localStorage.getItem('token'));
      },
      error: (err) => {
        console.error('❌ LOGIN ERROR:', err);
      },
    });
  }

  getProfile() {
    this.auth.getProfile().subscribe({
      next: (res) => {
        console.log('✅ PROFILE:', res);
        this.user = res;
      },
      error: (err) => {
        console.error('❌ PROFILE ERROR:', err);
      },
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.storedToken = null;
    this.user = null;
  }
}
