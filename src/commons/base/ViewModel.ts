export default abstract class ViewModel<T> {
  state: T;

  constructor(state: T) {
    this.state = state;
  }

  emit: (action: (state: T) => void) => void = (_) => {};
}
