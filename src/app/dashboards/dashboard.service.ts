import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service'
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  userData: any = []
  BASEURL
  getAdminDetails: any = []
  s: any;
  rootService: typeof AppService;

  constructor(private http: HttpClient,
    private router: Router
    ) {
    this.rootService = AppService,
    this.BASEURL = AppService.BASEURL
  }
  ngOnInit(): void {
    this.getAdminData()
    this.getAdminDetails = this.getAdminData()
  }

  getAdminData() {
    return this.http.get(`${this.BASEURL}find?_id=631462fa460c885b72dc67fe`)
  }
  
  // getMangerData() {
  //   return this.http.get(`${this.BASEURL}managerData?idNo=Aman@900500`)
  // };

  // getNewCustomerData() {
  //   return this.http.get(`${this.BASEURL}newApplication`)
  // };
  // allCustomerData() {
  //   return this.http.get(`${this.BASEURL}allCustomerData`)
  // };

  // verifybyManager(statusData:any){
  //   return this.http.patch(`${this.BASEURL}verifyAccount`,statusData)
  // }
  

  userlogout() {
    this.rootService.removeToken()
    this.router.navigateByUrl('/auth/login');
  }


  private order = new BehaviorSubject({ food: "pizza" })

  private orderObserver = this.order.asObservable();

  setData = (data: any) => {
    // console.log("first!!!!!!!!!!!!!!!!!!!", data, this.order)
    return this.order.next(data);
  }

  getData = () => {
    // console.log("================", this.orderObserver)
    return this.orderObserver;
  }


}
