import { Component} from '@angular/core';
import {RouterLink,Router} from '@angular/router-deprecated';

@Component({
    selector: 'navbar',
    templateUrl: 'app/navbar.component.html',
    directives: [RouterLink ]
})
export class NavbarComponent {    
    constructor(private _router:Router){
    }

    isCurrentRoute(route){
        var action = this._router.generate(route);

        return this._router.isRouteActive(action);
    }
}