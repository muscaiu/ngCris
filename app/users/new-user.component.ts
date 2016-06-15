import {Component} from '@angular/core';
import {FormBuilder, ControlGroup, Validators } from '@angular/common';
import {CanDeactivate, Router} from '@angular/router-deprecated';

import {BasicValidators} from '../shared/basicValidators';
import {UserService} from './user.service';

@Component({
    templateUrl:'app/users/new-user.component.html',
	providers:[UserService]
})

export class NewUserComponent implements CanDeactivate {
	form: ControlGroup;

	constructor(
				fb: FormBuilder,
				private _router:Router,
				private _userService:UserService
				){
					this.form = fb.group({
						name: ['', Validators.required],
						email: ['', BasicValidators.email]
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