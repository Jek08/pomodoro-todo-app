import ViewModel from "commons/base/ViewModel";

type Time = {
  h: number;
  m: number;
  s: number;
};

class TimerState {
  _time: Time = { h: 0, m: 0, s: 0 };

  get time(): Time {
    return this._time;
  }

  get displayTime() {
    return `${this.time.h}:${this.time.m}:${this.time.s}`;
  }

  set time(val: string | Time) {
    switch (typeof val) {
      case "string":
        this._time = JSON.parse(val) as Time;
        break;
      case "object":
        this._time = val as Time;
    }
  }
}

class PomodoroTimerViewModel extends ViewModel<TimerState> {
  constructor() {
    super(new TimerState());
    this.initTimer({
      h: 0,
      m: 25,
      s: 0,
    });
  }

  initTimer(duration: Time) {
    localStorage.setItem("timer", JSON.stringify(duration));
    this.emit((state) => {
      state.time = duration;
    });
  }

  startTimer(): NodeJS.Timer {
    return setInterval(() => {
      var currentTime = JSON.parse(
        localStorage.getItem("timer") as string,
      ) as Time;

      if (currentTime.s > 0) {
        currentTime.s--;
      } else {
        if (currentTime.m > 0 && currentTime.s === 0) {
          currentTime.m--;
          currentTime.s = 60;
          if (currentTime.h > 0 && currentTime.m === 0 && currentTime.s === 0) {
            currentTime.h--;
            currentTime.m = 60;
          }
        }
      }

      localStorage.setItem("timer", JSON.stringify(currentTime));

      this.emit((state) => {
        state.time = currentTime;
      });
    }, 1000);
  }
}

export { TimerState, PomodoroTimerViewModel };
