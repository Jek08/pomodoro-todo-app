import ViewController from "commons/base/ViewController";
import Card from "commons/ui/Card";
import React from "react";
import {
  PomodoroTimerViewModel,
  TimerState,
} from "app/viewmodel/PomodoroTimerViewModel";
import FinalModalDialog from "commons/ui/FinalModalDialog";

class PomodoroCounter extends React.Component<{ count: number }> {
  render(): React.ReactNode {
    return (
      <div className="container-fluid text-center border">
        <div className="row">
          <span>{this.props.count}</span>
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
      <div className="container-fluid text-center border">
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
    <div className="container-fluid text-center border">
      <div className="row">
        <button onClick={viewModel.startTimer.bind(viewModel)}>Start</button>
      </div>
      <div className="row">
        <button onClick={viewModel.stopTimer.bind(viewModel)}>Stop</button>
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

  handleClose() {
    this.viewModel.emit((vmState) => {
      vmState.isEnded = false;
    });
  }

  render(): React.ReactNode {
    console.log(this.vmState.displayTime);
    return (
      <Card id="PomodoroTimer" className="mb-5">
        <div className="container">
          <FinalModalDialog
            isShow={this.vmState.isEnded}
            body="Take some rest!"
            handleClose={this.handleClose.bind(this)}
          />

          <div className="row align-items-center justify-content-around">
            <div className="col-3">
              <PomodoroCounter count={this.vmState.count} />
            </div>
            <div className="col-6">
              <Timer time={this.vmState.displayTime} />
            </div>
            <div className="col-3">
              <TimerController viewModel={this.viewModel} />
            </div>
          </div>
        </div>
      </Card>
    );
  }
}
