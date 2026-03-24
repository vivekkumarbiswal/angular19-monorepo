import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { provideStore } from '@ngrx/store';
import { routes } from './app.routes';
import { tasksReducer } from './tasks/store/tasks.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(FormsModule),
    provideStore({
      tasks: tasksReducer,
    }),
  ],
};
