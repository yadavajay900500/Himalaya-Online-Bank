import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {DashboardService} from '../dashboards/dashboard.service'




@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
title="Something"
  constructor(private http:HttpClient,
      private adim:DashboardService
    ) { }
  data:any=[]
  

  phoneno = '33440020'
  titl:string = 'header';
  show = true;
  users: any = [
    {name:"mukesh",age:20,salary:2000,status:"coder",imagePath:"assets/u1.jpg"},
    // {name:"suresh",age:40,salary:3000,status:"single",imagePath:"assets/u2.jpg"},
    // {name:"ramesh",age:30,salary:4000,status:"commited",imagePath:"assets/u3.png"},
  ]
 
  // {
  //   @Input() name!:string;
  //   @Input() age!:number;
  //   @Input() status!:string;
  //   @Input() salary!:number;
  //   @Input() img!:string;
  //   @Input() title!:string;
   
   
  //   }
  ngOnInit(): void {
      
//   this.adim.getAdminData().subscribe({
//     next:(e:any)=>{
//       this.data=e.user
//       console.log("in status.ts file",e)
//     },
//     error:(err:any)=>{
// console.log("it is define in status.ts file",err)
//     }

//   })

  }
}
