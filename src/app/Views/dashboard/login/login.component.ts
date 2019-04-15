import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms'
import { environment } from 'src/environments/environment';
import { LoginService } from '../../../Service/login.service';
import { Error } from '../../../Model/error'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  visibility:boolean
  errors: Error[]
  constructor(private loginService: LoginService) {}
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
