import React from "react";

export default class TopBar extends React.Component {
  render(): React.ReactNode {
    return (
      <nav id="TopBar" className="navbar container-fluid">
        <div className="container-fluid">
          <a id="AppTitle" href="/" className="navbar-brand">
            Pomodoro & Todo
          </a>
        </div>
      </nav>
    );
  }
}
