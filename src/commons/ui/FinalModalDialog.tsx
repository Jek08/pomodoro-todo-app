import React from "react";
import { Modal, Button } from "react-bootstrap";

interface Props {
  body: React.ReactNode;
  isShow: boolean;
  handleClose: () => void;
}

export default class ModalDialog extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <Modal centered={true} show={this.props.isShow}>
        <Modal.Body>
          <div className="text-center p-3 fs-2">{this.props.body}</div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
