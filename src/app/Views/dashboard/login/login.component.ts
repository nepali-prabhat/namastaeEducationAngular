import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms'
import { environment } from 'src/environments/environment';
import { LoginService } from '../../../Service/login.service';
import { Error } from '../../../Model/error'
import { Router } from '@angular/router';
import { LoginStateService } from 'src/app/Service/login-state.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  visibility:boolean
  errors: Error[]
  constructor(private router: Router,private loginService: LoginService, private loginState:LoginStateService) {}
  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    })
    this.visibility=false
  }
  get username(){
    return this.loginForm.get('username')
  }
  get password(){
    return this.loginForm.get('password')
  }
  toggleVisibility(){
    this.visibility = !this.visibility
  }
  onSubmit(){
    this.errors = undefined
    this.loginService.login(this.username.value, this.password.value,"teacher")
                      .subscribe((res)=>{
                        let redirect = this.loginState.redirectUrl? this.router.parseUrl(this.loginState.redirectUrl): '/dashboard/teacher'
                        this.router.navigateByUrl(redirect)
                      },(err)=>{
                        this.errors=err
                      })
                      //err.error.errors has the arrays of errors of type {location:string, msg:string}
  }
  makeDefault(){
    if(!environment.production){
      this.loginForm.setValue({
        username: 'Santosh211',
        password: 'makemedoit*8'
      })
    }
  }
}
