import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-post-api',
  imports: [NgFor],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css',
})
export class PostApiComponent {
  carList: any[] = [];
  constructor(private http: HttpClient) {}

  getAllCars() {
    this.http
      .get('https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars')
      .subscribe((res: any) => {
        this.carList = res.data;
      });
  }
}
