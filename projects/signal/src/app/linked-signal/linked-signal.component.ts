import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  imports: [],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.css',
})
export class LinkedSignalComponent {
  firstName = signal<string>('Vivek');
  lastName = signal<string>('Biswal');

  fullName = linkedSignal({
    source: this.firstName,
    computation: (newOptions, previous) => {
      const fullName = newOptions + ' ' + this.lastName();
      return fullName;
    },
  });

  changeName() {
    this.firstName.set('Rahul');
  }

  user = signal({ id: 111, name: 'Vivek' });

  email = linkedSignal({
    source: this.user,
    computation: (user) => `${user.name + user.id}@gmail.com`,
    equal: (a, b) => a === b,
  });

  changeId() {
    this.user.set({ id: 123, name: 'Rahul' });
  }
}
