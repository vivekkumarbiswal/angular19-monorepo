import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  private api = 'https://jsonplaceholder.typicode.com/users';

  getUser(): Observable<any> {
    return this.http.get(this.api);
  }

  addUser(user: any): Observable<any> {
    return this.http.post(this.api, user, {
      headers: {
        Authorization: 'Bearer my-token',
        'Content-Type': 'application/json',
      },
    });
  }
}
