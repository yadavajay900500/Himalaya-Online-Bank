import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManagerDashboardService } from '../manager-dashboard.service';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard-main.component.html',
  styleUrls: ['./manager-dashboard-main.component.scss']
})
export class ManagerDashboardMainComponent implements OnInit {
  managerData: any = []
  data:any
  name:any
  constructor(
    private managerService: ManagerDashboardService,
    private route :ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.data = this.route.snapshot.paramMap.get('data')
    // .subscribe(params => {
    //   this.data = params['data'];
    // });
    console.log(JSON.parse(this.data))
    this.managerService.getManagerDeatails().subscribe(
      {
        next: (data: any) => {
          this.managerData = data.user
          // console.log("|||||||||||||||||||", this.managerData)
        },
        error: (err) => {
          console.log("|||||||||", err)
        }
      }
    )
  }

  logout(){
    this.managerService.userlogout()
  }

}
