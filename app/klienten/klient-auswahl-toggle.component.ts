import { 
    Component,
    EventEmitter 
} from '@angular/core';

@Component({
    selector: 'ngr-klient-auswahl-toggle',
    template: `
        <div class="ngr-klient-auswahl-toggle" (click)="onClick($event)">
            <a>
                <i class="fa fa-users"></i>
            </a>
        </div>
    `,
    styleUrls: [
        'app/klienten/klient-auswahl-toggle.component.css'
    ]
})
export class KlientAuswahlToggleComponent {
    clicked = new EventEmitter<any>();
    onClick($event: any) {
        this.clicked.emit(null);
    }
}