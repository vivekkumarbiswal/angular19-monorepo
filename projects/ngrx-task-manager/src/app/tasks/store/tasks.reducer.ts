import { createReducer, on } from '@ngrx/store';
import { addTask, deleteTask } from './task.actions';

export const initialState: string[] = [];

export const tasksReducer = createReducer(
  initialState,

  on(addTask, (state, { task }) => [...state, task]),

  on(deleteTask, (state, { index }) => state.filter((_, i) => i !== index)),
);
