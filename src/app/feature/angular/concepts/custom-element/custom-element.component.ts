import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { CopyDirective } from '../../../../utils/directives/copy.directive';

@Component({
  selector: 'app-custom-element',
  templateUrl: './custom-element.component.html',
  styleUrls: ['./custom-element.component.scss'],
})
export class CustomElementComponent {
  selectedTab = 1;

  // Sample code snippets for the component
  code_1 = `
// Step 1: Create a component to be converted to custom element
import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello-world',
  template: \`<h1>Hello {{name}}!</h1>\`,
  styles: [\`h1 { color: #3498db; }\`]
})
export class HelloWorldComponent {
  @Input() name: string = 'World';
}
  `;

  code_2 = `
// Step 2: Create a module for the custom element
import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { HelloWorldComponent } from './hello-world.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [HelloWorldComponent],
  entryComponents: [HelloWorldComponent]
})
export class HelloElementModule {
  constructor(private injector: Injector) {
    // Convert component to custom element
    const helloElement = createCustomElement(HelloWorldComponent, { injector });

    // Register the custom element with the browser
    customElements.define('hello-element', helloElement);
  }
}
  `;

  code_3 = `
// With Standalone Components in Angular 19
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { HelloWorldComponent } from './hello-world.component';

// No module needed for the component itself (it's standalone)
// Just register it as a custom element
export function registerHelloElement(injector: Injector) {
  const helloElement = createCustomElement(HelloWorldComponent, { injector });
  customElements.define('hello-element', helloElement);
}
  `;

  code_4 = `
<!-- Usage in HTML -->
<!DOCTYPE html>
<html>
<head>
  <title>Using Custom Elements</title>
</head>
<body>
  <!-- Use the custom element like any HTML element -->
  <hello-element name="Angular 19"></hello-element>

  <!-- You can also set attributes dynamically -->
  <script>
    const element = document.createElement('hello-element');
    element.setAttribute('name', 'Dynamic Content');
    document.body.appendChild(element);
  </script>
</body>
</html>
  `;
}
