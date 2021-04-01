import React, { useState, useEffect } from 'react';

import getId from '../utils/uniqueId';
import { useHttp } from '../hooks/useHttp';

import Table from '../components/table/table';
import Modal from '../components/Modal/modal';
import ModalAlert from '../components/modalAlert/modalAlert';
import FormClients from '../components/FormClients/formClients';

const headItems = ['Razón social', 'Nro. de Ruc', 'Direccion', 'Pais','Ciudad', 'Codigo Postal', 'Zona', 'Fax', 'Telefono','Email', 'Web', 'Seg. Transitos', 'Seg. Carga Suelta', 'Activo', 'Acciones'];

const modalError = {
  title: 'Error', 
  type: 'error', 
  text: 'Húbo un error, intente mas tarde',
};

export default function Clients() {
  const [dataClients, setDataClients] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [itemToUpdate, setItemToUpdate] = useState({});
  const [dataModalAlert, setDataModalAlert] = useState({...modalError});   
  const { isFetching, httpGet, httpPost, httpUpdate, httpDelete } = useHttp();

  const getAllClients = async () => {
    try {
      const { data: { clients } } = await httpGet('/clients');
      setDataClients(clients);
    } catch (e) {
      setDataModalAlert({
        ...modalError,
        show: true,
      });
    }
  };

  useEffect(getAllClients, []);

  const handleClickButtonUpdate = (id) => {
    setItemToUpdate(dataClients.filter(client => client.id === id)[0]);
    setShowModal(true);
  };

  const handleDelete = async (id) => { 
    setDataModalAlert((last) => ({...last, show: false}));

    try{ 
      const data = await httpDelete(`/clients/${id}`);
      getAllClients();
      setDataModalAlert({ 
        show: true,
        type: 'success',
        title: 'Cliente eliminado',
        text: 'El cliente fue eliminado exítosamente',
        onCancel: () => setDataModalAlert((last) => ({ ...last, show: false })),
        onConfirm: () => setDataModalAlert((last) => ({ ...last, show: false })),
      });
    } catch (e) {
      setDataModalAlert({ ...modalError, show: true,
        onCancel: () => setDataModalAlert((last) => ({ ...last, show: false })),
        onConfirm: () => setDataModalAlert((last) => ({ ...last, show: false })),
      });
    }
  };

  const handleClickButtonDelete = async (id) => { 
    setDataModalAlert({
      show: true,
      type: 'warning',
      title: 'Borrar cliente',
      text: 'Esta seguro de borrar este cliente?',
      showCancelButton: true,
      onConfirm: () => handleDelete(id),
      onCancel: () => setDataModalAlert((last) => ({ ...last, show: false })),
    })  
  };


  const handleClickCreateNewClient = () => {
    setItemToUpdate();
    setShowModal(true);
  };

  const handleCreateNewClient = async (client) => {
    try { 
      const data = await httpPost('/clients', client);
      getAllClients()
      setShowModal(false);
      setDataModalAlert({ 
        show: true,
        type: 'success',
        title: 'Cliente creado',
        text: 'El cliente fue creado exítosamente',
        onCancel: () => setDataModalAlert((last) => ({ ...last, show: false })),
        onConfirm: () => setDataModalAlert((last) => ({ ...last, show: false })),
      });
    } catch (e) {
      setDataModalAlert({ ...modalError, show: true,
        onCancel: () => setDataModalAlert((last) => ({ ...last, show: false })),
        onConfirm: () => setDataModalAlert((last) => ({ ...last, show: false })),
      });
    }
  };

  const handleUpdate = async (client) => {
    try{ 
      const data = await httpUpdate(`/clients/${client.id}`, client);
      getAllClients()
      setShowModal(false)
      setDataModalAlert({
        show: true,
        title: 'Cliente editado', 
        type: 'success', 
        text: 'Cliente editado exítosamente', 
        onCancel: () => setDataModalAlert((last) => ({ ...last, show: false })),
        onConfirm: () => setDataModalAlert((last) => ({ ...last, show: false })),
      });
    } catch (e) {
      setDataModalAlert({ ...modalError, show: true,
        onCancel: () => setDataModalAlert((last) => ({ ...last, show: false })),
        onConfirm: () => setDataModalAlert((last) => ({ ...last, show: false })),
      });
    }
  }

  return (
    <>
      <ModalAlert 
        {...dataModalAlert}
      />
      <button
        onClick={handleClickCreateNewClient}
        className="mb-4 mt-4 pt-2 pb-2 pl-2 pr-2 btn btn-info"
      >
        Crear Nuevo Cliente
      </button>
      <Table 
        headItems={headItems} 
        bodyItems={dataClients} 
        onDelete={handleClickButtonDelete} 
        onUpdate={handleClickButtonUpdate} 
      />
      <Modal 
        title={itemToUpdate ? 'Actualizar Cliente' : 'Crear Cliente'} 
        setShowModal={setShowModal}
        showModal={showModal}
      >
        <FormClients 
          onUpdate={handleUpdate}
          onCreate={handleCreateNewClient}
          dataClient={itemToUpdate}
          isFetching={isFetching}  
        />
      </Modal>
    </>
  ); 
}
