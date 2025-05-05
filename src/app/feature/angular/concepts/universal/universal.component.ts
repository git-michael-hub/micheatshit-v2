import { CommonModule } from '@angular/common';
import { Component, ViewChild, TemplateRef } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';
import { UnsubscribeService } from 'src/app/utils/services/unsubscribe.service';

@Component({
  selector: 'app-universal',
  standalone: true,
  imports: [CommonModule, HighlightModule],
  templateUrl: './universal.component.html',
  styleUrls: ['./universal.component.scss']
})
export class UniversalComponent extends UnsubscribeService {
  selectedTab = 'notes';

  @ViewChild('notesTemplate', { static: true }) notesTemplate!: TemplateRef<any>;
  @ViewChild('bestPracticesTemplate', { static: true }) bestPracticesTemplate!: TemplateRef<any>;
  @ViewChild('prosConsTemplate', { static: true }) prosConsTemplate!: TemplateRef<any>;
  @ViewChild('relatedTopicsTemplate', { static: true }) relatedTopicsTemplate!: TemplateRef<any>;

  setupCode = `// Install Angular Universal
ng add @nguniversal/express-engine

// This creates the following files:
// - server.ts (Express server)
// - main.server.ts (Entry point for server-side app)
// - app.server.module.ts (Server module configuration)
// - tsconfig.server.json (TypeScript config for server)`;

  buildRunCode = `# Build the application for server-side rendering
ng build
ng run your-app-name:server

# Run the server
node dist/your-app-name/server/main.js`;

  serverModuleCode = `// app.server.module.ts
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}`;

  angularJsonCode = `// angular.json (partial)
{
  "projects": {
    "your-app-name": {
      "architect": {
        "build": { ... },
        "server": {
          "builder": "@angular-devkit/build-angular:server",
          "options": {
            "outputPath": "dist/your-app-name/server",
            "main": "server.ts",
            "tsConfig": "tsconfig.server.json"
          }
        }
      }
    }
  }
}`;

  isBrowserCode = `// Check if code is running in browser or server
import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({...})
export class MyComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      // Browser-only code (e.g., accessing window, localStorage)
      console.log('Running in browser');
    } else {
      // Server-only code
      console.log('Running on server');
    }
  }
}`;

  transferStateCode = `// Using TransferState to avoid duplicate HTTP requests
import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransferState, makeStateKey } from '@angular/platform-browser';

const USER_KEY = makeStateKey<any>('user');

@Component({...})
export class UserComponent implements OnInit {
  private http = inject(HttpClient);
  private transferState = inject(TransferState);

  user: any;

  ngOnInit() {
    // Try to get the state from server transfer
    if (this.transferState.hasKey(USER_KEY)) {
      this.user = this.transferState.get(USER_KEY, null);
      // We've used the transferred state, so remove it
      this.transferState.remove(USER_KEY);
    } else {
      // If not available in transfer state, make the API call
      this.http.get('/api/user').subscribe(user => {
        this.user = user;
        // On server side, this will be transferred to the client
        this.transferState.set(USER_KEY, user);
      });
    }
  }
}`;
}
