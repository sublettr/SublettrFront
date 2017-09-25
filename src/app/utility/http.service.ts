import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { Observable } from 'rxjs'

@Injectable()
export class HttpService {

  serverUrl: string = '';

  constructor(private http: Http) { }

  sendGenericGet(url: string): Observable<any>{
    return this.http.get(this.serverUrl + url)
      .map((res) => {
        return res.json();
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  search(searchText: string): Observable<any>{
    console.log(searchText);
    return this.http.get(this.serverUrl + '/search?' + searchText)
    .map((res) => {
      return res.json();
    })
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
