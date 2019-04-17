import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from 'rxjs';
import { Error } from '../Model/error';

export function handleError(error:HttpErrorResponse){
    
    if (error instanceof ErrorEvent){ 
        const err:Error[]= [{location:'network',msg:'network error.'}]
        return throwError(err)
    }
    else if (error.error.errors){
        return throwError(error.error.errors)
    }else{
        const err:Error[]=[{location:'unknown',msg:error.message}]
        return throwError(err)
    }
}