import { Component, signal } from '@angular/core';
import { SignalComponent } from './component/signal/signal.component';

@Component({
  selector: 'app-root',
  imports: [SignalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  normalName = 'Angular';
  firstName = signal('Vivek');

  getNormalName() {
    console.log('🔴 normalName checked');
    return this.normalName;
  }

  getFirstName() {
    console.log('🟢 firstName checked');
    return this.firstName();
  }

  changeNormal() {
    console.log('---- changeNormal clicked ----');
    this.normalName = 'React';
  }

  changeSignal() {
    console.log('---- changeSignal clicked ----');
    this.firstName.set('Biswal');
  }
}
