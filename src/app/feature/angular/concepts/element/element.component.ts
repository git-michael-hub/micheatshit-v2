import { Component } from '@angular/core';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent {
  selectedTab = 1;

  // Template reference variables
  code_1_ref: any = { hidden: false };
  code_2_ref: any = { hidden: false };
  code_3_ref: any = { hidden: false };
  code_4_ref: any = { hidden: false };
  code_5_ref: any = { hidden: false };
  code_6_ref: any = { hidden: false };

  // Example code snippets
  code_1 = `
// Basic element (DOM element) reference in Angular 19
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-element-demo',
  standalone: true,
  template: \`
    <div #myElement class="highlight">
      This is a DOM element that we can reference directly
    </div>
    <button (click)="changeStyle()">Change Style</button>
  \`
})
export class ElementDemoComponent {
  // Using ViewChild to get a reference to the DOM element
  @ViewChild('myElement') myElement!: ElementRef<HTMLDivElement>;

  changeStyle() {
    // Directly manipulating the native DOM element
    const nativeElement = this.myElement.nativeElement;

    nativeElement.style.backgroundColor = '#e0f7fa';
    nativeElement.style.padding = '10px';
    nativeElement.style.borderRadius = '4px';

    // In Angular 19, you can use the new style utilities
    nativeElement.classList.toggle('active');
  }
}`;

  code_2 = `
// ElementRef usage with signals in Angular 19
import { Component, ElementRef, ViewChild, signal, effect } from '@angular/core';

@Component({
  selector: 'app-element-signal',
  standalone: true,
  template: \`
    <div class="container">
      <div #targetElement>{{ message() }}</div>
      <input
        type="text"
        [value]="message()"
        (input)="updateMessage($event)"
        placeholder="Type to update the element content"
      />
      <button (click)="toggleHighlight()">Toggle Highlight</button>
    </div>
  \`
})
export class ElementSignalComponent {
  // Reference to the DOM element
  @ViewChild('targetElement') targetElement!: ElementRef<HTMLDivElement>;

  // Signal for the message content
  message = signal('Hello from Angular 19 Elements!');

  // Signal for highlighting state
  isHighlighted = signal(false);

  constructor() {
    // Using effect to react to changes in the highlighting signal
    effect(() => {
      if (this.targetElement?.nativeElement) {
        const el = this.targetElement.nativeElement;

        if (this.isHighlighted()) {
          el.style.backgroundColor = '#f0f4c3';
          el.style.padding = '10px';
          el.style.borderRadius = '4px';
          el.style.transition = 'all 0.3s ease';
        } else {
          el.style.backgroundColor = 'transparent';
          el.style.padding = '0';
        }
      }
    });
  }

  // Update the message signal from input
  updateMessage(event: Event) {
    const input = event.target as HTMLInputElement;
    this.message.set(input.value);
  }

  // Toggle the highlight signal
  toggleHighlight() {
    this.isHighlighted.update(value => !value);
  }
}`;

  code_3 = `
// ElementRef with template context and optimization in Angular 19
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-optimized-element',
  standalone: true,
  template: \`
    <div class="search-container">
      <input #searchInput
        type="text"
        placeholder="Search..."
        class="search-input"
      />
      <div class="results">
        <div *ngIf="searchResults.length; else noResults">
          <div *ngFor="let result of searchResults" class="result-item">
            {{ result }}
          </div>
        </div>
        <ng-template #noResults>
          <div class="no-results" *ngIf="hasSearched">No results found</div>
        </ng-template>
      </div>
    </div>
  \`
})
export class OptimizedElementComponent implements AfterViewInit {
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  searchResults: string[] = [];
  hasSearched = false;

  // Sample data
  private data = [
    'Angular Elements', 'DOM manipulation', 'ElementRef',
    'ViewChild', 'Direct DOM access', 'Template reference variables'
  ];

  ngAfterViewInit() {
    // Using rxjs-interop for automatic cleanup
    fromEvent(this.searchInput.nativeElement, 'input')
      .pipe(
        debounceTime(300),
        takeUntilDestroyed() // Angular 19's improved cleanup
      )
      .subscribe(() => {
        const query = this.searchInput.nativeElement.value.toLowerCase();
        this.hasSearched = !!query;

        if (!query) {
          this.searchResults = [];
          return;
        }

        this.searchResults = this.data.filter(item =>
          item.toLowerCase().includes(query)
        );
      });
  }

  // Focus the search input programmatically
  focusSearch() {
    this.searchInput.nativeElement.focus();
  }
}`;

  code_4 = `
// Using ElementRef with Renderer2 (recommended approach)
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-renderer-element',
  standalone: true,
  template: \`
    <div #container class="container">
      <p>This demonstrates safe DOM manipulation</p>
      <button (click)="addElement()">Add Element</button>
      <button (click)="removeElements()">Remove Elements</button>
    </div>
  \`
})
export class RendererElementComponent {
  @ViewChild('container') container!: ElementRef;

  // Angular 19 now strongly recommends using Renderer2
  // for cross-platform compatibility
  constructor(private renderer: Renderer2) {}

  addElement() {
    // Create a new element
    const newElement = this.renderer.createElement('div');

    // Create and append text node
    const text = this.renderer.createText('Dynamically added element');
    this.renderer.appendChild(newElement, text);

    // Add classes
    this.renderer.addClass(newElement, 'dynamic-element');

    // Set styles
    this.renderer.setStyle(newElement, 'margin', '10px 0');
    this.renderer.setStyle(newElement, 'padding', '8px');
    this.renderer.setStyle(newElement, 'background-color', '#e3f2fd');
    this.renderer.setStyle(newElement, 'border-radius', '4px');

    // Add to the container
    this.renderer.appendChild(this.container.nativeElement, newElement);
  }

  removeElements() {
    const container = this.container.nativeElement;
    const elements = container.querySelectorAll('.dynamic-element');

    elements.forEach((element: Element) => {
      this.renderer.removeChild(container, element);
    });
  }
}`;

  code_5 = `
// ElementRef with zone-less reactivity in Angular 19
import { Component, ElementRef, ViewChild, signal,
         AfterViewInit, computed, effect } from '@angular/core';

@Component({
  selector: 'app-zoneless-element',
  standalone: true,
  template: \`
    <div class="progress-container">
      <div #progressBar class="progress-bar"></div>
      <div class="controls">
        <button (click)="decreaseProgress()">-</button>
        <span>{{ progressLabel() }}</span>
        <button (click)="increaseProgress()">+</button>
      </div>
    </div>
  \`
})
export class ZonelessElementComponent implements AfterViewInit {
  @ViewChild('progressBar') progressBar!: ElementRef<HTMLDivElement>;

  // Signal-based state
  progress = signal(0);

  // Computed value from the signal
  progressLabel = computed(() => \`\${this.progress()}%\`);

  ngAfterViewInit() {
    // Effect to update the DOM when the signal changes
    effect(() => {
      const element = this.progressBar.nativeElement;
      const currentProgress = this.progress();

      // Update width based on progress
      element.style.width = \`\${currentProgress}%\`;

      // Change color based on progress value
      if (currentProgress < 30) {
        element.style.backgroundColor = '#ffcdd2'; // light red
      } else if (currentProgress < 70) {
        element.style.backgroundColor = '#fff9c4'; // light yellow
      } else {
        element.style.backgroundColor = '#c8e6c9'; // light green
      }
    });
  }

  increaseProgress() {
    this.progress.update(p => Math.min(p + 10, 100));
  }

  decreaseProgress() {
    this.progress.update(p => Math.max(p - 10, 0));
  }
}`;

  code_6 = `
// ElementRef with intersection observer for rendering optimizations
import { Component, ElementRef, ViewChild, signal, effect,
         AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lazy-element',
  standalone: true,
  template: \`
    <div class="scroll-container">
      <div class="content">
        <div *ngFor="let item of placeholderItems; let i = index">
          <div class="placeholder-item">Item {{ i + 1 }}</div>
        </div>

        <div #lazyElement class="lazy-element">
          <ng-container *ngIf="isVisible()">
            <h3>Lazy Loaded Element</h3>
            <p>This complex element only renders when scrolled into view!</p>
            <div class="chart">
              <!-- Chart content would go here -->
              <div *ngFor="let value of chartData"
                   class="chart-bar"
                   [style.height.px]="value">
              </div>
            </div>
          </ng-container>
        </div>

        <div *ngFor="let item of placeholderItems; let i = index">
          <div class="placeholder-item">Item {{ i + 10 }}</div>
        </div>
      </div>
    </div>
  \`
})
export class LazyElementComponent implements AfterViewInit, OnDestroy {
  @ViewChild('lazyElement') lazyElement!: ElementRef<HTMLDivElement>;

  // Signal for visibility state
  isVisible = signal(false);

  // Sample data for the chart
  chartData = [40, 60, 30, 70, 50, 80, 20, 90];

  // Placeholder items to create scrollable content
  placeholderItems = Array(20).fill(0);

  // Intersection Observer instance
  private observer: IntersectionObserver | null = null;

  ngAfterViewInit() {
    // Create observer with options
    this.observer = new IntersectionObserver(
      (entries) => {
        // Update the signal based on visibility
        this.isVisible.set(entries[0].isIntersecting);
      },
      {
        threshold: 0.1 // Trigger when 10% of the element is visible
      }
    );

    // Start observing the element
    this.observer.observe(this.lazyElement.nativeElement);
  }

  ngOnDestroy() {
    // Clean up the observer
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }
}`;
}
