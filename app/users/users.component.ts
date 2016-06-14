import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service';

@Component({
    template: `
        <h2>Users<h2>
        <ul>
            <li *ngFor="let u of users">
                {{u.name}}
            </li>
        </ul>
    `,
    providers:[UserService]
})

export class UsersComponent implements OnInit{
    users:any;

    constructor(private _userService:UserService){
    }
    
    ngOnInit(){
        this._userService.getUsers()
            .subscribe(users => this.users = users);
    }
}