import { 
    AfterViewInit,
    Component,
    ViewChild
} from '@angular/core';

import { 
    ActivatedRoute,
    ROUTER_DIRECTIVES 
} from '@angular/router';

import { KlientAuswahlComponent } from '../klienten/klient-auswahl.component';
import { KlientAuswahlToggleComponent } from '../klienten/klient-auswahl-toggle.component';

@Component({
    selector: 'ngr-bereich',
    template: `
        <div class="ngr-bereich">
            <h1>Bereich #{{id}}</h1>
            <router-outlet></router-outlet>
            <ngr-klient-auswahl-toggle></ngr-klient-auswahl-toggle>
            <ngr-klient-auswahl [collapsed]="auswahlCollapsed"></ngr-klient-auswahl>
        </div>
    `,
    styleUrls: [
        'app/bereiche/bereich.component.css'
    ],
    directives: [
        KlientAuswahlComponent,
        KlientAuswahlToggleComponent,
        ROUTER_DIRECTIVES
    ]
})
export class BereichComponent {
    @ViewChild(KlientAuswahlToggleComponent) auswahlToggle: KlientAuswahlToggleComponent;
    id: number;
    private auswahlCollapsed = true;
    constructor(private route: ActivatedRoute) {
        this.route.params.subscribe(params => 
            this.id = +params['id']);
    } 
    ngAfterViewInit() {
        this.auswahlToggle.clicked.subscribe(() => 
            this.toggleAuswahl());
    }
    private toggleAuswahl() {
        this.auswahlCollapsed = !this.auswahlCollapsed;
    }   
}