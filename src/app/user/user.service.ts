import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JsonResp } from '../JsonResp.class';
import { User } from './user.class';

const url = 'https://localhost:5001/api/Users/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  list(): Observable<JsonResp> {
    return this.http.get(url) as Observable<JsonResp>;
  }
  get(id): Observable<JsonResp> {
    return this.http.get(url + id) as Observable<JsonResp>;
  }
  add(user: User): Observable<JsonResp> {
    return this.http.post(url, user) as Observable<JsonResp>;
  }
  update(user: User): Observable<JsonResp> {
    return this.http.put(url, user) as Observable<JsonResp>;
  }
  delete(id): Observable<JsonResp> {
    return this.http.delete(url + id) as Observable<JsonResp>;
  }

  constructor(
    private http: HttpClient
  ) { }
}
