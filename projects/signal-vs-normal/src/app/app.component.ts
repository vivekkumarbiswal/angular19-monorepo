import { Component } from '@angular/core';
import { NormalVarComponent } from './component/normal-var/normal-var.component';
import { SignalDemoComponent } from './component/signal-demo/signal-demo.component';

@Component({
  selector: 'app-root',
  imports: [NormalVarComponent, SignalDemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
