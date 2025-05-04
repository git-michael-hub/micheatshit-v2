import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
  selector: 'app-after-render',
  templateUrl: './after-render.component.html',
  standalone: true,
  imports: [CommonModule, HighlightModule]
})
export class AfterRenderComponent {
  selectedTab = 1;
  counter = 0;
  lastRenderTime = 0;

  // Code examples for the templates
  code_1 = `import { Component, afterRender } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html'
})
export class ExampleComponent {
  constructor() {
    // Register a callback to run after every render
    afterRender(() => {
      // This code runs after each render cycle
      console.log('View has been fully rendered and committed to DOM');
    });
  }
}`;

  code_2 = `import { Component, afterRender, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: \`
    <div>Count: {{ count() }}</div>
    <button (click)="increment()">Increment</button>
  \`
})
export class CounterComponent {
  count = signal(0);
  renderCount = 0;

  constructor() {
    afterRender(() => {
      this.renderCount++;
      console.log(\`Component rendered \${this.renderCount} times\`);

      // We can safely access DOM elements here
      const button = document.querySelector('button');
      console.log('Button width:', button?.offsetWidth);
    });
  }

  increment() {
    this.count.update(val => val + 1);
  }
}`;

  code_3 = `import { Component, ElementRef, ViewChild, afterRender } from '@angular/core';

@Component({
  selector: 'app-chart',
  template: \`<div #chartContainer class="chart-container"></div>\`
})
export class ChartComponent {
  @ViewChild('chartContainer') chartContainer!: ElementRef;
  private chart: any;
  data = [...]; // Chart data

  constructor() {
    // Set up chart library instance
    this.chart = new ExternalChartLibrary();

    // Update chart after every render
    afterRender(() => {
      if (this.chartContainer && this.data) {
        // The DOM is guaranteed to be ready here
        this.chart.render(this.chartContainer.nativeElement, this.data);
      }
    });
  }

  updateData(newData: any) {
    this.data = newData;
    // No need to call chart.render() - afterRender will handle it
  }
}`;

  code_4 = `import { Component, ElementRef, ViewChild, afterRender, signal } from '@angular/core';

@Component({
  selector: 'app-dialog',
  template: \`
    <button (click)="isOpen.set(true)">Open Dialog</button>

    @if (isOpen()) {
      <div class="dialog" role="dialog" aria-labelledby="dialog-title">
        <h2 id="dialog-title" #dialogTitle>Dialog Title</h2>
        <div class="dialog-content">Some content here</div>
        <button (click)="isOpen.set(false)">Close</button>
      </div>
    }
  \`
})
export class DialogComponent {
  isOpen = signal(false);
  @ViewChild('dialogTitle') dialogTitle!: ElementRef;

  constructor() {
    afterRender(() => {
      // If dialog is open, focus the title for accessibility
      if (this.isOpen() && this.dialogTitle) {
        this.dialogTitle.nativeElement.focus();
      }
    });
  }
}`;

  code_5 = `import { Component, afterRender, signal } from '@angular/core';

@Component({
  selector: 'app-optimized',
  template: \`
    <div>{{ data() }}</div>
    <button (click)="updateData()">Update</button>
  \`
})
export class OptimizedComponent {
  data = signal('Initial data');
  private needsLayoutUpdate = false;

  constructor() {
    afterRender(() => {
      // Only perform expensive operations when needed
      if (this.needsLayoutUpdate) {
        this.updateLayout();
        this.needsLayoutUpdate = false;
      }
    });
  }

  updateData() {
    this.data.set('Updated: ' + new Date().toISOString());
    this.needsLayoutUpdate = true;
  }

  private updateLayout() {
    // Expensive layout calculations or DOM measurements
    console.log('Performing expensive layout update');

    // Example: calculate layout metrics
    const elements = document.querySelectorAll('.layout-item');
    // ... complex calculations ...
  }
}`;

  constructor() {
    // For live demo, we would use afterRender, but we're just showing code examples here
    // The code below would be used in an actual implementation
    /*
    afterRender(() => {
      this.counter++;
      const now = performance.now();

      if (this.lastRenderTime > 0) {
        console.log(`Render #${this.counter} - Time since last render: ${(now - this.lastRenderTime).toFixed(2)}ms`);
      }

      this.lastRenderTime = now;
    });
    */
  }
}
