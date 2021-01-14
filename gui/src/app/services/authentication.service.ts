import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private authUrl: string;

  constructor(private httpClient: HttpClient) {
    this.authUrl = 'http://localhost:8000/api/auth/';
  }

  // tslint:disable-next-line:typedef
  authenticateUser(payload) {
    const apiHeaders = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.httpClient.post(this.authUrl, payload, apiHeaders);
  }

  // tslint:disable-next-line:typedef
  storeToken(token) {
    localStorage.setItem('accessToken', token.access);
    localStorage.setItem('refreshToken', token.refresh);
  }
}
