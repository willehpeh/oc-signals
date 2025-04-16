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
  private _totalCompletedTasks = signal<number>(this._taskList.totalCompletedTasks());
  private _totalTasks = signal<number>(this._taskList.totalTasks());
  private _allTasksCompleted = signal<boolean>(this._taskList.allTasksCompleted());

  tasks(): Signal<Task[]> {
    return this._tasks.asReadonly();
  }

  totalTasks(): Signal<number> {
    return this._totalTasks.asReadonly();
  }

  totalCompletedTasks(): Signal<number> {
    return this._totalCompletedTasks.asReadonly();
  }

  allTasksCompleted(): Signal<boolean> {
    return this._allTasksCompleted.asReadonly();
  }

  completeTask(taskId: string): void {
    this._taskList.completeTask(taskId);
    this.emitTasks();
  }

  uncompleteTask(taskId: string): void {
    this._taskList.uncompleteTask(taskId);
    this.emitTasks();
  }

  completeSubtask(taskId: string, subtaskName: string): void {
    this._taskList.completeSubtask(taskId, subtaskName);
    this.emitTasks();
  }

  uncompleteSubtask(taskId: string, subtaskName: string): void {
    this._taskList.uncompleteSubtask(taskId, subtaskName);
    this.emitTasks();
  }

  deleteTask(taskId: string): void {
    this._taskList.deleteTask(taskId);
    this.emitTasks();
  }

  private emitTasks() {
    this._tasks.set(this._taskList.tasks());
  }
}
