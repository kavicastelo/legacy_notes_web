import { Injectable } from '@angular/core';
import {CookieService} from "ngx-cookie-service";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieService: CookieService) { }

  public createUser(token:string){
    this.cookieService.set('user-token',token,{expires:1000*60*60*24*3});
  }

  public logout(){
    this.cookieService.delete('user-token');
  }

  public isExists():boolean{
    let user = this.cookieService.get('user-token');
    return user.length !== 0; //user.length === 0?false:true
  }

  public getUser(){
    return this.cookieService.get('user-token');
  }
}
