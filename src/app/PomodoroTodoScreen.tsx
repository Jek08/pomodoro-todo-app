import React from "react";
import TopBar from "../commons/ui/TopBar";
import PomodoroTimer from "./widgets/PomodoroTimer";
import TodoList from "./widgets/TodoList";

export default class PomodoroTodoScreen extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="container" id="PomodoroTodoScreen">
        <TopBar />
        <PomodoroTimer />
        <TodoList/>
      </div>
    );
  }
}
