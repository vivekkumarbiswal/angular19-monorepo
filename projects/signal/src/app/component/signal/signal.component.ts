import { NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [NgFor],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalComponent {
  actions = signal<string[]>([]);
  counter = signal(0);
  doubleCounter = computed(() => this.counter() * 2);

  firstName = signal('Vivek');
  middleName = signal<string>('Kumar');
  lastName = signal<string>('Biswal');

  changeName = 'Angular';

  constructor() {
    effect(() => console.log(this.counter()));

    const value = this.firstName();

    setTimeout(() => {
      // debugger;
      this.changeName = 'React';
      this.firstName.set('Rahul');
    }, 5000);
  }

  increment() {
    // this.counter.update((oldCounter) => oldCounter + 1);
    // this.counter.set(5);
    this.counter.set(this.counter() + 1); // Same as update
    this.actions.set([...this.actions(), 'INCREMENT']);
    // this.actions.push('INCREMENT');
  }

  decrement() {
    this.counter.update((oldValue) => oldValue - 1);
    this.actions.update((oldActions) => [...oldActions, 'DECREMENT']);
    // this.actions.push('DECREMENT');
  }
}
