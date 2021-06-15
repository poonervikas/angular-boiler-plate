import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  //get currently logged in user
  currentUser(){
    return this.http.get('http://localhost:8080/currentUser');
  }

  //store user details in ls
  public setUser(user){
    localStorage.setItem('user',JSON.stringify(user));
  }

  //get user from ls
  public getUser(){
    let userStr=localStorage.getItem('user');
    if(userStr!==null){
      return JSON.parse(userStr);

    }
    else{
      //----------TODO--------------
      // logout
    }
  }

  //get User role
  public getUserRole(){
    let user=this.getUser();
    return user.authorities[0].authority;
  }

}
