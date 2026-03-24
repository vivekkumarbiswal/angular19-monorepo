import { Component } from '@angular/core';
import { RxjsCounterComponent } from './rxjs-counter/rxjs-counter.component';
import { SignalCounterComponent } from './signal-counter/signal-counter.component';

@Component({
  selector: 'app-root',
  imports: [RxjsCounterComponent, SignalCounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'signal-vs-rxjs';
}
