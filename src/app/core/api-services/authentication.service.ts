import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Credentials } from '../models/credentials.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = 'https://vodmasterdata.herokuapp.com/api/user/';

  constructor(private readonly http: HttpClient) { }


  signin(credentials: Credentials): Observable<any> {
    return this.http.post<Credentials>(this.baseUrl + 'signin', credentials);
  }


}
