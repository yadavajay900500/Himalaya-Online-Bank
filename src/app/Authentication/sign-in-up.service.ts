import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AppService } from '../app.service'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignInUpService {

  rootService
  BASEURL: String

  constructor(private http: HttpClient, private router: Router) {
    this.rootService = AppService,
      this.BASEURL = AppService.BASEURL;
  }


  userSignIn(body: any) {
    return this.http.post(`${this.BASEURL}signin`, body)
      .subscribe({
        next: (r: any) => {
          this.rootService.setToken(r.token)
          this.router.navigateByUrl('/admin');
        },
        error: (e) => {
          console.error("Error", e);
          this.router.navigateByUrl('/login');
        }
      });
  }

  
  bankEmployeeLogin(body: any) {
    return this.http.post(`${this.BASEURL}employeeLogin`, body)
    // .subscribe({
    //   next: (r: any) => {
    //     this.rootService.setToken(r.token)
    //     console.log("PPPPPPPPPPPPPPPPPPP",r)
    //     this.router.navigateByUrl('/manager',);
    //   },
    //   error: (e) => {
    //     console.error("Error", e);
    //     this.router.navigateByUrl('/login');
    //   }
    // });
      
  }
  verifyOTP(body:any){
    return this.http.patch(`${this.BASEURL}otpVarifycation`,body)
  }

  forgetPasswordAdmin(body:any){
    console.log("))))))))))))))))((((((((********",body)
    return this.http.post(`${this.BASEURL}ForgetPassword`,body)
  }

}
