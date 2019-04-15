import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from 'rxjs';
import { Error } from '../Model/error';

export function handleError(error:HttpErrorResponse){
    if (error instanceof ErrorEvent){
        const err:Error[]= [{location:'network',msg:'network error.'}]
        return throwError(err)
    }
    return throwError(error.error.errors)
}