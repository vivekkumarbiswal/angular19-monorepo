import { Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { GetApiComponent } from './get-api/get-api.component';
import { PostApiComponent } from './post-api/post-api.component';

export const routes: Routes = [
  {
    path: 'get-api',
    component: GetApiComponent,
  },
  {
    path: 'post-api',
    component: PostApiComponent,
  },
  {
    path: 'customer',
    component: CustomerComponent,
  },
];
