import {
  Task,
  TodoListState,
  TodoListViewModel,
} from "app/viewmodel/TodoListViewModel";
import ViewController from "commons/base/ViewController";
import CardWithHeader from "commons/ui/CardWithHeader";
import React from "react";

class TaskItem extends React.Component<{ task: Task; isDone: boolean }> {
  constructor(task: Task, isDone: boolean) {
    super({ task, isDone });
  }

  render(): React.ReactNode {
    const task = this.props.task;
    const oddTaskBg = task.id % 2 !== 0 ? "list-group-item-dark" : "list-group-item-light";

    return (
      <li className={"list-group-item d-flex justify-content-between " + oddTaskBg} >
        <div>
          <span className="me-3">#{task.id}</span>
          <span>{task.title}</span>
        </div>
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="TaskCheckbox"
          />
      </li>
    );
  }
}

export default class TodoList extends ViewController<
  {},
  TodoListState,
  TodoListViewModel
> {
  constructor() {
    super({}, new TodoListViewModel());
  }

  addTaskButtonHandler() {
    let currentTasks = this.vmState.tasks;
    let newTask: Task = {
      id: currentTasks.length + 1,
      title: "Dummy Task",
      dueTime: new Date(Date.now()),
      isDone: false,
    };
    currentTasks.push(newTask);
    this.viewModel.emit((state) => {
      state.tasks = currentTasks;
    });
  }

  render(): React.ReactNode {
    return (
      <CardWithHeader id="todolist" className="" cardTitle="Tasks Todo">
        <ul className="list-group">
          {this.vmState.tasks.map((task, i) => {
            return (
              <TaskItem key={i} task={task} isDone={task.isDone}></TaskItem>
            );
          })}
          <li className="list-group-item list-group-item-primary d-flex justify-content-center">
            <button
              id="AddTaskButton"
              onClick={this.addTaskButtonHandler.bind(this)}
            >
              Add Task
            </button>
          </li>
        </ul>
      </CardWithHeader>
    );
  }
}
