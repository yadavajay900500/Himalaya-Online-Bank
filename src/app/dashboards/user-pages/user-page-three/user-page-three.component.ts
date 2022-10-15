import { Component, OnInit } from '@angular/core';
import{ DashboardService } from '../../dashboard.service'

@Component({
  selector: 'app-user-page-three',
  templateUrl: './user-page-three.component.html',
  styleUrls: ['./user-page-three.component.scss']
})
export class UserPageThreeComponent implements OnInit {

  food : any = [];
  constructor(private orderService : DashboardService) { }

  ngOnInit(): void {
    this.orderService.getData().subscribe({
      next : (r:any) => { this.food = r.food
        console.log("########################", this.food);  
      },
      error : () => {},
    })
  }
}
