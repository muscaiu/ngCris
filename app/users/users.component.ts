import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router-deprecated';

import {SpinnerComponent} from '../shared/spinner.component';
import {UserService} from './user.service';

@Component({
    templateUrl: 'app/users/users.component.html',
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