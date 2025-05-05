import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, ViewChild, ElementRef } from '@angular/core';
import { takeUntil } from 'rxjs';
import { UnsubscribeService } from 'src/app/utils/services/unsubscribe.service';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionComponent extends UnsubscribeService {

  selectedTab = 1;

  @ViewChild('signalBasicCodeEl') signalBasicCodeEl?: ElementRef;
  @ViewChild('signalComputedCodeEl') signalComputedCodeEl?: ElementRef;
  @ViewChild('signalEffectCodeEl') signalEffectCodeEl?: ElementRef;
  @ViewChild('zonelessCodeEl') zonelessCodeEl?: ElementRef;
  @ViewChild('hybridCodeEl') hybridCodeEl?: ElementRef;
  @ViewChild('onPushCodeEl') onPushCodeEl?: ElementRef;

  code_1 = '';
  code_2 = '';
  code_3 = '';
  code_4 = '';
  code_5 = '';
  code_6 = '';
  code_7 = '';
  code_8 = '';
  code_9 = '';
  code_10 = '';
  code_11 = '';
  code_12 = '';
  code_13 = '';
  code_14 = '';
  code_15 = '';

  codeb_1 = '';
  codeb_2 = '';
  codeb_3 = '';
  codeb_4 = '';
  codeb_5 = '';
  codeb_6 = '';
  codeb_7 = '';
  codeb_8 = '';
  codeb_9 = '';

  // New Angular 19 signal-based examples
  signalBasicCode = `import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: \`
    <div>
      <h2>Count: {{ count() }}</h2>
      <button (click)="increment()">Increment</button>
      <button (click)="decrement()">Decrement</button>
    </div>
  \`
})
export class CounterComponent {
  // Create a signal with initial value
  count = signal(0);

  increment() {
    // Update the signal (triggers only the necessary UI updates)
    this.count.update(value => value + 1);
  }

  decrement() {
    this.count.update(value => value - 1);
  }
}`;

  signalComputedCode = `import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  template: \`
    <div class="product-card">
      <h3>{{ name() }}</h3>
      <p>Price: $\${price()}</p>
      <p>Quantity:
        <input
          type="number"
          [ngModel]="quantity()"
          (ngModelChange)="updateQuantity($event)"
          min="1"
        />
      </p>
      <p class="total">Total: $\${totalPrice()}</p>
    </div>
  \`
})
export class ProductCardComponent {
  name = signal('Angular 19 Book');
  price = signal(49.99);
  quantity = signal(1);

  // Computed value automatically updates when dependencies change
  totalPrice = computed(() => {
    return this.price() * this.quantity();
  });

  updateQuantity(newValue: number) {
    this.quantity.set(newValue);
    // totalPrice updates automatically!
  }
}`;

  signalEffectCode = `import { Component, signal, effect, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-user-status',
  standalone: true,
  template: \`
    <div>
      <h3>User Status</h3>
      <p>Status: {{ isOnline() ? 'Online' : 'Offline' }}</p>
      <button (click)="toggleStatus()">Toggle Status</button>
      <p *ngIf="notifications().length > 0">
        New notifications: {{ notifications().length }}
      </p>
    </div>
  \`
})
export class UserStatusComponent implements OnInit, OnDestroy {
  isOnline = signal(false);
  notifications = signal<string[]>([]);

  // Store cleanup function
  private disposeEffect?: () => void;

  ngOnInit() {
    // Effect runs initially and whenever dependencies change
    this.disposeEffect = effect(() => {
      if (this.isOnline()) {
        console.log('User is now online');
        this.checkForNotifications();
      } else {
        console.log('User is now offline');
      }
    });
  }

  ngOnDestroy() {
    // Important: Clean up effects when component is destroyed
    if (this.disposeEffect) {
      this.disposeEffect();
    }
  }

  toggleStatus() {
    this.isOnline.update(status => !status);
  }

  private checkForNotifications() {
    // Simulating API call for new notifications
    setTimeout(() => {
      if (this.isOnline()) {
        this.notifications.update(notifications =>
          [...notifications, \`Notification at \${new Date().toLocaleTimeString()}\`]
        );
      }
    }, 1000);
  }
}`;

  zonelessAppCode = `import { bootstrapApplication } from '@angular/platform-browser';
import { Component, signal } from '@angular/core';
import { provideZonelessChangeDetection } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: \`
    <h1>Zoneless Application</h1>
    <p>Counter: {{ counter() }}</p>
    <button (click)="increment()">Increment</button>
  \`
})
export class AppComponent {
  counter = signal(0);

  increment() {
    this.counter.update(c => c + 1);
    // No zone.js, but UI updates automatically because of signals!
  }
}

// Bootstrap the app without Zone.js
bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection()
  ]
});`;

  hybridDetectionCode = `import { Component, ChangeDetectionStrategy, ChangeDetectorRef, signal } from '@angular/core';

@Component({
  selector: 'app-hybrid-detection',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: \`
    <div>
      <h2>Hybrid Change Detection</h2>
      <p>Signal Counter: {{ signalCounter() }}</p>
      <p>Regular Counter: {{ regularCounter }}</p>
      <button (click)="incrementSignal()">Increment Signal</button>
      <button (click)="incrementRegular()">Increment Regular</button>
    </div>
  \`
})
export class HybridDetectionComponent {
  // Signal-based state (auto-updates UI)
  signalCounter = signal(0);

  // Traditional property (needs manual change detection)
  regularCounter = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  incrementSignal() {
    this.signalCounter.update(c => c + 1);
    // No need to call detectChanges() - UI updates automatically
  }

  incrementRegular() {
    this.regularCounter++;
    // With OnPush strategy, we need to tell Angular to detect changes
    this.cdr.detectChanges();
  }
}`;

  onPushCode = `import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-on-push-example',
  changeDetection: ChangeDetectionStrategy.OnPush, // Using OnPush strategy
  template: \`
    <div class="card">
      <h3>{{ title }}</h3>
      <p>Count: {{ count }}</p>
      <p>User: {{ user.name }}, Age: {{ user.age }}</p>

      <div class="actions">
        <button (click)="incrementCount()">Increment Count</button>
        <button (click)="updateUserAge()">Update User Age</button>
        <button (click)="replaceUser()">Replace User</button>
        <button (click)="forceDetection()">Force Detection</button>
      </div>
    </div>
  \`
})
export class OnPushExampleComponent {
  @Input() title = 'OnPush Change Detection';
  count = 0;
  user = { name: 'John', age: 25 };

  constructor(private cdr: ChangeDetectorRef) {}

  incrementCount() {
    this.count++;
    // UI won't update automatically with OnPush
    // since internal property mutation isn't detected
  }

  updateUserAge() {
    this.user.age++;
    // UI won't update automatically with OnPush
    // since this mutates an object property (not changing the reference)
  }

  replaceUser() {
    this.user = { ...this.user, age: this.user.age + 1 };
    // UI WILL update automatically with OnPush
    // because the object reference changed
  }

  forceDetection() {
    // Manually tell Angular to check for changes
    this.cdr.detectChanges();
  }
}

// Parent component example
@Component({
  selector: 'app-parent',
  template: \`
    <h2>OnPush Change Detection Demo</h2>
    <app-on-push-example
      [title]="componentTitle"
    ></app-on-push-example>
    <button (click)="changeTitle()">Change Input</button>
  \`
})
export class ParentComponent {
  componentTitle = 'Initial Title';

  changeTitle() {
    this.componentTitle = 'Updated Title ' + new Date().toLocaleTimeString();
    // This will trigger change detection in the child component
    // because the input property reference changed
  }
}`;

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  ngOnInit() {
    this.http.get('assets/codes/change-detection/notes/code_1.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_1 = data);

    this.http.get('assets/codes/change-detection/notes/code_2.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_2 = data);

    this.http.get('assets/codes/change-detection/notes/code_3.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_3 = data);

    this.http.get('assets/codes/change-detection/notes/code_4.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_4 = data);

    this.http.get('assets/codes/change-detection/notes/code_5.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_5 = data);

    this.http.get('assets/codes/change-detection/notes/code_6.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_6 = data);

    this.http.get('assets/codes/change-detection/notes/code_7.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_7 = data);

    this.http.get('assets/codes/change-detection/notes/code_8.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_8 = data);

    this.http.get('assets/codes/change-detection/notes/code_9.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_9 = data);

    this.http.get('assets/codes/change-detection/notes/code_10.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_10 = data);

    this.http.get('assets/codes/change-detection/notes/code_11.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_11 = data);

    this.http.get('assets/codes/change-detection/notes/code_12.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_12 = data);

    this.http.get('assets/codes/change-detection/notes/code_13.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_13 = data);

    this.http.get('assets/codes/change-detection/notes/code_14.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_14 = data);

    this.http.get('assets/codes/change-detection/notes/code_15.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_15 = data);

    this.http.get('assets/codes/change-detection/best/code_1.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.codeb_1 = data);

    this.http.get('assets/codes/change-detection/best/code_2.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.codeb_2 = data);

    this.http.get('assets/codes/change-detection/best/code_3.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.codeb_3 = data);

    this.http.get('assets/codes/change-detection/best/code_4.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.codeb_4 = data);

    this.http.get('assets/codes/change-detection/best/code_5.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.codeb_5 = data);

    this.http.get('assets/codes/change-detection/best/code_6.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.codeb_6 = data);

    this.http.get('assets/codes/change-detection/best/code_7.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.codeb_7 = data);

    this.http.get('assets/codes/change-detection/best/code_8.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.codeb_8 = data);

    this.http.get('assets/codes/change-detection/best/code_9.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.codeb_9 = data);
  }
}
