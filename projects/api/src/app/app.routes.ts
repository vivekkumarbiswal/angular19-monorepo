import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GetApiComponent } from './get-api/get-api.component';

export const routes: Routes = [
  {
    path: 'get-api',
    component: GetApiComponent,
  }
];
