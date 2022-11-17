import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/api-services/authentication.service';
import { BaseComponent } from 'src/app/modules/shared/components/base/base.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent extends BaseComponent implements OnInit {
  signupForm: FormGroup = {} as FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthenticationService
  ) {
    super();
  }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  signup(): void {}
}
