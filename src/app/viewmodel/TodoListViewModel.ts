import ViewModel from "commons/base/ViewModel";
import TodoListState from "./model/TodoListState";
import Task from "./model/Task";

export default class TodoListViewModel extends ViewModel<TodoListState> {
  constructor() {
    super(new TodoListState());
  }

  addTask(taskTitle: string) {
    const newTask: Task = {
      id: this.state.tasks.length + 1,
      title: taskTitle,
      isDone: false,
      isArchived: false
    };
    this.emit((currentState) => {
      currentState.tasks.push(newTask);
    });
  }

  setTaskDone(id: number, isDone: boolean) {
    this.emit((currentState) => {
      let isAllDone = true;
      
      currentState.tasks.forEach((task) => {
        if (task.id === id) {
          task.isDone = isDone;
          task.isArchived = true;
        }
        isAllDone = isAllDone && task.isDone;
      });

      if (isAllDone) {
        currentState.isAllTaskDone = isAllDone;
        currentState.showFinalDialog = true;
      }
    });
  }
}