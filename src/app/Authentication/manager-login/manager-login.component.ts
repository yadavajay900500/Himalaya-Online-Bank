import { Component, OnInit } from '@angular/core';
import { SignInUpService } from '../sign-in-up.service';
import { FormGroup ,FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';


@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  styleUrls: ['./manager-login.component.scss']
})
export class ManagerLoginComponent implements OnInit {

  rootService
  constructor(
    private http: HttpClient,
    private signInUpService: SignInUpService,
    private router: Router) {

    this.rootService = AppService
  }


  signin=new FormGroup({
  idNo: new FormControl('Aman@900500'),
  mobileNo:new FormControl('7309403724'),
  password:new FormControl('')
 })

 


 
 ngOnInit(): void {
}



OnSubmit(data: any): void {
  console.log("..........>>>>", data)





  // this.http.post(`http://localhost:2022/signin`,data).
  // subscribe({
  // next: (r:any) => {this.result = r?.result;console.log(r)},
  //   error: (err:any) =>{
  //    console.log(" ko ho ka hal ba",err)},
  //   })



  this.signInUpService.bankEmployeeLogin(data)
  .subscribe({
    next: (r:any)=> { 
      console.log(r.userInfo)
      let dat = JSON.stringify(r.userInfo)
      this.rootService.setToken(r.token)
      this.router.navigateByUrl(`/manager/${dat}`);
    },
    error : (e)=> { 
      console.error("Error", e);
      this.router.navigateByUrl('/login');
    }
  })
}
}
