import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  private role = 'admin';

  constructor(private router: Router) {}

  canActivate(): boolean {
    if (this.role === 'user') {
      return true;
    }
    if (this.role === 'admin') {
      console.log('Not allowed');
    }
    this.router.navigate(['/login']);
    return false;
  }
}
