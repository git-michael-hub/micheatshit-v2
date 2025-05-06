import { Component } from '@angular/core';

@Component({
  selector: 'app-dsl',
  templateUrl: './dsl.component.html',
  styleUrls: ['./dsl.component.scss']
})
export class DslComponent {
  selectedTab = 1;

  code_1 = `
// Example of an Angular DSL for form field definitions
export const FORM_FIELDS = {
  name: {
    type: 'text',
    label: 'Full Name',
    validators: ['required', 'minLength:2'],
    errorMessages: {
      required: 'Name is required',
      minLength: 'Name must be at least 2 characters'
    }
  },
  email: {
    type: 'email',
    label: 'Email Address',
    validators: ['required', 'email'],
    errorMessages: {
      required: 'Email is required',
      email: 'Please enter a valid email address'
    }
  }
};
`;

  code_2 = `
// Angular 19 DSL for declarative UI composition
@Component({
  selector: 'app-user-card',
  template: \`
    <div class="card">
      <div class="header">{{ user.name }}</div>
      <div class="body">
        <div class="field">
          <label>Email:</label>
          <span>{{ user.email }}</span>
        </div>
        <div class="field">
          <label>Role:</label>
          <span>{{ user.role }}</span>
        </div>
      </div>
      <div class="footer">
        <button (click)="editUser()">Edit</button>
        <button (click)="deleteUser()">Delete</button>
      </div>
    </div>
  \`
})
export class UserCardComponent {
  @Input() user: User;

  editUser() { /* ... */ }
  deleteUser() { /* ... */ }
}
`;

  code_3 = `
// Signal-based DSL for reactive state management in Angular 19
import { signal, computed, effect } from '@angular/core';

// Create a mini-store using Angular 19 signals
export function createStore<T>(initialState: T) {
  // State container
  const state = signal(initialState);

  // Selector functions
  const select = <K extends keyof T>(key: K) => computed(() => state()[key]);

  // Action dispatcher
  const dispatch = (action: Partial<T> | ((currentState: T) => Partial<T>)) => {
    const update = typeof action === 'function'
      ? action(state())
      : action;

    state.update(currentValue => ({ ...currentValue, ...update }));
  };

  // Subscribe to state changes
  const subscribe = (callback: (state: T) => void) => {
    return effect(() => {
      callback(state());
    });
  };

  return {
    state,
    select,
    dispatch,
    subscribe
  };
}
`;

  code_4 = `
// Angular 19 signals-based reactive form DSL
import { signal, computed } from '@angular/core';

export function createFormControl(initialValue = '', validators = []) {
  const value = signal(initialValue);
  const dirty = signal(false);
  const touched = signal(false);
  const errors = computed(() => {
    return validators.reduce((errs, validator) => {
      const error = validator(value());
      return error ? { ...errs, ...error } : errs;
    }, {});
  });

  const valid = computed(() => Object.keys(errors()).length === 0);

  return {
    value,
    setValue: (newValue: string) => {
      value.set(newValue);
      dirty.set(true);
    },
    markAsTouched: () => touched.set(true),
    reset: () => {
      value.set(initialValue);
      dirty.set(false);
      touched.set(false);
    },
    errors,
    valid,
    dirty,
    touched
  };
}
`;

  code_5 = `
// Angular 19 RouterConfig DSL for declarative routing
const routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'users',
    component: UsersComponent,
    title: 'Users',
    canActivate: [authGuard],
    children: [
      {
        path: ':id',
        component: UserDetailComponent,
        title: 'User Detail',
        resolve: {
          user: userResolver
        }
      }
    ]
  },
  {
    path: 'settings',
    loadComponent: () => import('./settings.component').then(m => m.SettingsComponent),
    canMatch: [adminGuard]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
`;

  code_6 = `
// Angular 19 Component Test DSL
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display users when data is loaded', () => {
    // Arrange
    component.users = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' }
    ];

    // Act
    fixture.detectChanges();

    // Assert
    const userElements = fixture.nativeElement.querySelectorAll('.user-item');
    expect(userElements.length).toBe(2);
    expect(userElements[0].textContent).toContain('Alice');
  });
});
`;

}
