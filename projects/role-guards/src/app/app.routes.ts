import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoleGuard } from './guards/role.guard';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [RoleGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
