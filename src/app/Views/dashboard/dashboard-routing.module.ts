import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path:'',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children:
    [
      {
        path:'',
        redirectTo:'/dashboard/teacher',
        pathMatch:'full'
      },
      {
        path:'teacher',
        canActivateChild:[AuthGuard],
        component:TeacherComponent
      }
    ]
  },
  {
    path:'logIn',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
