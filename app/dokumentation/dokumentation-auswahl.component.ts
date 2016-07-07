import { 
    Component,
    Input,
    OnInit
 } from '@angular/core';

import { 
    ActivatedRoute,
    ROUTER_DIRECTIVES 
} from '@angular/router';

@Component({
    selector: 'ngr-dokumentation-auswahl',
    template: `
        <div class="ngr-dokumentation-auswahl" [ngClass]="{ collapsed: collapsed }">
            <ul>
                <li><a [routerLink]="['./pflegebericht']" routerLinkActive="active">Pflegebericht</a></li>
                <li><a [routerLink]="['./vitalwerte']" routerLinkActive="active">Vitalwerte</a></li>
                <li><a [routerLink]="['./bilanzierung']" routerLinkActive="active">Bilanzierung</a></li>
                <li><a [routerLink]="['./hygiene']" routerLinkActive="active">Hygiene</a></li>
                <li><a [routerLink]="['./inkontinenz']" routerLinkActive="active">Kontinenzversorgung</a></li>
            </ul>
        </div>
    `,
    styleUrls: [
        'app/dokumentation/dokumentation-auswahl.component.css'
    ],
    directives: [
        ROUTER_DIRECTIVES
    ]
})
export class DokumentationAuswahlComponent implements OnInit {
    @Input() collapsed: boolean;
    ngOnInit() {

    }
}