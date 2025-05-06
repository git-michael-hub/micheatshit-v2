import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { takeUntil } from 'rxjs';
import { UnsubscribeService } from 'src/app/utils/services/unsubscribe.service';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})
export class FormValidationComponent extends UnsubscribeService {
  selectedTab = 1;

  // Template reference variables
  code_1_ref: any = { hidden: false };
  code_2_ref: any = { hidden: false };
  code_3_ref: any = { hidden: false };
  code_4_ref: any = { hidden: false };
  code_5_ref: any = { hidden: false };
  code_6_ref: any = { hidden: false };

  // Template outlet references
  notesRef: any;
  bestRef: any;
  prosConsRef: any;
  topicsRef: any;

  // Example code snippets
  code_1 = `
// Basic Form Validation in Angular 19
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-basic-validation',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  template: \`
    <h2>User Registration</h2>
    <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
      <div>
        <label for="email">Email:</label>
        <input id="email" type="email" formControlName="email">

        <div *ngIf="email.invalid && (email.dirty || email.touched)" class="error-messages">
          <div *ngIf="email.errors?.['required']">Email is required</div>
          <div *ngIf="email.errors?.['email']">Please enter a valid email</div>
        </div>
      </div>

      <div>
        <label for="password">Password:</label>
        <input id="password" type="password" formControlName="password">

        <div *ngIf="password.invalid && (password.dirty || password.touched)" class="error-messages">
          <div *ngIf="password.errors?.['required']">Password is required</div>
          <div *ngIf="password.errors?.['minlength']">
            Password must be at least {{password.errors?.['minlength'].requiredLength}} characters
          </div>
        </div>
      </div>

      <button type="submit" [disabled]="registerForm.invalid">Register</button>
    </form>

    <div *ngIf="formSubmitted">
      <h3>Form Status</h3>
      <p>Valid: {{ registerForm.valid }}</p>
      <p>Values: {{ registerForm.value | json }}</p>
    </div>
  \`
})
export class BasicValidationComponent {
  registerForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      nonNullable: true
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(8)],
      nonNullable: true
    })
  });

  formSubmitted = false;

  // Convenience getters for easier access to form controls
  get email() { return this.registerForm.get('email')!; }
  get password() { return this.registerForm.get('password')!; }

  onSubmit() {
    this.formSubmitted = true;

    if (this.registerForm.valid) {
      console.log('Form submitted successfully', this.registerForm.value);
      // Process form data here
    } else {
      // Mark all fields as touched to trigger validation display
      Object.keys(this.registerForm.controls).forEach(key => {
        const control = this.registerForm.get(key);
        control?.markAsTouched();
      });
    }
  }
}`;

  code_2 = `
// Signal-Based Form Validation in Angular 19
import { Component, computed, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-signal-validation',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: \`
    <h2>Signal-Based Validation</h2>
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <div>
        <label for="username">Username:</label>
        <input id="username" formControlName="username">

        <div *ngIf="usernameErrors().length > 0" class="error-container">
          <div *ngFor="let error of usernameErrors()" class="error-message">
            {{ error }}
          </div>
        </div>
      </div>

      <div>
        <label for="age">Age:</label>
        <input id="age" type="number" formControlName="age">

        <div *ngIf="ageErrors().length > 0" class="error-container">
          <div *ngFor="let error of ageErrors()" class="error-message">
            {{ error }}
          </div>
        </div>
      </div>

      <button type="submit" [disabled]="!formIsValid()">Submit</button>
    </form>

    <div class="form-summary" *ngIf="formTouched()">
      <h3>Form Summary:</h3>
      <p>Form is {{ formIsValid() ? 'valid' : 'invalid' }}</p>
      <p>Fields with errors: {{ errorCount() }}</p>
    </div>
  \`
})
export class SignalValidationComponent {
  form: FormGroup;

  // Signals to track validation state
  formTouched = signal(false);
  usernameErrors = signal<string[]>([]);
  ageErrors = signal<string[]>([]);

  // Computed signals
  formIsValid = computed(() =>
    this.usernameErrors().length === 0 &&
    this.ageErrors().length === 0
  );

  errorCount = computed(() =>
    this.usernameErrors().length +
    this.ageErrors().length
  );

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[a-zA-Z0-9_-]*$/)
      ]],
      age: [null, [
        Validators.required,
        Validators.min(18),
        Validators.max(120)
      ]]
    });

    // Connect form validation to signals
    this.form.get('username')!.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateUsernameErrors());

    this.form.get('age')!.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateAgeErrors());

    // Track overall form touched state
    this.form.statusChanges
      .pipe(takeUntilDestroyed())
      .subscribe(() => {
        if (this.form.touched) {
          this.formTouched.set(true);
        }
      });
  }

  updateUsernameErrors() {
    const control = this.form.get('username')!;
    if (!control.touched) return;

    const errors: string[] = [];
    if (control.errors?.['required']) {
      errors.push('Username is required');
    }
    if (control.errors?.['minlength']) {
      errors.push(\`Username must be at least \${control.errors['minlength'].requiredLength} characters\`);
    }
    if (control.errors?.['pattern']) {
      errors.push('Username can only contain letters, numbers, underscores and hyphens');
    }

    this.usernameErrors.set(errors);
  }

  updateAgeErrors() {
    const control = this.form.get('age')!;
    if (!control.touched) return;

    const errors: string[] = [];
    if (control.errors?.['required']) {
      errors.push('Age is required');
    }
    if (control.errors?.['min']) {
      errors.push(\`Age must be at least \${control.errors['min'].min}\`);
    }
    if (control.errors?.['max']) {
      errors.push(\`Age cannot exceed \${control.errors['max'].max}\`);
    }

    this.ageErrors.set(errors);
  }

  onSubmit() {
    if (this.form.invalid) {
      // Mark all fields as touched to trigger validation display
      Object.keys(this.form.controls).forEach(key => {
        this.form.get(key)?.markAsTouched();
      });

      // Update error signals
      this.updateUsernameErrors();
      this.updateAgeErrors();
      this.formTouched.set(true);

      return;
    }

    console.log('Form submitted:', this.form.value);
    // Process form data here
  }
}`;

  code_3 = `
// Custom Validators with TypeScript in Angular 19
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Password strength validator
export function passwordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecialChar = /[!@#$%^&*()_+\\-=\\[\\]{};':"\\\\|,.<>\\/?]/.test(value);

    const passwordValid = hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;

    return !passwordValid ? {
      passwordStrength: {
        hasUpperCase,
        hasLowerCase,
        hasNumber,
        hasSpecialChar
      }
    } : null;
  };
}

// Cross-field validation: Password matching
export function passwordMatchValidator(controlName: string, matchingControlName: string): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const control = formGroup.get(controlName);
    const matchingControl = formGroup.get(matchingControlName);

    if (!control || !matchingControl) {
      return null;
    }

    if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
      return null;
    }

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
      return { mustMatch: true };
    } else {
      matchingControl.setErrors(null);
      return null;
    }
  };
}

// Async validator example: Username availability check
export function usernameAvailabilityValidator(userService: any): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return timer(500).pipe(
      switchMap(() => {
        // In a real app, call your user service to check availability
        return userService.checkUsernameAvailability(control.value).pipe(
          map(available => available ? null : { usernameTaken: true }),
          catchError(() => of({ serverError: true }))
        );
      })
    );
  };
}

// Using the validators in a component
@Component({
  selector: 'app-custom-validation-demo',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: \`
    <form [formGroup]="signupForm" (ngSubmit)="onSubmit()">
      <!-- Username field with async validation -->
      <div>
        <input formControlName="username" placeholder="Username">
        <div *ngIf="signupForm.get('username')?.errors?.['usernameTaken']">
          This username is already taken
        </div>
        <div *ngIf="signupForm.get('username')?.pending">
          Checking availability...
        </div>
      </div>

      <!-- Password with strength validation -->
      <div>
        <input type="password" formControlName="password" placeholder="Password">
        <div *ngIf="password.errors?.['passwordStrength']" class="error-list">
          <p>Password must contain:</p>
          <ul>
            <li [class.valid]="!password.errors?.['passwordStrength'] ||
                               password.errors?.['passwordStrength'].hasUpperCase">
              Uppercase letter
            </li>
            <li [class.valid]="!password.errors?.['passwordStrength'] ||
                               password.errors?.['passwordStrength'].hasLowerCase">
              Lowercase letter
            </li>
            <li [class.valid]="!password.errors?.['passwordStrength'] ||
                               password.errors?.['passwordStrength'].hasNumber">
              Number
            </li>
            <li [class.valid]="!password.errors?.['passwordStrength'] ||
                               password.errors?.['passwordStrength'].hasSpecialChar">
              Special character
            </li>
          </ul>
        </div>
      </div>

      <!-- Confirm password with cross-field validation -->
      <div>
        <input type="password" formControlName="confirmPassword" placeholder="Confirm Password">
        <div *ngIf="confirmPassword.errors?.['mustMatch']">
          Passwords must match
        </div>
      </div>

      <button type="submit" [disabled]="signupForm.invalid || signupForm.pending">
        Sign Up
      </button>
    </form>
  \`
})
export class CustomValidationDemoComponent {
  signupForm = this.fb.group({
    username: ['', {
      validators: [Validators.required, Validators.minLength(4)],
      asyncValidators: [usernameAvailabilityValidator(this.userService)],
      updateOn: 'blur'
    }],
    password: ['', [
      Validators.required,
      Validators.minLength(8),
      passwordStrengthValidator()
    ]],
    confirmPassword: ['', Validators.required]
  }, {
    validators: [passwordMatchValidator('password', 'confirmPassword')]
  });

  get password() { return this.signupForm.get('password')!; }
  get confirmPassword() { return this.signupForm.get('confirmPassword')!; }

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) {}

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Form submitted:', this.signupForm.value);
    }
  }
}`;

  code_4 = `
// Real-time Validation with Signals in Angular 19
import { Component, computed, effect, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-realtime-validation',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: \`
    <h2>Password Strength Checker</h2>
    <form [formGroup]="passwordForm">
      <div class="form-field">
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          formControlName="password"
          autocomplete="new-password"
        >

        <div class="password-strength">
          <div class="strength-label">Strength: {{ strengthLabel() }}</div>
          <div class="strength-meter">
            <div
              class="strength-value"
              [style.width.%]="strengthPercentage()"
              [style.background-color]="strengthColor()"
            ></div>
          </div>
        </div>

        <div class="requirements" [class.all-valid]="allRequirementsMet()">
          <p>Your password must have:</p>
          <ul>
            <li [class.valid]="hasMinLength()">
              <span class="check">✓</span> At least 8 characters
            </li>
            <li [class.valid]="hasUppercase()">
              <span class="check">✓</span> At least one uppercase letter
            </li>
            <li [class.valid]="hasLowercase()">
              <span class="check">✓</span> At least one lowercase letter
            </li>
            <li [class.valid]="hasDigit()">
              <span class="check">✓</span> At least one number
            </li>
            <li [class.valid]="hasSpecialChar()">
              <span class="check">✓</span> At least one special character
            </li>
          </ul>
        </div>
      </div>
    </form>
  \`
})
export class RealtimeValidationComponent {
  passwordForm: FormGroup;

  // Password value signal
  password = signal('');

  // Individual requirement signals
  hasMinLength = computed(() => this.password().length >= 8);
  hasUppercase = computed(() => /[A-Z]/.test(this.password()));
  hasLowercase = computed(() => /[a-z]/.test(this.password()));
  hasDigit = computed(() => /[0-9]/.test(this.password()));
  hasSpecialChar = computed(() => /[!@#$%^&*(),.?":{}|<>]/.test(this.password()));

  // Overall strength computation
  allRequirementsMet = computed(() =>
    this.hasMinLength() &&
    this.hasUppercase() &&
    this.hasLowercase() &&
    this.hasDigit() &&
    this.hasSpecialChar()
  );

  strengthScore = computed(() => {
    let score = 0;
    if (this.hasMinLength()) score++;
    if (this.hasUppercase()) score++;
    if (this.hasLowercase()) score++;
    if (this.hasDigit()) score++;
    if (this.hasSpecialChar()) score++;
    return score;
  });

  strengthPercentage = computed(() => this.strengthScore() * 20); // 5 criteria = 100% max

  strengthLabel = computed(() => {
    const score = this.strengthScore();
    if (score <= 1) return 'Very Weak';
    if (score === 2) return 'Weak';
    if (score === 3) return 'Moderate';
    if (score === 4) return 'Strong';
    return 'Very Strong';
  });

  strengthColor = computed(() => {
    const score = this.strengthScore();
    if (score <= 1) return '#ff4d4d'; // red
    if (score === 2) return '#ffa64d'; // orange
    if (score === 3) return '#ffff4d'; // yellow
    if (score === 4) return '#4dff4d'; // light green
    return '#00cc00'; // green
  });

  constructor(private fb: FormBuilder) {
    this.passwordForm = this.fb.group({
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
      ]]
    });

    // Connect form control to signal
    this.passwordForm.get('password')!.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe(value => {
        this.password.set(value || '');
      });

    // Effect to log strength changes (for demo purposes)
    effect(() => {
      console.log(\`Password strength: \${this.strengthLabel()} (\${this.strengthScore()}/5)\`);
    });
  }
}`;

  code_5 = `
// Cross-Field Validation in Angular 19
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-cross-field-validation',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: \`
    <h2>Address Form</h2>
    <form [formGroup]="addressForm" (ngSubmit)="onSubmit()">
      <div class="form-row">
        <div class="form-group">
          <label for="country">Country</label>
          <select id="country" formControlName="country">
            <option value="">Select a country</option>
            <option value="us">United States</option>
            <option value="ca">Canada</option>
            <option value="uk">United Kingdom</option>
            <option value="au">Australia</option>
          </select>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="zipCode">Zip/Postal Code</label>
          <input id="zipCode" formControlName="zipCode">

          <div *ngIf="zipCode.errors && zipCode.touched" class="error-messages">
            <div *ngIf="zipCode.errors?.['required']">
              Zip/Postal code is required
            </div>
            <div *ngIf="zipCode.errors?.['pattern']">
              Invalid format for selected country
            </div>
          </div>
        </div>

        <div class="form-group">
          <label for="state">State/Province</label>
          <input id="state" formControlName="state">

          <div *ngIf="state.errors && state.touched" class="error-messages">
            <div *ngIf="state.errors?.['required']">
              State/Province is required
            </div>
            <div *ngIf="state.errors?.['requiredForCountry']">
              State/Province is required for {{ state.errors?.['requiredForCountry'] }}
            </div>
          </div>
        </div>
      </div>

      <div *ngIf="addressForm.errors?.['invalidAddress']" class="group-error">
        {{ addressForm.errors['invalidAddress'] }}
      </div>

      <button type="submit" [disabled]="addressForm.invalid">Submit</button>
    </form>
  \`
})
export class CrossFieldValidationComponent {
  addressForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addressForm = this.fb.group({
      country: ['', Validators.required],
      zipCode: ['', Validators.required],
      state: ['']
    }, {
      validators: [this.addressValidator()],
      updateOn: 'blur'
    });

    // Update validation rules when country changes
    this.addressForm.get('country')!.valueChanges
      .subscribe(country => this.updateValidationRules(country));
  }

  get zipCode() { return this.addressForm.get('zipCode')!; }
  get state() { return this.addressForm.get('state')!; }

  // Update validation rules based on selected country
  updateValidationRules(country: string) {
    // Reset previous validators
    this.zipCode.setValidators([Validators.required]);
    this.state.clearValidators();

    if (country === 'us') {
      // US zip code: 5 digits or 5+4 format
      this.zipCode.addValidators(Validators.pattern(/^\\d{5}(-\\d{4})?$/));
      this.state.setValidators([
        Validators.required,
        this.stateRequiredForCountryValidator('United States')
      ]);
    } else if (country === 'ca') {
      // Canadian postal code: A1A 1A1 format
      this.zipCode.addValidators(Validators.pattern(/^[A-Za-z]\\d[A-Za-z][ -]?\\d[A-Za-z]\\d$/));
      this.state.setValidators([
        Validators.required,
        this.stateRequiredForCountryValidator('Canada')
      ]);
    } else if (country === 'uk') {
      // UK postcode format
      this.zipCode.addValidators(Validators.pattern(/^[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}$/i));
      // State optional for UK
    } else if (country === 'au') {
      // Australian postal code: 4 digits
      this.zipCode.addValidators(Validators.pattern(/^\\d{4}$/));
      this.state.setValidators([
        Validators.required,
        this.stateRequiredForCountryValidator('Australia')
      ]);
    }

    // Update validity after changing validators
    this.zipCode.updateValueAndValidity();
    this.state.updateValueAndValidity();
  }

  // Custom validator for state requirement based on country
  stateRequiredForCountryValidator(countryName: string) {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value && this.addressForm?.get('country')?.value) {
        return { requiredForCountry: countryName };
      }
      return null;
    };
  }

  // Cross-field validator for the entire form
  addressValidator() {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const countryControl = formGroup.get('country');
      const zipCodeControl = formGroup.get('zipCode');
      const stateControl = formGroup.get('state');

      if (!countryControl || !zipCodeControl || !stateControl) {
        return null;
      }

      const country = countryControl.value;
      const zipCode = zipCodeControl.value;
      const state = stateControl.value;

      // Additional cross-field validation logic
      if (country === 'us' && zipCode && state) {
        // Example: certain zip codes must match specific states
        // This is just a simplified example - real logic would be more complex
        const zipPrefix = zipCode.substring(0, 1);
        if (zipPrefix === '9' && state !== 'CA' && state !== 'WA' && state !== 'OR') {
          return { invalidAddress: 'Zip code starting with 9 must be in CA, WA, or OR' };
        }
      }

      return null;
    };
  }

  onSubmit() {
    if (this.addressForm.valid) {
      console.log('Address submitted:', this.addressForm.value);
    } else {
      this.markFormGroupTouched(this.addressForm);
    }
  }

  // Helper method to mark all controls as touched
  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}`;

  code_6 = `
// Async Validation with Error Handling in Angular 19
import { Component } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, debounceTime, distinctUntilChanged, map, of, switchMap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

// Service for async validation
@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  constructor(private http: HttpClient) {}

  checkUsernameAvailability(username: string): Observable<boolean> {
    // In a real app, this would call your API
    return this.http.get<{available: boolean}>(\`/api/check-username?username=\${username}\`)
      .pipe(
        map(response => response.available),
        catchError(() => {
          // Return false if server error, so validation fails safely
          return of(false);
        })
      );
  }

  validateEmailDomain(email: string): Observable<boolean> {
    // Extract domain from email
    const domain = email.split('@')[1];

    return this.http.get<{valid: boolean}>(\`/api/validate-email-domain?domain=\${domain}\`)
      .pipe(
        map(response => response.valid),
        catchError(() => of(false))
      );
  }
}

// Custom async validators
export function usernameAvailabilityValidator(
  validationService: ValidationService
): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const value = control.value?.trim();

    if (!value) {
      return of(null); // Don't validate empty values
    }

    return of(value).pipe(
      debounceTime(500), // Wait for typing to finish
      distinctUntilChanged(),
      switchMap(username =>
        validationService.checkUsernameAvailability(username).pipe(
          map(available => available ? null : { usernameTaken: true }),
          catchError(() => of({ serverError: true }))
        )
      )
    );
  };
}

export function emailDomainValidator(
  validationService: ValidationService
): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const value = control.value?.trim();

    if (!value || !value.includes('@')) {
      return of(null); // Don't validate invalid emails
    }

    return of(value).pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(email =>
        validationService.validateEmailDomain(email).pipe(
          map(valid => valid ? null : { invalidDomain: true }),
          catchError(() => of({ serverError: true }))
        )
      )
    );
  };
}

@Component({
  selector: 'app-async-validation',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: \`
    <h2>Registration with Async Validation</h2>
    <form [formGroup]="registrationForm" (ngSubmit)="onSubmit()">
      <div class="form-group">
        <label for="username">Username</label>
        <input
          id="username"
          formControlName="username"
          [class.loading]="username.pending"
        >

        <div class="validation-status">
          <div *ngIf="username.pending" class="pending">Checking availability...</div>
          <div *ngIf="username.touched && !username.pending">
            <div *ngIf="username.valid" class="valid">Username is available</div>
            <div *ngIf="username.errors?.['required']" class="error">Username is required</div>
            <div *ngIf="username.errors?.['minlength']" class="error">
              Username must be at least {{ '{{' }} username.errors?.['minlength'].requiredLength {{ '}}' }} characters
            </div>
            <div *ngIf="username.errors?.['usernameTaken']" class="error">
              This username is already taken
            </div>
            <div *ngIf="username.errors?.['serverError']" class="error">
              Could not verify username availability. Please try again.
            </div>
          </div>
        </div>
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input
          id="email"
          type="email"
          formControlName="email"
          [class.loading]="email.pending"
        >

        <div class="validation-status">
          <div *ngIf="email.pending" class="pending">Validating email...</div>
          <div *ngIf="email.touched && !email.pending">
            <div *ngIf="email.valid" class="valid">Email is valid</div>
            <div *ngIf="email.errors?.['required']" class="error">Email is required</div>
            <div *ngIf="email.errors?.['email']" class="error">Please enter a valid email</div>
            <div *ngIf="email.errors?.['invalidDomain']" class="error">
              This email domain is not accepted
            </div>
            <div *ngIf="email.errors?.['serverError']" class="error">
              Could not verify email. Please try again.
            </div>
          </div>
        </div>
      </div>

      <button
        type="submit"
        [disabled]="registrationForm.invalid || registrationForm.pending"
      >
        Register
      </button>
    </form>

    <div *ngIf="submitAttempted" class="submission-status">
      <div *ngIf="submitSuccessful" class="success">
        Registration successful!
      </div>
      <div *ngIf="!submitSuccessful" class="error">
        Please correct the errors before submitting.
      </div>
    </div>
  \`
})
export class AsyncValidationComponent {
  registrationForm: FormGroup;
  submitAttempted = false;
  submitSuccessful = false;

  constructor(
    private fb: FormBuilder,
    private validationService: ValidationService
  ) {
    this.registrationForm = this.fb.group({
      username: ['', {
        validators: [
          Validators.required,
          Validators.minLength(4)
        ],
        asyncValidators: [
          usernameAvailabilityValidator(this.validationService)
        ],
        updateOn: 'blur'
      }],
      email: ['', {
        validators: [
          Validators.required,
          Validators.email
        ],
        asyncValidators: [
          emailDomainValidator(this.validationService)
        ],
        updateOn: 'blur'
      }]
    });

    // Track validation state
    this.registrationForm.statusChanges
      .pipe(takeUntilDestroyed())
      .subscribe(status => {
        console.log('Form status:', status);
      });
  }

  get username() { return this.registrationForm.get('username')!; }
  get email() { return this.registrationForm.get('email')!; }

  onSubmit() {
    this.submitAttempted = true;

    if (this.registrationForm.valid) {
      console.log('Form submitted successfully:', this.registrationForm.value);
      this.submitSuccessful = true;

      // In a real app, you would call your API service here
    } else {
      this.submitSuccessful = false;
      this.markFormGroupTouched(this.registrationForm);
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}`;

  constructor(
    private http: HttpClient
  ) {
    super()
  }

  ngOnInit() {
    this.http.get('assets/codes/form-validation/notes/code_1.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_1 = data);

    this.http.get('assets/codes/form-validation/notes/code_2.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_2 = data);

    this.http.get('assets/codes/form-validation/notes/code_3.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_3 = data);

    this.http.get('assets/codes/form-validation/notes/code_4.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_4 = data);

    this.http.get('assets/codes/form-validation/notes/code_5.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_5 = data);

    this.http.get('assets/codes/form-validation/notes/code_6.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_6 = data);
  }
}
