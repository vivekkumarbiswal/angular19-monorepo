import { Component } from '@angular/core';
import { ButtonComponent } from './shared/button/button.component';
import { CardComponent } from './shared/card/card.component';

@Component({
  selector: 'app-root',
  imports: [ButtonComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  onClick() {
    console.log('Button Clicked');
  }
}
