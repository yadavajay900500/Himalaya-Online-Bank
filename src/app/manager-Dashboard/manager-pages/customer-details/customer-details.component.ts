import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ManagerDashboardService } from '../../manager-dashboard.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  newApplication: any;
  result: any;
  dataa: any;
  id: any;
  statusData:any;
  


  constructor(private managerService:ManagerDashboardService,
    private http: HttpClient,
    public dialogRef: MatDialogRef<CustomerDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }
    

  @Input() customerId !: String

  ngOnInit(): void {
    // this.dashboardService.getNewCustomerData()
    // .subscribe({
    //   next:(result:any)=>{
    //     console.log("Customer_Application_Component>>",result[0])
    //     this.newApplication=result
    //     this.id=result[0]._id
    //   },
    //   error:(err:any)=>{
    //     console.log("Error in Customer_Application_Component>>>>",err)
    //   }
    // })
    console.log("{{{{{{{{{{{{{{{{",this.data)

  }
  Approved:any="Approved";
  Rejected:any="Rejected";
  Pending:any="Pending"

  approved(rst:any,sts:any) {
    this.statusData= {
      _id:rst,
      action: {
        role: 'Manager',
        status: sts,
        statusBy: "Aman Yadav"
      },
    }
    this.managerService.verifybyManager(this.statusData)
      .subscribe({
        next: (r: any) => {
          this.result = r?.result;
        },
        error: (err: any) => {
          console.log(" Error in Signup Component", err)
        },
      })
  }

}
