import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthenticationService } from './core/api-services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  userLoggedIn$: Observable<boolean> = of(false);

  constructor(private readonly authService: AuthenticationService) {}
  ngOnInit(): void {
    this.userLoggedIn$ = this.authService.getAuthenticationState();
  }
}
