import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


import { FullUser } from '../_models/full-user';
import { User } from "../_models/user";

@Injectable()
export class UserService {
    constructor(private http: Http) {
    }

    baseURL: string = 'http://localhost:5000';

    getHeaders() {
        let headers = new Headers();
        //headers.append("Content-Type", "text/xml");
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Credentials", "true");
        headers.append("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT, DELETE");
        headers.append("Access-Control-Allow-Headers", "Content-Type");
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json")
        let options = new RequestOptions({ headers: headers });
        console.log(JSON.stringify(options));
        return options;
    }

    getAll() {
        return this.http.get(this.baseURL + '/api/Account', this.getHeaders()).map((response: Response) => { return response.json() });
    }

    getById(id: number) {
        return this.http.get(this.baseURL + '/api/Account/' + id, this.getHeaders()).map((response: Response) => response.json());
    }

    getFullByEmail(email: string) {
        return this.http.get(this.baseURL + '/api/Account/' + email, this.getHeaders()).map((response: Response) => response.json());

    }

    login(user: User) {
        return this.http.post(this.baseURL + '/api/Account/sign-in/', user, this.getHeaders()).map((response: Response) => response.json());
    }

    register(user: User) {
        return this.http.post(this.baseURL + '/api/Account/register', user, this.getHeaders()).map((response: Response) => {
            //http call for uppdate provele

            return response.json();
        });
    }

    updateProfile(user: FullUser) {
        return this.http.put(this.baseURL + '/api/Account/' + user.email, user, this.getHeaders());
    }

    delete(id: number) {
        return this.http.delete(this.baseURL + '/api/Account/' + id, this.getHeaders()).map((response: Response) => response.json());
    }

    getSavedSubleases(email: string) {
      return this.http.get(this.baseURL + '/api/Account/saved/' + email, this.getHeaders()).map((response: Response) => response.json());
    }

    getPostedSubleases(email: string) {
      return this.http.get(this.baseURL + '/api/Account/posted/' + email, this.getHeaders()).map((response: Response) => response.json());
    }

    // private helper methods

    private addAuthToken() {
        // register authorization header with user auth token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
