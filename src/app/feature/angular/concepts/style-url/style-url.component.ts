import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { UnsubscribeService } from 'src/app/utils/services/unsubscribe.service';

@Component({
  selector: 'app-style-url',
  standalone: true,
  imports: [CommonModule, HighlightModule],
  templateUrl: './style-url.component.html',
  styleUrls: ['./style-url.component.scss']
})
export class StyleUrlComponent extends UnsubscribeService implements OnInit {
  selectedTab = 1;

  // Template references
  @ViewChild('notesRef') notesRef!: TemplateRef<any>;
  @ViewChild('bestRef') bestRef!: TemplateRef<any>;
  @ViewChild('prosConsRef') prosConsRef!: TemplateRef<any>;
  @ViewChild('topicsRef') topicsRef!: TemplateRef<any>;

  // Code examples for styleUrl
  basicExampleCode: string = `// Basic styleUrl Example
import { Component } from '@angular/core';

@Component({
  selector: 'app-styled-card',
  standalone: true,
  template: \`
    <div class="card">
      <h2>{{ title }}</h2>
      <p>{{ content }}</p>
    </div>
  \`,
  // Using styleUrl instead of styleUrls array
  styleUrl: './styled-card.component.scss'
})
export class StyledCardComponent {
  title = 'Card Title';
  content = 'This is a styled card using styleUrl.';
}`;

  multipleStylesCode: string = `// Multiple Styles with styleUrl and styleUrls
import { Component } from '@angular/core';

@Component({
  selector: 'app-complex-card',
  standalone: true,
  template: \`
    <div class="complex-card">
      <header class="card-header">{{ title }}</header>
      <div class="card-body">{{ content }}</div>
      <footer class="card-footer">{{ footer }}</footer>
    </div>
  \`,
  // Primary styles in a single file with styleUrl
  styleUrl: './complex-card.component.scss',

  // Additional styles can still be added with styleUrls
  styleUrls: [
    '../shared/card-animations.scss',
    '../themes/dark-theme.scss'
  ]
})
export class ComplexCardComponent {
  title = 'Complex Card';
  content = 'This card uses both styleUrl and styleUrls.';
  footer = '© 2024';
}`;

  inlineWithStyleUrlCode: string = `// Combining Inline Styles with styleUrl
import { Component } from '@angular/core';

@Component({
  selector: 'app-hybrid-card',
  standalone: true,
  template: \`
    <div class="hybrid-card">
      <h2>{{ title }}</h2>
      <div class="content">{{ content }}</div>
    </div>
  \`,
  // Main styles from external file
  styleUrl: './hybrid-card.component.scss',

  // Critical or component-specific styles can be inline
  styles: [\`
    .hybrid-card {
      display: flex;
      flex-direction: column;
    }

    .content {
      font-style: italic;
    }
  \`]
})
export class HybridCardComponent {
  title = 'Hybrid Styling';
  content = 'This component uses both styleUrl and inline styles.';
}`;

  v19EnhancementsCode: string = `// Angular 19 styleUrl Enhancements
import { Component } from '@angular/core';

// 1. Dynamic styleUrl with conditional styling
@Component({
  selector: 'app-theme-aware',
  standalone: true,
  template: \`
    <div class="themed-component">
      <h3>{{ title }}</h3>
      <button (click)="toggleTheme()">Toggle Theme</button>
    </div>
  \`,
  // Dynamic styleUrl selection
  styleUrl: './theme-aware.{{theme}}.scss'
})
export class ThemeAwareComponent {
  title = 'Theme-Aware Component';
  theme = 'light';

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
  }
}

// 2. Relative path improvements
@Component({
  selector: 'app-relative-styles',
  standalone: true,
  template: \`<div>Relative StyleUrl Example</div>\`,
  // More intuitive relative path support
  styleUrl: '$styles/shared.scss'
})
export class RelativeStylesComponent {}

// 3. Enhanced bundle optimization
@Component({
  selector: 'app-optimized',
  standalone: true,
  template: \`<div>Optimized Component</div>\`,
  // Angular 19 automatically optimizes style bundling
  styleUrl: './optimized.component.scss'
})
export class OptimizedComponent {}`;

  constructor(private http: HttpClient) {
    super();
  }

  ngOnInit() {
    // Nothing to do here
  }
}
