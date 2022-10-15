import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerDashboardRoutingModule } from './manager-dashboard-routing.module';
import { MaterialModule } from '../appModule/material.module';
import { BankEmployeeComponent } from './manager-pages/bank-employee/bank-employee.component';
import { LoanApplicationComponent } from './manager-pages/loan-application/loan-application.component';
import { AllCustomerDataComponent } from './manager-pages/all-customer-data/all-customer-data.component';


@NgModule({
  declarations: [
    BankEmployeeComponent,
    LoanApplicationComponent,
    AllCustomerDataComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ManagerDashboardRoutingModule
  ]
})
export class ManagerDashboardModule { }
