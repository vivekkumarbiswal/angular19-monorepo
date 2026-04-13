import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const router = inject(Router);
  const userData = localStorage.getItem('User');

  if (!userData) {
    router.navigate(['/login']);
    return false;
  }

  const user = JSON.parse(userData);
  const expectedRole = route.data?.['role'];

  // if no role required -> allow
  if (!expectedRole) {
    return true;
  }

  // role check
  if (user.role === expectedRole) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthGuard implements CanActivate {
//   constructor(private router: Router) {}
//   canActivate(): boolean {
//     const loggedData = localStorage.getItem('User');
//     if (loggedData !== null) {
//       return true;
//     } else {
//       this.router.navigate(['/login']);
//       return false;
//     }
//   }
// }
