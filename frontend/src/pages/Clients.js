import React, { useState, useEffect } from 'react';

import getId from '../utils/uniqueId';
import { useHttp } from '../hooks/useHttp';

import Table from '../components/table/table';
import Modal from '../components/Modal/modal';
import FormClients from '../components/FormClients/formClients';

const headItems = ['Razón social', 'Nro. de Ruc', 'Direccion', 'Pais','Ciudad', 'Codigo Postal', 'Zona', 'Fax', 'Telefono','Email', 'Web', 'Seg. Transitos', 'Seg. Carga Suelta', 'Activo', 'Acciones'];

export default function Clients() {
  const [dataClients, setDataClients] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [itemToUpdate, setItemToUpdate] = useState();
  const { isFetching, httpGet, httpUpdate, httpDelete } = useHttp();

  const getAllClients = async () => {
    try {
      const { data: { clients } } = await httpGet('/clients');
      setDataClients(clients);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(getAllClients, []);

  const handleClickButtonUpdate = (id) => {
    setItemToUpdate(dataClients.filter(client => client.id === id)[0]);
    setShowModal(true);
  };

  const handleDelete = (id) => console.log(id);

  const handleCreateNewClient = () => {
    setItemToUpdate();
    setShowModal(true);
  }

  const handleUpdate = async (client) => {
    const { id } = client;
    try{ 
      const data = await httpUpdate(`/clients/${client.id}`, client);
      getAllClients()
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <>
      <button
        onClick={handleCreateNewClient}
        className="mb-4 mt-4 pt-2 pb-2 pl-2 pr-2 btn btn-info"
      >
        Crear Nuevo Cliente
      </button>
      <Table 
        headItems={headItems} 
        bodyItems={dataClients} 
        onDelete={handleDelete} 
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
