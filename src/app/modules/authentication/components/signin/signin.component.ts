import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/core/api-services/authentication.service';
import { Authorization } from 'src/app/core/enums/authorization.enum';
import { Credentials } from 'src/app/core/models/credentials.model';
import { SignInResponse } from 'src/app/core/models/signin-response.model';
import { BaseComponent } from 'src/app/modules/shared/components/base/base.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent extends BaseComponent implements OnInit {
  signinForm: FormGroup = {} as FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthenticationService
  ) {
    super();
  }

  ngOnInit(): void {
    this.signinForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  signin(): void {
    const form = this.signinForm.value;

    if (this.signinForm.valid) {
      let credentials: Credentials = {
        email: form.email,
        password: form.password,
      };

      this.authService
        .signIn(credentials)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe({
          next: (response: SignInResponse) => console.log(response),
          error: (err) => console.error(err),
        });
    }
  }
}
