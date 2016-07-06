import { 
    Component,
    Input,
    OnInit
 } from '@angular/core';

@Component({
    selector: 'ngr-dokumentation-auswahl',
    template: `
        <div class="ngr-dokumentation-auswahl" [ngClass]="{ collapsed: collapsed }">
            <h1>Dokumentation Auswahl</h1>
        </div>
    `,
    styleUrls: [
        'app/dokumentation/dokumentation-auswahl.component.css'
    ]
})
export class DokumentationAuswahlComponent implements OnInit {
    @Input() collapsed: boolean;
    ngOnInit() {

    }
}