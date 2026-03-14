import { Component, DoCheck, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, DoCheck {
  timer: any;
  status = 'User Active';

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    // Listen to activity outside Angular
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('mousemove', () => {
        this.resetTimer();
      });
      window.addEventListener('keydown', () => {
        this.resetTimer();
      });
    });
    this.startTimer();
  }

  ngDoCheck() {
    console.log('Change detection running');
  }

  startTimer() {
    this.timer = setTimeout(() => {
      //Re-enter Angular zone to update UI
      this.ngZone.run(() => {
        this.status = 'User Logged Out (Idle)';
      });
    }, 5000);
  }

  resetTimer() {
    clearTimeout(this.timer);
    this.startTimer();
  }
}
