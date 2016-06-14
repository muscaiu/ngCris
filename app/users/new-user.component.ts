import {Component} from '@angular/core';
import {FormBuilder, ControlGroup, Validators } from '@angular/common';

import {BasicValidators} from '../shared/basicValidators';

@Component({
    templateUrl:'app/users/new-user.component.html'
})

export class NewUserComponent{
    form: ControlGroup;

    constructor(fb: FormBuilder){
        this.form = fb.group({
            name:['', Validators.required],
            email:['', BasicValidators.email]
        })
    }
}