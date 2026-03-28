import { Component } from '@angular/core';
import { Todo, TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  loadTodos() {
    this.todoService.getTodos().subscribe({
      next: (data) => {
        this.todos = data;
      },
      error: (err) => {
        console.error('API Error', err);
      },
    });
  }
}
