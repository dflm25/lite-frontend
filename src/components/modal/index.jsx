import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

const ModalComponent = ({ show, children, title, action, size, noClose }) => {
  useEffect(() => {
    var customButton = document.getElementsByClassName('btn-close');
    setTimeout(() => {
      if (customButton[0] != undefined) {
        customButton[0].innerText = 'x';
        customButton[0].className = 'close';
      }
    }, 500);
  }, []);
  return (
    <Modal isOpen={show} toggle={() => !noClose && action(false)} size={size}>
      <ModalHeader toggle={() => action(false)}>{title}</ModalHeader>
      <ModalBody>{children}</ModalBody>
    </Modal>
  );
};

ModalComponent.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  title: PropTypes.string,
  size: PropTypes.string,
  action: PropTypes.func.isRequired,
  noClose: PropTypes.bool
};

ModalComponent.defaultProps = {
  title: 'Modal',
  size: 'md',
  noClose: false
};

export default ModalComponent;
