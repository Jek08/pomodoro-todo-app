import React from "react";

interface Props {
  id: string;
  className: string;
  body: React.ReactNode;
}

export default class Card extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <div id={this.props.id || ""} className={"card" + this.props.className}>
        <div className="card-body">{this.props.body}</div>
      </div>
    );
  }
}
