import getId from '../../../utils/uniqueId';

const INPUTS = [
 {
   key: getId(),
   type: 'text',
   name: 'businessName',
   label: 'Razón social',
 },
 {
   key: getId(),
   type: 'number',
   name: 'rucNumber',
   label: 'Nro de RUC',
 },
 {
   key: getId(),
   type: 'text',
   name: 'address',
   label: 'Direccion',
 },
 {
   key: getId(),
   type: 'text',
   name: 'country',
   label: 'País',
 },
 {
   key: getId(),
   type: 'number',
   name: 'postalCode',
   label: 'Codígo Postal',
 },
 {
   key: getId(),
   type: 'select',
   name: 'zone',
   label: 'Zona',
   options: ['Sur', 'Norte', 'Centro'],
 },
  {
   key: getId(),
   type: 'number',
   name: 'phone',
   label: 'Teléfono',
 },
  {
   key: getId(),
   type: 'text',
   name: 'fax',
   label: 'Fax',
 },
  {
   key: getId(),
   type: 'text',
   name: 'web',
   label: 'Web',
 },
 {
   key: getId(),
   type: 'select',
   name: 'transitInsurance',
   label: 'Uruguay - Transítos',
   options: ['Si', 'No', 'Opcional'],
 },
 {
   key: getId(),
   type: 'select',
   name: 'transitCargeInsurance',
   label: 'Uruguay - Transítos carga suelta',
   options: ['Si', 'No', 'Opcional'],
 },
];

export { INPUTS };
