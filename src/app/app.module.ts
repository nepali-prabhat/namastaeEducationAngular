import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './Views/dashboard/login/login.component';
import { TeacherComponent } from './Views/dashboard/teacher/teacher.component';
import { MatModules } from './sec-modules/mat.module';
import { AppRoutingModule } from './sec-modules/app-routing.module';
import { Page404Component } from './Views/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TeacherComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatModules,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }