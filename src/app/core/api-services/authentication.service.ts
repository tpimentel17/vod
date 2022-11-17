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

  signIn(credentials: Credentials): Observable<SignInResponse> {
    return this.http
      .post<SignInResponse>(this.baseUrl + 'signin', credentials)
      .pipe(
        tap((response: SignInResponse) => {
          this.isSignedIn.next(true);
          sessionStorage.setItem(Authorization.AUTH_TOKEN, response.token);
        })
      );
  }

  getAuthenticationState(): Observable<boolean> {
    return this.isSignedIn;
  }
}
