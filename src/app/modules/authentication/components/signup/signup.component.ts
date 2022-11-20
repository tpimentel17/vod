import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/api-services/authentication.service';
import { User } from 'src/app/core/models/user.model';
import { BaseComponent } from 'src/app/modules/shared/components/base/base.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent extends BaseComponent implements OnInit {
  signupForm: FormGroup = {} as FormGroup;
  hidePassword = true;
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthenticationService,
    private readonly router: Router
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

  signup(): void {
    const form = this.signupForm.value;

    if (this.signupForm.valid) {
      let user: User = {
        name: form.name,
        email: form.email,
        password: form.password,
      };

      this.authService.signUp(user).subscribe({
        next: () => this.router.navigateByUrl(''),
        error: (err) => {
          alert(err.message);
          console.error(err);
        },
      });
    } else {
      alert('Invalid Data');
    }
  }

  back(): void {
    this.router.navigateByUrl('');
  }
}
