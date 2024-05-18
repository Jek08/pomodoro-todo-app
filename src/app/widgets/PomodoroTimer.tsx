import Card from "commons/ui/Card";
import React from "react";

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

class Timer extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="container">
        <span>00:00:00</span>
      </div>
    );
  }
}

class TimerController extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="container">
        <div className="row">
          <span>Start</span>
        </div>
        <div className="row">
          <span>Stop</span>
        </div>
      </div>
    );
  }
}

export default class PomodoroTimer extends React.Component {
  cardBody: React.ReactNode = (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <PomodoroCounter />
          </div>
          <div className="col">
            <Timer />
          </div>
          <div className="col">
            <TimerController />
          </div>
        </div>
      </div>
    </>
  );

  render(): React.ReactNode {
    return <Card id="PomodoroTimer" className="" body={this.cardBody} />;
  }
}
