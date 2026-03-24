import { AsyncPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addTask, deleteTask } from '../store/task.actions';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [FormsModule, NgFor, AsyncPipe],
  templateUrl: './task-list.component.html',
})
export class TaskListComponent {
  tasks$!: Observable<string[]>;
  newTask = '';

  constructor(private store: Store<{ tasks: string[] }>) {
    this.tasks$ = this.store.select('tasks');
  }

  add() {
    if (!this.newTask.trim()) return;

    this.store.dispatch(addTask({ task: this.newTask }));
    this.newTask = '';
  }

  delete(index: number) {
    this.store.dispatch(deleteTask({ index }));
  }
}
