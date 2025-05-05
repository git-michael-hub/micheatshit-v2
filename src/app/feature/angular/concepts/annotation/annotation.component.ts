import { ChangeDetectionStrategy, Component, ViewChild, ElementRef } from '@angular/core';
import { UnsubscribeService } from 'src/app/utils/services/unsubscribe.service';
import { HttpClient } from '@angular/common/http';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-annotation',
  templateUrl: './annotation.component.html',
  styleUrls: ['./annotation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnnotationComponent extends UnsubscribeService {
  selectedTab = 1;

  @ViewChild('code1') code1?: ElementRef;
  @ViewChild('code2') code2?: ElementRef;
  @ViewChild('code3') code3?: ElementRef;
  @ViewChild('code4') code4?: ElementRef;
  @ViewChild('code5') code5?: ElementRef;

  componentCode = `@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="profile">
      <h2>{{ profile.name }}</h2>
      <p>{{ profile.bio }}</p>
    </div>
  \`
})
export class ProfileComponent {
  @Input() profile!: UserProfile;
  @Output() profileUpdated = new EventEmitter<UserProfile>();

  // Host binding example
  @HostBinding('class.premium-user')
  get isPremium() { return this.profile.subscription === 'premium'; }

  // Host listener example
  @HostListener('click')
  onClick() {
    console.log('Profile component clicked');
  }
}`;

  directiveCode = `@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  // Property annotations using @Input with transform function
  @Input({transform: (value: string) => value || 'yellow'})
  highlightColor = 'yellow';

  // Using @HostBinding to bind to host properties
  @HostBinding('style.backgroundColor')
  backgroundColor!: string;

  // Using @HostListener to respond to events
  @HostListener('mouseenter')
  onMouseEnter() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.backgroundColor = '';
  }
}`;

  injectableCode = `@Injectable({
  providedIn: 'root',
  // Angular 19 adds support for function-based providers
  factory: () => new LoggingService(inject(ErrorHandler))
})
export class LoggingService {
  constructor(
    // Parameter annotations with @Inject
    @Inject(ERROR_HANDLER) private errorHandler: ErrorHandler,
    // Optional dependency injection
    @Optional() @Inject(LOGGING_CONFIG) private config?: LoggingConfig
  ) {}

  log(message: string): void {
    console.log(\`[\${this.config?.logLevel || 'INFO'}] \${message}\`);
  }
}`;

  signalInputCode = `@Component({
  selector: 'app-counter',
  standalone: true,
  template: \`
    <div>Count: {{ count() }}</div>
    <button (click)="increment()">Increment</button>
  \`
})
export class CounterComponent {
  // Using the new signal-based input in Angular 19
  @Input({alias: 'initialValue'})
  count = input<number>(0);

  // Model input with validation and transform
  @Model()
  value = model<number>({
    initialValue: 0,
    transform: (v: number) => Math.max(0, v)
  });

  increment() {
    this.value.update(v => v + 1);
  }
}`;

  pipeCode = `@Pipe({
  name: 'fileSize',
  standalone: true,
  pure: true
})
export class FileSizePipe implements PipeTransform {
  transform(bytes: number, decimals: number = 2): string {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
}`;

  constructor(private http: HttpClient) {
    super();
  }

  ngOnInit() {
    // We're using inline code examples, but you can load them from files if needed
  }
}
