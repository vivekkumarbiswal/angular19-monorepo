import { Routes } from '@angular/router';

import { CardsComponent } from './components/cards/cards.component';
import { InvestmentComponent } from './components/investment/investment.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoanComponent } from './components/loan/loan.component';
import { LoginComponent } from './components/login/login.component';

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
    children: [
      {
        path: 'cards',
        component: CardsComponent,
      },
      {
        path: 'loan',
        component: LoanComponent,
      },
      {
        path: 'investment',
        component: InvestmentComponent,
      },
    ],
  },
];
