import { FormControl } from "@angular/forms";

export function validateUsername(control:FormControl):{[key:string]:boolean}{
    let username=control.value;
    if(!username.match(/^[a-zA-z]{3,}$/) ){
        return {'invalidUsername':true}
    }
    return null;
}