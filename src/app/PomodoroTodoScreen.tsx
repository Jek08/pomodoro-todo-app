import React from "react";
import TopBar from "../commons/ui/TopBar";
import PomodoroTimer from "./widgets/PomodoroTimer";
import TodoList from "./widgets/TodoList";

const tasks = [
  {
    id: 1,
    task: "Task Task Task",
    isDone: false,
  },
  {
    id: 2,
    task: "Task Task Task",
    isDone: false,
  },
];

export default class PomodoroTodoScreen extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="container">
        <TopBar className="navbar bg-body-tertiary" />
        <PomodoroTimer />
        <TodoList tasks={tasks} />
      </div>
    );
  }
}
