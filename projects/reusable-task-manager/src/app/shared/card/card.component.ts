import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  template: `<div class="card">
    <div>
      <ng-content select="[card-header]"></ng-content>
    </div>
    <div>
      <ng-content select="[card-body]"></ng-content>
    </div>
  </div>`,
  styles: [
    `
      .card {
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 16px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        background: white;
      }
    `,
  ],
})
export class CardComponent {
  @Input() title = '';
  @Input() description = '';
}
