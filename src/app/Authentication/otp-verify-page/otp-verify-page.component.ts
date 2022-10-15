import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { SignInUpService } from '../sign-in-up.service';
import { DialogData } from '../signup/signup.component';

@Component({
  selector: 'app-otp-verify-page',
  templateUrl: './otp-verify-page.component.html',
  styleUrls: ['./otp-verify-page.component.scss']
})
export class OtpVerifyPageComponent implements OnInit {

  constructor(public dialogRef: DialogRef<string>,
     @Inject(DIALOG_DATA) public data: DialogData,
     private signInUp:SignInUpService
     ) 
   { }

  ngOnInit(): void {

  }
  onOK(rst:any){
    this.data.otp=rst
    console.log("|||||||||||||||||||||||||||",this.data)
    console.log("+++++++++++++++++++++++++",rst)
this.signInUp.verifyOTP(this.data).subscribe({
  next:(r:any)=>{
console.log("_____",r)
  },
  error:(err)=>{
console.log("Error>>>>>>",err)
  }
})
    
  }
}
