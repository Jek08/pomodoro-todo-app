import React from "react";

interface Props {
  id: string;
  className: string;
  cardTitle: string | null;
  children: React.ReactNode;
}

export default class CardWithHeader extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <div id={this.props.id || ""} className={"card" + this.props.className}>
        <div className="card-header">{this.props.cardTitle}</div>
        <div className="card-body">{this.props.children}</div>
      </div>
    );
  }
}
