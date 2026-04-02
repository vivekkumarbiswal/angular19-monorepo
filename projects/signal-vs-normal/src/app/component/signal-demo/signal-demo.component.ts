import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  signal,
} from '@angular/core';

interface LogEntry {
  id: number;
  message: string;
  type: 'action' | 'render' | 'computed' | 'effect';
}

@Component({
  selector: 'app-signal-demo',
  imports: [],
  templateUrl: './signal-demo.component.html',
  styleUrl: './signal-demo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalDemoComponent {
  // ✅ Signals — Angular tracks every read & re-renders on every write
  counter = signal(0);
  name = signal('Vivek');
  renderCount = signal(0);

  // computed() derives a value — recalculates only when counter changes
  doubleCounter = computed(() => this.counter() * 2);
  counterStatus = computed(() => {
    const c = this.counter();
    if (c === 0) return '🟡 Zero';
    return c > 0 ? `🟢 Positive (${c})` : `🔴 Negative (${c})`;
  });

  log = signal<LogEntry[]>([]);
  private logId = 0;

  constructor() {
    this.addLog('Component initialized', 'render');
    this.renderCount.update(v => v + 1);

    // effect() runs whenever any signal it reads changes
    effect(() => {
      const val = this.counter(); // tracked dependency
      if (val !== 0) {
        this.addLog(`effect() fired: counter is now ${val}`, 'effect');
      }
    });
  }

  increment() {
    this.counter.update(v => v + 1);
    this.renderCount.update(v => v + 1);
    this.addLog(`counter.update() → ${this.counter()} ✅ UI updated instantly!`, 'action');
  }

  decrement() {
    this.counter.update(v => v - 1);
    this.renderCount.update(v => v + 1);
    this.addLog(`counter.update() → ${this.counter()} ✅ UI updated instantly!`, 'action');
  }

  changeName() {
    const next = this.name() === 'Vivek' ? 'Angular Dev' : 'Vivek';
    this.name.set(next);
    this.renderCount.update(v => v + 1);
    this.addLog(`name.set("${next}") ✅ UI updated instantly!`, 'action');
  }

  resetCounter() {
    this.counter.set(0);
    this.renderCount.update(v => v + 1);
    this.addLog('counter.set(0) → reset ✅', 'action');
  }

  clearLog() {
    this.log.set([]);
  }

  private addLog(message: string, type: LogEntry['type']) {
    this.log.update(entries =>
      [{ id: ++this.logId, message, type }, ...entries].slice(0, 8)
    );
  }
}
