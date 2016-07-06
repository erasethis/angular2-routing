import { provideRouter, RouterConfig } from '@angular/router';
import { BereichComponent } from './bereich.component';
import { BereichDetailComponent } from './bereich-detail.component';
import { KlientenRoutes } from '../klienten/klienten.routes';

export const BereicheRoutes: RouterConfig = [
    { path: 'bereich/:id', component: BereichComponent, children: [
        { path: '', component: BereichDetailComponent },
        ...KlientenRoutes
    ]}
];
