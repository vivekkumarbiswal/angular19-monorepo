import { ChangeDetectionStrategy, Component } from '@angular/core';

interface LogEntry {
  id: number;
  message: string;
  type: 'action' | 'render';
}

@Component({
  selector: 'app-normal-var',
  imports: [],
  templateUrl: './normal-var.component.html',
  styleUrl: './normal-var.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NormalVarComponent {
  // ❌ Plain variable — Angular OnPush will NOT track changes
  counter = 0;
  name = 'Vivek';
  renderCount = 0;
  log: LogEntry[] = [];
  private logId = 0;

  constructor() {
    this.addLog('Component initialized', 'render');
    this.renderCount++;
  }

  increment() {
    this.counter++;
    this.addLog(`counter++ → now ${this.counter} (but UI won't update!)`, 'action');
    // No re-render triggered — OnPush ignores plain property mutations
  }

  decrement() {
    this.counter--;
    this.addLog(`counter-- → now ${this.counter} (but UI won't update!)`, 'action');
  }

  changeName() {
    this.name = this.name === 'Vivek' ? 'Angular Dev' : 'Vivek';
    this.addLog(`name = "${this.name}" (UI is STALE!)`, 'action');
  }

  forceRender() {
    // Trick: trigger a DOM event from template which causes OnPush to run CD for this component
    this.renderCount++;
    this.addLog(`Forced re-render #${this.renderCount} — now you see stale values flushed!`, 'render');
  }

  clearLog() {
    this.log = [];
    this.renderCount++;
  }

  private addLog(message: string, type: 'action' | 'render') {
    this.log = [{ id: ++this.logId, message, type }, ...this.log].slice(0, 8);
  }
}
