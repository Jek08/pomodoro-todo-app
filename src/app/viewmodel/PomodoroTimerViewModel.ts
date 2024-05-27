import ViewModel from "commons/base/ViewModel";
import TimerState from "./model/TimerState";
import Time from "./model/Time";

export default class PomodoroTimerViewModel extends ViewModel<TimerState> {
  pomodoroTime;   // default duration of one pomodoro cycle

  constructor() {
    super(new TimerState());
    this.pomodoroTime = {
      h: 0,
      m: 0,
      s: 5,
    };
    this.state.time = this.pomodoroTime;
    this.restartTimer(this.pomodoroTime);
  }

  restartTimer(duration: Time) {
    localStorage.setItem("timer", JSON.stringify(duration));
    this.emit((state) => {
      state.time = duration;
      state.isEnded = false;
    });
  }

  startTimer() {
    const intervalId = setInterval(() => {
      var currentTime = JSON.parse(
        localStorage.getItem("timer") as string,
      ) as Time;

      if (currentTime == null) {
        clearInterval(intervalId);
        this.restartTimer(this.pomodoroTime);
      } else {
        currentTime = this.timerCounter(currentTime);

        localStorage.setItem("timer", JSON.stringify(currentTime));

        if (currentTime.h + currentTime.m + currentTime.s === 0) {
          this.restartTimer(this.pomodoroTime);
          this.emit((state) => {
            state.count++;
            state.isEnded = true;
          });
          clearInterval(intervalId);
        }

        this.emit((state) => {
          state.time = currentTime;
        });
      }
    }, 1000);
  }

  timerCounter(time: Time): Time {
    if (time.s > 0) {
      time.s--;
    } else {
      if (time.m > 0 && time.s === 0) {
        time.m--;
        time.s = 60;
        if (time.h > 0 && time.m === 0 && time.s === 0) {
          time.h--;
          time.m = 60;
        }
      }
    }
    return time;
  }

  stopTimer() {
    localStorage.removeItem("timer");
  }
}
