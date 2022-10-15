import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-apply-now',
  templateUrl: './apply-now.component.html',
  styleUrls: ['./apply-now.component.scss']
})
export class ApplyNowComponent implements OnInit {

  userId:any=false
  loanApply:boolean=false
  viewDetails:boolean=false



  panelOpenState = false;
  personalloan: boolean = true;
  agriLoan: boolean = false;
  bussinessLoan: boolean = false
  typesOfSetting: string[] = ['Populars Loan', 'Agri & Rular Finance', 'Commercial Bussiness Loans'];
  constructor(private route:ActivatedRoute,
    private appServices:AppService
    ) { }

  ngOnInit(): void {

 this.appServices.getData().subscribe({
      next:(data:any)=>{
    this.loanApply=data.loanApply
    this.viewDetails=data.viewDetails
    console.log("behavior subject work data !!!!!!!!!!!>>",data,this.loanApply,this.viewDetails)
      },
      error:()=>{
    
      }
    })
  

  //   this.route.paramMap.subscribe((params:any)=>{
  //     console.log("ppppppppppppppppppp",params)
  //     this.userId=params.get('userId') //+ string to number
  // })
  }

  ClickOnLoan() {
    this.personalloan = true
    this.agriLoan = false
    this.bussinessLoan = false
    console.log("JJJJJJJJJJJJJJJJJJJJ")
  }

  
  AgriLoan() {
    this.agriLoan = true
    this.personalloan = false
    this.bussinessLoan = false
  }
  BussinessLoan() {
    this.bussinessLoan = true
    this.agriLoan = false
    this.personalloan = false
  }


  

}


