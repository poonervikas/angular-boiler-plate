import { FormControl } from '@angular/forms';

export function validateConfirmPassword(control:FormControl ): {[key:string]:boolean}{ // here control refers to form not a specific form field

    const password=control.get('password');
    const confirmPassword=control.get('confirmPassword');
    console.log(password.value+"--------------"+confirmPassword.value)
    if(password && confirmPassword && (password.value!==confirmPassword.value)){
        return {'passwordMismatch':true};
    }
    return null;
}