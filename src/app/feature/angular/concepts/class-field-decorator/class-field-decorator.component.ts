import { ChangeDetectionStrategy, Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { UnsubscribeService } from 'src/app/utils/services/unsubscribe.service';

@Component({
  selector: 'app-class-field-decorator',
  standalone: true,
  imports: [CommonModule, HighlightModule],
  templateUrl: './class-field-decorator.component.html',
  styleUrls: ['./class-field-decorator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClassFieldDecoratorComponent extends UnsubscribeService {

  selectedTab = 1;

  @ViewChild('inputCodeEl') inputCodeEl?: ElementRef;
  @ViewChild('outputCodeEl') outputCodeEl?: ElementRef;
  @ViewChild('viewChildCodeEl') viewChildCodeEl?: ElementRef;
  @ViewChild('hostBindingCodeEl') hostBindingCodeEl?: ElementRef;
  @ViewChild('signalInputCodeEl') signalInputCodeEl?: ElementRef;

  // Code examples
  inputCode = `// Traditional @Input decorator
@Component({
  selector: 'app-user-profile',
  template: \`
    <div class="user-card">
      <h2>{{ name }}</h2>
      <div>Age: {{ age }}</div>
    </div>
  \`
})
export class UserProfileComponent {
  @Input() name: string = '';

  // Input with alias
  @Input('userAge') age: number = 0;

  // Required input (Angular 14+)
  @Input({ required: true }) userId!: string;

  // Transformed input (Angular 16+)
  @Input({ transform: (value: string) => value.toUpperCase() })
  description: string = '';
}`;

  outputCode = `@Component({
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

  // Basic output
  @Output() countChanged = new EventEmitter<number>();

  // Output with alias
  @Output('resetEvent') resetTriggered = new EventEmitter<void>();

  increment() {
    this.count++;
    this.countChanged.emit(this.count);
  }

  reset() {
    this.count = 0;
    this.resetTriggered.emit();
    this.countChanged.emit(this.count);
  }
}`;

  viewChildCode = `@Component({
  selector: 'app-tabbed-panel',
  template: \`
    <div>
      <div #tabHeader class="tab-header">
        <button *ngFor="let tab of tabs" (click)="selectTab(tab)">
          {{ tab.title }}
        </button>
      </div>
      <div class="tab-content">
        <ng-content></ng-content>
      </div>
    </div>
  \`
})
export class TabbedPanelComponent implements AfterViewInit {
  // Reference to a single element
  @ViewChild('tabHeader') tabHeader!: ElementRef;

  // Reference to a component
  @ViewChild(TabComponent) activeTab?: TabComponent;

  // Reference to a directive with specific read option
  @ViewChild('tabHeader', { read: ViewContainerRef })
  headerContainer!: ViewContainerRef;

  // Multiple elements with ViewChildren
  @ViewChildren(TabComponent) allTabs!: QueryList<TabComponent>;

  // Static option for immediate availability
  @ViewChild('staticContent', { static: true })
  staticContent!: ElementRef;

  ngAfterViewInit() {
    console.log('Tab header element:', this.tabHeader.nativeElement);
    this.allTabs.forEach(tab => console.log('Tab:', tab.title));
  }
}`;

  hostBindingCode = `@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  // Color for the highlight, defaults to yellow
  @Input() highlightColor = 'yellow';

  // Bind to the style.backgroundColor property of the host element
  @HostBinding('style.backgroundColor') backgroundColor: string = '';

  // Bind to the class.active property of the host element
  @HostBinding('class.active') isActive = false;

  // Bind to the attr.aria-label property
  @HostBinding('attr.aria-label') ariaLabel = 'Highlighted element';

  // Listen for mouseenter event and apply highlighting
  @HostListener('mouseenter')
  onMouseEnter() {
    this.backgroundColor = this.highlightColor;
    this.isActive = true;
  }

  // Listen for mouseleave event and remove highlighting
  @HostListener('mouseleave')
  onMouseLeave() {
    this.backgroundColor = '';
    this.isActive = false;
  }
}`;

  signalInputCode = `// Modern signal-based inputs (Angular 19)
@Component({
  selector: 'app-product-card',
  template: \`
    <div class="product">
      <h2>{{ name() }}</h2>
      <div>Price: {{ price() | currency }}</div>
      <div *ngIf="isOnSale()">ON SALE!</div>
      <button [disabled]="!inStock()" (click)="addToCart()">
        {{ inStock() ? 'Add to Cart' : 'Out of Stock' }}
      </button>
    </div>
  \`
})
export class ProductCardComponent {
  // Basic input signal
  name = input<string>('');

  // Input signal with transform function
  price = input<number>(0, {
    transform: (value: number) => Math.max(0, value)
  });

  // Required input signal
  id = input.required<string>();

  // Input signal with default value
  inStock = input<boolean>(true);

  // Model input (two-way bindable)
  quantity = model<number>(1);

  // Computed value based on input signals
  isOnSale = computed(() => {
    return this.price() < 50;
  });

  // Output signal
  addedToCart = output<{id: string, quantity: number}>();

  addToCart() {
    if (this.inStock()) {
      this.addedToCart.emit({
        id: this.id(),
        quantity: this.quantity()
      });
    }
  }
}`;

  ngOnInit() {
    // Any initialization code if needed
  }
}
