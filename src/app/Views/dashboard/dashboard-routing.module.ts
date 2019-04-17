import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { TeacherComponent } from './teacher/teacher.component';

const routes: Routes = [
  {
    path:'',
    component: DashboardComponent,
    children:
    [
      {
        path:'',
        redirectTo:'/dashboard/teacher',
        pathMatch:'full'
      },
      {
        path:'teacher',
        component:TeacherComponent
      }
    ]
  },
  {
    path:'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
