import ViewModel from "commons/base/ViewModel";

interface Task {
  id: number;
  title: string;
  dueTime?: Date;
  isDone: boolean;
};

class TodoListState {
  tasks: Task[] = new Array<Task>();
  isAllTaskDone: boolean = false;
  showAddTaskDialog: boolean = false;
}

class TodoListViewModel extends ViewModel<TodoListState> {
  constructor() {
    super(new TodoListState());
  }

  addTask(taskTitle: string){
    const newTask: Task = {
      id: this.state.tasks.length + 1,
      title: taskTitle,
      isDone: false
    }
    this.emit((currentState) => {
      currentState.tasks.push(newTask);
    })
  }

  setTaskDone(id: number, isDone: boolean) {
    this.emit((currentState) => {
      currentState.tasks.map(task => {
        if (task.id === id) {
          task.isDone = isDone;
        }
      })
    })
  }
}

export { TodoListState, TodoListViewModel, type Task };

