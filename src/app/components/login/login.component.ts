import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage=""
  loginError=false;
  // APPROACH - 2
  @ViewChild('loginForm') LoginForm: NgForm;

  constructor(private loginService: LoginService, private userService: UserService, private router: Router) { }


  onSubmit() {
    console.log(this.LoginForm);
    this.loginService.generateToken(this.LoginForm.value).subscribe(
      (response: any) => {
        this.loginError=false;
        this.errorMessage=""
        console.log('Success!!');
        console.log(response)

        //save token in local-storage
        this.loginService.loginUser(response.token)

        //get current logged-in user
        this.userService.currentUser().subscribe(
          (response: any) => {

            //store user details in ls
            this.userService.setUser(response);


            // if role==admin------> redirect to admin landing page
            if (response.authorities[0].authority === "Admin") {
              this.router.navigate(['/admin'])
            }

            // if role==user-------> redirect to user landing page
            if (response.authorities[0].authority === "User") {
              this.router.navigate(['/user'])
            }

            console.log(response);
          },
          error => {
            
            console.log("Some Unexpected error occurs!!!");
          }
        )

      },
      error => {
        this.loginError=true;
            this.errorMessage=error.error.message || "Server error";
        console.log(error);
      }
    )

  }


  ngOnInit(): void {
  }

  //APPROACH - 1
  // onSubmit(loginForm:NgForm){
  //   console.log(loginForm.value);

  // }

}
