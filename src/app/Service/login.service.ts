import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { handleError } from '../SupportFunc/error';
import { LoginStateService } from './login-state.service';

const headerOptions={
  headers: new HttpHeaders({
    'Content-Type': "application/json"
  })
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private usersurl:string = 'http://localhost:3000/users/signIn'
  private teachersurl:string = 'http://localhost:3000/teachers/signIn'
  
  constructor(private http: HttpClient, private loginState: LoginStateService) { }

  login(username:string, password:string, role:string):Observable<any>{
    const credentials = {username:username, password:password}
    return this.http.post(this.teachersurl,credentials,headerOptions)
            .pipe(
              //if successful, id and auth token will be stored in loginState
              tap((res)=>{
                this.loginState.logIn(res['id'],res['auth-token'])
              }),
              catchError(handleError),
            )
  }
  
}