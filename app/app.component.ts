import {Component} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {NavbarComponent} from './navbar.component';
import {HomeComponent} from './home/home.component';
import {UsersComponent} from './users/users.component';
import {PostsComponent} from './posts/posts.component';
import {NewUserComponent} from './users/new-user.component';
import {NotFoundComponent} from './shared/not-found.component';

@RouteConfig ([
    { path: '/', name: 'Home', component: HomeComponent},
    { path: '/users', name: 'Users', component: UsersComponent},
    { path: '/posts', name: 'Posts', component: PostsComponent},
    { path: '/users/new', name: 'NewUser', component: NewUserComponent},
    { path: '/users/:id', name: 'EditUser', component: NewUserComponent},
    { path: '/*other', name: 'Other', redirectTo: [HomeComponent]},
    { path: '/not-found', name: 'NotFound', component: NotFoundComponent},
])

@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [
        NavbarComponent,
        ROUTER_DIRECTIVES
        ] 
})

export class AppComponent{

}