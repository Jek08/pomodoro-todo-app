import React from "react";
import { Modal } from "react-bootstrap";

interface Props {
  show: boolean;
  onHide: () => void;
  onAddBtnClick: (taskTitle: string) => void;
}

interface State {
  taskTitle: string;
}

export default class AddTaskDialog extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      taskTitle: ""
    }
  }

  render(): React.ReactNode {
    return (
      <Modal
        centered
        backdrop="static"
        show={this.props.show}
        onHide={this.props.onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title>New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="addTaskForm">
            <div>
              <label className="form-label">Task Title</label>
              <input
                className="form-control"
                type="text"
                id="taskTitleInput"
                placeholder="Do something..."
                onChange={(e) => this.setState({ taskTitle: e.target.value })}
                value={this.state.taskTitle}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-primary"
            form="addTaskForm"
            onClick={(e) => {
              e.preventDefault();
              this.props.onAddBtnClick(this.state.taskTitle);
            }}
          >
            Add
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
}
