import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service';
import {SpinnerComponent} from '../shared/spinner.component';

@Component({
    template: `
        <h2>Users<h2>
        <spinner [visible]="loadingUsers"></spinner>
        <ul>
            <li *ngFor="let u of users">
                {{u.name}}
            </li>
        </ul>
    `,
    providers:[UserService],
    directives: [SpinnerComponent]
})

export class UsersComponent implements OnInit{
    users:any; 
    loadingUsers = true;

    constructor(private _userService:UserService){
    }
    
    ngOnInit(){
        this._userService.getUsers()
            .subscribe(users => {
                this.users = users;
                this.loadingUsers = false;
            });
    }
}