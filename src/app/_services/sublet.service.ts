import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


import { FullUser } from '../_models/full-user';
import {Sublease} from "../_models/sublease";
import {ImageService} from './image.service';

@Injectable()
export class SubleaseService {
  constructor(private http: Http, private ImageService: ImageService) { }

  baseURL: string = 'http://localhost:5000';

  getHeaders() {
    let headers =  new Headers();
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Credentials", "true");
    headers.append("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT, DELETE");
    headers.append("Access-Control-Allow-Headers", "Content-Type");
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json")
    let options = new RequestOptions({headers: headers});
    console.log(JSON.stringify(options));
    return options;
  }

  getAll() {
    return this.http.get(this.baseURL + '/api/Sublet', this.getHeaders()).map((response: Response) => { return response.json()});
  }

  getById(id: number) {
    return this.http.get(this.baseURL + '/api/Sublet/' + id, this.getHeaders()).map((response: Response) => { return response.json() });
    }

  getFullById(id: number) {
    return this.http.get(this.baseURL + '/api/Sublet/full/' + id, this.getHeaders()).map((response: Response) => { return response.json() });
  }

  create(sublease: Sublease, imageList: FileList) {
    this.ImageService.uploadSubletImages(sublease, imageList);
    return this.http.post(this.baseURL + '/api/Sublet/full', sublease, this.getHeaders()).map((response: Response) => { return response.json()});
  }

  updatePost(sublease: Sublease) {
    return this.http.put(this.baseURL + '/api/Sublet/full/' + sublease.id, sublease, this.getHeaders()).map((response: Response) => { return response.json()});
  }

  delete(id: number) {
    return this.http.delete(this.baseURL + '/api/Sublet/' + id, this.getHeaders()).map((response: Response) => { return response.json()});
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
