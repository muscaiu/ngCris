import {Component} from '@angular/core';

import {NavbarComponent} from './shared/navbar.component';

@Component({
    selector: 'my-app',
    template: '<navbar></navbar>',
    directives: [NavbarComponent] 
})

export class AppComponent{

}