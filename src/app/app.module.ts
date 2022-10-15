import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Authentication/login/login.component';
import { SignupComponent } from './Authentication/signup/signup.component';
import { ForgetPasswordComponent } from './Authentication/forget-password/forget-password.component';
import { NotFoundComponent } from './Authentication/not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './includes/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './includes/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http"
import{MaterialModule}from './appModule/material.module';
import { AccountComponent } from './account/account.component'
import { AuthenticationRoutingModule } from './Authentication/sign-in-up-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { StatusComponent } from './status/status.component';
import { SigninComponent } from './signin/signin.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { AccessRoutingModule } from './access/access-routing.module';
import {MatSidenavContent, MatSidenavModule} from '@angular/material/sidenav';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import{NewUserComponent} from './access/new-user/new-user.component';
// import { UserDashboardComponent } from './dashboards/user-dashboard/user-dashboard.component';
// import { AdminDashboardComponent } from './dashboards/admin-dashboard/admin-dashboard.component';
// import { UserPageOneComponent } from './dashboards/user-pages/user-page-one/user-page-one.component';
import { UserPageTwoComponent } from './dashboards/user-pages/user-page-two/user-page-two.component';
import { UserPageThreeComponent } from './dashboards/user-pages/user-page-three/user-page-three.component';
import {InterceptorService} from './AuthGuard/interceptor.service';
import { ManagerDashboardMainComponent } from './manager-Dashboard/manager-dashboard-main/manager-dashboard-main.component';
import { ManagerMainPageComponent } from './manager-Dashboard/manager-main-page/manager-main-page.component';
import { CustomerApplicationComponent } from './manager-Dashboard/manager-pages/customer-application/customer-application.component';
import { CustomerDetailsComponent } from './manager-Dashboard/manager-pages/customer-details/customer-details.component';
import { OffersComponent } from './offers/offers.component';
import { LoanApplyComponent } from './loan-apply/loan-apply.component';
import { ApplyNowComponent } from './dashboards/user-pages/apply-now/apply-now.component';



// import {LoginComponent} from './Authentication/login/login.component'
// const HTTP_INTERCEPTORS="HTTP_INTERCEPTORS"

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    ForgetPasswordComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    AccountComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    StatusComponent,
    AddcontactComponent,
    WelcomePageComponent,
    NewUserComponent,
    // UserDashboardComponent,
    // AdminDashboardComponent,
    // UserPageOneComponent,
    UserPageTwoComponent,
    UserPageThreeComponent,
    ManagerDashboardMainComponent,
    ManagerMainPageComponent,
    CustomerApplicationComponent,
    CustomerDetailsComponent,
    OffersComponent,
    LoanApplyComponent,
    ApplyNowComponent
  
  
  
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MaterialModule,

    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule,
    SigninComponent,
    AccessRoutingModule,
   
    
    
  
  ],
  providers: [

    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
     }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

