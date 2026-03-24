import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-rxjs-counter',
  imports: [AsyncPipe, NgFor],
  templateUrl: './rxjs-counter.component.html',
  styleUrl: './rxjs-counter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RxjsCounterComponent {
  count$ = new BehaviorSubject<number>(0);
  actions$ = new BehaviorSubject<string[]>([]);

  increment() {
    const newValue = this.count$.value + 1;
    this.count$.next(newValue);

    this.actions$.next([...this.actions$.value, 'INCREMENT']);
  }

  reset() {
    this.count$.next(0);
    this.actions$.next([]);
  }
}
