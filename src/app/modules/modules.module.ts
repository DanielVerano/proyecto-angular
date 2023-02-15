import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    HomeComponent,
    RegistrationComponent,
    LoginComponent

  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [

  ]
})
export class ModulesModule { }
