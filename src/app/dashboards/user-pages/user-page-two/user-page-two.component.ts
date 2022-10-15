import { Component, OnInit } from '@angular/core';
import{ DashboardService} from '../../dashboard.service'

@Component({
  selector: 'app-user-page-two',
  templateUrl: './user-page-two.component.html',
  styleUrls: ['./user-page-two.component.scss']
})
export class UserPageTwoComponent implements OnInit {
data:any=[] ||"error"
  constructor( private orderService:DashboardService) { }

  ngOnInit(): void {
  }
  
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan`
  // showToster(){
  //   // const toastLiveExample:any = document.getElementById('liveToast')
  //   // const toast = new bootstrap.Toast(toastLiveExample, { animation : true, delay: 1000 })
  //   // toast.show()
  //   this.orderService.setData({food : "Red Sause Pasta" })
  // }

}
