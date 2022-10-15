import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';
import { ManagerLoginComponent } from './manager-login/manager-login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

  { path: "login", component: LoginComponent },
  {
    path:'employeelogin', component:ManagerLoginComponent
  },
  {
    path: "home/signup", component: SignupComponent
  },
  {
    path: "forgetPassword", component: ForgetPasswordComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
