import { Injectable } from '@angular/core';
import{BehaviorSubject,Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AppService {



//*********  Create behaviorSubject  *************************** */

private behaviorSubjectData=new BehaviorSubject({viewLoad:false})

private behaviorSubjectObserverData=this.behaviorSubjectData.asObservable();

setData=(data:any)=>{
  console.log("Behavior Subject Work")
  return this.behaviorSubjectData.next(data)
}

//*************************************************************** */

getData=()=>{
  return this.behaviorSubjectObserverData
}


  static TOKEN_KEY : string = 'TOKEN';
  static BASEURL = "http://localhost:2022/";

  static setToken = (token : string) => {
    sessionStorage.setItem(AppService.TOKEN_KEY, token)
  }
  static removeToken = () => {
    sessionStorage.removeItem(AppService.TOKEN_KEY)
  }

  static getToken = () => {
    return sessionStorage.getItem(AppService.TOKEN_KEY);
  }
}
