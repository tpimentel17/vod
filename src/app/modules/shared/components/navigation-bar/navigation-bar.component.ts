import { Roles } from './../../../../core/enums/authorization.enum';
import { AuthenticationService } from '../../../../core/api-services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Authorization } from 'src/app/core/enums/authorization.enum';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
  constructor(
    private readonly authService: AuthenticationService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  logout() {
    this.authService.signOut();
    this.router.navigateByUrl('');
  }

  navigateToHomepage() {
    this.router.navigateByUrl('');
  }

  navigateToAddVideo() {
    this.router.navigateByUrl('/manager/addVideo');
  }

  get showManager(): boolean {
    return sessionStorage.getItem(Authorization.AUTH_ROLE) === Roles.MANAGER;
  }
}
