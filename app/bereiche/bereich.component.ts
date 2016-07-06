import { Component } from '@angular/core';

import { 
    ActivatedRoute,
    ROUTER_DIRECTIVES 
} from '@angular/router';

import { KlientAuswahlComponent } from '../klienten/klient-auswahl.component';

@Component({
    selector: 'ngr-bereich',
    template: `
        <div class="ngr-bereich">
            <h1>Bereich #{{id}}</h1>
            <router-outlet></router-outlet>
            <ngr-klient-auswahl></ngr-klient-auswahl>
        </div>
    `,
    styleUrls: [
        'app/bereiche/bereich.component.css'
    ],
    directives: [
        KlientAuswahlComponent,
        ROUTER_DIRECTIVES
    ]
})
export class BereichComponent {
    id: number;
    constructor(private route: ActivatedRoute) {
        this.route.params.subscribe(params => 
            this.id = +params['id']);
    }    
}