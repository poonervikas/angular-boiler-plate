import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { validateUsername } from '../../shared/username.validator'
import { validatePassword } from 'src/app/shared/password.validator';
import { validateConfirmPassword } from 'src/app/shared/confirmPassword.validator';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;   // for hiding password initially
  hide2 = true;  // for hiding confirmpassword initially
  confirmError = false;
  errorMessage=null;
  isLoading=false;

  //getters for form fields
  public get username() {
    return this.registrationForm.get('username');
  }
  public get email() {
    return this.registrationForm.get('email');
  }
  public get password() {
    return this.registrationForm.get('password');
  }
  public get confirmPassword() {
    return this.registrationForm.get('confirmPassword');
  }


  test() {
    console.log(this.registrationForm);
    // debugger;
    // if (this.confirmPassword.valid && !this.confirmPassword.untouched && (this.registrationForm.errors == null ? false : true)) {
    //   if (this.registrationForm.errors['passwordMismatch']) {
    //     this.confirmError = true;
    //   }
    // }
    // console.log(this.confirmPassword.valid && !this.confirmPassword.untouched && (this.registrationForm.errors == null ? false : true))
    // console.log(this.registrationForm.errors['passwordMismatch'])
  }

  registrationForm = new FormGroup({   //creating FormGroup instance
    // initialize this FormGroup with objects of controls that are present in HTML
    username: new FormControl('', [Validators.required, validateUsername]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, validatePassword]),
    confirmPassword: new FormControl('', [Validators.required])
    // }, { validators: validateConfirmPassword });
  });

  constructor(private registrationService: RegistrationService) { }

  ngOnInit(): void {
    this.registrationForm.valueChanges.subscribe(val => {
      console.log(val);

    })
  }

  onSubmit() {
    //console.log(this.registrationForm.value);
    this.registrationService.register(this.registrationForm.value).subscribe(
      response => {
        console.log("success!!", response);
        this.errorMessage=null;

      },
      error => {
       // console.log(error.error.message || "Server error");
      this.errorMessage=error.error.message || "Server error";
      }
    )
  }
}
