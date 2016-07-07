import { 
    Component,
    Input 
} from '@angular/core';

@Component({
    selector: 'ngr-app-bar',
    template: `
        <div class="ngr-app-bar">
            <h3>{{title}}</h3>
        </div>
    `,
    styleUrls: [
        'app/app-bar/app-bar.component.css'
    ]
})
export class AppBarComponent {
    @Input() title: string
}