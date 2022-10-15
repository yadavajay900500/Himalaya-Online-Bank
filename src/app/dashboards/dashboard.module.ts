import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{MaterialModule}from '../appModule/material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component'
import {UserPageOneComponent } from './user-pages/user-page-one/user-page-one.component'
import {UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { SettingsPageComponent } from './user-pages/settings-page/settings-page.component';
import { TransferMoneyComponent } from './user-pages/transfer-money/transfer-money.component';
import { AccountDetailsComponent } from './user-pages/account-details/account-details.component'
import{ AccountTransactionComponent} from './transaction-history/account-transaction/account-transaction.component';
import { ReachargeAndBillComponent } from './user-pages/reacharge-and-bill/reacharge-and-bill.component';
import { ApplyNowComponent } from './user-pages/apply-now/apply-now.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OffersZoneComponent } from './user-pages/offers-zone/offers-zone.component';
import { PersonalLoanComponent } from './user-pages/personal-loan/personal-loan.component';


@NgModule({
  declarations: [

    AdminDashboardComponent,
    UserDashboardComponent,
    UserPageOneComponent,
    SettingsPageComponent,
    TransferMoneyComponent,
    AccountDetailsComponent,
    AccountTransactionComponent,
    ReachargeAndBillComponent,
    // ApplyNowComponent,
    OffersZoneComponent,
    PersonalLoanComponent,
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    DashboardRoutingModule,

  ],
  exports:[
    AdminDashboardComponent,


  ]
})
export class DashboardModule { }
