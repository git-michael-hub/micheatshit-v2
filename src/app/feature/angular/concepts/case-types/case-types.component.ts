import { ChangeDetectionStrategy, Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-case-types',
  templateUrl: './case-types.component.html',
  styleUrls: ['./case-types.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CaseTypesComponent {
  selectedTab = 1;

  @ViewChild('code1') code1?: ElementRef;
  @ViewChild('code2') code2?: ElementRef;
  @ViewChild('code3') code3?: ElementRef;

  componentCode = `// Component class using PascalCase for class name and camelCase for properties
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-dashboard', // kebab-case for selectors
  standalone: true,
  imports: [CommonModule],
  template: \`
    <h1>{{pageTitle}}</h1>
    <p>Count: {{counterValue()}}</p>
    <button (click)="incrementCounter()">Increment</button>
  \`
})
export class DashboardComponent {
  pageTitle = 'My Dashboard'; // camelCase for properties
  counterValue = signal(0); // camelCase for signals

  // camelCase for methods
  incrementCounter() {
    this.counterValue.update(value => value + 1);
  }
}`;

  interfaceCode = `// PascalCase for interface names, camelCase for properties
export interface UserProfile {
  id: number;
  firstName: string;
  lastName: string;
  emailAddress: string;
  isActive: boolean;
  lastLoginDate?: Date;
}

// Type aliases also use PascalCase
export type UserRole = 'admin' | 'editor' | 'viewer';

// Enums use PascalCase
export enum AuthStatus {
  Authenticated,
  Anonymous,
  Pending
}`;

  constantsCode = `// Constants using camelCase (preferred in Angular 19)
export const apiBaseUrl = 'https://api.example.com';
export const maxRetryAttempts = 3;

// Alternative: UPPER_SNAKE_CASE (traditional but less common in modern Angular)
export const API_BASE_URL = 'https://api.example.com';
export const MAX_RETRY_ATTEMPTS = 3;

// For configuration objects, use camelCase
export const environmentConfig = {
  production: true,
  apiUrl: 'https://api.example.com',
  featureFlags: {
    enableNewDashboard: true,
    enableAnalytics: false
  }
};`;
}
