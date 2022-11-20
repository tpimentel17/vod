import { Roles } from './../enums/authorization.enum';
import { Injectable, OnDestroy } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, take } from 'rxjs';
import { AuthenticationService } from '../api-services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.isAuthenticationAndRoleValid(route);
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.isAuthenticationAndRoleValid(childRoute);
  }

  isAuthenticationAndRoleValid(route: ActivatedRouteSnapshot): boolean {
    let isSignedIn = false;

    this.authService
      .getAuthenticationState()
      .pipe(take(1))
      .subscribe((authState) => (isSignedIn = authState));

    if (isSignedIn) {
      const userRole = this.authService.getRole();

      if (route.data['roles'].includes(userRole)) {
        return true;
      }
    }

    this.router.navigateByUrl('');
    return false;
  }
}
