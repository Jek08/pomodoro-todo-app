import React from "react";
import ViewModel from "./ViewModel";

interface ViewControllerState<State, VM extends ViewModel<State>> {
  viewModel: VM;
}

export default class ViewController<
  Props,
  State,
  VM extends ViewModel<State>,
> extends React.Component<Props, ViewControllerState<State, VM>> {
  constructor(props: Props, viewModel: VM) {
    super(props);

    this.state = {
      viewModel: viewModel,
    };

    // callback 'action' is used to change the 'state' inside ViewModel
    // then we reassigned this React.Component with new state to trigger re-render
    viewModel.emit = (action: (state: State) => void) => {
      action(viewModel.state);

      this.setState({
        viewModel: viewModel,
      });
    };
  }

  get viewModel(): VM {
    return this.state.viewModel;
  }

  get vmState(): State {
    return this.state.viewModel.state;
  }
}
