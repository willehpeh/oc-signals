import { Task } from "./task";

export class TaskList {
  private _tasks: Map<string, Task> = new Map();

  constructor(tasks: Task[]) {
    tasks.forEach(task => this._tasks.set(task.id, task));
  }

  tasks(): Task[] {
    return this.dereference<Task[]>(this.tasksAsArray());
  }

  private tasksAsArray(): Task[] {
    return Array.from(this._tasks.values());
  }

  private dereference<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
  }
}
