import { Component, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-decorator',
  templateUrl: './decorator.component.html',
  styleUrls: ['./decorator.component.scss']
})
export class DecoratorComponent {
  selectedTab = 1;

  @ViewChild('notesRef') notesRef!: TemplateRef<any>;
  @ViewChild('bestRef') bestRef!: TemplateRef<any>;
  @ViewChild('prosConsRef') prosConsRef!: TemplateRef<any>;
  @ViewChild('topicsRef') topicsRef!: TemplateRef<any>;

  // Sample code snippets for the component
  code_1 = `
// Component Decorator Example
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  template: '<h1>&#123;&#123; title &#125;&#125;</h1>',
  styles: ['h1 { color: blue; }']
})
export class MyComponent {
  title = 'Hello from Component';
}
  `;

  code_2 = `
// Directive Decorator Example
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}
  `;

  code_3 = `
// Pipe Decorator Example
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone: true
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }
}
  `;

  code_4 = `
// Injectable Decorator Example
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Angular 19 improved support for tree-shakable providers
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any[]> {
    return this.http.get<any[]>('api/data');
  }
}
  `;

  code_5 = `
// Input and Output Decorators Example
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: \`
    <div>
      <h2>&#123;&#123; title &#125;&#125;</h2>
      <button (click)="onClick()">Click me!</button>
    </div>
  \`,
  standalone: true
})
export class ChildComponent {
  @Input() title: string = '';
  @Output() buttonClicked = new EventEmitter<void>();

  onClick() {
    this.buttonClicked.emit();
  }
}
  `;

  code_6 = `
// HostListener and HostBinding Decorators
import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appInteractive]',
  standalone: true
})
export class InteractiveDirective {
  @HostBinding('style.color') color: string = 'black';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.color = 'red';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.color = 'black';
  }
}
  `;

  code_7 = `
// Angular 19 Signal Inputs
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-signal-demo',
  template: \`
    <div>&#123;&#123; name() &#125;&#125; - &#123;&#123; age() &#125;&#125;</div>
  \`,
  standalone: true
})
export class SignalDemoComponent {
  // Signal inputs in Angular 19
  name = input<string>('Default Name');
  age = input.required<number>();
}
  `;

  code_8 = `
// Angular 19 Input Transform
import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-transform-demo',
  template: \`<p>Price: &#123;&#123; price() | currency &#125;&#125;</p>\`,
  standalone: true
})
export class TransformDemoComponent {
  // Transform input when it's set
  price = input<number>(0, {
    transform: (value: string | number) =>
      typeof value === 'string' ? parseFloat(value) : value
  });
}
  `;
}
