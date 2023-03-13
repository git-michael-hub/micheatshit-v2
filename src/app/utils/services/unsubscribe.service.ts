import { Injectable, OnDestroy } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnsubscribeService implements OnDestroy {
  protected toUnsubscribe$: ReplaySubject<boolean> = new ReplaySubject(1);

  ngOnDestroy(): void {
    this.toUnsubscribe();
  }

  toUnsubscribe(): void {
    if (!this.toUnsubscribe$) return;

    this.toUnsubscribe$?.next(true);
    this.toUnsubscribe$?.unsubscribe();
  }
}
