import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginStateService {
  private loggedIn:boolean = JSON.parse(localStorage.getItem('loggedIn')) || false
  private id:number = parseInt(localStorage.getItem('id')) || null
  private authToken:string = localStorage.getItem('authToken') || null
  redirectUrl:string
  constructor(private router:Router) { }

  get _loggedIn():boolean{
    return this.loggedIn
  }
  get _id():number{
    return this.id
  }
  get _authToken():string{
    return this.authToken
  }

  logIn(authToken:string, id:number){
    this.loggedIn = true
    this.authToken = authToken
    this.id = id
    localStorage.setItem('id', id.toString())
    localStorage.setItem('loggedIn', 'true')
    localStorage.setItem('authToken', authToken)
  }
  logOut(){
    this.loggedIn = false
    this.id = null
    this.authToken = null
    localStorage.clear()
    this.router.navigate(['/dashboard/logIn'])
  }
}
