import { Component, OnInit } from '@angular/core';
import { LoginStateService } from 'src/app/Service/login-state.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private loginState:LoginStateService) { }

  ngOnInit() {
  }
  logOut(){
    this.loginState.logOut()
  }
}
