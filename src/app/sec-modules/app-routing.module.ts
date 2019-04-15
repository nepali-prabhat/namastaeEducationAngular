import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component'; 
import { LoginComponent } from '../Views/dashboard/login/login.component';
import { TeacherComponent } from '../Views/dashboard/teacher/teacher.component';
const routes: Routes = [
  { path:'dashboard', component:LoginComponent },
  { path:'dashboard/teacher', component:TeacherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }