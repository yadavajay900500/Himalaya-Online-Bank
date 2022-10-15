import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DashboardService } from '../dashboard.service';
import { AppService } from 'src/app/app.service';
// import {ProgressSpinnerMode} from '@angular/material/progress-spinner';



@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  // @Input() Amount !:string=data[0].totalAmount 

  loanApply:boolean=false
  viewLoanDetails:boolean=false
  constructor(private http: HttpClient,
    private admimService: DashboardService,
    private orderService: DashboardService,
    private appServices:AppService

  ) { }

  // color: ThemePalette = 'primary';
  // mode: ProgressSpinnerMode = 'determinate';
  value = 70;


  data: any = []
  displayedColumns: string[] = ['position', 'transactionId', 'debitAmount',
    'creditAmount', 'transactionDate', 'transactionDescription'];
  // his=this.data[0].transactionHistory
  title = "Something"


  Rewards = `430000`;


  ngOnInit(): void {


    

    // this.admimService.getAdminData()

    // .subscribe((res:any)=>{
    //   console.log("FFFFFFFFFF",res)
    // })


    this.admimService.getAdminData()
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
    this.showToster()






  }
  showToster() {
    // const toastLiveExample:any = document.getElementById('liveToast')
    // const toast = new bootstrap.Toast(toastLiveExample, { animation : true, delay: 1000 })
    // toast.show()
    this.orderService.setData({ food: this.data })
  }


  logout() {

    this.admimService.userlogout()

  }

  loanDetails(){
   
    this.appServices.setData({loanApply:false,
    
      viewDetails:true
    })
    
  }

}