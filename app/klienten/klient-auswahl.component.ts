import { 
    Component,
    Input 
} from '@angular/core';

@Component({
    selector: 'ngr-klient-auswahl',
    template: `
        <div class="ngr-klient-auswahl" [ngClass]="{ collapsed: collapsed }">
            <h1>Klient Auswahl</h1>
        </div>
    `,
    styleUrls: [
        'app/klienten/klient-auswahl.component.css'
    ]
})
export class KlientAuswahlComponent {
    @Input() collapsed: boolean;
}