import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: string;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(
      'http://https://jsonplaceholder.typicode.com/todos?_limit=5',
    );
  }
}
