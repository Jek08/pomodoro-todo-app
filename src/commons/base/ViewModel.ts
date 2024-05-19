export default abstract class ViewModel<T> {
  abstract state: T;

  emit: (action: (state: T) => void) => void = (_) => {};
}
