import { CommonModule } from '@angular/common';
import { Component, ViewChild, TemplateRef } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';
import { UnsubscribeService } from 'src/app/utils/services/unsubscribe.service';

@Component({
  selector: 'app-content-projection',
  standalone: true,
  imports: [CommonModule, HighlightModule],
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.scss']
})
export class ContentProjectionComponent extends UnsubscribeService {
  selectedTab = 'notes';

  @ViewChild('notesTemplate', { static: true }) notesTemplate!: TemplateRef<any>;
  @ViewChild('bestPracticesTemplate', { static: true }) bestPracticesTemplate!: TemplateRef<any>;
  @ViewChild('prosConsTemplate', { static: true }) prosConsTemplate!: TemplateRef<any>;
  @ViewChild('relatedTopicsTemplate', { static: true }) relatedTopicsTemplate!: TemplateRef<any>;

  basicExample = `// Card component definition
@Component({
  selector: 'app-card',
  template: \`
    <div class="card">
      <div class="card-header">
        <ng-content select="[card-header]"></ng-content>
      </div>
      <div class="card-body">
        <ng-content></ng-content>
      </div>
      <div class="card-footer">
        <ng-content select="[card-footer]"></ng-content>
      </div>
    </div>
  \`,
  styles: [\`
    .card {
      border: 1px solid #ddd;
      border-radius: 4px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      margin-bottom: 20px;
    }
    .card-header {
      padding: 10px 15px;
      background-color: #f8f9fa;
      border-bottom: 1px solid #ddd;
    }
    .card-body {
      padding: 15px;
    }
    .card-footer {
      padding: 10px 15px;
      background-color: #f8f9fa;
      border-top: 1px solid #ddd;
    }
  \`]
})
export class CardComponent { }`;

  usageExample = `// Using the card component
<app-card>
  <h2 card-header>Card Title</h2>
  <p>This is the main content of the card.</p>
  <p>You can add any elements here.</p>
  <div card-footer>
    <button>Action</button>
  </div>
</app-card>`;

  ngContainerExample = `// Using ng-container to avoid extra DOM elements
<app-tabset>
  <ng-container *ngFor="let tab of tabs">
    <app-tab [title]="tab.title">
      <ng-container *ngTemplateOutlet="tab.content"></ng-container>
    </app-tab>
  </ng-container>
</app-tabset>`;

  contentChildExample = `// Using ContentChild and ContentChildren
import { Component, ContentChild, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  selector: 'app-tabs',
  template: \`
    <div class="tabs-header">
      <ul>
        <li *ngFor="let tab of tabs"
            [class.active]="tab.active"
            (click)="selectTab(tab)">
          {{ tab.title }}
        </li>
      </ul>
    </div>
    <div class="tabs-body">
      <ng-content></ng-content>
    </div>
  \`
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  ngAfterContentInit() {
    // Set the first tab as active if none is active
    if (this.tabs.length && !this.tabs.find(tab => tab.active)) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(selectedTab: TabComponent) {
    this.tabs.forEach(tab => {
      tab.active = (tab === selectedTab);
    });
  }
}`;

  namedSlotsExample = `// Component with named slots
@Component({
  selector: 'app-dashboard-layout',
  template: \`
    <div class="layout">
      <header class="header">
        <ng-content select="[header]"></ng-content>
      </header>
      <aside class="sidebar">
        <ng-content select="[sidebar]"></ng-content>
      </aside>
      <main class="content">
        <ng-content select="[content]"></ng-content>
      </main>
      <footer class="footer">
        <ng-content select="[footer]"></ng-content>
      </footer>
    </div>
  \`
})
export class DashboardLayoutComponent { }

// Using the dashboard layout
<app-dashboard-layout>
  <div header>
    <app-header [user]="currentUser"></app-header>
  </div>
  <div sidebar>
    <app-navigation-menu [items]="menuItems"></app-navigation-menu>
  </div>
  <div content>
    <router-outlet></router-outlet>
  </div>
  <div footer>
    <app-footer [copyright]="copyrightText"></app-footer>
  </div>
</app-dashboard-layout>`;
}
