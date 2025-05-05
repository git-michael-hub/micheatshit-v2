import { CommonModule } from '@angular/common';
import { Component, ViewChild, TemplateRef } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';
import { UnsubscribeService } from 'src/app/utils/services/unsubscribe.service';

@Component({
  selector: 'app-view-hierarchy',
  standalone: true,
  imports: [CommonModule, HighlightModule],
  templateUrl: './view-hierarchy.component.html',
  styleUrls: ['./view-hierarchy.component.scss']
})
export class ViewHierarchyComponent extends UnsubscribeService {
  selectedTab = 'notes';

  @ViewChild('notesTemplate', { static: true }) notesTemplate!: TemplateRef<any>;
  @ViewChild('bestPracticesTemplate', { static: true }) bestPracticesTemplate!: TemplateRef<any>;
  @ViewChild('prosConsTemplate', { static: true }) prosConsTemplate!: TemplateRef<any>;
  @ViewChild('relatedTopicsTemplate', { static: true }) relatedTopicsTemplate!: TemplateRef<any>;

  componentExampleCode = `@Component({
  selector: 'app-parent',
  template: \`
    <h1>Parent Component</h1>
    <app-child></app-child>
  \`
})
export class ParentComponent {}

@Component({
  selector: 'app-child',
  template: \`
    <h2>Child Component</h2>
    <app-grandchild></app-grandchild>
  \`
})
export class ChildComponent {}

@Component({
  selector: 'app-grandchild',
  template: \`<h3>Grandchild Component</h3>\`
})
export class GrandchildComponent {}`

  viewTreeCode = `// Component View Tree Example
<app-parent> <!-- HostView for ParentComponent -->
  #shadow-root (open)
    <h1>Parent Component</h1> <!-- ElementNode -->
    <app-child> <!-- ElementNode & Host for ChildComponent -->
      #shadow-root (open)
        <h2>Child Component</h2> <!-- ElementNode -->
        <app-grandchild> <!-- ElementNode & Host for GrandchildComponent -->
          #shadow-root (open)
            <h3>Grandchild Component</h3> <!-- ElementNode -->
        </app-grandchild>
    </app-child>
</app-parent>`;

  embeddedViewsCode = `@Component({
  selector: 'app-example',
  template: \`
    <h1>View Container Example</h1>

    <!-- Host View (Component View) -->

    <!-- Embedded View 1: Created from structural directive -->
    <div *ngIf="showContent">
      <p>This content is conditionally shown</p>
    </div>

    <!-- Embedded View 2: Created from ng-template -->
    <ng-container *ngTemplateOutlet="myTemplate"></ng-container>

    <ng-template #myTemplate>
      <p>This content comes from a template</p>
    </ng-template>

    <!-- Dynamic Container -->
    <div #container></div>
  \`
})
export class ExampleComponent implements AfterViewInit {
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  @ViewChild('myTemplate') myTemplate!: TemplateRef<any>;

  showContent = true;

  ngAfterViewInit() {
    // Programmatically create and insert an embedded view
    const embeddedView = this.myTemplate.createEmbeddedView(null);
    this.container.insert(embeddedView);
  }
}`

  viewContainerRefCode = `import { Component, ViewChild, ViewContainerRef,
  TemplateRef, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-dynamic-content',
  template: \`
    <div class="container">
      <button (click)="loadTemplate()">Load Template</button>
      <button (click)="loadComponent()">Load Component</button>

      <!-- This div will be our view container -->
      <div #dynamicContainer></div>

      <ng-template #sampleTemplate>
        <div class="template-content">
          <h3>Dynamic Template Content</h3>
          <p>This content was loaded dynamically.</p>
        </div>
      </ng-template>
    </div>
  \`
})
export class DynamicContentComponent {
  @ViewChild('dynamicContainer', { read: ViewContainerRef })
  container!: ViewContainerRef;

  @ViewChild('sampleTemplate')
  template!: TemplateRef<any>;

  constructor(private cfr: ComponentFactoryResolver) {}

  loadTemplate() {
    // Clear previous content
    this.container.clear();

    // Create an embedded view from the template
    const view = this.template.createEmbeddedView(null);

    // Insert the view into the container
    this.container.insert(view);
  }

  loadComponent() {
    // Clear previous content
    this.container.clear();

    // Create component factory and component instance
    const factory = this.cfr.resolveComponentFactory(DynamicComponent);
    const componentRef = this.container.createComponent(factory);

    // We can interact with the component instance
    componentRef.instance.message = 'Hello from parent!';
  }
}`
}
