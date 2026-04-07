import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

@Component({
  selector: 'app-get-api',
  imports: [NgFor],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css',
})
export class GetApiComponent implements OnInit {
  userList: any[] = [];
  productList: any[] = [];
  anotherProductList: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // this.http.get('https://fakestoreapi.com/products').subscribe((res: any) => {
    //   this.anotherProductList = res.filter(
    //     (item: any) => item.price === 109.95,
    //   );
    // });

    //   this.http
    //     .get<Product[]>('https://fakestoreapi.com/products')
    //     .pipe(map((product) => product.filter((item) => item.price < 100)))
    //     .subscribe((filterProducts) => {
    //       this.anotherProductList = filterProducts;
    //     });

    this.http
      .get<Product[]>('https://fakestoreapi.com/products')
      .pipe(map((product) => product.filter((item) => item.price > 100)))
      .subscribe((p) => (this.anotherProductList = p));
  }
  getUser() {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((res: any) => {
        this.userList = res;
      });
  }
  getProduct() {
    this.http
      .get('https://fake-store-api.mock.beeceptor.com/api/products')
      .subscribe((res: any) => {
        this.productList = res;
      });
  }
}
