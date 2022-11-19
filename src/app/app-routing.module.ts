import { ManagerHomeComponent } from './modules/manager/components/manager-home/manager-home.component';
import { HomePageComponent } from './modules/shared/components/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './modules/authentication/components/signin/signin.component';
import { SignupComponent } from './modules/authentication/components/signup/signup.component';
import { PageNotFoundComponent } from './modules/shared/components/page-not-found/page-not-found.component';
import { ManagerVideoListComponent } from './modules/manager/manager-video-list/manager-video-list.component';
import { AddVideoFormComponent } from './modules/manager/components/add-video-form/add-video-form.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  {
    path: 'manager',
    component: ManagerHomeComponent,
    children: [
      { path: '', component: ManagerVideoListComponent, pathMatch: 'full' },
      { path: 'addVideo', component: AddVideoFormComponent },
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
