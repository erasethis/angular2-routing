import { provideRouter, RouterConfig } from '@angular/router';
import { KlientComponent } from './klient.component';
import { KlientDetailComponent } from './klient-detail.component';
import { PflegeberichtRoutes } from '../pflegebericht/pflegebericht.routes';

export const KlientenRoutes: RouterConfig = [
  { path: 'klient/:id', component: KlientComponent, children: [
      { path: '', component: KlientDetailComponent },
      ...PflegeberichtRoutes
  ]},
];
