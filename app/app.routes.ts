import { provideRouter, RouterConfig } from '@angular/router';
import { BereicheRoutes } from './bereiche/bereiche.routes';

export const routes: RouterConfig = [
    { path: '', children: [
        ...BereicheRoutes
    ]}
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];