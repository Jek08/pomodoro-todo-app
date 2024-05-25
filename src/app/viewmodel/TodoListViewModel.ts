import ViewModel from "commons/base/ViewModel";

interface Task {
  id: number;
  title: string;
  dueTime?: Date;
  isDone: boolean;
}

class TodoListState {
  tasks: Task[] = new Array<Task>();
  isAllTaskDone: boolean = false;
  showAddTaskDialog: boolean = false;
  showFinalDialog: boolean = false;
}

class TodoListViewModel extends ViewModel<TodoListState> {
  constructor() {
    super(new TodoListState());
  }

  addTask(taskTitle: string) {
    const newTask: Task = {
      id: this.state.tasks.length + 1,
      title: taskTitle,
      isDone: false,
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

export { TodoListState, TodoListViewModel, type Task };
