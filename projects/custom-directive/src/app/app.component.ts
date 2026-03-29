import { Component } from '@angular/core';
import { AutoFocusDirective } from './directive/auto-focus.directive';

@Component({
  selector: 'app-root',
  imports: [AutoFocusDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'custom-directive';
}
