import {Component, OnInit} from '@angular/core';
import {FormBuilder, ControlGroup, Validators } from '@angular/common';
import {CanDeactivate, Router, RouteParams} from '@angular/router-deprecated';

import {BasicValidators} from '../shared/basicValidators';
import {UserService} from './user.service';
import {User} from './user';

@Component({
    templateUrl:'app/users/new-user.component.html',
	providers:[UserService]
})

export class NewUserComponent implements OnInit,CanDeactivate {
	form: ControlGroup;
	title: string;
	user = new User();

	constructor(
				fb: FormBuilder,
				private _router:Router,
				private _routeParams:RouteParams,
				private _userService:UserService
				){
					this.form = fb.group({
						name: ['', Validators.required],
						email: ['', BasicValidators.email]
					});
	}    
	ngOnInit(){
		var id = this._routeParams.get('id');
		this.title = id ? "Edit User" : "New User";
		if(!id) {
			return ;
			}
		this._userService.getUser(id)
			.subscribe(
				x => this.user = x,
				response => {
					if(response.status == 404){
						this._router.navigate(['NotFound']);
					}
				});
	}
    routerCanDeactivate(){
		if (this.form.dirty)
			return confirm('Unsaved changes. U sure?');

		return true; 
	}
	save (){
		this._userService.addUser(this.form.value)
			.subscribe(x =>{
				//ideally:
				//this.form.markAsPristine();
				this._router.navigate(['Users']);
			})
	}
}