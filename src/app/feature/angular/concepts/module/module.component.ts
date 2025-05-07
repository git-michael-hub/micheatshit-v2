import { Component, OnInit } from '@angular/core';
import { UnsubscribeService } from 'src/app/utils/services/unsubscribe.service';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent extends UnsubscribeService implements OnInit {
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
  code_1 = `// Basic NgModule structure in Angular 19
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Feature components
import { FeatureComponent } from './feature.component';
import { FeatureDetailComponent } from './feature-detail.component';

// Feature services
import { FeatureService } from './feature.service';

@NgModule({
  // Components, directives, and pipes that belong to this module
  declarations: [
    FeatureComponent,
    FeatureDetailComponent
  ],

  // Other modules whose exported components, directives, or pipes are needed
  imports: [
    CommonModule
  ],

  // Services that this module contributes to the global collection of services
  providers: [
    FeatureService
  ],

  // Components, directives, and pipes that can be used in templates of other modules
  exports: [
    FeatureComponent
  ]
})
export class FeatureModule { }`;

  code_2 = `// App root module in Angular 19
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FeatureModule } from './feature/feature.module';

// Environment configuration
import { environment } from '../environments/environment';

// Application routes
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FeatureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }`;

  code_3 = `// Feature Module with Routing in Angular 19
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Feature components
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';

// Feature service
import { ProductService } from './product.service';

// Feature routes
const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'products/:id/edit', component: ProductFormComponent }
];

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    ProductService
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductModule { }`;

  code_4 = `// Lazy-loaded modules in Angular 19
// In app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  {
    path: 'products',
    loadChildren: () => import('./products/product.module').then(m => m.ProductModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [() => import('./auth/auth.guard').then(g => g.canActivateGuard())]
  }
];

// In standalone-bootstrapped app, Module APIs are still available:
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
});`;

  code_5 = `// Hybrid approach: NgModules with Standalone Components in Angular 19
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import a standalone component
import { DataTableComponent } from '../shared/data-table/data-table.component';
import { ChartComponent } from '../shared/chart/chart.component';

// Regular components
import { DashboardComponent } from './dashboard.component';
import { WidgetComponent } from './widget.component';

@NgModule({
  declarations: [
    DashboardComponent,
    WidgetComponent
  ],
  imports: [
    CommonModule,
    // Import standalone components directly in the imports array
    DataTableComponent,
    ChartComponent
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }

// Standalone component definition
import { Component } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class DataTableComponent {
  // Component logic
}`;

  code_6 = `// Application with Dependency Providers Through NgModules in Angular 19
// Define a custom provider token
import { InjectionToken } from '@angular/core';

export const CONFIG = new InjectionToken<AppConfig>('app.config');

export interface AppConfig {
  apiEndpoint: string;
  theme: 'light' | 'dark';
  features: string[];
}

// Core module with providers
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CONFIG, AppConfig } from './app-config';
import { AuthInterceptor } from './auth.interceptor';
import { LoggingService } from './logging.service';

const defaultConfig: AppConfig = {
  apiEndpoint: 'https://api.example.com/v1',
  theme: 'light',
  features: ['search', 'notifications']
};

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    { provide: CONFIG, useValue: defaultConfig },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    LoggingService
  ]
})
export class CoreModule {
  // Guard against reimporting the CoreModule
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only.');
    }
  }
}

// Using the provided services in components
import { Component, Inject } from '@angular/core';
import { CONFIG, AppConfig } from './app-config';

@Component({
  selector: 'app-root',
  template: \`
    <div [class]="config.theme === 'dark' ? 'dark-theme' : 'light-theme'">
      <h1>Welcome to {{ title }}</h1>
      <p>API Endpoint: {{ config.apiEndpoint }}</p>
    </div>
  \`
})
export class AppComponent {
  title = 'Angular 19 App';

  constructor(@Inject(CONFIG) public config: AppConfig) {}
}`;

  constructor() {
    super();
  }

  ngOnInit() {
    // Initialize if needed
  }
}
