import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'ngr-app',
  template: `
      <div class="ngr-app">
        <h1>App</h1>
        <router-outlet></router-outlet>
      <div>
  `,
  styleUrls: [
    'app/app.component.css'
  ],
  directives: [
    ROUTER_DIRECTIVES
  ]
})
export class AppComponent { }