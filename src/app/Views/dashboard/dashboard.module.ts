import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LoginComponent } from './login/login.component';
import { TeacherComponent } from './teacher/teacher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatModules } from 'src/app/sec-modules/mat.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    LoginComponent,
    TeacherComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatModules,
    ReactiveFormsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
