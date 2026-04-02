import { Component, signal } from '@angular/core';
import { SignalComponent } from './component/signal/signal.component';

@Component({
  selector: 'app-root',
  imports: [SignalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  normal = 0;
  sig = signal(0);

  constructor() {
    setInterval(() => {
      console.log('updating both');

      this.normal++; // ❌ UI will NOT update consistently
      this.sig.set(this.sig() + 1); // ✅ UI WILL update
    }, 2000);
  }
}
