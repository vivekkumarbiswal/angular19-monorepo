import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal-counter',
  imports: [NgFor],
  templateUrl: './signal-counter.component.html',
  styleUrl: './signal-counter.component.css',
})
export class SignalCounterComponent {
  count = signal(0);
  actions = signal<string[]>([]);

  increment() {
    this.count.update((v) => v + 1);
    this.actions.update((arr) => [...arr, 'INCREMENT']);
  }

  reset() {
    this.count.set(0);
    this.actions.set([]);
  }
}
