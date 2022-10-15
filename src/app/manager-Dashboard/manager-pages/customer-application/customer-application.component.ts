import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ManagerDashboardService } from '../../manager-dashboard.service';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';

@Component({
  selector: 'app-customer-application',
  templateUrl: './customer-application.component.html',
  styleUrls: ['./customer-application.component.scss']
})
export class CustomerApplicationComponent implements OnInit {
  newApplication: any;
  id: any;

  constructor(private managerDashboard:ManagerDashboardService,
    public dialog: MatDialog
    ) { }

    openDialog(val:any) {
      console.log(val)
      const currentApplication=this.id
      const dialogRef = this.dialog.open(CustomerDetailsComponent,{data:val});
      console.log("dialog box",dialogRef)
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
  

  ngOnInit(): void {
    this.managerDashboard.getNewCustomerData()
    .subscribe({
      next:(result:any)=>{
        // console.log("Customer_Application_Component>>>>>>>>>>>>",result[0])
        const newResult=result.reverse()
        this.newApplication=newResult
        // console.log("QQQQQQQQQQQQ",this.newApplication)
        this.id=this.newApplication._id
      },
      error:(err:any)=>{
        console.log("Error in Customer_Application_Component>>>>",err)
      }
    })
    
    // this.managerDashboard.allCustomerData()
    // .subscribe({
    //   next:(result:any)=>{
    //     console.log("Customer_Application_Component>>>>>>>>>>>>",result[0])
    //     const newResult=result.reverse()
    //     this.newApplication=newResult
    //     console.log("QQQQQQQQQQQQ",this.newApplication)
    //     this.id=this.newApplication._id
    //   },
    //   error:(err:any)=>{
    //     console.log("Error in Customer_Application_Component>>>>",err)
    //   }
    // })
  }

}
