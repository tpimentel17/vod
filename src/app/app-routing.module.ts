import { VideoDetailsComponent } from './modules/client/components/video-details/video-details.component';
import { ClientVideoListComponent } from './modules/client/components/client-video-list/client-video-list.component';
import { AuthGuard } from './core/guards/auth.guard';
import { ManagerHomeComponent } from './modules/manager/components/manager-home/manager-home.component';
import { HomePageComponent } from './modules/shared/components/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './modules/authentication/components/signin/signin.component';
import { SignupComponent } from './modules/authentication/components/signup/signup.component';
import { PageNotFoundComponent } from './modules/shared/components/page-not-found/page-not-found.component';
import { ManagerVideoListComponent } from './modules/manager/manager-video-list/manager-video-list.component';
import { AddVideoFormComponent } from './modules/manager/components/add-video-form/add-video-form.component';
import { Roles } from './core/enums/authorization.enum';
import { ClientHomeComponent } from './modules/client/components/client-home/client-home.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  {
    path: 'manager',
    component: ManagerHomeComponent,
    canActivate: [AuthGuard],
    data: {
      roles: Roles.MANAGER,
    },
    children: [
      { path: '', component: ManagerVideoListComponent, pathMatch: 'full' },
      { path: 'addVideo', component: AddVideoFormComponent },
    ],
  },
  {
    path: 'client',
    component: ClientHomeComponent,
    canActivate: [AuthGuard],
    data: {
      roles: Roles.CLIENT,
    },
    children: [
      { path: '', component: ClientVideoListComponent, pathMatch: 'full' },
      { path: ':id', component: VideoDetailsComponent },
    ],
  },
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
