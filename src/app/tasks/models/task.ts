import { Subtask } from './subtask';

export type Task = {
  id: string,
  title: string,
  description: string,
  subtasks: Subtask[],
  completed: boolean
}

