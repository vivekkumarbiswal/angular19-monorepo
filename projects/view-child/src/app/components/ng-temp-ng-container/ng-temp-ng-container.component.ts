import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-temp-ng-container',
  imports: [NgFor, NgIf],
  templateUrl: './ng-temp-ng-container.component.html',
  styleUrl: './ng-temp-ng-container.component.css',
})
export class NgTempNgContainerComponent {
  employeeArray: any[] = [
    {
      empId: 101,
      name: 'Rahul',
      city: 'Bangalore',
      contactNo: '9876543210',
      attendance: 42,
      isActive: true,
    },
    {
      empId: 102,
      name: 'Priya',
      city: 'Mumbai',
      contactNo: '9123456780',
      attendance: 38,
      isActive: false,
    },
    {
      empId: 103,
      name: 'Amit',
      city: 'Delhi',
      contactNo: '9988776655',
      attendance: 45,
      isActive: true,
    },
    {
      empId: 104,
      name: 'Sneha',
      city: 'Hyderabad',
      contactNo: '9090909090',
      attendance: 36,
      isActive: false,
    },
    {
      empId: 105,
      name: 'Vikram',
      city: 'Chennai',
      contactNo: '9345678123',
      attendance: 40,
      isActive: true,
    },
  ];
  isLoader: boolean = true;

  constructor() {
    setTimeout(() => {
      this.isLoader = false;
    }, 3000);
  }
}
