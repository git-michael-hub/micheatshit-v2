import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { UnsubscribeService } from 'src/app/utils/services/unsubscribe.service';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent extends UnsubscribeService implements OnInit {
  selectedTab = 1;

  // Template reference variables
  code_1_ref: any = { hidden: true };
  code_2_ref: any = { hidden: true };
  code_3_ref: any = { hidden: true };
  code_4_ref: any = { hidden: true };
  code_5_ref: any = { hidden: true };
  code_6_ref: any = { hidden: true };

  // Template outlet references
  notesRef: any;
  bestRef: any;
  prosConsRef: any;
  topicsRef: any;

  // Example code snippets
  code_1 = `// Basic Interpolation in Angular 19
import { Component } from '@angular/core';

@Component({
  selector: 'app-greeting',
  template: \`
    <h1>Hello, {{ '{{' }} name {{ '}}' }}!</h1>
    <p>Welcome to {{ '{{' }} appName {{ '}}' }}</p>
  \`
})
export class GreetingComponent {
  name = 'John';
  appName = 'My Angular App';
}`;

  code_2 = `// Interpolation with Expressions in Angular 19
import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  template: \`
    <div>
      <p>Sum: {{ '{{' }} a + b {{ '}}' }}</p>
      <p>Product: {{ '{{' }} a * b {{ '}}' }}</p>
      <p>Is greater: {{ '{{' }} a > b ? 'Yes' : 'No' {{ '}}' }}</p>
    </div>
  \`
})
export class CalculatorComponent {
  a = 5;
  b = 3;
}`;

  code_3 = `// Interpolation with Methods in Angular 19
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-info',
  template: \`
    <div>
      <p>Full Name: {{ '{{' }} getFullName() {{ '}}' }}</p>
      <p>Age: {{ '{{' }} calculateAge() {{ '}}' }}</p>
    </div>
  \`
})
export class UserInfoComponent {
  firstName = 'John';
  lastName = 'Doe';
  birthYear = 1990;

  getFullName(): string {
    return \`\${this.firstName} \${this.lastName}\`;
  }

  calculateAge(): number {
    return new Date().getFullYear() - this.birthYear;
  }
}`;

  code_4 = `// Interpolation with Signals in Angular 19
import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: \`
    <div>
      <p>Count: {{ '{{' }} count() {{ '}}' }}</p>
      <p>Doubled: {{ '{{' }} doubled() {{ '}}' }}</p>
      <button (click)="increment()">Increment</button>
    </div>
  \`
})
export class CounterComponent {
  count = signal(0);
  doubled = computed(() => this.count() * 2);

  increment() {
    this.count.update(n => n + 1);
  }
}`;

  code_5 = `// Interpolation with Pipes in Angular 19
import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  template: \`
    <div>
      <h2>{{ '{{' }} product.name | uppercase {{ '}}' }}</h2>
      <p>Price: {{ '{{' }} product.price | currency:'USD' {{ '}}' }}</p>
      <p>Date: {{ '{{' }} product.date | date:'medium' {{ '}}' }}</p>
      <p>Description: {{ '{{' }} product.description | slice:0:100 {{ '}}' }}...</p>
    </div>
  \`
})
export class ProductComponent {
  product = {
    name: 'Smartphone',
    price: 999.99,
    date: new Date(),
    description: 'A high-end smartphone with advanced features...'
  };
}`;

  code_6 = `// Interpolation with Template Expressions in Angular 19
import { Component } from '@angular/core';

@Component({
  selector: 'app-conditional',
  template: \`
    <div>
      <p>Status: {{ '{{' }} isActive ? 'Active' : 'Inactive' {{ '}}' }}</p>
      <p>Items: {{ '{{' }} items.length > 0 ? items.join(', ') : 'No items' {{ '}}' }}</p>
      <p>User: {{ '{{' }} user?.name ?? 'Guest' {{ '}}' }}</p>
    </div>
  \`
})
export class ConditionalComponent {
  isActive = true;
  items = ['Apple', 'Banana', 'Orange'];
  user: { name: string } | null = null;
}`;

  constructor(private http: HttpClient) {
    super();
  }

  ngOnInit() {
    // Initialize code snippets if needed
  }
}
