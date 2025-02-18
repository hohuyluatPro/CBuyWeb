
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  loginWithEmail() {
    if (this.loginForm.valid) {
      this.loading = true;
      this.authService.loginWithEmail(
        this.loginForm.value.email,
        this.loginForm.value.password
      ).catch(error => {
        this.errorMessage = error.message;
        this.loading = false;
      });
    }
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle().catch(error => {
      this.errorMessage = error.message;
    });
  }
}

