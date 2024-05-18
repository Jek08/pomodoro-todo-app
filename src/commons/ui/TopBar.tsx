import React from "react";

interface Props {
  className: string;
}

export default class TopBar extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <nav id="TopBar" className={this.props.className}>
        <div className="container-fluid">
          <a id="AppTitle" href="/" className="navbar-brand">
            Pomodoro & Todo
          </a>
        </div>
      </nav>
    );
  }
}
