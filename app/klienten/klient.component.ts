import { 
    AfterViewInit,
    Component,
    ViewChild
} from '@angular/core';

import { 
    ActivatedRoute,
    ROUTER_DIRECTIVES 
} from '@angular/router';

import { DokumentationAuswahlComponent } from '../dokumentation/dokumentation-auswahl.component';
import { DokumentationAuswahlToggleComponent } from '../dokumentation/dokumentation-auswahl-toggle.component';

@Component({
    selector: 'ngr-klient',
    template: `
        <div class="ngr-klient">
            <ngr-dokumentation-auswahl-toggle></ngr-dokumentation-auswahl-toggle>
            <ngr-dokumentation-auswahl [collapsed]="auswahlCollapsed"></ngr-dokumentation-auswahl>
            <h1>Klient #{{id}}</h1>
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [
        DokumentationAuswahlComponent,
        DokumentationAuswahlToggleComponent,
        ROUTER_DIRECTIVES
    ]
})
export class KlientComponent implements AfterViewInit {
    @ViewChild(DokumentationAuswahlToggleComponent) auswahlToggle: DokumentationAuswahlToggleComponent;
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