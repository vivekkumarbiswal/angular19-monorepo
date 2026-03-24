import { createAction, props } from '@ngrx/store';

export const addTask = createAction(
  '[Tasks] Add Task',
  props<{ task: string }>(),
);

export const deleteTask = createAction(
  '[Tasks] Delete Task',
  props<{ index: number }>(),
);
