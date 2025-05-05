import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { UnsubscribeService } from 'src/app/utils/services/unsubscribe.service';
import { takeUntil } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.scss']
})
export class AttributeDirectiveComponent extends UnsubscribeService {
  selectedTab = 1;

  @ViewChild('code1') code1?: ElementRef;
  @ViewChild('code2') code2?: ElementRef;
  @ViewChild('code3') code3?: ElementRef;
  @ViewChild('code4') code4?: ElementRef;
  @ViewChild('code5') code5?: ElementRef;
  @ViewChild('code8') code8?: ElementRef;
  @ViewChild('code9') code9?: ElementRef;
  @ViewChild('code10') code10?: ElementRef;
  @ViewChild('codeb1') codeb1?: ElementRef;
  @ViewChild('codeb2') codeb2?: ElementRef;
  @ViewChild('codeb3') codeb3?: ElementRef;
  @ViewChild('codeb4') codeb4?: ElementRef;
  @ViewChild('codeb5') codeb5?: ElementRef;
  @ViewChild('codeb6') codeb6?: ElementRef;

  // Angular 19 specific code examples
  standaloneDirectiveCode = `import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() highlightColor = 'yellow';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.highlightColor;
  }
}`;

  signalDirectiveCode = `import { Directive, ElementRef, effect, input, signal } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appTheme]'
})
export class ThemeDirective {
  // Signal-based input with default value
  theme = input<'light' | 'dark'>('light');

  // Internal signal for state
  private backgroundColor = signal('transparent');
  private textColor = signal('#000000');

  constructor(private el: ElementRef) {
    // Effect to update styles when theme changes
    effect(() => {
      if (this.theme() === 'dark') {
        this.backgroundColor.set('#333333');
        this.textColor.set('#ffffff');
      } else {
        this.backgroundColor.set('#ffffff');
        this.textColor.set('#333333');
      }

      // Apply the styles
      this.el.nativeElement.style.backgroundColor = this.backgroundColor();
      this.el.nativeElement.style.color = this.textColor();
    });
  }
}`;

  hostDirectiveCode = `import { Directive, input } from '@angular/core';

// Base directive for validation errors
@Directive({
  standalone: true,
  selector: '[appErrorState]',
  host: {
    '[class.error]': 'hasError'
  }
})
export class ErrorStateDirective {
  hasError = input<boolean>(false);
}

// Tooltip directive for messages
@Directive({
  standalone: true,
  selector: '[appTooltip]',
  host: {
    '(mouseenter)': 'showTooltip()',
    '(mouseleave)': 'hideTooltip()'
  }
})
export class TooltipDirective {
  message = input<string>('');

  private tooltipElement: HTMLElement | null = null;

  showTooltip() {
    // Create tooltip logic
    this.tooltipElement = document.createElement('div');
    this.tooltipElement.textContent = this.message();
    this.tooltipElement.classList.add('tooltip');
    document.body.appendChild(this.tooltipElement);
  }

  hideTooltip() {
    if (this.tooltipElement) {
      document.body.removeChild(this.tooltipElement);
      this.tooltipElement = null;
    }
  }
}

// Combined directive using Host Directives
@Directive({
  standalone: true,
  selector: '[appValidation]',
  // Host multiple directives together
  hostDirectives: [
    {
      directive: ErrorStateDirective,
      inputs: ['hasError']
    },
    {
      directive: TooltipDirective,
      inputs: ['message']
    }
  ]
})
export class ValidationDirective {}`;

  directiveUsageCode = `<!-- Using standalone directive -->
<div appHighlight highlightColor="lightblue">
  This text has a light blue background
</div>

<!-- Using signal-based directive -->
<p [appTheme]="isDarkMode ? 'dark' : 'light'">
  This text adapts to the current theme
</p>

<!-- Using composed host directives -->
<input
  appValidation
  [hasError]="form.controls.email.invalid"
  [message]="'Please enter a valid email address'"
/>

<!-- Using multiple directives -->
<button
  appHighlight
  [appTheme]="'dark'"
  [disabled]="isLoading"
>
  Submit
</button>`;

  deferredDirectiveCode = `<!-- Defer loading heavy directives -->
@defer {
  <div class="chart-container"
       appChartDirective
       [chartData]="complexData">
  </div>
} @loading {
  <div class="loading-indicator">Loading chart...</div>
} @error {
  <div class="error-message">Failed to load chart directive</div>
}

<!-- Prefetching directive with signal input -->
@defer (on viewport; prefetch on idle) {
  <div class="interactive-element"
       appInteractive
       [config]="interactiveConfig">
  </div>
}`;

  // Legacy code examples
  code_8 = `ng generate directive highlight`;
  code_9 = `import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlightColor = 'yellow';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string | null) {
    this.renderer.setStyle(
      this.el.nativeElement,
      'background-color',
      color
    );
  }
}`;
  code_10 = `<p appHighlight appHighlightColor="blue">Hover over me!</p>`;
  codeb_1 = `// Incorrect way (avoid)
@Directive({
  selector: '[appUnsafe]'
})
export class UnsafeDirective {
  constructor(private el: ElementRef) {
    // Direct DOM manipulation (unsafe)
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
}

// Correct way (recommended)
@Directive({
  selector: '[appSafe]'
})
export class SafeDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    // Using Renderer2 for safe DOM manipulation
    this.renderer.setStyle(
      this.el.nativeElement,
      'backgroundColor',
      'yellow'
    );
  }
}`;
  codeb_2 = `@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  // Using HostBinding to bind to the host element's property
  @HostBinding('style.backgroundColor') backgroundColor: string;

  // Using HostListener to listen for events
  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = null;
  }
}`;
  codeb_3 = `@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  // Use input properties to make the directive configurable
  @Input() highlightColor = 'yellow';
  @Input() defaultColor = 'transparent';

  // Using HostBinding with the input property
  @HostBinding('style.backgroundColor') backgroundColor: string;

  // Using HostListener with the input properties
  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }
}`;
  codeb_4 = `// highlight.directive.spec.ts
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HighlightDirective } from './highlight.directive';

@Component({
  template: \`<div appHighlight
                   [highlightColor]="color">Test</div>\`
})
class TestComponent {
  color = 'yellow';
}

describe('HighlightDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let element: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        HighlightDirective
      ]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.query(By.css('div'));

    fixture.detectChanges();
  });

  it('should have yellow background on mouse enter', () => {
    element.triggerEventHandler('mouseenter', {});
    fixture.detectChanges();

    expect(element.nativeElement.style.backgroundColor).toBe('yellow');
  });

  it('should have transparent background on mouse leave', () => {
    element.triggerEventHandler('mouseenter', {});
    fixture.detectChanges();

    element.triggerEventHandler('mouseleave', {});
    fixture.detectChanges();

    expect(element.nativeElement.style.backgroundColor).toBe('transparent');
  });
});`;
  codeb_5 = `@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit, OnChanges, OnDestroy {
  @Input() highlightColor = 'yellow';
  private listener: () => void;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // Initialization logic
    this.setupEventListeners();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // React to input changes
    if (changes.highlightColor && !changes.highlightColor.firstChange) {
      // Update appearance when color changes
      this.updateHighlight();
    }
  }

  private setupEventListeners(): void {
    // Set up event listeners
    this.listener = this.renderer.listen(
      this.el.nativeElement,
      'mouseenter',
      () => {
        this.updateHighlight();
      }
    );
  }

  private updateHighlight(): void {
    this.renderer.setStyle(
      this.el.nativeElement,
      'backgroundColor',
      this.highlightColor
    );
  }

  ngOnDestroy(): void {
    // Clean up to prevent memory leaks
    if (this.listener) {
      this.listener();
    }
  }
}`;
  codeb_6 = `@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  // Default value for the highlight color
  @Input() highlightColor = 'yellow';

  // Default value for the default color
  @Input() defaultColor = 'transparent';

  // More default values as needed
  @Input() transitionDuration = '0.3s';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.defaultColor);
  }

  private highlight(color: string) {
    this.renderer.setStyle(
      this.el.nativeElement,
      'backgroundColor',
      color
    );
    this.renderer.setStyle(
      this.el.nativeElement,
      'transition',
      \`background-color \${this.transitionDuration}\`
    );
  }
}`;

  constructor(private http: HttpClient) {
    super();
    this.getCode();
  }

  private getCode() {
    this.http.get('/assets/examples/attribute-directives/highlight.directive.ts', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => {
        // Process legacy code examples if needed
      });
  }
}
