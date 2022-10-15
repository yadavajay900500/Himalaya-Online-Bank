import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AccountComponent } from './account/account.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { ForgetPasswordComponent } from './Authentication/forget-password/forget-password.component';
import { LoginComponent } from './Authentication/login/login.component';
import { NotFoundComponent } from './Authentication/not-found/not-found.component';
import { SignupComponent } from './Authentication/signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { UserDashboardComponent } from './dashboards/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './dashboards/admin-dashboard/admin-dashboard.component';
import { UserPageOneComponent } from './dashboards/user-pages/user-page-one/user-page-one.component';
import { UserPageThreeComponent } from './dashboards/user-pages/user-page-three/user-page-three.component';
import { UserPageTwoComponent } from './dashboards/user-pages/user-page-two/user-page-two.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './includes/header/header.component';
import { SidebarManuComponent } from './includes/sidebar-manu/sidebar-manu.component';
import { StatusComponent } from './status/status.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AccountTransactionComponent } from './dashboards/transaction-history/account-transaction/account-transaction.component';
import { AuthGuard } from './AuthGuard/auth.guard';
import { ManagerLoginComponent } from './Authentication/manager-login/manager-login.component';
import { ManagerDashboardMainComponent } from './manager-Dashboard/manager-dashboard-main/manager-dashboard-main.component';
import { OffersComponent } from './offers/offers.component';
import { ApplyNowComponent } from './dashboards/user-pages/apply-now/apply-now.component';
import { LoanApplyComponent } from './loan-apply/loan-apply.component';

// import { ThreeComponent } from './Authentication/forget-password/forget-password.component';

const routes: Routes = [
  {
    path:'', component:WelcomePageComponent
  },
  {
    path:'home', component:HomeComponent
  },
  {
    path:'side-manu', component:AccountComponent
  },
  {
    path:'about', component:AboutComponent
  },
  {
    path:'status', component:StatusComponent
  },
  {
    path:'account', component:AccountComponent
  },
  {
    path:'offers', component:OffersComponent
  },
  {
    path:'loans', component:LoanApplyComponent
  },
  // {
  //   path:'adminAccount', component:UserPageTwoComponent
  // },
  
  {
    path:'contact', component:ContactComponent,
    children:[
      {
        path:'add', component:AddcontactComponent
      },
      {
        path:'edit/:id', component:AddcontactComponent
      }
    ]
  },

  {
    path:"auth" ,
    loadChildren:()=>import("./Authentication/sign-in-up.module").then((m)=>m.AuthenticationModule)
  },
  {
    path:'admin/three', component:UserPageThreeComponent
  },
  // {
  //   path:'login',
  //   component:LoginComponent
  // },
  {
    path:'admin',canActivate:[AuthGuard], component:AdminDashboardComponent,
   children:[{
      // canActivateChild:[AuthGuard],
     loadChildren:()=>import("./dashboards/dashboard.module").then((m)=>m.DashboardModule),
     path:"" 
     
    }],
   
    // component:AdminDashboardComponent,
    // children : [
    //   {path: 'adminAccount', component: UserPageTwoComponent},
    //    {path: 'transactionHistory', component:AccountTransactionComponent}
      
    // ]
  },




  // {
  //   path:'manager', canActivate:[AuthGuard], component:ManagerDashboardComponent,
  //   children:[{
  //     path:"",
  //    loadChildren:()=>import("./dashboards/dashboard.module").then((m)=>m.DashboardModule),
  //   }],
  // },
  {
    path:'manager/:data', canActivate:[AuthGuard], component:ManagerDashboardMainComponent,
    children:[{
      path:"",
     loadChildren:()=>import("./manager-Dashboard/manager-dashboard.module").then((m)=>m.ManagerDashboardModule),
    }],
  },




//(((((((((((((((((((((())))))))))))))))))))))
  // {path:'dashboard',  component: BankEmployeesComponent ,children : [
  //   {path: '', component: UserPageOneComponent},
  //   {path: 'adminAccount', component: UserPageTwoComponent},
  //   {path: 'three', component: UserPageThreeComponent}]
  // },

  // {
  //   path:'authentication',
  //   loadChildren:()=>
  //     import('./Authentication/sign-in-up.module').then((m)=>m.AuthenticationModule)
    
  // },
  // {
  //   path:'includes',
  //   loadChildren:()=>
  //     import('./includes/access.module').then((m)=>m.AccessModule)
    
  // },
  // {
  //   path:'access',
  //   loadChildren:()=>
  //     import('./access/access.module').then((m)=>m.AccessModule)
  // },
  // {
  //   path: 'profile', component: HeaderComponent 
  // },
  {
    path:'signup',
    component:SignupComponent
  },
  // {
  //   path:'forgetPassword',
  //   component:ForgetPasswordComponent
  // },
  {path:'home',component:AccountComponent},
  {
    path:'**',
    component:NotFoundComponent
  }
  
  // {path: "three", component: ThreeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
