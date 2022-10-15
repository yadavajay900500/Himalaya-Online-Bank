// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return true;
//   }
  
// }
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router'
import { AppService } from '../app.service'

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate, CanActivateChild {

  rootService

  constructor(private router: Router) {
    this.rootService = AppService
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (this.rootService.getToken()) {
      
      return true;
    }
    this.router.navigateByUrl('/');
    return false;

  }


  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
     console.log("vvvvvvvvvvvvvvv",this.rootService.getToken())

    if (this.rootService.getToken() == 'forAdmin') {
        return true;
    }
    this.router.navigateByUrl('/home');
    return false;
  }

}