import React, { useState } from 'react';
import { 
  Button,
  Modal, 
  ModalHeader, 
  ModalBody
} from 'reactstrap';

const ModalExample = ({ title, children, showModal }) => {

  const [modal, setModal] = useState(showModal || false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>abrir modal</Button>
      <Modal size="lg" isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{title || 'title modal'}</ModalHeader>        
        <ModalBody>
          { children }
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalExample;
