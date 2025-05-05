import { ChangeDetectionStrategy, Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BootstrapComponent {
  selectedTab = 1;

  @ViewChild('code1') code1?: ElementRef;
  @ViewChild('code2') code2?: ElementRef;
  @ViewChild('code3') code3?: ElementRef;
  @ViewChild('code4') code4?: ElementRef;
  @ViewChild('code5') code5?: ElementRef;

  // Code examples for bootstrapping
  mainTsCode = `// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// Bootstrap with standalone components and application config
bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));`;

  appConfigCode = `// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideClientHydration(),
    provideAnimations()
  ]
};`;

  appComponentCode = `// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  template: \`
    <main>
      <h1>Angular 19 Application</h1>
      <router-outlet></router-outlet>
    </main>
  \`
})
export class AppComponent {
  title = 'angular19-app';
}`;

  zonelessBootstrapCode = `// Angular 19 zoneless bootstrapping
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {
  ApplicationConfig,
  ɵNoopNgZone,
  provideZoneChangeDetection
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideZoneChangeDetection({
      // Use signal-based change detection without Zone.js
      ngZoneInjector: () => new ɵNoopNgZone(),
      eventCoalescing: true
    })
  ]
};

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));`;

  serverBootstrapCode = `// Angular 19 server-side rendering bootstrap
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideServerRendering } from '@angular/platform-server';

const serverConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideServerRendering()
  ]
};

bootstrapApplication(AppComponent, serverConfig)
  .catch(err => console.error(err));`;
}
