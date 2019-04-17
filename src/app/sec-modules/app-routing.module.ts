import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../Views/dashboard/login/login.component';
import { TeacherComponent } from '../Views/dashboard/teacher/teacher.component';
import { Page404Component } from '../Views/page404/page404.component';

const routes: Routes = [
  { path:'dashboard', component:LoginComponent },
  { path:'dashboard/teacher', component:TeacherComponent },
  { path:'**', component:Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }