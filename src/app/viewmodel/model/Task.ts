export default interface Task {
  id: number;
  title: string;
  dueTime?: Date;
  isDone: boolean;
  isArchived: boolean;
}