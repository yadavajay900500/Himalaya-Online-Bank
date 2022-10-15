import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-user-page-one',
  templateUrl: './user-page-one.component.html',
  styleUrls: ['./user-page-one.component.scss']
})
export class UserPageOneComponent implements OnInit {

  page: any = []
aa: any;

  constructor(private http: HttpClient,
    private admimService: DashboardService,
    private dashboardService: DashboardService

  ) { }




  data: any = []
  displayedColumns: string[] = ['position', 'transactionId', 'debitAmount',
    'creditAmount', 'transactionDate', 'transactionDescription'];
  // his=this.data[0].transactionHistory
  title = "Something"


  Rewards = `430000`;

  ngOnInit(): void {

    this.page = this.admimService.getAdminData()
      .subscribe({
        next: (r: any) => {
          console.log("connnnnnnnnnnnnn", r)
          this.data = r?.user;
          console.log("00000000000", this.data);
          console.log(this.data[0].email)
        },
        error: (err: any) => {
          console.log(" ko ho ka hal ba", err)
        },
      })
    console.log("?????", this.title)
    console.log("pageeeeeeeeeeeees", this.page)
   const aa= this.showToster()
   console.log("o++++++++++++++++00000)",aa)
  }



  showToster() {
   return this.dashboardService.getData()
  }
}
