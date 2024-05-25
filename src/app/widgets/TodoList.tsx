import {
  Task,
  TodoListState,
  TodoListViewModel,
} from "app/viewmodel/TodoListViewModel";
import ViewController from "commons/base/ViewController";
import CardWithHeader from "commons/ui/CardWithHeader";
import React from "react";
import AddTaskDialog from "./AddTaskDialog";

interface Props {
  task: Task; 
  isDone: boolean,
  onTaskDone: (id: number, isDone: boolean) => void
}

class TaskItem extends React.Component<Props> {
  render(): React.ReactNode {
    const task = this.props.task;
    // const oddTaskBg =
    //   task.id % 2 !== 0 ? "bg-gray-" : "list-group-item-light";

    return (
      <li
        className={
          "list-group-item d-flex justify-content-between bg-light bg-gradient border-1 rounded-0 m-1"
        }
      >
        <div>
          <span className="me-3">#{task.id}</span>
          <span>{task.title}</span>
        </div>
        <input
          className="form-check-input"
          type="checkbox"
          id="TaskCheckbox"
          onChange={(e) => this.props.onTaskDone(task.id, e.target.checked)}
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

  handleShowDialog() {
    this.viewModel.emit((currentState) => {
      currentState.showAddTaskDialog = currentState.showAddTaskDialog
        ? false
        : true;
    });
  }

  render(): React.ReactNode {
    return (
      <>
        <CardWithHeader id="todolist" className="" cardTitle="Tasks Todo">
          <ul className="list-group">
            {this.vmState.tasks.map((task, i) => {
              return (
                <TaskItem key={i} task={task} isDone={task.isDone} onTaskDone={this.viewModel.setTaskDone.bind(this.viewModel)}></TaskItem>
              );
            })}
            <li className="list-group-item border-0 d-flex justify-content-center">
              <button
                id="AddTaskButton"
                onClick={this.handleShowDialog.bind(this)}
                className="btn btn-primary"
              >
                Add Task
              </button>
            </li>
          </ul>
        </CardWithHeader>
        <AddTaskDialog
          show={this.vmState.showAddTaskDialog}
          onHide={this.handleShowDialog.bind(this)}
          onAddBtnClick={this.viewModel.addTask.bind(this.viewModel)}
        />
      </>
    );
  }
}
