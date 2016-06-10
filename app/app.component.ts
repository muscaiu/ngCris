import {Component} from '@angular/core';

import {NavbarComponent} from './navbar.component';
import {HomeComponent} from './home/home.component';
import {UsersComponent} from './users/users.component';
import {PostsComponent} from './posts/posts.component';



@Component({
    selector: 'my-app',
    template: '<navbar></navbar>',
    directives: [
        NavbarComponent,
        HomeComponent,
        UsersComponent,
        PostsComponent
        ] 
})

export class AppComponent{

}