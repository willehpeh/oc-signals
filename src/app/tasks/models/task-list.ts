import { Task } from './task';
import { CreateTaskDto } from './create-task.dto';

export class TaskList {
  private _tasks: Map<string, Task> = new Map();

  constructor(tasks: Task[]) {
    tasks.forEach(task => this._tasks.set(task.id, task));
  }

  tasks(): Task[] {
    return this.dereference<Task[]>(this.tasksAsArray());
  }

  completeAllTasks(): void {
    this._tasks.forEach(task => {
      task.completed = true;
      task.subtasks.forEach(subtask => subtask.completed = true);
    });
  }

  uncompleteAllTasks(): void {
    this._tasks.forEach(task => {
      task.completed = false;
      task.subtasks.forEach(subtask => subtask.completed = false);
    });
  }

  totalTasks(): number {
    return this._tasks.size;
  }

  totalCompletedTasks(): number {
    return this.tasks().filter(task => task.completed).length;
  }

  allTasksCompleted(): boolean {
    return this.tasks().every(task => task.completed);
  }

  completeTask(taskId: string): void {
    const task = this.taskWithId(taskId);
    task.completed = true;
    task.subtasks.forEach(subtask => subtask.completed = true);
  }

  uncompleteTask(taskId: string): void {
    const task = this.taskWithId(taskId);
    task.completed = false;
    task.subtasks.forEach(subtask => subtask.completed = false);
  }

  completeSubtask(taskId: string, subtaskName: string): void {
    const task = this.taskWithId(taskId);
    const subtask = this.subtaskWithNameFromTask(task, subtaskName);
    subtask.completed = true;
    this.updateTaskCompletion(task);
  }

  uncompleteSubtask(taskId: string, subtaskName: string): void {
    const task = this.taskWithId(taskId);
    const subtask = this.subtaskWithNameFromTask(task, subtaskName);
    subtask.completed = false;
    this.updateTaskCompletion(task);
  }

  deleteTask(taskId: string): void {
    this._tasks.delete(taskId);
  }

  addTask(dto: CreateTaskDto): void {
    const task: Task = {
      id: this.generateUUID(),
      title: dto.title,
      description: dto.description,
      subtasks: dto.subtasks.map(subtask => ({
        title: subtask,
        completed: false
      })),
      completed: false
    };

    this._tasks.set(task.id, task);
  }

  private generateUUID(): string {
    return [
      this.randomHex(8),
      this.randomHex(4),
      '4' + this.randomHex(3),
      '89ab'[Math.floor(Math.random() * 4)] + this.randomHex(3),
      this.randomHex(12)
    ].join('-');
  }

  private randomHex(length: number): string {
    let result = '';
    const hexChars = '0123456789abcdef';
    for (let i = 0; i < length; i++) {
      result += hexChars.charAt(Math.floor(Math.random() * hexChars.length));
    }
    return result;
  };

  private subtaskWithNameFromTask(task: Task, subtaskName: string) {
    const subtask = task.subtasks.find(subtask => subtask.title === subtaskName);
    if (!subtask) {
      throw new Error(`Subtask ${ subtaskName } not found`);
    }
    return subtask;
  }

  private updateTaskCompletion(task: Task) {
    task.completed = task.subtasks.every(subtask => subtask.completed);
  }

  private taskWithId(taskId: string) {
    const task = this._tasks.get(taskId);
    if (!task) {
      throw new Error(`Task with id ${ taskId } not found`);
    }
    return task;
  }

  private tasksAsArray(): Task[] {
    return Array.from(this._tasks.values());
  }

  private dereference<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
  }
}
