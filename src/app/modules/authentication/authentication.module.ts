import { NgModule } from '@angular/core';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SignupComponent, SigninComponent],
  imports: [SharedModule],
})
export class AuthenticationModule {}
