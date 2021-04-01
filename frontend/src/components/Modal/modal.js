import React from 'react';
import PropTypes from 'prop-types';
import { 
  Button,
  Modal as BoostrapModal, 
  ModalHeader, 
  ModalBody
} from 'reactstrap';

export default function Modal ({ 
  title,
  children, 
  showModal, 
  setShowModal 
}) {
  const toggle = () => setShowModal(!showModal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>abrir modal</Button>
      <BoostrapModal size="lg" isOpen={showModal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>        
        <ModalBody>
          { children }
        </ModalBody>
      </BoostrapModal>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  title: PropTypes.string,
}

Modal.defaultProps = {
  title: 'default modal title',
}
