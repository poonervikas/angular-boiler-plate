import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  //generate token
  public generateToken(loginData: any) {
    return this.http.post(`${baseUrl}/getToken`, loginData);
  }

  //login user: save token to localstorage
  public loginUser(token) {
    localStorage.setItem('PollsForAllToken', token);
    return true;
  }

  //isLogin : if token is there in localstorage or not
  public isLoggedIn() {
    let token = localStorage.getItem('PollsForAllToken');
    if (token === undefined || token === null || token === "") {
      return false;
    }
    else {
      return true;
    }
  }

  //logout: remove token from ls
  public logout(){
    localStorage.removeItem('PollsForAllToken');
  }

  //get token : get token from ls
  public getToken(){
    return localStorage.getItem('PollsForAllToken');
  }

  //
  
  
}
