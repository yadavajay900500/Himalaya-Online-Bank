import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms'

@Component({
  selector: 'app-apply-loan-application',
  templateUrl: './apply-loan-application.component.html',
  styleUrls: ['./apply-loan-application.component.scss']
})
export class ApplyLoanApplicationComponent implements OnInit {

  favoriteColor: any = 'Zafar Khan'
  constructor() { }

  ngOnInit(): void {
  }
  loanApplication = new FormGroup({
    name: new FormControl('',[Validators.required]),
    password: new FormControl('')
  })


  applyLoanApplication() {
    console.log(this.loanApplication.value)
  }

  get name(){
    return this.loanApplication.get('name')
  }

  get password(){
    return this.loanApplication.get('password')
  }
}
