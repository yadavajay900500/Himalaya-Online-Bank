import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignInUpService } from '../sign-in-up.service';
import { AppService } from '../../app.service'
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  result: any = []

  title = 'angular-navigation';

  // constructor(private router : Router ){}
  rootService
  constructor(
    private http: HttpClient,
    private signInUpService: SignInUpService,
    private router: Router) {

    this.rootService = AppService
  }



  signin = new FormGroup({
    bankAccountNo: new FormControl('2022000000011124'),
    phone: new FormControl('7309403724'),
    password: new FormControl(''),
  })



  // navigation = () => { 
  //    this.router.navigateByUrl('/dashboard')
  // }
  // navigationadmin = () => { 
  //    this.router.navigateByUrl('/admin')
  // }

  //it is work(html.)
  // navigationforgetPassword=()=>{
  //   this.router.navigateByUrl('/auth/forgetPassword')
  // }
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



    this.signInUpService.userSignIn(data)
    // .subscribe({
    //   next: (r:any)=> { 
    //     this.rootService.setToken(r.token)
    //     this.router.navigateByUrl('/admin');
    //   },
    //   error : (e)=> { 
    //     console.error("Error", e);
    //     this.router.navigateByUrl('/login');
    //   }
    // })
  }




}
