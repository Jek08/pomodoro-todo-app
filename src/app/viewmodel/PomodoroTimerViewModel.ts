import ViewModel from "commons/base/ViewModel";
import TimerState from "./model/TimerState";
import Time from "./model/Time";

export default class PomodoroTimerViewModel extends ViewModel<TimerState> {
  pomodoroTime;   // default duration of one pomodoro cycle
  restingTime;

  constructor() {
    super(new TimerState());
    this.pomodoroTime = {
      h: 0,
      m: 0,
      s: 10,
    };
    this.restingTime = {
      h: 0,
      m: 0,
      s: 5,
    }
    this.state.time = this.pomodoroTime;
    this.resetTimer(this.pomodoroTime);
  }

  resetTimer(duration: Time) {
    localStorage.setItem("timer", JSON.stringify(duration));
    this.emit((state) => {
      state.time = duration;
    });
  }

  getCurrentTime(): Time {
    return JSON.parse(
      localStorage.getItem("timer") as string,
    ) as Time;
  }

  startRestingTimer(duration: Time) {
    this.emit((state) => {
      state.time = duration;
      localStorage.setItem("timer", JSON.stringify(state.time));
    });

    const intervalId = setInterval(() => {
      let currentTime = this.getCurrentTime();
      
      currentTime = this.timerCounter(currentTime);
      localStorage.setItem("timer", JSON.stringify(currentTime));

      if (currentTime.h + currentTime.m + currentTime.s === 0) {
        this.resetTimer(this.pomodoroTime);
        this.emit((state) => {
          state.isRestingEnded = true;
        });
        clearInterval(intervalId);
      }

      this.emit((state) => {
        state.time = currentTime;
      });
    }, 1000);
  }

  startTimer() {
    const intervalId = setInterval(() => {
      let currentTime = this.getCurrentTime();

      if (currentTime == null) {
        clearInterval(intervalId);
        this.resetTimer(this.pomodoroTime);
      } else {
        currentTime = this.timerCounter(currentTime);

        localStorage.setItem("timer", JSON.stringify(currentTime));

        if (currentTime.h + currentTime.m + currentTime.s === 0) {
          this.resetTimer(this.pomodoroTime);
          this.emit((state) => {
            state.count++;
            state.isEnded = true;
          });
          this.startRestingTimer(this.restingTime);
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
