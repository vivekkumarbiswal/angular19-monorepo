import { Component } from '@angular/core';
import { SwitchMapComponent } from './switch-map/switch-map.component';

@Component({
  selector: 'app-root',
  imports: [SwitchMapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'rxjs';
}
