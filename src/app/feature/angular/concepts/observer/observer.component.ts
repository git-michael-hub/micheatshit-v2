import { ChangeDetectionStrategy, Component, ViewChild, ElementRef } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObserverComponent {
  selectedTab = 1;

  // Code snippets
  code_1 = `// Basic Observer implementation
const observer = {
  next: value => console.log('Next:', value),
  error: err => console.error('Error:', err),
  complete: () => console.log('Complete!')
};

// Using the observer with an observable
import { of } from 'rxjs';
const observable = of(1, 2, 3);
observable.subscribe(observer);`;

  code_2 = `// Observer as callback functions
import { Observable } from 'rxjs';

const observable = new Observable(subscriber => {
  subscriber.next('Hello');
  subscriber.next('World');
  subscriber.complete();
});

// Pass separate callback functions for next, error, and complete
observable.subscribe(
  value => console.log('Next:', value),
  err => console.error('Error:', err),
  () => console.log('Complete!')
);`;

  code_3 = `// Using an Observer with HttpClient
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  // Component metadata
})
export class UserComponent {
  private http = inject(HttpClient);

  fetchUser(id: string) {
    const observer = {
      next: user => this.handleUser(user),
      error: err => this.handleError(err),
      complete: () => this.finishLoading()
    };

    this.http.get(\`/api/users/\${id}\`).subscribe(observer);
  }

  private handleUser(user: any) {
    // Process user data
  }

  private handleError(error: any) {
    // Handle errors
  }

  private finishLoading() {
    // Handle completion
  }
}`;

  // Template references
  @ViewChild('code1') code1!: ElementRef;
  @ViewChild('code2') code2!: ElementRef;
  @ViewChild('code3') code3!: ElementRef;
  @ViewChild('notesRef') notesRef!: ElementRef;
  @ViewChild('bestRef') bestRef!: ElementRef;
  @ViewChild('prosConsRef') prosConsRef!: ElementRef;
  @ViewChild('topicsRef') topicsRef!: ElementRef;
}
