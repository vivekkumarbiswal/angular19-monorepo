import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [NgClass],
  template: `
    <button [ngClass]="type" (click)="handleClick()">
      {{ label }}
    </button>
  `,
  styles: [
    `
      .primary {
        background: blue;
        color: white;
      }
      .secondary {
        background: gray;
        color: white;
      }
    `,
  ],
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() type: 'primary' | 'secondary' = 'primary';

  @Output() clicked = new EventEmitter<void>();

  handleClick() {
    this.clicked.emit();
  }
}
