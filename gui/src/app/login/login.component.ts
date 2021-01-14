import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import {RouterService} from '../services/router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errMessage: string;
  hide = true;
  private signInUser: any;
  constructor(private authService: AuthenticationService, private routerService: RouterService) { }

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
    });

  // Getters required to get the values from the form for validators
  // tslint:disable-next-line:typedef
  get username() {
    return this.loginForm.get('username');
  }
  // tslint:disable-next-line:typedef
  get password() {
    return this.loginForm.get('password');
  }

  // Function invoked when user clicks submit
  // tslint:disable-next-line:typedef
  signIn() {
    const signInUser = JSON.stringify({
      username: this.username.value,
      password: this.password.value
    });

    this.authService.authenticateUser(signInUser).subscribe(
      data => {
        this.errMessage = '';
        this.authService.storeToken(data);
        this.routerService.routeToDashboard();
      },
      error => {
        console.log(error);
        this.errMessage = error.statusText;
      }
    );
  }

  ngOnInit(): void {
  }
}
