import { 
    AfterViewInit,
    Component,
    ViewChild
} from '@angular/core';

import { 
    ActivatedRoute,
    ROUTER_DIRECTIVES 
} from '@angular/router';

import { AppBarComponent } from '../app-bar/app-bar.component';
import { KlientAuswahlComponent } from '../klienten/klient-auswahl.component';
import { KlientAuswahlToggleComponent } from '../klienten/klient-auswahl-toggle.component';

@Component({
    selector: 'ngr-bereich',
    template: `
        <div class="ngr-bereich">
            <ngr-app-bar [title]="title"></ngr-app-bar>
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
        AppBarComponent,
        KlientAuswahlComponent,
        KlientAuswahlToggleComponent,
        ROUTER_DIRECTIVES
    ]
})
export class BereichComponent implements AfterViewInit {
    @ViewChild(KlientAuswahlToggleComponent) auswahlToggle: KlientAuswahlToggleComponent;
    id: number;
    title: string;
    private auswahlCollapsed = true;
    constructor(private route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            this.id = +params['id'];
            this.title = 'Bereich #' + this.id;
        });
    } 
    ngAfterViewInit() {
        this.auswahlToggle.clicked.subscribe(() => 
            this.toggleAuswahl());
    }
    private onNavigatedToKlient(id: number) {
        this.auswahlCollapsed = true;
    }
    private toggleAuswahl() {
        this.auswahlCollapsed = !this.auswahlCollapsed;
    }   
}