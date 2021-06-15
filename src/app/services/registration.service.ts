import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  url = "http://localhost:8080/user/";
  constructor(private http: HttpClient) { }

  register(userData) {
    return this.http.post(this.url, userData);
    //   .pipe(catchError(this.errorHandler));
  }
  // errorHandler(error: HttpErrorResponse) {  // why this approach -----> 1.)generic error handling 2.) behind the scene task when error occurs(log somewhere, send to analytics server)
  //  // console.log(error.message,"this is the message");
  //  console.log(error.error.message || "Server Error");
  // return throwError(error.message || "Server Error");
  // }

}
