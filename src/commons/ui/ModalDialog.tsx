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
      <div
        className={"modal "}
        style={{ display: "block", position: "initial" }}
      >
        <Modal show={this.props.isShow}>
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <span>{this.props.body}</span>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={this.props.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
      </div>
    );
  }
}
