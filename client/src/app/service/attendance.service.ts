import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  startAttendance(token: any): Observable<any> {
    return this.http.post(this.baseUrl+'attendance/start', {token:token});
  }

  stopAttendance(): Observable<any> {
    return this.http.post(this.baseUrl+'attendance/stop', {});
  }
}
