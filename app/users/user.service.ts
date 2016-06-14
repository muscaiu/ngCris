import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {FirebaseService} from 'ng2-firebase/core';

@Injectable()
export class UserService{
    //private _url = 'https://project-4491128562559039101.firebaseio.com/users.json';
    private _url = 'http://jsonplaceholder.typicode.com/users';


    constructor(private _http:Http){
    }

    getUsers(){
        return this._http.get(this._url)
            .map(response => response.json());
    }
}