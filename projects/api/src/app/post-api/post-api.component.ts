import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Car {
  carId: number;
  brand: string;
  model: string;
  year: number;
  color: string;
  dailyRate: number;
  carImage: string;
  regNo: string;
}

export interface ApiResponse<T> {
  result: boolean;
  message: string;
  data: T;
}

@Component({
  selector: 'app-post-api',
  imports: [NgFor, FormsModule, NgIf],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css',
})
export class PostApiComponent {
  carList: Car[] = [];
  carObj: Car = {
    carId: 0,
    brand: '',
    model: '',
    year: 0,
    color: '',
    dailyRate: 0,
    carImage: '',
    regNo: '',
  };
  constructor(private http: HttpClient) {}

  getAllCars() {
    this.http
      .get<
        ApiResponse<Car[]>
      >('https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars')
      .subscribe((res: any) => {
        this.carList = res.data;
      });
  }

  onSaveCar() {
    debugger;
    this.http
      .post<
        ApiResponse<Car[]>
      >('https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewCar', this.carObj)
      .subscribe((res) => {
        if (res.result) {
          alert('Car Created Succesfully');
          this.getAllCars();
        } else {
          alert(res.message);
        }
      });
  }

  onEdit(data: Car) {
    this.carObj = { ...data };
  }

  updateCar() {
    this.http
      .put<
        ApiResponse<Car[]>
      >('https://freeapi.miniprojectideas.com/api/CarRentalApp/UpdateCar', this.carObj)
      .subscribe((res) => {
        if (res.result) {
          alert('Car Updated Succesfully');
          this.getAllCars();
        } else {
          alert(res.message);
        }
      });
  }

  onDelete(id: number) {
    const isDelete = confirm('Are you sure you want to delete?');

    if (isDelete === true) {
      this.http
        .delete<
          ApiResponse<Car[]>
        >('https://freeapi.miniprojectideas.com/api/CarRentalApp/DeleteCarbyCarId?carid=' + id)
        .subscribe((res: any) => {
          if (res.result) {
            alert('Car Deleted Succesfully');
            this.getAllCars();
          } else {
            alert(res.message);
          }
        });
    }
  }

  resetForm() {
    this.carObj = {
      carId: 0,
      brand: '',
      model: '',
      year: 0,
      color: '',
      dailyRate: 0,
      carImage: '',
      regNo: '',
    };
  }
}
