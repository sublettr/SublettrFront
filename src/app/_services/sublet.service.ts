import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


import {FullUser} from '../_models/full-user';
import {Sublease} from '../_models/sublease';
import {ImageService} from './image.service';
import {environment} from '../../environments/environment';

@Injectable()
export class SubleaseService {
  constructor(private http: Http, private ImageService: ImageService) {
    this.baseURL = environment['API_URL'];
  }

  baseURL: string;
  getHeaders() {
    const headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('Access-Control-Allow-Methods', 'GET, HEAD, POST, PUT, DELETE');
    headers.append('Access-Control-Allow-Headers', 'Content-Type, Origin');
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    const options = new RequestOptions({headers: headers});
    console.log(JSON.stringify(options));
    return options;
  }

  getAll() {
    return this.http.get(this.baseURL + '/api/Sublet', this.getHeaders()).map((response: Response) => {
      return response.json();
    });
  }

  getById(id: number) {
    return this.http.get(this.baseURL + '/api/Sublet/' + id, this.getHeaders()).map((response: Response) => {
      return response.json();
    });
  }

  getFullById(id: number) {
    return this.http.get(this.baseURL + '/api/Sublet/full/' + id, this.getHeaders()).map((response: Response) => {
      return response.json();
    });
  }

  create(sublease: Sublease, imageList: FileList): Observable<Sublease> {
    return this.ImageService.uploadSubletImage(sublease, imageList)
      .flatMap((data: Sublease) => {
        console.log(`POST: ${JSON.stringify(sublease)}`);
        return this.http.post(this.baseURL + '/api/Sublet/full', data, this.getHeaders());
      })
      .map((response: Response) => response.json());
  }

  updatePost(sublease: Sublease, imageList: FileList): Observable<Sublease> {
    return this.ImageService.uploadSubletImage(sublease, imageList)
      .flatMap((data: Sublease) => {
        console.log(`PUT: ${JSON.stringify(sublease)}`);
        return this.http.put(`${this.baseURL}/api/Sublet/full/${sublease.id}`, data, this.getHeaders());
      })
      .map((response: Response) => response.json());
  }

  delete(id: number) {
    return this.http.delete(this.baseURL + '/api/Sublet/' + id, this.getHeaders()).map((response: Response) => {
      return response.json();
    });
  }

  saveSublease(email: string, id: number) {
    return this.http.post(this.baseURL + '/save/' + email + '/' + id, this.getHeaders()).map((response: Response) => {
      return response.status;
    });
  }

  getTags() {
    return this.http.get(this.baseURL + '/tags', this.getHeaders()).map((response: Response) => {
      return response.json();
    });
  }

  getFilteredResults(cost: number[], rating: number, tags: string[]) {
    return this.http.post(this.baseURL + '/api/Sublet/filter/', JSON.stringify({
        minPrice: cost[0],
        maxPrice: cost[1],
        maxRating: rating,
        tags: tags,
      }), this.getHeaders()).map((response: Response) => {
      return response.json();
    });
  }

  rate(id: number, rating: number) {
    return this.http.post(this.baseURL + '/api/Sublet/rate/' + id + '/' + rating, this.getHeaders()).map((response: Response) => {
      return response.json();
    });
  }

  // private helper methods
  private addAuthToken() {
    // register authorization header with user auth token
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      const headers = new Headers({'Authorization': 'Bearer ' + currentUser.token});
      return new RequestOptions({headers: headers});
    }
  }
}
