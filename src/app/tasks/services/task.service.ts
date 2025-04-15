import { Injectable, Signal, signal } from '@angular/core';
import { TaskList } from '../models/task-list';
import { DUMMY_TASKS } from '../test-data/DUMMY_TASKS';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private _taskList = new TaskList(DUMMY_TASKS);
  private _tasks = signal<Task[]>(this._taskList.tasks());

  tasks(): Signal<Task[]> {
    return this._tasks.asReadonly();
  }
}
