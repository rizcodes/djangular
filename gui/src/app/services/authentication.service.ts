import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of } from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private authUrl: string;
  private apiHeaders: any;

  constructor(private httpClient: HttpClient) {
    this.authUrl = 'http://localhost:8000/api/auth/';
    this.apiHeaders = { headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })};
  }

  // tslint:disable-next-line:typedef
  authenticateUser(payload) {
    return this.httpClient.post(this.authUrl, payload, this.apiHeaders);
  }

  // tslint:disable-next-line:typedef
  storeToken(token) {
    localStorage.setItem('accessToken', token.access);
    localStorage.setItem('refreshToken', token.refresh);
  }

  // tslint:disable-next-line:typedef
  getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  // tslint:disable-next-line:typedef
  getRefreshToken() {
    return localStorage.getItem('refreshToken');
  }

  // tslint:disable-next-line:typedef
  refreshAccessToken() {
    const refreshUrl = 'http://localhost:8000/api/token/refresh/';
    const payload = {refresh: this.getRefreshToken()};
    return this.httpClient.post(refreshUrl, payload, this.apiHeaders);
  }

  // tslint:disable-next-line:typedef
  isUserAuthenticated(token): Observable<boolean> {
    const url = 'http://localhost:8000/test/';
    return this.httpClient.get(url, {headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)}).pipe(
      map((res: any) => {
        console.log(res.statusCode);
        if (!res.length) {
          console.log('Error encountered while getting API response.');
          return false;     // map returns Observable object - Observable of (false)
        }
        return true;        // map returns Observable object - Observable of (true)
      }),
      catchError((err: any) => {
        console.log(err);
        if (err.status === 401) {
          console.log('API Authentication failed - Token Invalid');
        }
        return of(false); // Observable of boolean - false
      })
    );
  }
}
