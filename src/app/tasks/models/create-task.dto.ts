export type CreateTaskDto = { title: string, description: string, subtasks: string[] };
export const nullCreateTaskDto = (): CreateTaskDto => ({
  title: '',
  description: '',
  subtasks: []
});
