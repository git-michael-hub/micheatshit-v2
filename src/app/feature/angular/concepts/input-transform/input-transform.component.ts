import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { UnsubscribeService } from 'src/app/utils/services/unsubscribe.service';

@Component({
  selector: 'app-input-transform',
  standalone: true,
  imports: [CommonModule, HighlightModule],
  templateUrl: './input-transform.component.html',
  styleUrls: ['./input-transform.component.scss']
})
export class InputTransformComponent extends UnsubscribeService implements OnInit {
  selectedTab = 1;

  // Template references
  @ViewChild('notesRef') notesRef!: TemplateRef<any>;
  @ViewChild('bestRef') bestRef!: TemplateRef<any>;
  @ViewChild('prosConsRef') prosConsRef!: TemplateRef<any>;
  @ViewChild('topicsRef') topicsRef!: TemplateRef<any>;

  // Code examples for Input Transform
  basicExampleCode: string = `// Basic Input Transform Example
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-price-display',
  standalone: true,
  template: \`
    <div class="price">{{ price() }}</div>
  \`
})
export class PriceDisplayComponent {
  // Transform a number into a formatted currency string
  price = input<number>(0, {
    transform: (value: number) => \`$\${value.toFixed(2)}\`
  });
}

// Usage in parent component
@Component({
  selector: 'app-parent',
  template: \`
    <app-price-display [price]="productPrice" />
  \`
})
export class ParentComponent {
  productPrice = 25.99;
}`;

  multiInputExampleCode: string = `// Multiple Input Transforms
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  template: \`
    <div class="card">
      <div class="name">{{ fullName() }}</div>
      <div class="username">{{ username() }}</div>
      <div class="joined">Member since: {{ joinDate() }}</div>
    </div>
  \`
})
export class UserCardComponent {
  // Transform first and last name into a full name
  firstName = input<string>('', {
    alias: 'first'
  });

  lastName = input<string>('', {
    alias: 'last'
  });

  // Derive fullName from firstName and lastName
  fullName = input<string>('', {
    transform: () => {
      return \`\${this.firstName()} \${this.lastName()}\`.trim();
    }
  });

  // Validate and transform username
  username = input<string>('', {
    transform: (value: string) => {
      // Convert to lowercase and remove spaces
      return value.toLowerCase().replace(/\\s/g, '');
    }
  });

  // Format date string
  joinTimestamp = input<number>(0);

  joinDate = input<string>('', {
    transform: () => {
      const date = new Date(this.joinTimestamp());
      return date.toLocaleDateString();
    }
  });
}`;

  complexTransformExampleCode: string = `// Complex Transforms with Input Functions
import { Component, input, computed } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

@Component({
  selector: 'app-product-card',
  standalone: true,
  template: \`
    <div class="product" [class.out-of-stock]="!isAvailable()">
      <h3>{{ product().name }}</h3>
      <div class="price">{{ formattedPrice() }}</div>
      <div class="status">{{ statusMessage() }}</div>
    </div>
  \`
})
export class ProductCardComponent {
  // Transform raw product data with validation
  product = input<Product>({
    id: 0,
    name: 'Unknown',
    price: 0,
    inStock: false
  }, {
    transform: (value: any) => {
      // Validate and provide defaults for missing properties
      return {
        id: value?.id ?? 0,
        name: value?.name ?? 'Unknown Product',
        price: parseFloat(value?.price) || 0,
        inStock: Boolean(value?.inStock)
      };
    }
  });

  // Derived state from the transformed input
  isAvailable = computed(() => this.product().inStock);

  formattedPrice = computed(() => {
    const price = this.product().price;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  });

  statusMessage = computed(() => {
    return this.isAvailable() ? 'In Stock' : 'Out of Stock';
  });
}`;

  v19EnhancementsCode: string = `// Angular 19 Input Transform Enhancements
import { Component, input, model, computed } from '@angular/core';

// 1. Reactive transform with computed values
@Component({
  selector: 'app-reactive-transform',
  template: \`<div>{{ displayValue() }}</div>\`
})
export class ReactiveTransformComponent {
  // Base input
  count = input<number>(0);

  // Transform that automatically updates when dependencies change
  displayValue = input<string>('', {
    transform: () => {
      const currentCount = this.count();
      if (currentCount <= 0) return 'No items';
      if (currentCount === 1) return '1 item';
      return \`\${currentCount} items\`;
    }
  });
}

// 2. Two-way binding with model() and transform
@Component({
  selector: 'app-currency-input',
  template: \`
    <input
      type="text"
      [value]="displayValue()"
      (input)="updateValue($event)"
    />
  \`
})
export class CurrencyInputComponent {
  // Two-way bindable model with transform
  amount = model<number>(0);

  // Format for display
  displayValue = computed(() => {
    return \`$\${this.amount().toFixed(2)}\`;
  });

  // Parse user input back to number
  updateValue(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    // Remove currency symbol and convert to number
    const numericValue = parseFloat(input.replace(/[^0-9.-]+/g, ''));

    if (!isNaN(numericValue)) {
      this.amount.set(numericValue);
    }
  }
}

// 3. Async transform with error handling
@Component({
  selector: 'app-async-transform',
  template: \`
    <div *ngIf="userData().status === 'loading'">Loading...</div>
    <div *ngIf="userData().status === 'error'">Error: {{ userData().error }}</div>
    <div *ngIf="userData().status === 'success'">
      Welcome, {{ userData().data?.name }}!
    </div>
  \`
})
export class AsyncTransformComponent {
  userId = input<string>('');

  userData = input<{
    status: 'loading' | 'success' | 'error';
    data?: any;
    error?: string;
  }>({ status: 'loading' }, {
    transform: async (id: string) => {
      if (!id) return { status: 'error', error: 'No user ID provided' };

      try {
        // Mark as loading during fetch
        this.userData.set({ status: 'loading' });

        const response = await fetch(\`https://api.example.com/users/\${id}\`);
        if (!response.ok) throw new Error('Failed to fetch user data');

        const data = await response.json();
        return { status: 'success', data };
      } catch (error) {
        return {
          status: 'error',
          error: error instanceof Error ? error.message : 'Unknown error'
        };
      }
    }
  });
}`;

  architectureExampleCode: string = `// Architecture Patterns with Input Transform
import { Component, input, computed, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter, debounceTime, switchMap } from 'rxjs/operators';
import { UserService } from './user.service';

// 1. Service Integration
@Component({
  selector: 'app-user-search',
  template: \`
    <div class="search-results">
      <div *ngFor="let user of processedUsers()">
        {{ user.displayName }}
      </div>
    </div>
  \`
})
export class UserSearchComponent {
  private userService = inject(UserService);

  // Transform raw query into normalized search term
  searchQuery = input<string>('', {
    transform: (value: string) => value.trim().toLowerCase()
  });

  // Process user data with transforms
  processedUsers = input<any[]>([], {
    transform: async (query: string) => {
      if (query.length < 2) return [];

      const users = await this.userService.searchUsers(query).toPromise();
      return users.map(user => ({
        ...user,
        displayName: \`\${user.firstName} \${user.lastName}\`,
        initials: \`\${user.firstName[0]}\${user.lastName[0]}\`.toUpperCase()
      }));
    }
  });
}

// 2. Form Integration
@Component({
  selector: 'app-address-form',
  template: \`<!-- Form template -->\`
})
export class AddressFormComponent {
  // Transform and validate postal code
  postalCode = input<string>('', {
    transform: (value: string) => {
      // Format as XXXXX or XXXXX-XXXX
      const cleaned = value.replace(/[^0-9]/g, '');
      if (cleaned.length <= 5) return cleaned;
      return \`\${cleaned.slice(0, 5)}-\${cleaned.slice(5, 9)}\`;
    }
  });

  // Validate postal code
  isValidPostalCode = computed(() => {
    const code = this.postalCode();
    return /^\\d{5}(-\\d{4})?$/.test(code);
  });
}`;

  constructor(private http: HttpClient) {
    super();
  }

  ngOnInit() {
    // Nothing to do here
  }
}
