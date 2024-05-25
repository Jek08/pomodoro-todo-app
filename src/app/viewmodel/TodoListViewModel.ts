import ViewModel from "commons/base/ViewModel";

interface Task {
  id: number;
  title: string;
  dueTime: Date;
  isDone: boolean;
};

class TodoListState {
  tasks: Task[] = new Array<Task>();
  isAllTaskDone: boolean = false;
}

class TodoListViewModel extends ViewModel<TodoListState> {
  constructor() {
    super(new TodoListState());
  }

  addTask(newTask: Task): Promise<Task> {
    return new Promise((resolve, reject) => {
      if (newTask.id) {
        this.state.tasks.push(newTask);
        resolve(newTask);
      } else {
        reject(`New Task doesn't have id. Task: ${newTask}`);
      }
    });
  }

  setTaskDone(id: number): Promise<Task> {
    return new Promise((resolve, reject) => {
      let taskId = -1;

      for (let task of this.state.tasks) {
        if (task.id === id) {
          task.isDone = true;
          taskId = id;
          return resolve(task);
        }
      }

      if (taskId === -1) return reject(`Id Task ${id} don't exist`);
    });
  }
}

export { TodoListState, TodoListViewModel, type Task };

