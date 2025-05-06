import { Component } from '@angular/core';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent {
  selectedTab = 1;

  // Template reference variables
  code_1_ref: any = { hidden: false };
  code_2_ref: any = { hidden: false };
  code_3_ref: any = { hidden: false };
  code_4_ref: any = { hidden: false };
  code_5_ref: any = { hidden: false };
  code_6_ref: any = { hidden: false };

  // Add missing template references
  notesRef: any;
  bestRef: any;
  prosConsRef: any;
  topicsRef: any;

  // Example code snippets
  code_1 = `
// Basic FormControl with Signals in Angular 19
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-basic-form-control',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  template: \`
    <h2>Basic FormControl Example</h2>
    <input type="text" [formControl]="nameControl">

    <p>Current value: {{ nameControl.value }}</p>
    <p>Form status: {{ nameControl.status }}</p>
    <p>Form touched: {{ nameControl.touched }}</p>
    <p>Form dirty: {{ nameControl.dirty }}</p>
    <p>Form valid: {{ nameControl.valid }}</p>

    <button (click)="updateName()">Update Name</button>
  \`
})
export class BasicFormControlComponent {
  nameControl = new FormControl('Initial value');

  updateName() {
    this.nameControl.setValue('Updated value');
  }
}`;

  code_2 = `
// Signal-based FormControl in Angular 19
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-signal-form-control',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  template: \`
    <h2>Signal-Based FormControl</h2>
    <input
      type="email"
      [formControl]="emailControl"
      placeholder="Enter email"
    >

    <div *ngIf="emailControl.errors && emailControl.touched">
      <p *ngIf="emailControl.errors['required']" class="error">
        Email is required
      </p>
      <p *ngIf="emailControl.errors['email']" class="error">
        Please enter a valid email
      </p>
    </div>

    <p>Value: {{ emailControl.value }}</p>
    <p>Valid: {{ emailControl.valid }}</p>

    <pre>Form Value as JSON: {{ emailControl.value | json }}</pre>
    <pre>Form Errors: {{ emailControl.errors | json }}</pre>
  \`
})
export class SignalFormControlComponent {
  // FormControl with validators
  emailControl = new FormControl('', {
    validators: [Validators.required, Validators.email],
    nonNullable: true // New in Angular - ensures value is never null
  });
}`;

  code_3 = `
// FormControl with Signal Integration
import { Component, computed, effect, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-signal-integration',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: \`
    <h2>Form Control with Signal Integration</h2>
    <input type="text" [formControl]="usernameControl">

    <p>Welcome, {{ displayName() }}!</p>
    <p>Character count: {{ characterCount() }}</p>

    <div *ngIf="formattedErrors().length">
      <p class="error-title">Errors:</p>
      <ul>
        <li *ngFor="let error of formattedErrors()">{{ error }}</li>
      </ul>
    </div>
  \`
})
export class SignalIntegrationComponent {
  // Form control with validators
  usernameControl = new FormControl('', {
    validators: [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-zA-Z0-9_-]*$/)
    ],
    nonNullable: true
  });

  // Signal to track username
  username = signal('');

  // Computed signals that derive from the username
  displayName = computed(() => {
    const name = this.username();
    return name ? name : 'Guest';
  });

  characterCount = computed(() => {
    return this.username().length;
  });

  formattedErrors = computed(() => {
    if (!this.usernameControl.errors || !this.usernameControl.touched) {
      return [];
    }

    const errors: string[] = [];
    const errorObj = this.usernameControl.errors;

    if (errorObj['required']) {
      errors.push('Username is required');
    }
    if (errorObj['minlength']) {
      errors.push(\`Username must be at least \${errorObj['minlength'].requiredLength} characters\`);
    }
    if (errorObj['maxlength']) {
      errors.push(\`Username cannot exceed \${errorObj['maxlength'].requiredLength} characters\`);
    }
    if (errorObj['pattern']) {
      errors.push('Username can only contain letters, numbers, underscores and hyphens');
    }

    return errors;
  });

  constructor() {
    // Connect FormControl to signal with rxjs-interop
    this.usernameControl.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe(value => {
        this.username.set(value);
      });

    // Effect to perform side effects when username changes
    effect(() => {
      const name = this.username();
      console.log(\`Username changed to: \${name}\`);

      // You can perform additional side effects here
      // like saving to localStorage or analytics
      if (name.length > 0) {
        localStorage.setItem('lastUsername', name);
      }
    });
  }
}`;

  code_4 = `
// Advanced FormControl with Custom Validators
import { Component } from '@angular/core';
import { AbstractControl, FormControl, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

// Custom validator function
function noSpecialChars(control: AbstractControl): ValidationErrors | null {
  const forbidden = /[!@#$%^&*(),.?":{}|<>]/g.test(control.value);
  return forbidden ? { specialChars: true } : null;
}

// Async validator factory (simulates server validation)
function uniqueUsername(userService: any) {
  return (control: AbstractControl): Promise<ValidationErrors | null> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulate HTTP call to check username
        const forbidden = ['admin', 'root', 'superuser'].includes(control.value);
        resolve(forbidden ? { uniqueUsername: true } : null);
      }, 1000);
    });
  };
}

@Component({
  selector: 'app-advanced-form-control',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: \`
    <h2>Advanced FormControl with Validators</h2>
    <input
      type="text"
      [formControl]="usernameControl"
      placeholder="Enter a username"
    >

    <div class="status-indicators">
      <div class="indicator" [class.active]="usernameControl.pending">Checking...</div>
      <div class="indicator" [class.active]="usernameControl.valid && !usernameControl.pending">Valid</div>
      <div class="indicator" [class.active]="usernameControl.invalid && !usernameControl.pending">Invalid</div>
    </div>

    <div class="error-messages" *ngIf="usernameControl.errors && usernameControl.touched">
      <p *ngIf="usernameControl.errors['required']">Username is required</p>
      <p *ngIf="usernameControl.errors['minlength']">
        Username must be at least {{ usernameControl.errors['minlength'].requiredLength }} characters
      </p>
      <p *ngIf="usernameControl.errors['specialChars']">
        Username cannot contain special characters
      </p>
      <p *ngIf="usernameControl.errors['uniqueUsername']">
        This username is already taken
      </p>
    </div>
  \`
})
export class AdvancedFormControlComponent {
  // Inject a mock service for demo purposes
  userService = { checkUsername: (name: string) => Promise.resolve(true) };

  // FormControl with sync and async validators
  usernameControl = new FormControl('', {
    validators: [
      Validators.required,
      Validators.minLength(4),
      noSpecialChars
    ],
    asyncValidators: [
      uniqueUsername(this.userService)
    ],
    nonNullable: true,
    updateOn: 'blur' // Options: 'change' (default) | 'blur' | 'submit'
  });

  constructor() {
    // Subscribe to value changes with debounce
    this.usernameControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        takeUntilDestroyed()
      )
      .subscribe(value => {
        console.log(\`Searching for username: \${value}\`);
        // Additional logic here
      });
  }

  // Method to reset the form control
  resetForm() {
    this.usernameControl.reset();
  }

  // Method to update validators dynamically
  makeRequired(required: boolean) {
    if (required) {
      this.usernameControl.addValidators(Validators.required);
    } else {
      this.usernameControl.removeValidators(Validators.required);
    }
    // Always remember to update validity after changing validators
    this.usernameControl.updateValueAndValidity();
  }
}`;

  code_5 = `
// FormControl with Signal-based Forms (New in Angular 19)
import { Component, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-signal-forms',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  template: \`
    <h2>Signal-Based Form</h2>
    <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
      <div>
        <label for="name">Name:</label>
        <input id="name" formControlName="name" />
        <div *ngIf="name.errors?.['required'] && name.touched">Name is required</div>
      </div>

      <div>
        <label for="email">Email:</label>
        <input id="email" formControlName="email" type="email" />
        <div *ngIf="email.errors?.['required'] && email.touched">Email is required</div>
        <div *ngIf="email.errors?.['email'] && email.touched">Enter a valid email</div>
      </div>

      <div>
        <label for="age">Age:</label>
        <input id="age" formControlName="age" type="number" />
        <div *ngIf="age.errors?.['min'] && age.touched">
          Age must be at least {{age.errors?.['min'].min}}
        </div>
      </div>

      <button type="submit" [disabled]="!profileForm.valid">Submit</button>
    </form>

    <div *ngIf="formState() as state">
      <h3>Form State (from signals):</h3>
      <p>Valid: {{ state.valid }}</p>
      <p>Touched: {{ state.touched }}</p>
      <p>Current Values: {{ state.values | json }}</p>
    </div>
  \`
})
export class SignalFormsComponent {
  // Create form with FormBuilder
  profileForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    age: [null, [Validators.min(18)]]
  });

  // Getters for easy access to form controls
  get name() { return this.profileForm.get('name') as FormControl; }
  get email() { return this.profileForm.get('email') as FormControl; }
  get age() { return this.profileForm.get('age') as FormControl; }

  // Signal for tracking form state
  formState = signal({
    valid: false,
    touched: false,
    values: {} as Record<string, any>
  });

  constructor(private fb: FormBuilder) {
    // Connect form state to the signal
    this.profileForm.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe(() => {
        this.updateFormState();
      });

    this.profileForm.statusChanges
      .pipe(takeUntilDestroyed())
      .subscribe(() => {
        this.updateFormState();
      });
  }

  private updateFormState() {
    this.formState.update(state => ({
      ...state,
      valid: this.profileForm.valid,
      touched: Object.values(this.profileForm.controls).some(c => c.touched),
      values: this.profileForm.value
    }));
  }

  onSubmit() {
    if (this.profileForm.valid) {
      console.log('Form submitted:', this.profileForm.value);
      // Process the form
      this.profileForm.reset();
    } else {
      // Mark all fields as touched to trigger validation
      Object.keys(this.profileForm.controls).forEach(key => {
        const control = this.profileForm.get(key);
        control?.markAsTouched();
      });
    }
  }
}`;

  code_6 = `
// FormControl with Zone-less Performance (Angular 19)
import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-zoneless-form-control',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: \`
    <h2>Zone-less FormControl Performance</h2>
    <div>
      <label for="search">Search:</label>
      <input
        id="search"
        [formControl]="searchControl"
        placeholder="Type to search..."
      >
    </div>

    <div>
      <h3>Real-time typing status</h3>
      <p>Characters: {{ charCount() }}</p>
      <p>Search term: {{ searchTerm() }}</p>
      <p>Status: {{ status() }}</p>
    </div>

    <div class="results" *ngIf="searchResults().length">
      <h3>Results:</h3>
      <ul>
        <li *ngFor="let result of searchResults()">{{ result }}</li>
      </ul>
    </div>
  \`
})
export class ZonelessFormControlComponent {
  // The FormControl
  searchControl = new FormControl('', {
    validators: [Validators.minLength(3)],
    nonNullable: true,
  });

  // Signals
  searchTerm = signal('');
  charCount = signal(0);
  status = signal('idle');
  searchResults = signal<string[]>([]);

  // Mock data
  private mockData = [
    'Angular', 'TypeScript', 'JavaScript', 'RxJS',
    'NgRx', 'Zone.js', 'Signals', 'Components',
    'Directives', 'Pipes', 'Forms', 'HttpClient'
  ];

  constructor() {
    // Connect FormControl to signals using rxjs-interop
    this.searchControl.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe(value => {
        // Update signals based on form value
        this.searchTerm.set(value);
        this.charCount.set(value.length);

        if (value.length < 3) {
          this.status.set('typing...');
          this.searchResults.set([]);
          return;
        }

        this.status.set('searching...');

        // Simulate search with setTimeout
        setTimeout(() => {
          const results = this.mockData.filter(item =>
            item.toLowerCase().includes(value.toLowerCase())
          );

          this.searchResults.set(results);
          this.status.set(results.length ? 'results found' : 'no results');
        }, 300);
      });
  }

  // Method to reset search
  clearSearch() {
    this.searchControl.setValue('');
  }
}`;
}
