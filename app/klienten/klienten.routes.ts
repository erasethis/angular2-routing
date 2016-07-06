import { provideRouter, RouterConfig } from '@angular/router';
import { KlientComponent } from './klient.component';
import { KlientDetailComponent } from './klient-detail.component';
import { BilanzierungRoutes } from '../bilanzierung/bilanzierung.routes';
import { HygieneRoutes } from '../hygiene/hygiene.routes';
import { InkontinenzRoutes } from '../inkontinenz/inkontinenz.routes';
import { PflegeberichtRoutes } from '../pflegebericht/pflegebericht.routes';
import { VitalwerteRoutes } from '../vitalwerte/vitalwerte.routes';

export const KlientenRoutes: RouterConfig = [
  { path: 'klient/:id', component: KlientComponent, children: [
      { path: '', component: KlientDetailComponent },
      ...BilanzierungRoutes,
      ...HygieneRoutes,
      ...InkontinenzRoutes,
      ...PflegeberichtRoutes,
      ...VitalwerteRoutes
  ]},
];
