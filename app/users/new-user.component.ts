import {Component} from '@angular/core';
import {FormBuilder, ControlGroup } from '@angular/common';

@Component({
    templateUrl:'app/users/new-user.component.html'
})

export class NewUserComponent{
    form: ControlGroup;

    constructor(fb: FormBuilder){
        this.form = fb.group({
            name:[],
            email:[]
        })
    }
}