import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRespone, CustomerObj } from '../customer/customer.component';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl: string = 'https://freeapi.miniprojectideas.com/api/CarRentalApp/';

  constructor(private http: HttpClient) { }

  loadCustomer(): Observable<ApiRespone<CustomerObj[]>> {
    return this.http.get<ApiRespone<CustomerObj[]>>(
      this.apiUrl + 'GetCustomers',
    );
  }

  createNewCustomer(obj: any) {
    return this.http.post<ApiRespone<CustomerObj[]>>(
      this.apiUrl + 'CreateNewCustomer',
      obj,
    );
  }

  updateCustomer(data: CustomerObj) {
    return this.http.put<ApiRespone<CustomerObj>>(
      `${this.apiUrl}UpdateCustomer`,
      data,
    );
  }

  deleteCustomer(id: number) {
    return this.http.delete<ApiRespone<any>>(
      `${this.apiUrl}DeletCustomerById?id=${id}`,
    );
  }
}
