import {
  Authorization,
  Roles,
} from './../../../../core/enums/authorization.enum';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthenticationService } from './../../../../core/api-services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  isSignedIn$: Observable<boolean> = of(false);

  constructor(
    private readonly authService: AuthenticationService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.isSignedIn$ = this.authService.getAuthenticationState();

    if (this.authService.getRole())
      this.router.navigateByUrl(this.authService.getRole()!);
  }

  navigateToSignin() {
    this.router.navigateByUrl('signin');
  }

  navigateToSignup() {
    this.router.navigateByUrl('signup');
  }
}
