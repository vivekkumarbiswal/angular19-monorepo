import { Routes } from '@angular/router';

import { CardsComponent } from './components/cards/cards.component';
import { InvestmentComponent } from './components/investment/investment.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoanComponent } from './components/loan/loan.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';
// import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    // canActivate: [AuthGuard],
    canActivate: [authGuard],
    children: [
      {
        path: 'cards',
        component: CardsComponent,
        data: { role: 'admin' },
      },
      {
        path: 'loan',
        component: LoanComponent,
        data: { role: 'admin' },
      },
      {
        path: 'investment',
        component: InvestmentComponent,
        data: { role: 'user' },
      },
    ],
  },
];
