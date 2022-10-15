import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-loan',
  templateUrl: './personal-loan.component.html',
  styleUrls: ['./personal-loan.component.scss']
})
export class PersonalLoanComponent implements OnInit {

  constructor(private route:Router) { }



  ngOnInit(): void {
  }

  apllyLoan(){
    this.route.navigateByUrl('/admin/applyNowApplication')
  }


}
