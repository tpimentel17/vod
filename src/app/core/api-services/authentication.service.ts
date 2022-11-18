import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Credentials } from '../models/credentials.model';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { SignInResponse } from '../models/signin-response.model';
import { Authorization } from '../enums/authorization.enum';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private isSignedIn = new BehaviorSubject<boolean>(false);

  private baseUrl = 'https://vodmasterdata.herokuapp.com/api/user/';

  constructor(private readonly http: HttpClient) {
    const token = sessionStorage.getItem(Authorization.AUTH_TOKEN);
    this.isSignedIn.next(!!token);
  }

  signUp(user: User): Observable<string> {
    return this.http.post<string>(this.baseUrl + 'signup', user);
  }

  signIn(credentials: Credentials): Observable<SignInResponse> {
    return this.http
      .post<SignInResponse>(this.baseUrl + 'signin', credentials)
      .pipe(
        tap((response: SignInResponse) => {
          this.isSignedIn.next(true);
          sessionStorage.setItem(Authorization.AUTH_TOKEN, response.token);
          sessionStorage.setItem(Authorization.AUTH_ROLE, response.role);
        })
      );
  }

  signOut() {
    sessionStorage.clear();
    this.isSignedIn.next(false);
  }

  getUsers(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  getAuthenticationState(): Observable<boolean> {
    return this.isSignedIn;
  }
}
