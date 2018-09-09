import React, { Component, Fragment } from "react";
import ModalTrigger from "./ModalTrigger/ModalTrigger";
import ModalContent from "./ModalContent/ModalContent";

class Modal extends Component {
  state = {
    isOpen: false
  };

  onOpen = () => {
    this.setState({ isOpen: true });
  };

  onClose = () => {
    this.setState({ isOpen: false });
  };
  render() {
    const { triggerText } = this.props;
    const { isOpen } = this.state;
    return (
      <Fragment>
        <ModalTrigger onOpen={this.onOpen} text={triggerText} />
        {isOpen && (
          <ModalContent onClose={this.onClose}>
            {this.props.children}
          </ModalContent>
        )}
      </Fragment>
    );
  }
}

export const closeModal = () => {
  Modal.onClose();
};

export default Modal;
