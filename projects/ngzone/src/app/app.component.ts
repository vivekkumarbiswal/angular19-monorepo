import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  counter = 0;
  constructor(private ngZone: NgZone) {}

  //Runs inside Angular zone
  startInsideZone() {
    setInterval(() => {
      this.counter++;
      console.log('Inside Zone');
    }, 1000);
  }

  // Runs outside Angular zone
  startOutsideZone() {
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.counter++;
        console.log('Outside Zone');
      }, 1000);
    });
  }
}
