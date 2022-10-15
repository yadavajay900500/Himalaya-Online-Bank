import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerDashboardService {
BASEURL
  rootService: typeof AppService;
  constructor(
    private http:HttpClient,
    
    private router:Router
  ) { 
    this.rootService=AppService,
  this.BASEURL=AppService.BASEURL
  }
  
getManagerDeatails(){
  return this.http.get(`${this.BASEURL}managerData?idNo=Aman@900500`)
}

getNewCustomerData() {
  return this.http.get(`${this.BASEURL}newApplication`)
};
allCustomerData() {
  return this.http.get(`${this.BASEURL}allCustomerData`)
};
verifybyManager(statusData:any){
  return this.http.patch(`${this.BASEURL}verifyAccount`,statusData)
}


userlogout() {
  this.rootService.removeToken()
  this.router.navigateByUrl('/auth/employeelogin');
}


}
