import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  results: any;
  constructor(private http: HttpClient) {
  }

  get(url: string): Observable<any> {
    return this.http.get(url);
  }
}
