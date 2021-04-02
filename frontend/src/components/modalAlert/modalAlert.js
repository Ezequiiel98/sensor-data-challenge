import React from 'react';
import PropTypes from 'prop-types';
import SweetAlert2 from 'react-sweetalert2';

const Modal = ({ 
  title,
  text,
  type,
  confirmButtonText,
  cancelButtonText,
  showCancelButton,
  showConfirmButton,
  onConfirm,
  onCancel,
  setShow,
  show,
}) => {  

  const handleOnConfirm = async () => {
    try {      
      onConfirm();
      if (setShow) {
        setShow(false);
      } 
    } catch (error) {
      console.error('Error: ', error);
    }    
  }

  const handleOnClose = async () => {
    try {                  
      onCancel();
      if (setShow) {
        setShow(false);
      } 
    } catch (error) {
      console.error('Error: ', error);
    }    
  }

  return (
    <SweetAlert2
      show={show}
      title={title}
      text={text}
      confirmButtonColor={'#a5dc86'}     
      showCancelButton={showCancelButton} 
      showConfirmButton={showConfirmButton}
      icon={type}     
      onConfirm={ handleOnConfirm }
      didClose={ handleOnClose }
    />
  ); 
}

Modal.propTypes = {
  onConfirm: PropTypes.func,  
  setShow: PropTypes.func,
  showCancelButton: PropTypes.bool,
  showConfirmButton: PropTypes.bool,
  confirmButtonText: PropTypes.string, 
  cancelButtonText: PropTypes.string, 
  title: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.oneOf(['success', 'error', 'question', 'warning', 'info']),  
  show: PropTypes.bool,
}

Modal.defaultProps = {
  title: 'Confirmado',
  text: 'El proceso pudo ser completado con éxito',
  confirmButtonText: 'Confirmar', 
  cancelButtonText: 'Cancelar', 
  showCancelButton: false, 
  showConfirmButton: true , 
  type: 'success',
  show: false,  
  onConfirm: () => {}, 
  onCancel: () => {}, 
  setShow: null,   
}

export default Modal;

