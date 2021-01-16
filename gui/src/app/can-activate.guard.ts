import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import {Observable, of} from 'rxjs';
import {AuthenticationService} from './services/authentication.service';
import {RouterService} from './services/router.service';
import {catchError, map} from 'rxjs/operators';

@Injectable()
export class CanActivateGuard implements CanActivate {

  constructor(private authService: AuthenticationService, private routerService: RouterService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const apiAuth = this.authService.isUserAuthenticated(this.authService.getAccessToken()); // Observable boolean
    return apiAuth.pipe(
      map((res: any) => {
        console.log('Activate Guard - Auth Status: ' + res); // true/false
        if (!res) {       // if response is false
          this.routerService.routeToLogin();
        }
        return res;       // return res anyhow (boolean)
      })
    );
  }
}
