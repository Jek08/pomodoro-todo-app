import Time from "./Time";

export default class TimerState {
  _time: Time = { h: 0, m: 0, s: 0 };
  count: number = 0;
  isEnded: boolean = false;

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