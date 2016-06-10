import { Component} from '@angular/core';
import {RouterLink} from '@angular/router-deprecated';

@Component({
    selector: 'navbar',
    templateUrl: 'app/navbar.component.html',
    directives: [RouterLink ]
})
export class NavbarComponent {    

}