import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { UnsubscribeService } from 'src/app/utils/services/unsubscribe.service';
import { catchError, of, takeUntil } from 'rxjs';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule, HighlightModule],
  templateUrl: './control-flow.component.html',
  styleUrls: ['./control-flow.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlFlowComponent extends UnsubscribeService implements OnInit {
  selectedTab = 1;

  // Define template references for tabs
  bestRef: any;
  prosConsRef: any;
  topicsRef: any;

  // Code examples
  code_1 = `<!-- Conditional Rendering with @if -->
<div>
  @if (user.isAdmin) {
    <admin-dashboard></admin-dashboard>
  } @else if (user.isManager) {
    <manager-dashboard></manager-dashboard>
  } @else {
    <user-dashboard></user-dashboard>
  }
</div>

<!-- Compared to traditional ngIf -->
<!-- <div *ngIf="user.isAdmin">
  <admin-dashboard></admin-dashboard>
</div>
<div *ngIf="!user.isAdmin && user.isManager">
  <manager-dashboard></manager-dashboard>
</div>
<div *ngIf="!user.isAdmin && !user.isManager">
  <user-dashboard></user-dashboard>
</div> -->`;

  code_2 = `<!-- Iterating with @for -->
<ul>
  @for (item of items; track item.id) {
    <li>{{ item.name }}</li>
  } @empty {
    <li>No items available</li>
  }
</ul>

<!-- Variables available in @for -->
<ul>
  @for (item of items; track item.id; let i = $index, first = $first, last = $last, even = $even, odd = $odd, count = $count) {
    <li [class.highlighted]="first || last"
        [class.striped]="even">
      Item #{{ i + 1 }} of {{ count }}: {{ item.name }}
    </li>
  }
</ul>`;

  code_3 = `<!-- Switch statement with @switch -->
<div>
  @switch (userRole) {
    @case ('admin') {
      <admin-panel></admin-panel>
    }
    @case ('editor') {
      <editor-tools></editor-tools>
    }
    @case ('viewer') {
      <viewer-display></viewer-display>
    }
    @default {
      <guest-view></guest-view>
    }
  }
</div>

<!-- Compared to traditional ngSwitch -->
<!-- <div [ngSwitch]="userRole">
  <admin-panel *ngSwitchCase="'admin'"></admin-panel>
  <editor-tools *ngSwitchCase="'editor'"></editor-tools>
  <viewer-display *ngSwitchCase="'viewer'"></viewer-display>
  <guest-view *ngSwitchDefault></guest-view>
</div> -->`;

  code_4 = `<!-- Lazy loading with @defer -->
<section>
  <header>Always rendered content</header>

  @defer {
    <!-- Heavy component only loaded when visible or on trigger -->
    <heavy-data-grid [data]="hugeDataset"></heavy-data-grid>
  } @loading {
    <p>Loading data grid...</p>
  } @error {
    <p>Error loading component</p>
  } @placeholder {
    <p>Data grid will appear here</p>
  }
</section>

<!-- Defer with when condition -->
<div>
  @defer (when isLoggedIn) {
    <user-profile></user-profile>
  }
</div>

<!-- Defer with prefetching -->
<div>
  @defer (on viewport; prefetch on idle) {
    <feedback-form></feedback-form>
  }
</div>`;

  constructor(private http: HttpClient) {
    super();
  }

  ngOnInit(): void {
    // Load code examples from text files
    this.http.get('assets/codes/control-flow/notes/code_1.txt', { responseType: 'text' })
      .pipe(
        takeUntil(this.toUnsubscribe$),
        catchError(() => of(this.code_1))
      )
      .subscribe(code => this.code_1 = code);

    this.http.get('assets/codes/control-flow/notes/code_2.txt', { responseType: 'text' })
      .pipe(
        takeUntil(this.toUnsubscribe$),
        catchError(() => of(this.code_2))
      )
      .subscribe(code => this.code_2 = code);

    this.http.get('assets/codes/control-flow/notes/code_3.txt', { responseType: 'text' })
      .pipe(
        takeUntil(this.toUnsubscribe$),
        catchError(() => of(this.code_3))
      )
      .subscribe(code => this.code_3 = code);

    this.http.get('assets/codes/control-flow/notes/code_4.txt', { responseType: 'text' })
      .pipe(
        takeUntil(this.toUnsubscribe$),
        catchError(() => of(this.code_4))
      )
      .subscribe(code => this.code_4 = code);
  }
}
