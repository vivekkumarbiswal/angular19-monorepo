import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgTempNgContainerComponent } from './components/ng-temp-ng-container/ng-temp-ng-container.component';

@Component({
  selector: 'app-root',
  imports: [NgTempNgContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @ViewChild('txtCity') cityTextbox!: ElementRef;

  readCity() {
    const cit = this.cityTextbox.nativeElement.value;
    this.cityTextbox.nativeElement.style.background = 'red';
  }
}
