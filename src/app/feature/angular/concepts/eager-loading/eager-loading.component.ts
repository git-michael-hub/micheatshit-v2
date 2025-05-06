import { Component } from '@angular/core';

@Component({
  selector: 'app-eager-loading',
  templateUrl: './eager-loading.component.html',
  styleUrls: ['./eager-loading.component.scss']
})
export class EagerLoadingComponent {
  selectedTab = 1;

  // Example code snippets
  code_1 = `
// NgModule configuration for eager loading components
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EagerComponent } from './eager/eager.component';

@NgModule({
  declarations: [
    AppComponent,
    EagerComponent // Eagerly loaded component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
`;

  code_2 = `
// Angular 19 standalone component eager loading
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { EagerComponent } from './eager.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    EagerComponent // Eagerly imported standalone component
  ],
  template: \`
    <h1>Main Application</h1>
    <app-eager></app-eager>
  \`
})
export class AppComponent {}

bootstrapApplication(AppComponent);
`;

  code_3 = `
// Angular 19 AppConfig for eager loading route components
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withComponentInputBinding() // Eager binding of route params to component inputs
    )
  ]
};
`;

  code_4 = `
// Angular 19 eager loading with signals for performance optimization
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eager-feature',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div>
      <h2>Eagerly Loaded Feature</h2>
      <p>Counter value: {{ counter() }}</p>
      <button (click)="increment()">Increment</button>
    </div>
  \`
})
export class EagerFeatureComponent {
  // Signal-based state for efficient change detection
  counter = signal(0);

  increment() {
    this.counter.update(value => value + 1);
  }
}
`;

  code_5 = `
// app.routes.ts - Eager vs Lazy loading routes in Angular 19
import { Routes } from '@angular/router';
import { EagerComponent } from './eager/eager.component';

export const routes: Routes = [
  {
    path: 'eager',
    component: EagerComponent // Eagerly loaded route
  },
  {
    path: 'lazy',
    loadComponent: () => import('./lazy/lazy.component').then(m => m.LazyComponent) // Lazy loaded route
  }
];
`;

  code_6 = `
// Angular 19 eager loading with advanced preloading strategy
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

export const appConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(
      routes,
      withPreloading(PreloadAllModules), // Preloads all lazy modules after eager modules are loaded
    )
  ]
};
`;
}
