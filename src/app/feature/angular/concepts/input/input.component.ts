import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { UnsubscribeService } from 'src/app/utils/services/unsubscribe.service';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, HighlightModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent extends UnsubscribeService implements OnInit {
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
  code_1 = `// Basic Input Property in Angular 19
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  template: \`
    <div>
      <h2>{{ name }}</h2>
      <p>{{ email }}</p>
    </div>
  \`
})
export class UserProfileComponent {
  @Input() name: string = '';
  @Input() email: string = '';
}`;

  code_2 = `// Input with Transform in Angular 19
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: \`
    <div>
      <p>Count: {{ count() }}</p>
      <p>Doubled: {{ doubled() }}</p>
    </div>
  \`
})
export class CounterComponent {
  // Using the new input() function with transform
  count = input(0, {
    transform: (value: number) => Math.max(0, value)
  });

  // Computed value based on input
  doubled = computed(() => this.count() * 2);
}`;

  code_3 = `// Required Input Properties in Angular 19
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-alert',
  template: \`
    <div [class]="type()">
      {{ message() }}
    </div>
  \`
})
export class AlertComponent {
  // Required input with type safety
  message = input.required<string>();
  type = input.required<'success' | 'error' | 'warning'>();
}`;

  code_4 = `// Input with Model in Angular 19
import { Component, Input, model } from '@angular/core';

@Component({
  selector: 'app-toggle',
  template: \`
    <button (click)="isOn.set(!isOn())">
      {{ isOn() ? 'ON' : 'OFF' }}
    </button>
  \`
})
export class ToggleComponent {
  // Two-way binding with model
  isOn = model(false);
}`;

  code_5 = `// Input with Complex Types in Angular 19
import { Component, Input, input } from '@angular/core';

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-user-card',
  template: \`
    <div *ngIf="user()">
      <h3>{{ user().name }}</h3>
      <p>{{ user().email }}</p>
    </div>
  \`
})
export class UserCardComponent {
  // Input with complex type and default value
  user = input<User | null>(null);
}`;

  code_6 = `// Input with Validation in Angular 19
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-rating',
  template: \`
    <div>
      <span *ngFor="let star of stars">
        {{ star }}
      </span>
    </div>
  \`
})
export class RatingComponent {
  // Input with validation and transform
  rating = input(0, {
    transform: (value: number) => {
      if (value < 0) return 0;
      if (value > 5) return 5;
      return Math.round(value);
    }
  });

  get stars(): string[] {
    return Array(this.rating()).fill('★');
  }
}`;

  constructor(private http: HttpClient) {
    super();
  }

  ngOnInit() {
    // Initialize code snippets if needed
  }
}
