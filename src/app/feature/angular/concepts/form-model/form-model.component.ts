import { Component } from '@angular/core';

@Component({
  selector: 'app-form-model',
  templateUrl: './form-model.component.html',
  styleUrls: ['./form-model.component.scss']
})
export class FormModelComponent {
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
// Basic Form Model with Signals in Angular 19
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-basic-form-model',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  template: \`
    <h2>User Registration</h2>
    <form [formGroup]="userForm" (ngSubmit)="onSubmit()">
      <div>
        <label for="name">Name:</label>
        <input id="name" formControlName="name">
        <div *ngIf="userForm.get('name')?.errors?.['required'] && userForm.get('name')?.touched">
          Name is required
        </div>
      </div>

      <div>
        <label for="email">Email:</label>
        <input id="email" type="email" formControlName="email">
        <div *ngIf="userForm.get('email')?.errors?.['required'] && userForm.get('email')?.touched">
          Email is required
        </div>
        <div *ngIf="userForm.get('email')?.errors?.['email'] && userForm.get('email')?.touched">
          Please enter a valid email
        </div>
      </div>

      <button type="submit" [disabled]="!userForm.valid">Register</button>
    </form>

    <div>
      <p>Form status: {{ userForm.status }}</p>
      <p>Form value: {{ userForm.value | json }}</p>
    </div>
  \`
})
export class BasicFormModelComponent {
  // Form model definition with validation
  userForm = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      nonNullable: true
    })
  });

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form submitted:', this.userForm.value);
    } else {
      this.userForm.markAllAsTouched();
    }
  }
}`;

  code_2 = `
// Signal-Based Form Model in Angular 19
import { Component, signal, computed, effect } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-signal-form-model',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  template: \`
    <h2>Signal-Based Form</h2>
    <form [formGroup]="productForm" (ngSubmit)="onSubmit()">
      <div>
        <label for="name">Product Name:</label>
        <input id="name" formControlName="name">
      </div>

      <div>
        <label for="price">Price ($):</label>
        <input id="price" type="number" formControlName="price">
      </div>

      <div>
        <label for="inStock">
          <input id="inStock" type="checkbox" formControlName="inStock">
          In Stock
        </label>
      </div>

      <button type="submit" [disabled]="!productForm.valid">Add Product</button>
    </form>

    <div class="summary">
      <h3>Form Summary (from signals)</h3>
      <p>Product: {{ productName() }}</p>
      <p>Price: \${{ formattedPrice() }}</p>
      <p>Available: {{ availabilityStatus() }}</p>
      <p>Valid: {{ isValid() }}</p>
    </div>
  \`
})
export class SignalFormModelComponent {
  // Form model definition
  productForm = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true
    }),
    price: new FormControl<number>(0, {
      validators: [Validators.required, Validators.min(0)],
      nonNullable: true
    }),
    inStock: new FormControl(false, { nonNullable: true })
  });

  // Signals derived from form state
  productName = signal('');
  price = signal(0);
  inStock = signal(false);
  isValid = signal(false);

  // Computed signals for derived data
  formattedPrice = computed(() => {
    return this.price().toFixed(2);
  });

  availabilityStatus = computed(() => {
    return this.inStock() ? 'Yes' : 'No';
  });

  constructor() {
    // Connect form controls to signals using rxjs-interop
    this.productForm.get('name')!.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe(value => this.productName.set(value));

    this.productForm.get('price')!.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe(value => this.price.set(value));

    this.productForm.get('inStock')!.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe(value => this.inStock.set(value));

    this.productForm.statusChanges
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.isValid.set(this.productForm.valid));

    // Effect for side effects when form changes
    effect(() => {
      const name = this.productName();
      const price = this.price();
      console.log(\`Product updated: \${name} at \$\${price}\`);
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      console.log('Product added:', this.productForm.value);
      this.productForm.reset({
        name: '',
        price: 0,
        inStock: false
      });
    }
  }
}`;

  code_3 = `
// Nested Form Model with FormArray in Angular 19
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-nested-form-model',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  template: \`
    <h2>Order Form</h2>
    <form [formGroup]="orderForm" (ngSubmit)="onSubmit()">
      <!-- Customer Information -->
      <div formGroupName="customer">
        <h3>Customer Information</h3>
        <div>
          <label for="name">Name:</label>
          <input id="name" formControlName="name">
        </div>
        <div>
          <label for="email">Email:</label>
          <input id="email" type="email" formControlName="email">
        </div>
      </div>

      <!-- Shipping Address -->
      <div formGroupName="shippingAddress">
        <h3>Shipping Address</h3>
        <div>
          <label for="street">Street:</label>
          <input id="street" formControlName="street">
        </div>
        <div>
          <label for="city">City:</label>
          <input id="city" formControlName="city">
        </div>
        <div>
          <label for="zipCode">Zip Code:</label>
          <input id="zipCode" formControlName="zipCode">
        </div>
      </div>

      <!-- Order Items (FormArray) -->
      <div>
        <h3>Order Items</h3>
        <div formArrayName="items">
          <div *ngFor="let item of items.controls; let i = index" [formGroupName]="i">
            <div>
              <label [for]="'product-' + i">Product:</label>
              <input [id]="'product-' + i" formControlName="product">
            </div>
            <div>
              <label [for]="'quantity-' + i">Quantity:</label>
              <input [id]="'quantity-' + i" type="number" formControlName="quantity">
            </div>
            <button type="button" (click)="removeItem(i)">Remove</button>
          </div>
        </div>
        <button type="button" (click)="addItem()">Add Item</button>
      </div>

      <button type="submit" [disabled]="!orderForm.valid">Place Order</button>
    </form>
  \`
})
export class NestedFormModelComponent {
  orderForm = this.fb.group({
    customer: this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    }),
    shippingAddress: this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: ['', [Validators.required, Validators.pattern(/^\\d{5}$/)]]
    }),
    items: this.fb.array([this.createItem()])
  });

  // Getter for easier access to the items FormArray
  get items(): FormArray {
    return this.orderForm.get('items') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  createItem(): FormGroup {
    return this.fb.group({
      product: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]]
    });
  }

  addItem(): void {
    this.items.push(this.createItem());
  }

  removeItem(index: number): void {
    this.items.removeAt(index);
  }

  onSubmit() {
    if (this.orderForm.valid) {
      console.log('Order submitted:', this.orderForm.value);
    } else {
      this.markFormGroupTouched(this.orderForm);
    }
  }

  // Helper to mark all controls as touched
  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      } else if (control instanceof FormArray) {
        control.controls.forEach(c => {
          if (c instanceof FormGroup) {
            this.markFormGroupTouched(c);
          } else {
            c.markAsTouched();
          }
        });
      }
    });
  }
}`;

  code_4 = `
// Dynamic Form Model Generation in Angular 19
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

interface FormField {
  key: string;
  label: string;
  type: 'text' | 'email' | 'number' | 'checkbox' | 'select';
  options?: { value: string; label: string }[];
  validators: any[];
  defaultValue?: any;
}

@Component({
  selector: 'app-dynamic-form-model',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  template: \`
    <h2>Dynamic Form Generator</h2>
    <form [formGroup]="dynamicForm" (ngSubmit)="onSubmit()" *ngIf="formReady">
      <div *ngFor="let field of formConfig">
        <div [ngSwitch]="field.type">
          <!-- Text, Email, Number inputs -->
          <div *ngSwitchCase="'text' || 'email' || 'number'">
            <label [for]="field.key">{{ field.label }}:</label>
            <input [id]="field.key"
                  [type]="field.type"
                  [formControlName]="field.key">
          </div>

          <!-- Checkbox -->
          <div *ngSwitchCase="'checkbox'">
            <label>
              <input type="checkbox" [formControlName]="field.key">
              {{ field.label }}
            </label>
          </div>

          <!-- Select dropdown -->
          <div *ngSwitchCase="'select'">
            <label [for]="field.key">{{ field.label }}:</label>
            <select [id]="field.key" [formControlName]="field.key">
              <option value="">-- Select --</option>
              <option *ngFor="let opt of field.options" [value]="opt.value">
                {{ opt.label }}
              </option>
            </select>
          </div>
        </div>

        <!-- Error messages -->
        <div *ngIf="dynamicForm.get(field.key)?.errors && dynamicForm.get(field.key)?.touched" class="error-container">
          <div *ngIf="dynamicForm.get(field.key)?.errors?.['required']">{{ field.label }} is required</div>
          <div *ngIf="dynamicForm.get(field.key)?.errors?.['email']">Please enter a valid email</div>
          <div *ngIf="dynamicForm.get(field.key)?.errors?.['min']">
            Value must be at least {{ dynamicForm.get(field.key)?.errors?.['min'].min }}
          </div>
        </div>
      </div>

      <button type="submit" [disabled]="!dynamicForm.valid">Submit</button>
    </form>

    <div *ngIf="formReady">
      <h3>Form Values</h3>
      <pre>{{ dynamicForm.value | json }}</pre>
    </div>
  \`
})
export class DynamicFormModelComponent implements OnInit {
  dynamicForm!: FormGroup;
  formReady = false;

  // Form configuration (could come from an API)
  formConfig: FormField[] = [
    {
      key: 'name',
      label: 'Full Name',
      type: 'text',
      validators: [Validators.required],
      defaultValue: ''
    },
    {
      key: 'email',
      label: 'Email Address',
      type: 'email',
      validators: [Validators.required, Validators.email],
      defaultValue: ''
    },
    {
      key: 'age',
      label: 'Age',
      type: 'number',
      validators: [Validators.required, Validators.min(18)],
      defaultValue: null
    },
    {
      key: 'subscribeNewsletter',
      label: 'Subscribe to newsletter',
      type: 'checkbox',
      validators: [],
      defaultValue: false
    },
    {
      key: 'countryCode',
      label: 'Country',
      type: 'select',
      options: [
        { value: 'us', label: 'United States' },
        { value: 'ca', label: 'Canada' },
        { value: 'uk', label: 'United Kingdom' },
        { value: 'au', label: 'Australia' }
      ],
      validators: [Validators.required],
      defaultValue: ''
    }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    // Create form group from configuration
    const formControls: Record<string, any> = {};

    this.formConfig.forEach(field => {
      formControls[field.key] = [
        field.defaultValue,
        field.validators
      ];
    });

    this.dynamicForm = this.fb.group(formControls);
    this.formReady = true;
  }

  onSubmit() {
    if (this.dynamicForm.valid) {
      console.log('Form submitted:', this.dynamicForm.value);
      // Process form data...
      this.dynamicForm.reset();
    } else {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.dynamicForm.controls).forEach(key => {
        this.dynamicForm.get(key)?.markAsTouched();
      });
    }
  }
}`;

  code_5 = `
// Advanced Form Model with Custom Controls in Angular 19
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators,
  FormsModule
} from '@angular/forms';
import { JsonPipe } from '@angular/common';

// Custom form control component
@Component({
  selector: 'app-rating-control',
  standalone: true,
  imports: [FormsModule],
  template: \`
    <div class="rating-control">
      <label>{{ label }}</label>
      <div class="stars">
        <span
          *ngFor="let star of [1, 2, 3, 4, 5]"
          class="star"
          [class.filled]="value >= star"
          (click)="onStarClick(star)">
          ★
        </span>
      </div>
    </div>
  \`,
  styles: [\`
    .rating-control { margin: 1rem 0; }
    .stars { display: flex; }
    .star {
      cursor: pointer;
      font-size: 24px;
      color: #ccc;
      margin-right: 5px;
    }
    .star.filled { color: gold; }
  \`],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: RatingControlComponent,
      multi: true
    }
  ]
})
export class RatingControlComponent implements ControlValueAccessor {
  value = 0;
  label = 'Rating';
  disabled = false;

  // Function to call when value changes
  onChange: any = () => {};

  // Function to call when control is touched
  onTouched: any = () => {};

  onStarClick(rating: number) {
    if (!this.disabled) {
      this.value = rating;
      this.onChange(this.value);
      this.onTouched();
    }
  }

  // Implement ControlValueAccessor interface
  writeValue(value: number): void {
    this.value = value || 0;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}

// Main form component using custom control
@Component({
  selector: 'app-custom-form-model',
  standalone: true,
  imports: [ReactiveFormsModule, RatingControlComponent, JsonPipe],
  template: \`
    <h2>Product Review Form</h2>
    <form [formGroup]="reviewForm" (ngSubmit)="onSubmit()">
      <div>
        <label for="product">Product:</label>
        <input id="product" formControlName="product">
      </div>

      <!-- Custom rating control -->
      <app-rating-control formControlName="rating"></app-rating-control>

      <div>
        <label for="comment">Comment:</label>
        <textarea id="comment" formControlName="comment" rows="4"></textarea>
      </div>

      <button type="submit" [disabled]="!reviewForm.valid">Submit Review</button>
    </form>

    <div *ngIf="submitted">
      <h3>Submitted Review</h3>
      <pre>{{ lastSubmittedValue | json }}</pre>
    </div>
  \`
})
export class CustomFormModelComponent {
  reviewForm: FormGroup;
  submitted = false;
  lastSubmittedValue: any = null;

  constructor(private fb: FormBuilder) {
    this.reviewForm = this.fb.group({
      product: ['', Validators.required],
      rating: [0, [Validators.required, Validators.min(1)]],
      comment: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.reviewForm.valid) {
      console.log('Review submitted:', this.reviewForm.value);
      this.lastSubmittedValue = this.reviewForm.value;
      this.submitted = true;

      // Reset form after submission
      this.reviewForm.reset({
        product: '',
        rating: 0,
        comment: ''
      });
    } else {
      // Mark all fields as touched to trigger validation
      Object.keys(this.reviewForm.controls).forEach(key => {
        this.reviewForm.get(key)?.markAsTouched();
      });
    }
  }
}`;

  code_6 = `
// Zone-less Form Model with Signals in Angular 19
import { Component, signal, computed, effect } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

interface SearchFilters {
  query: string;
  category: string;
  minPrice: number;
  maxPrice: number;
  inStock: boolean;
}

@Component({
  selector: 'app-zoneless-form-model',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  template: \`
    <h2>Product Search</h2>
    <form [formGroup]="filterForm">
      <div>
        <input
          placeholder="Search products..."
          formControlName="query"
          (input)="onSearchInput()">
      </div>

      <div>
        <label for="category">Category:</label>
        <select id="category" formControlName="category" (change)="onSearchInput()">
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="home">Home & Kitchen</option>
        </select>
      </div>

      <div class="price-range">
        <label>Price Range:</label>
        <div class="inputs">
          <input
            type="number"
            placeholder="Min"
            formControlName="minPrice"
            (change)="onSearchInput()">
          <span>to</span>
          <input
            type="number"
            placeholder="Max"
            formControlName="maxPrice"
            (change)="onSearchInput()">
        </div>
      </div>

      <div>
        <label>
          <input type="checkbox" formControlName="inStock" (change)="onSearchInput()">
          In Stock Only
        </label>
      </div>
    </form>

    <div class="search-status">
      <div *ngIf="searchStatus() === 'typing'">Typing...</div>
      <div *ngIf="searchStatus() === 'searching'">Searching...</div>
      <div *ngIf="searchStatus() === 'results'">
        Found {{ resultsCount() }} results
      </div>
      <div *ngIf="searchStatus() === 'no-results'">
        No results found
      </div>
      <div *ngIf="searchStatus() === 'error'">
        An error occurred. Please try again.
      </div>
    </div>

    <div class="search-summary">
      <h3>Current Filters</h3>
      <ul>
        <li *ngIf="currentFilters().query">
          Search term: "{{ currentFilters().query }}"
        </li>
        <li *ngIf="currentFilters().category">
          Category: {{ currentFilters().category }}
        </li>
        <li *ngIf="currentFilters().minPrice || currentFilters().maxPrice">
          Price:
          {{ currentFilters().minPrice ? ('\$' + currentFilters().minPrice) : '\$0' }}
          to
          {{ currentFilters().maxPrice ? ('\$' + currentFilters().maxPrice) : 'any' }}
        </li>
        <li *ngIf="currentFilters().inStock">
          Showing in-stock items only
        </li>
      </ul>
    </div>
  \`
})
export class ZonelessFormModelComponent {
  // Form model
  filterForm: FormGroup = this.fb.group({
    query: ['', { nonNullable: true }],
    category: ['', { nonNullable: true }],
    minPrice: [null as number | null],
    maxPrice: [null as number | null],
    inStock: [false, { nonNullable: true }]
  });

  // Signals for reactive UI updates
  currentFilters = signal<SearchFilters>({
    query: '',
    category: '',
    minPrice: 0,
    maxPrice: 0,
    inStock: false
  });

  searchStatus = signal<'idle' | 'typing' | 'searching' | 'results' | 'no-results' | 'error'>('idle');
  resultsCount = signal(0);

  // Computed signals
  hasActiveFilters = computed(() => {
    const filters = this.currentFilters();
    return !!(
      filters.query ||
      filters.category ||
      filters.minPrice ||
      filters.maxPrice ||
      filters.inStock
    );
  });

  constructor(private fb: FormBuilder) {
    // Connect form values to signals
    this.filterForm.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe(formValue => {
        // Update the filters signal with current form values
        this.currentFilters.update(current => ({
          ...current,
          ...formValue
        }));
      });

    // Effect to log filter changes for debugging
    effect(() => {
      console.log('Filters updated:', this.currentFilters());
    });
  }

  onSearchInput() {
    this.searchStatus.set('typing');

    // Simulate search after typing stops
    setTimeout(() => {
      this.searchStatus.set('searching');

      // Simulate API call with the current filters
      this.performSearch(this.currentFilters());
    }, 300);
  }

  performSearch(filters: SearchFilters) {
    // Simulate API search
    setTimeout(() => {
      try {
        // Simulate results based on filters (in a real app, this would be an API call)
        const count = this.calculateMockResults(filters);

        this.resultsCount.set(count);
        this.searchStatus.set(count > 0 ? 'results' : 'no-results');
      } catch (error) {
        this.searchStatus.set('error');
      }
    }, 500);
  }

  private calculateMockResults(filters: SearchFilters): number {
    // Mock logic to determine results count based on filters
    // In a real app, this would be replaced by actual search results
    let baseCount = 100;

    if (filters.query) {
      baseCount = Math.floor(baseCount * 0.7);
    }

    if (filters.category) {
      baseCount = Math.floor(baseCount * 0.5);
    }

    if (filters.minPrice) {
      baseCount = Math.floor(baseCount * 0.9);
    }

    if (filters.maxPrice) {
      baseCount = Math.floor(baseCount * 0.8);
    }

    if (filters.inStock) {
      baseCount = Math.floor(baseCount * 0.6);
    }

    return baseCount;
  }

  // Reset form and signals
  resetFilters() {
    this.filterForm.reset({
      query: '',
      category: '',
      minPrice: null,
      maxPrice: null,
      inStock: false
    });

    this.searchStatus.set('idle');
    this.resultsCount.set(0);
  }
}`;

  constructor() {}
}
