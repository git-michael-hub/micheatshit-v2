import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subject, takeUntil } from 'rxjs';
import { technologies } from '../../app.value';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  private currentRoute!: string;
  private selectedTech!: string;
  items!: {};
  private unsubscribe$ = new Subject<void>();
  private technologies = technologies;

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(() => {
        this.currentRoute = this.router.url;
        console.log(this.router)
        // console.log(this.currentRoute.split('/')[1]);
        this.selectedTech = this.currentRoute.split('/')[1];

        if (this.selectedTech) console.log(this.technologies)
        console.log(this.selectedTech)

        switch (this.selectedTech) {
          case 'angular':
            this.items = this.technologies.angular.items;
            break;
          case 'angular19':
            this.items = this.technologies.angular19.items;
            break;
          case 'rxjs':
            this.items = this.technologies.rxjs.items;
            break;
        }

        console.log(this.items);
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
