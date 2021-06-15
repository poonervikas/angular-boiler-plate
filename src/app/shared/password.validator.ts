import { FormControl } from '@angular/forms';

export function validatePassword(control:FormControl):{[key:string]:boolean}{
let password=control.value;
   // w/o regex
   
   if(password.length<8){
       return {'invalidPassword':true};
   }
   else{
    var smalllCase=0;
    var upperCase=0;
    var digit=0;
    for(var i=0;i<password.length;i++){
        if(password[i].match(/^[a-z]$/)){
            smalllCase++;
        }
        else if(password[i].match(/^[A-Z]$/)){
            upperCase++;
        }
        else if(password[i].match(/^[0-9]$/)){
                digit++;
        }
    }    
    if(smalllCase>=1 && upperCase>=1&& digit>=1){
    return null;    
    }
    else{
        return {'invalidPassword':true} ;
    }
   }
}