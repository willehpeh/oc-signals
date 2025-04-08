export type Task = {
  id: string,
  title: string,
  description: string,
  subtasks: {
    title: string,
    completed: boolean,
  }[],
  completed: boolean
}
