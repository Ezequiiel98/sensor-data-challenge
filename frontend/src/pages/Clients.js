import React, { useState } from 'react';

import getId from '../utils/uniqueId';

import Table from '../components/table/table';
import Modal from '../components/Modal/modal';
import FormClients from '../components/FormClients/formClients';

const mockClients = [
  {
    id: getId(),
    businessName: 'some business',
    rucNumber: 0,
    address: 'some address',
    country: 'some country',
    postalCode: 1321,
    zone: 'centro',
    phone: 12321312,
    fax: 'asdasdas',
    web: 'pepito.com',
    email: 'pepito@gmail.com',
    transitInsurance: 'si',
    transitCargeInsurance: 'no',
    active: false,
  },
  {
    id: getId(),
    businessName: 'some business',
    rucNumber: 0,
    address: 'some address',
    country: 'some country',
    postalCode: 1321,
    zone: 'sur',
    phone: 12321312,
    fax: 'asdasdas',
    web: 'pepito.com',
    email: 'pepito@gmail.com',
    transitInsurance: 'si',
    transitCargeInsurance: 'si',
    active: false,
  },
  {
    id: getId(),
    businessName: 'some business',
    rucNumber: 2,
    address: 'some address',
    country: 'some country',
    postalCode: 1321,
    zone: 'sur',
    phone: 12321312,
    fax: 'asdasdas',
    web: 'pepito.com',
    email: 'pepito@gmail.com',
    transitInsurance: 'si',
    transitCargeInsurance: 'si',
    active: false,
  },
  {
    id: getId(),
    businessName: 'some business',
    rucNumber: 2,
    address: 'some address',
    country: 'some country',
    postalCode: 1321,
    zone: 'sur',
    phone: 12321312,
    fax: 'asdasdas',
    web: 'pepito.com',
    email: 'pepito@gmail.com',
    transitInsurance: 'si',
    transitCargeInsurance: 'si',
    active: false,
  },
  {
    id: getId(),
    businessName: 'some business',
    rucNumber: 2,
    address: 'some address',
    country: 'some country',
    postalCode: 1321,
    zone: 'sur',
    phone: 12321312,
    fax: 'asdasdas',
    web: 'pepito.comasd',
    email: 'pepito@gmail.com',
    transitInsurance: 'si',
    transitCargeInsurance: 'no',
    active: true,
  },
];

const headItems = ['Razón social', 'Nro. de Ruc', 'Direccion', 'Pais','Ciudad', 'Codigo Postal', 'Zona', 'Fax', 'Email', 'Web', 'Seg. Transitos', 'Seg. Carga Suelta', 'Activo', 'Acciones'];

export default function Clients() {
  const [showModal, setShowModal] = useState(false);
  const [itemToUpdate, setItemToUpdate] = useState();

  const handleUpdate = (id) => {
    setItemToUpdate(mockClients.filter(client => client.id === id)[0]);
    setShowModal(true);
  };

  const handleDelete = (id) => console.log(id);
  
  const handleCreateNewClient = () => {
    setItemToUpdate();
    setShowModal(true);
  }

  return (
    <>
      <button
        onClick={handleCreateNewClient}
        className="mb-4 mt-4 pt-2 pb-2 pl-2 pr-2 btn btn-info"
      >
        Crear Nuevo Cliente
      </button>
      <Table headItems={headItems} bodyItems={mockClients} onDelete={handleDelete} onUpdate={handleUpdate} />
      <Modal 
        title={itemToUpdate ? 'Actualizar Cliente' : 'Crear Cliente'} 
        setShowModal={setShowModal}
        showModal={showModal}
      >
        <FormClients dataClient={itemToUpdate} />
      </Modal>
    </>
  ); 
}
