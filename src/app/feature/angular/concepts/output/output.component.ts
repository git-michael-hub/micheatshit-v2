import { ChangeDetectionStrategy, Component, ViewChild, ElementRef } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OutputComponent {
  selectedTab = 1;

  // Code snippets
  code_1 = `// Basic Output decorator usage
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: \`
    <div>
      <h2>Count: {{ count }}</h2>
      <button (click)="increment()">Increment</button>
      <button (click)="reset()">Reset</button>
    </div>
  \`
})
export class CounterComponent {
  count = 0;

  @Output() countChanged = new EventEmitter<number>();

  increment() {
    this.count++;
    this.countChanged.emit(this.count);
  }

  reset() {
    this.count = 0;
    this.countChanged.emit(this.count);
  }
}`;

  code_2 = `// Output with alias
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  template: \`
    <div class="product">
      <h3>{{ name }}</h3>
      <p>Price: \${{ price }}</p>
      <button (click)="addToCart()">Add to Cart</button>
    </div>
  \`
})
export class ProductComponent {
  @Input() name: string = '';
  @Input() price: number = 0;

  // Output with alias
  @Output('itemAdded') addToCartEvent = new EventEmitter<{name: string, price: number}>();

  addToCart() {
    this.addToCartEvent.emit({name: this.name, price: this.price});
  }
}`;

  code_3 = `// Signal-based output in Angular 19
import { Component, output } from '@angular/core';

@Component({
  selector: 'app-user-form',
  template: \`
    <form (ngSubmit)="submitForm()">
      <div>
        <label for="name">Name:</label>
        <input id="name" [(ngModel)]="user.name" name="name" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input id="email" [(ngModel)]="user.email" name="email" required>
      </div>
      <button type="submit">Submit</button>
    </form>
  \`
})
export class UserFormComponent {
  user = { name: '', email: '' };

  // Angular 19 output() function
  formSubmitted = output<{name: string, email: string}>();

  submitForm() {
    this.formSubmitted.emit({...this.user});
  }
}`;

  code_4 = `// Using Output in parent component template
<app-counter
  (countChanged)="handleCountChange($event)">
</app-counter>

<app-product
  [name]="product.name"
  [price]="product.price"
  (itemAdded)="handleItemAdded($event)">
</app-product>

<app-user-form
  (formSubmitted)="handleFormSubmit($event)">
</app-user-form>`;

  // Template references
  @ViewChild('code1') code1!: ElementRef;
  @ViewChild('code2') code2!: ElementRef;
  @ViewChild('code3') code3!: ElementRef;
  @ViewChild('code4') code4!: ElementRef;
  @ViewChild('notesRef') notesRef!: ElementRef;
  @ViewChild('bestRef') bestRef!: ElementRef;
  @ViewChild('prosConsRef') prosConsRef!: ElementRef;
  @ViewChild('topicsRef') topicsRef!: ElementRef;
}
