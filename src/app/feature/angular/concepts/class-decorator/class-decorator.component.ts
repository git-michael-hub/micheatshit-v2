import { ChangeDetectionStrategy, Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { UnsubscribeService } from 'src/app/utils/services/unsubscribe.service';

@Component({
  selector: 'app-class-decorator',
  standalone: true,
  imports: [CommonModule, HighlightModule],
  templateUrl: './class-decorator.component.html',
  styleUrls: ['./class-decorator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClassDecoratorComponent extends UnsubscribeService {

  selectedTab = 1;

  @ViewChild('componentCodeEl') componentCodeEl?: ElementRef;
  @ViewChild('directiveCodeEl') directiveCodeEl?: ElementRef;
  @ViewChild('injectableCodeEl') injectableCodeEl?: ElementRef;
  @ViewChild('pipeCodeEl') pipeCodeEl?: ElementRef;
  @ViewChild('ngModuleCodeEl') ngModuleCodeEl?: ElementRef;
  @ViewChild('customDecoratorCodeEl') customDecoratorCodeEl?: ElementRef;

  // Code examples
  componentCode = `@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  \`,
  styles: [\`
    h1 { color: #336699; }
    p { font-size: 16px; }
  \`]
})
export class ExampleComponent {
  title = 'Example Component';
  description = 'This is a simple component using the @Component decorator';
}`;

  directiveCode = `@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input() appHighlight = '';
  @Input() defaultColor = 'yellow';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}`;

  injectableCode = `@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: string[] = [];

  addItem(item: string): void {
    this.data.push(item);
  }

  getItems(): string[] {
    return [...this.data];
  }
}`;

  pipeCode = `@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number = 25, completeWords: boolean = false, ellipsis: string = '...'): string {
    if (!value) return '';

    if (value.length <= limit) {
      return value;
    }

    if (completeWords) {
      limit = value.substring(0, limit).lastIndexOf(' ');
    }

    return value.substring(0, limit) + ellipsis;
  }
}`;

  ngModuleCode = `@NgModule({
  declarations: [
    // Components, directives, and pipes that belong to this module
    AppComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    // Other modules this module depends on
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    // Services and other providers
    AuthService,
    { provide: API_URL, useValue: 'https://api.example.com' }
  ],
  bootstrap: [AppComponent] // Root component to bootstrap
})
export class AppModule { }`;

  customDecoratorCode = `// Creating a custom class decorator
export function LogClass() {
  return function(target: any) {
    // Original constructor
    const original = target;

    // New constructor function
    const newConstructor: any = function(...args: any[]) {
      console.log(\`Creating instance of \${target.name}\`);
      return new original(...args);
    }

    // Copy prototype
    newConstructor.prototype = original.prototype;

    // Return modified constructor
    return newConstructor;
  };
}

// Using the custom decorator
@LogClass()
export class LoggedClass {
  constructor() {
    console.log('LoggedClass instance created');
  }

  doSomething() {
    console.log('Doing something');
  }
}`;

  ngOnInit() {
    // Any initialization code if needed
  }
}
