import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'cbnu-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];

  submitted: boolean;
  loading: boolean;
  formGroup: FormGroup;

  constructor(private auth: AuthService,
              private router: Router,
              fb: FormBuilder) {
    this.formGroup = fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  submit() {
    this.submitted = true;
    if (this.formGroup.invalid) {
      return;
    }

    const { username, password } = this.formGroup.getRawValue();

    this.auth.loginAdmin(username, password)
      .subscribe(() => {
        this.router.navigate(['/home']);
      }, console.error);
  }

  ngOnInit() {
    this.subscriptions.push(
      this.formGroup.valueChanges.subscribe(() => this.submitted = false)
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
