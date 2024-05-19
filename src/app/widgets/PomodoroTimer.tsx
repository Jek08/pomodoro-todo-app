import ViewController from "commons/base/ViewController";
import Card from "commons/ui/Card";
import React from "react";
import {
  PomodoroTimerViewModel,
  TimerState,
} from "app/viewmodel/PomodoroTimerViewModel";

class PomodoroCounter extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="container">
        <div className="row">
          <span>1</span>
        </div>
        <div className="row">
          <span>Pomodoro Count</span>
        </div>
      </div>
    );
  }
}

class Timer extends React.Component<{ time: string }> {
  render(): React.ReactNode {
    return (
      <div className="container">
        <span>{this.props.time}</span>
      </div>
    );
  }
}

interface TimerControllerProps {
  viewModel: PomodoroTimerViewModel;
}

function TimerController({ viewModel }: TimerControllerProps) {
  return (
    <div className="container">
      <div className="row">
        <button onClick={viewModel.startTimer.bind(viewModel)}>Start</button>
      </div>
      <div className="row">
        <span>Stop</span>
      </div>
    </div>
  );
}

export default class PomodoroTimer extends ViewController<
  {},
  TimerState,
  PomodoroTimerViewModel
> {
  constructor() {
    super({}, new PomodoroTimerViewModel());
  }

  render(): React.ReactNode {
    return (
      <Card id="PomodoroTimer" className="">
        <div className="container">
          <div className="row">
            <div className="col">
              <PomodoroCounter />
            </div>
            <div className="col">
              <Timer time={this.vmState.displayTime} />
            </div>
            <div className="col">
              <TimerController viewModel={this.viewModel} />
            </div>
          </div>
        </div>
      </Card>
    );
  }
}
