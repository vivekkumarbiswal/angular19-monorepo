import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}
  login() {
    this.auth.login();
    this.router.navigate(['/dashboard']);
  }
  logout() {
    this.auth.logout();
    this.router.navigate(['/dashboard']);
  }
}
