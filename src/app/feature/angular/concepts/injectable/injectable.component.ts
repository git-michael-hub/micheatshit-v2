import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { UnsubscribeService } from 'src/app/utils/services/unsubscribe.service';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
  selector: 'app-injectable',
  standalone: true,
  imports: [CommonModule, HighlightModule],
  templateUrl: './injectable.component.html',
  styleUrls: ['./injectable.component.scss']
})
export class InjectableComponent extends UnsubscribeService implements OnInit {
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
  code_1 = `// Basic Injectable Service in Angular 19
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: string[] = ['Angular', 'TypeScript', 'JavaScript'];

  getData(): string[] {
    return this.data;
  }

  addData(item: string): void {
    this.data.push(item);
  }
}`;

  code_2 = `// Different providedIn options in Angular 19
import { Injectable } from '@angular/core';
import { FeatureModule } from './feature.module';

// Application-wide singleton (preferred for most services)
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  // Service implementation
}

// Available only within a specific module
@Injectable({
  providedIn: FeatureModule
})
export class FeatureService {
  // Service implementation
}

// Available across multiple Angular applications
// (shared between separately compiled applications)
@Injectable({
  providedIn: 'platform'
})
export class PlatformService {
  // Service implementation
}

// Any module that includes this service will get its own instance
@Injectable({
  providedIn: 'any'
})
export class MultiInstanceService {
  // Service implementation
}`;

  code_3 = `// Signal-based Service in Angular 19
import { Injectable, signal, computed } from '@angular/core';

interface User {
  id: number;
  name: string;
  isActive: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // State management with signals
  private users = signal<User[]>([
    { id: 1, name: 'Alice', isActive: true },
    { id: 2, name: 'Bob', isActive: false },
    { id: 3, name: 'Charlie', isActive: true }
  ]);

  // Derived state with computed signals
  activeUsers = computed(() =>
    this.users().filter(user => user.isActive)
  );

  activeUserCount = computed(() =>
    this.activeUsers().length
  );

  // Methods to update state
  addUser(user: User) {
    this.users.update(users => [...users, user]);
  }

  removeUser(id: number) {
    this.users.update(users =>
      users.filter(user => user.id !== id)
    );
  }

  toggleUserStatus(id: number) {
    this.users.update(users =>
      users.map(user =>
        user.id === id
          ? { ...user, isActive: !user.isActive }
          : user
      )
    );
  }
}`;

  code_4 = `// Injectable Factory Functions in Angular 19
import { Injectable, InjectionToken, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Environment configuration token
export const API_URL = new InjectionToken<string>('API_URL');

// Service with factory function
@Injectable({
  providedIn: 'root',
  useFactory: () => {
    const http = inject(HttpClient);
    const baseUrl = inject(API_URL, { optional: true }) || 'https://api.default.com';

    return new ApiService(http, baseUrl);
  }
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private baseUrl: string
  ) {}

  getUsers() {
    return this.http.get(\`\${this.baseUrl}/users\`);
  }
}

// Provider setup in NgModule or bootstrapApplication
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: API_URL, useValue: 'https://api.example.com' }
  ]
});`;

  code_5 = `// Angular 19 Injectable with Dependency Injection
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoggerService } from './logger.service';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // Modern injection pattern using inject() function
  private http = inject(HttpClient);
  private logger = inject(LoggerService);

  // API URLs
  private baseUrl = 'https://api.example.com/products';

  getProducts() {
    this.logger.log('Fetching products');

    return this.http.get<any[]>(this.baseUrl).pipe(
      map(response => {
        this.logger.log('Products fetched successfully');
        return response;
      }),
      catchError(error => {
        this.logger.error('Failed to fetch products', error);
        return of([]);  // Return empty array on error
      })
    );
  }

  getProductById(id: string) {
    this.logger.log(\`Fetching product with id \${id}\`);

    return this.http.get<any>(\`\${this.baseUrl}/\${id}\`).pipe(
      map(response => {
        this.logger.log('Product fetched successfully');
        return response;
      }),
      catchError(error => {
        this.logger.error(\`Failed to fetch product with id \${id}\`, error);
        return of(null);  // Return null on error
      })
    );
  }
}`;

  code_6 = `// Injectable with tree-shakable providers in Angular 19
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

interface CacheEntry<T> {
  data: T;
  timestamp: number;
  expires: number;
}

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private cache = new Map<string, CacheEntry<any>>();
  private readonly DEFAULT_TTL = 5 * 60 * 1000; // 5 minutes in milliseconds

  constructor(private http: HttpClient) {}

  get<T>(url: string, ttl = this.DEFAULT_TTL): Observable<T> {
    const cachedEntry = this.cache.get(url);
    const now = Date.now();

    // Return cached data if it exists and hasn't expired
    if (cachedEntry && now < cachedEntry.expires) {
      return of(cachedEntry.data);
    }

    // Fetch fresh data if cache missed or expired
    return this.http.get<T>(url).pipe(
      tap(data => {
        // Update cache with new data
        this.cache.set(url, {
          data,
          timestamp: now,
          expires: now + ttl
        });
      }),
      catchError(error => {
        console.error(\`Failed to fetch data from \${url}\`, error);

        // If cache exists but is expired, return it as fallback
        if (cachedEntry) {
          console.warn(\`Using expired cache for \${url}\`);
          return of(cachedEntry.data);
        }

        throw error;
      })
    );
  }

  clearCache(url?: string): void {
    if (url) {
      this.cache.delete(url);
    } else {
      this.cache.clear();
    }
  }

  setCacheEntry<T>(url: string, data: T, ttl = this.DEFAULT_TTL): void {
    this.cache.set(url, {
      data,
      timestamp: Date.now(),
      expires: Date.now() + ttl
    });
  }
}`;

  constructor(private http: HttpClient) {
    super();
  }

  ngOnInit() {
    // Initialize code snippets if needed
  }
}
