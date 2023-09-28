import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  public signup(username: any, password: any, email: any, believer: any): Observable<any> {
    return this.http.post(this.baseUrl + "account/signup", {
      username: username,
      password: password,
      email: email,
      believer: believer
    });
  }

  public login(username: any, password: any): Observable<any> {
    return this.http.post(this.baseUrl + "account/login", {
      username: username,
      password: password
    });
  }
}
