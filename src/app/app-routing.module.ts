import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './authentication/components/signin/signin.component';
import { SignupComponent } from './authentication/components/signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent }
// NOT FOUND { path: '**', component: SigninComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
