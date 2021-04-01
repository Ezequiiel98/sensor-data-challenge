import React from 'react';
import Table from '../components/table/table';
import getId from '../utils/uniqueId';

const mockClients = [
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
    web: 'pepito.com',
    email: 'pepito@gmail.com',
    transitInsurance: 'si',
    transitCargeInsurance: 'si',
    active: false,
  },
];

const headItems = ['Razón social', 'Nro. de Ruc', 'Direccion', 'Pais','Ciudad', 'Codigo Postal', 'Zona', 'Fax', 'Email', 'Web', 'Seg. Transitos', 'Seg. Carga Suelta', 'Activo', 'Acciones'];

export default function Clients() {
  return (
    <Table bodyItems={mockClients} headItems={headItems} />
  ); 
}
