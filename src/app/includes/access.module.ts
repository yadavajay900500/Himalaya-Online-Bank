import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { AccessRoutingModule } from './access-routing.module';
import { SidebarManuComponent } from './sidebar-manu/sidebar-manu.component';
import{MaterialModule} from '../appModule/material.module'




@NgModule({
  declarations: [
    SidebarManuComponent,
    
  ],
  imports: [
    CommonModule,
    //AccessRoutingModule,
    MaterialModule,
   
  ]
})
export class AccessModule { }
