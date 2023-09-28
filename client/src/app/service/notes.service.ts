import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Note} from "../DTO/Note";

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  public saveNote(n:Note): Observable<any> {
    return this.http.post(this.baseUrl + "notes/save", {
      title:n.title,
      content:n.content
    });
  }

  public getNotes(): Observable<any> {
    return this.http.get(this.baseUrl + "notes/all");
  }

  public getNote(id: string): Observable<any> {
    return this.http.get(this.baseUrl + "notes/get/" + id);
  }
}
