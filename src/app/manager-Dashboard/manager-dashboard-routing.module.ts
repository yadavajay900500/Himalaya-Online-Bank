import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerDashboardMainComponent } from './manager-dashboard-main/manager-dashboard-main.component';
import { ManagerMainPageComponent } from './manager-main-page/manager-main-page.component';
import { AllCustomerDataComponent } from './manager-pages/all-customer-data/all-customer-data.component';
import { CustomerApplicationComponent } from './manager-pages/customer-application/customer-application.component';
import { CustomerDetailsComponent } from './manager-pages/customer-details/customer-details.component';

const routes: Routes = [
  {
    path:"", component:ManagerMainPageComponent
  },
  {
    path:"newApplication", component:CustomerApplicationComponent
  },
  {
    path:"allCustomerData", component:AllCustomerDataComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerDashboardRoutingModule { }
