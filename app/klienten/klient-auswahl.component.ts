import { 
    Component,
    Input 
} from '@angular/core';

import { 
    ActivatedRoute,
    ROUTER_DIRECTIVES 
} from '@angular/router';

@Component({
    selector: 'ngr-klient-auswahl',
    template: `
        <div class="ngr-klient-auswahl" [ngClass]="{ collapsed: collapsed }">
            <ul>
                <li><a [routerLink]="['klient', 1]" routerLinkActive="active">Klient #1</a></li>
                <li><a [routerLink]="['klient', 2]" routerLinkActive="active">Klient #2</a></li>
                <li><a [routerLink]="['klient', 3]" routerLinkActive="active">Klient #3</a></li>
                <li><a [routerLink]="['klient', 4]" routerLinkActive="active">Klient #4</a></li>
                <li><a [routerLink]="['klient', 5]" routerLinkActive="active">Klient #5</a></li>
                <li><a [routerLink]="['klient', 6]" routerLinkActive="active">Klient #6</a></li>
                <li><a [routerLink]="['klient', 7]" routerLinkActive="active">Klient #7</a></li>
                <li><a [routerLink]="['klient', 8]" routerLinkActive="active">Klient #8</a></li>
            </ul>
        </div>
    `,
    styleUrls: [
        'app/klienten/klient-auswahl.component.css'
    ],
    directives: [
        ROUTER_DIRECTIVES
    ]
})
export class KlientAuswahlComponent {
    @Input() collapsed: boolean;
}