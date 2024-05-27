import Task from "./Task";

export default class TodoListState {
  tasks: Task[] = new Array<Task>();
  isAllTaskDone: boolean = false;
  showAddTaskDialog: boolean = false;
  showFinalDialog: boolean = false;
}