import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,FormGroup ,ReactiveFormsModule } from '@angular/forms'

import { AuthenticationRoutingModule } from './sign-in-up-routing.module';
import { OtpVerifyPageComponent } from './otp-verify-page/otp-verify-page.component';
import{ LoginComponent} from './login/login.component';
import { ManagerLoginComponent } from './manager-login/manager-login.component'
import { MaterialModule } from '../appModule/material.module';
import { ApplyLoanApplicationComponent } from './apply-loan-application/apply-loan-application.component';


@NgModule({
  declarations: [
    OtpVerifyPageComponent,
    LoginComponent,
    ManagerLoginComponent,
    ApplyLoanApplicationComponent,
  ],
  
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule,
    FormsModule,
    MaterialModule
    
    
    
  ]
})
export class AuthenticationModule { }
