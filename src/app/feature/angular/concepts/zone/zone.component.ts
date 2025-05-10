import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-zone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss']
})
export class ZoneComponent {
  selectedTab = 1;

  // Code examples for highlighting
  code_16 = `import 'zone.js';  // Included with Angular CLI projects`;

  code_17 = `// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    // Using Zone.js for change detection
  ]
});`;

  code_18 = `// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideZoneChangeDetection } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    provideZoneChangeDetection() // Explicitly use Zone.js for change detection
  ]
});`;

  code_20 = `// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideZoneChangeDetection } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({
      eventCoalescing: true, // Optimize events
      runCoalescing: true    // Batch update operations
    })
  ]
};`;

  code_21 = `@Component({
  // ...
})
export class MyComponent {
  constructor() {
    // Access current zone
    const currentZone = Zone.current;

    // Run code in a new zone
    Zone.current.fork({
      name: 'custom-zone',
      onInvokeTask: (delegate, current, target, task, applyThis, applyArgs) => {
        console.log('Task is about to be invoked:', task.type);
        delegate.invokeTask(target, task, applyThis, applyArgs);
        console.log('Task invocation completed');
      }
    }).run(() => {
      // Code executed in the custom zone
      console.log('Running in custom zone');
      setTimeout(() => console.log('Timer callback'), 100);
    });
  }
}`;
}
