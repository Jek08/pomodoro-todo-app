import CardWithHeader from "commons/ui/CardWithHeader";
import React from "react";

interface TaskItem {
  id: number;
  task: string;
  isDone: boolean;
}

interface Props {
  tasks: TaskItem[];
}

export default class TodoList extends React.Component<Props> {
  taskItemDone(task: TaskItem): React.ReactNode {
    return (
      <div className="row" id={task.id.toString()}>
        <span>#{task.id}</span>
        <span>{task.task}</span>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="TaskCheckbox"
          checked
        />
      </div>
    );
  }

  taskItemNotDone(task: TaskItem): React.ReactNode {
    return (
      <div className="row" id={task.id.toString()}>
        <span>#{task.id}</span>
        <span>{task.task}</span>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="TaskCheckbox"
        />
      </div>
    );
  }

  render(): React.ReactNode {
    return (
      <CardWithHeader id="todolist" className="" cardTitle="Tasks Todo">
        <div className="container">
          {this.props.tasks.map((task) =>
            task.isDone ? this.taskItemDone(task) : this.taskItemNotDone(task),
          )}
          <div className="row">
            <button id="AddTaskButton">Add Task</button>
          </div>
        </div>
      </CardWithHeader>
    );
  }
}
