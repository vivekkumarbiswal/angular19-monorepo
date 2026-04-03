import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface User {
  firstName: string;
  lastName: string;
  userName: string;
  city: string;
  state: string;
  zipCode: string;
  isTermsAgree: boolean;
}

@Component({
  selector: 'app-template-form',
  imports: [FormsModule, NgIf],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css',
})
export class TemplateFormComponent {
  userObj: User = {
    firstName: '',
    lastName: '',
    userName: '',
    city: '',
    state: '',
    zipCode: '',
    isTermsAgree: false,
  };

  onSave() {
    debugger;
    const formValue = this.userObj;
    console.log(formValue);
  }
}
