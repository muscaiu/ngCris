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
    getUser(userId){
        return this._http.get(this._url + "/" + userId)
            .map(result => result.json());
    }
    deleteUser(userId){
        return this._http.delete(this.getUserUrl(userId))
            .map(response => response.json());
    }
    private getUserUrl(userId){
		return this._url + "/" + userId;
    }
    addUser(user){
        return this._http.post(this._url, JSON.stringify(user))
            .map(result => result.json());
    }
}