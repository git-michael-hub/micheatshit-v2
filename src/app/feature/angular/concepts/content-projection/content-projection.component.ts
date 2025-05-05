import { CommonModule } from '@angular/common';
import { Component, ViewChild, TemplateRef, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';
import { UnsubscribeService } from 'src/app/utils/services/unsubscribe.service';

@Component({
  selector: 'app-content-projection',
  standalone: true,
  imports: [CommonModule, HighlightModule],
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.scss'],
  providers: [UnsubscribeService]
})
export class ContentProjectionComponent implements OnInit, AfterViewInit {
  selectedTab = 'notes';

  @ViewChild('notesTemplate', { static: true }) notesTemplate!: TemplateRef<any>;
  @ViewChild('bestPracticesTemplate', { static: true }) bestPracticesTemplate!: TemplateRef<any>;
  @ViewChild('prosConsTemplate', { static: true }) prosConsTemplate!: TemplateRef<any>;
  @ViewChild('relatedTopicsTemplate', { static: true }) relatedTopicsTemplate!: TemplateRef<any>;

  @ViewChild('basicExampleEl', { static: false }) basicExampleEl!: ElementRef;
  @ViewChild('usageExampleEl', { static: false }) usageExampleEl!: ElementRef;
  @ViewChild('contentChildExampleEl', { static: false }) contentChildExampleEl!: ElementRef;
  @ViewChild('ngContainerExampleEl', { static: false }) ngContainerExampleEl!: ElementRef;

  // Visibility state for code examples
  showBasicExample = false;
  showUsageExample = false;
  showContentChildExample = false;
  showNgContainerExample = false;

  // Code example strings for syntax highlighting
  basicExample = '';
  usageExample = '';
  contentChildExample = '';
  ngContainerExample = '';

  constructor(private unsub: UnsubscribeService) {}

  ngOnInit(): void {
    this.initializeCodeExamples();
  }

  ngAfterViewInit(): void {
    // No need to update DOM element content as we're using the string variables directly
  }

  // Toggle methods for code examples
  toggleBasicExample(): void {
    this.showBasicExample = !this.showBasicExample;
  }

  toggleUsageExample(): void {
    this.showUsageExample = !this.showUsageExample;
  }

  toggleContentChildExample(): void {
    this.showContentChildExample = !this.showContentChildExample;
  }

  toggleNgContainerExample(): void {
    this.showNgContainerExample = !this.showNgContainerExample;
  }

  private initializeCodeExamples(): void {
    this.basicExample = `// card.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  template: \`
    <div class="card">
      <div class="card-body">
        <ng-content></ng-content>
      </div>
    </div>
  \`,
  styleUrls: ['./card.component.scss']
})
export class CardComponent {}`;

    this.usageExample = `<!-- Using the card component -->
<app-card>
  <h2 card-header>Card Title</h2>
  <p>This is the main content of the card.</p>
  <p>You can add any elements here.</p>
  <div card-footer>
    <button>Action</button>
  </div>
</app-card>`;

    this.contentChildExample = `// Using ContentChild and ContentChildren
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

    this.ngContainerExample = `<!-- Deferred content projection with @defer -->
<app-dashboard>
  <ng-container dashboard-main>
    <h2>Dashboard Overview</h2>

    @defer (on viewport) {
      <app-heavy-chart [data]="chartData"></app-heavy-chart>
    } @loading {
      <div class="loading-placeholder">Chart loading...</div>
    }
  </ng-container>

  <ng-container dashboard-sidebar>
    @defer (when sidebarVisible) {
      <app-sidebar-navigation [items]="navItems"></app-sidebar-navigation>
    }
  </ng-container>
</app-dashboard>`;
  }
}
