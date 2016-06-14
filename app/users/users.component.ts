import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router-deprecated';

import {SpinnerComponent} from '../shared/spinner.component';
import {UserService} from './user.service';

@Component({
    template: `
        <h2>Users<h2>
        <spinner [visible]="loadingUsers"></spinner>
        
        <table class="table table-bordered table-hover">
            <thead>
                <tr>                
                    <td>
                       Name
                    </td>
                    <td>
                       Email
                    </td>
                    <td>
                       Delete
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let u of users">                        
                    <td>
                        {{u.name}}
                    </td>
                    <td>
                        {{u.email}}
                    </td>
                    <td>
                        <i class="glyphicon glyphicon-remove clickable"
                           (click)="deleteUser(u)">                        
                        </i>                                                
                    </td>
                </tr>
            </tbody>
        </table>
    `,
    providers:[UserService],
    directives: [SpinnerComponent, RouterLink]
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

    deleteUser(user){
        if(confirm("Are u sure u want to delete "+ user.name + " ?")){
            var index = this.users.indexOf(user)
            this.users.splice(index, 1);
            this._userService.deleteUser(user.id)
                .subscribe(null, 
                        err => {
                            alert("Could not delete user.")
                            this.users.splice(index,0, user);
                        });
        }
    }
}