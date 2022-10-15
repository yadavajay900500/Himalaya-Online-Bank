import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-loan-apply',
  templateUrl: './loan-apply.component.html',
  styleUrls: ['./loan-apply.component.scss']
})
export class LoanApplyComponent implements OnInit {

loanApply:any=true


  constructor( private route:Router,
    private appServices:AppService
    ) { }

  ngOnInit(): void {


    this.appServices.setData({viewLoad:false,loanApply:true})




// this.route.navigate(['applyNow'],{queryParams:{v:this.loanApply}})
  }


  // ApplyLoan(){
  //   this.loanApply=false
  // }



}
