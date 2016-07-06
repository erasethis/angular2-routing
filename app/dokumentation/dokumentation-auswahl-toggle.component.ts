import { 
    Component,
    EventEmitter 
} from '@angular/core';

@Component({
    selector: 'ngr-dokumentation-auswahl-toggle',
    template: `
        <div class="ngr-dokumentation-auswahl-toggle" (click)="onClick($event)">
            <a>
                <i class="fa fa-bars"></i>
            </a>
        </div>
    `,
    styleUrls: [
        'app/dokumentation/dokumentation-auswahl-toggle.component.css'
    ]
})
export class DokumentationAuswahlToggleComponent {
    clicked = new EventEmitter<any>();
    onClick($event: any) {
        this.clicked.emit(null);
    }
}