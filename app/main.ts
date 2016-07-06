import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS
])
.then(success => console.log("bootstrap succesful"))
.catch(error => console.log("bootstrap failed: " + error));