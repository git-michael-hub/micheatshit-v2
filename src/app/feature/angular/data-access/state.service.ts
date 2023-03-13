import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, take } from 'rxjs';

export interface AppState {
  // users: User[];
  // selectedUser: User;
  bottomPills: {name: string}[];
}


@Injectable({
  providedIn: 'root'
})
export class StateService {
  private _state = new BehaviorSubject<AppState>({
    bottomPills: []
  });
  state$ = this._state.asObservable();
  state = {};

  constructor() {
    this.state$.subscribe(state => {
      console.log('state', state);
      this.state = state;
    });
   }

  private setState(newState: Partial<AppState>) {
    const currentState = this._state.getValue();
    this._state.next({ ...currentState, ...newState });
  }

  getBottomPills(): Observable<{name: string}[]> {
    return this.state$.pipe(
      filter(state => !!state.bottomPills),
      map(state => state.bottomPills)
    );
  }

  addBottomPills(pill: {name: string}) {
    console.log('addBottomPills:', pill)
    this.getBottomPills()
      .pipe(take(1))
      .subscribe(statePills => {
        console.log('statePills:', statePills)
        // this.setState({ bottomPills: [...statePills, pill] });

        if (statePills.includes(pill)) return;

        if (statePills.length > 5) statePills.pop();
        this.setState({ bottomPills: [ ...statePills, pill ] });
      });
  }

  removeBottomPills(pillId: string) {
    console.log('removeBottomPills:', pillId);
    this.getBottomPills()
      .pipe(take(1))
      .subscribe((statePills: {name: string}[]) => {
        console.log('statePills:', statePills)

        // if (statePills.length <= 5) {
        //   statePills.pop();
        //   this.setState({ bottomPills: [ ...statePills, pill ] });
        // }
      });
  }
}
