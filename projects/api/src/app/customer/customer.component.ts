import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../services/customer.service';

export interface ApiRespone<T> {
  message: string;
  result: boolean;
  data: T;
}

export interface CustomerObj {
  customerId: number;
  customerName: string;
  customerCity: string;
  mobileNo: string;
  email: string;
}
@Component({
  selector: 'app-customer',
  imports: [FormsModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
})
export class CustomerComponent implements OnInit {
  customerObj: CustomerObj = {
    customerId: 0,
    customerName: '',
    customerCity: '',
    mobileNo: '',
    email: '',
  };
  customerData: CustomerObj[] = [];
  isEditMode: boolean = false;

  constructor(private _loadCustomer: CustomerService) {}

  ngOnInit() {
    this.getData();
  }

  //Get
  getData() {
    this._loadCustomer.loadCustomer().subscribe((res) => {
      this.customerData = res.data;
    });
  }

  //Post
  onSaveCustomer() {
    this._loadCustomer.createNewCustomer(this.customerObj).subscribe((res) => {
      if (res.result) {
        alert('Customer Created Successfully');
        this.resetForm();
      } else {
        alert(res.message);
      }
      this.getData();
    });
  }

  //Load into form for Edit
  onEdit(customer: CustomerObj) {
    this.customerObj = { ...customer };
    this.isEditMode = true;
  }

  //Update
  updateCustomer() {
    this._loadCustomer.updateCustomer(this.customerObj).subscribe((res) => {
      if (res.result) {
        alert('Customer Updated Successfully');
        this.resetForm();
      } else {
        alert(res.message);
      }
      this.getData();
    });
  }

  //Delete
  onDelete(id: number) {
    const isDelete = confirm('Are you sure?');

    if (isDelete) {
      this._loadCustomer.deleteCustomer(id).subscribe((res) => {
        if (res.result) {
          alert('Deleted Successfully');
          this.getData();
        } else {
          alert(res.message);
        }
      });
    }
  }

  //Reset form
  resetForm() {
    this.customerObj = {
      customerId: 0,
      customerName: '',
      customerCity: '',
      mobileNo: '',
      email: '',
    };
    this.isEditMode = false;
  }
}
