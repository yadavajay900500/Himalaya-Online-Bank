import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyLoanApplicationComponent } from '../Authentication/apply-loan-application/apply-loan-application.component';
import { AccountTransactionComponent } from './transaction-history/account-transaction/account-transaction.component';
import { ApplyNowComponent } from './user-pages/apply-now/apply-now.component';
import { OffersZoneComponent } from './user-pages/offers-zone/offers-zone.component';
import { PersonalLoanComponent } from './user-pages/personal-loan/personal-loan.component';
import { ReachargeAndBillComponent } from './user-pages/reacharge-and-bill/reacharge-and-bill.component';
import { SettingsPageComponent } from './user-pages/settings-page/settings-page.component';
import { TransferMoneyComponent } from './user-pages/transfer-money/transfer-money.component';
import { UserPageOneComponent } from './user-pages/user-page-one/user-page-one.component';
import { UserPageTwoComponent } from './user-pages/user-page-two/user-page-two.component';

const routes: Routes = [
  {
    path: "", component: UserPageOneComponent
  },
 
  {
    path: "accountTransaction", component: AccountTransactionComponent
  },
  {
    path: "two", component: UserPageTwoComponent
  },
  // {
  //   path:'three', component:UserPageThreeComponent
  // }
  {
    path: 'settings', component: SettingsPageComponent
  },
  {
    path: 'transferMoney', component: TransferMoneyComponent
  },
  {
    path: 'offers', component: OffersZoneComponent
  },
  {
    path: 'raecharge&bill', component: ReachargeAndBillComponent
  },
  // {
  //   path: 'applyNow', component: ApplyNowComponent
  // },
  // {
  //   path: 'personalLoan', component: PersonalLoanComponent
  // },

  {
    path:'applyNow', component:ApplyNowComponent,
    children:[
   
      {
        path:'personalLoan', component:PersonalLoanComponent
      },
      
    ]
  },
  {
    path:'applyNowApplication', component:ApplyLoanApplicationComponent
  }


  // {
  //   path:'manager',component:BankEmployeesComponent
  // }
  // {
  //   path: 'customerApplication', component: CustomerApplicationComponent
  // },
  // {
  //   path: 'allCustomerData', component: CustomerApplicationComponent
  // },





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
