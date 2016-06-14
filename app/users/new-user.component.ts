import {Component} from '@angular/core';
import {FormBuilder, ControlGroup, Validators } from '@angular/common';
import {CanDeactivate} from '@angular/router-deprecated';

import {BasicValidators} from '../shared/basicValidators';

@Component({
    templateUrl:'app/users/new-user.component.html'
})

export class NewUserComponent implements CanDeactivate {
	form: ControlGroup;

	constructor(fb: FormBuilder) {
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
}