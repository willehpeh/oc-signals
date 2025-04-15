import { Subtask } from './subtask';

export type Task = {
  readonly id: string,
  readonly title: string,
  readonly description: string,
  readonly subtasks: Subtask[],
  readonly completed: boolean
}

