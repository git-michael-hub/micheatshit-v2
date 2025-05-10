import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-web-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './web-component.component.html',
  styleUrls: ['./web-component.component.scss']
})
export class WebComponentComponent {
  selectedTab = 1;

  // Code examples for highlighting
  code_16 = 'npm install @angular/elements';

  code_17 = `// app.module.ts or standalone component file
import { createCustomElement } from '@angular/elements';
import { MyComponent } from './my.component';

// In NgModule or bootstrap function
const customElement = createCustomElement(MyComponent, { injector });
customElements.define('my-element', customElement);`;

  code_18 = `// modern signal-based component
@Component({
  selector: 'app-counter',
  standalone: true,
  template: \`<button (click)="increment()">Count: {{ '{' }}{{ '{' }} count() {{ '}' }}{{ '}' }}</button>\`,
})
export class CounterComponent {
  count = signal(0);
  increment() {
    this.count.update(value => value + 1);
  }
}`;

  code_20 = `@Component({
  selector: 'app-data-display',
  standalone: true,
  template: \`<div>{{ '{' }}{{ '{' }} formattedData() {{ '}' }}{{ '}' }}</div>\`,
})
export class DataDisplayComponent {
  data = signal<any>(null);
  formattedData = computed(() => {
    const currentData = this.data();
    return currentData ? JSON.stringify(currentData, null, 2) : 'No data';
  });
}`;

  code_21 = `@Component({
  selector: 'app-my-element',
  template: \`<div class="container">{{ '{' }}{{ '{' }} content {{ '}' }}{{ '}' }}</div>\`,
  styles: [\`
    .container { padding: 15px; border: 1px solid #ccc; }
  \`],
  encapsulation: ViewEncapsulation.ShadowDom, // Use ShadowDOM for full isolation
  // Alternatives: ViewEncapsulation.Emulated or ViewEncapsulation.None
})`;
}
