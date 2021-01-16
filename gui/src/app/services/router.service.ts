import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) { }

  // tslint:disable-next-line:typedef
  routeToLogin() {
    this.router.navigate(['login']);
  }

  // tslint:disable-next-line:typedef
  routeToDashboard() {
    this.router.navigate(['dashboard']);
  }
}
