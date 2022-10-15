import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OtpVerifyPageComponent } from '../otp-verify-page/otp-verify-page.component';
import { SignInUpService } from '../sign-in-up.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(
    private signInUpService:SignInUpService,
    public dialog: Dialog
  ) { }
  signin=new FormGroup({
    email: new FormControl('yadavajay900500@gmail.com'),
    mobileNo:new FormControl('7309403724'),
    DOB:new FormControl('')
   })
  ngOnInit(): void {
  }

  
OnSubmit(data: any): void {
  console.log("..........>>>>", data)
  this.signInUpService.forgetPasswordAdmin(data)
  .subscribe({
    next: (r:any)=> { 
      console.log(r.userInfo)
      
    },
    error : (e)=> { 
      console.error("Error", e);
    }
  })
}


openDialog(value:any): void {
  console.log("QQQQQQQQQQQQQQQQQQQQQQQQQQQQ",value)
  const dialogRef = this.dialog.open<string>(OtpVerifyPageComponent, {
    width: '400px',
    data: {
      name: value.name,
    phone:value.mobileNo,
    email:value.email
    }
  });

  dialogRef.closed.subscribe(result => {
    console.log('The dialog was closed');
 
  });
}

}


