import React from "react";
import TopBar from "../commons/ui/TopBar";
import PomodoroTimer from "./widgets/PomodoroTimer";

export default class PomodoroTodoScreen extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="container">
        <TopBar className="navbar bg-body-tertiary" />
        <PomodoroTimer />
      </div>
    );
  }
}
