import { Component } from '@angular/core';
import { SignalComponent } from './component/signal/signal.component';

@Component({
  selector: 'app-root',
  imports: [SignalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'signal';
}
