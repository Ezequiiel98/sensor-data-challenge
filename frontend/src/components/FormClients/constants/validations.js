export const validations = {
  businessName: {
    min: 3,
    max: 150,
    label: 'Razón Social',
  },
  rucNumber: {
    min: 1,
    max: 200,
    label: 'Nro de Ruc',
  },
  address: {
    min: 3,
    max: 200,
    label: 'Dirección',
  },
  country: {
    min: 3,
    max: 200,
    label: 'País',
  },
  postalCode: {
    min: 1,
    max: 100,
    label: 'Codígo postal',
  },
  phone: {
    min: 5,
    max: 100,
    label: 'Teléfono',
  },
  fax: {
    min: 3,
    max: 200,
    labe: 'Fax',
  },
  web: {
    min: 6,
    max: 250,
    label: 'Web',
  },
  email: {
    min: 6,
    max: 150,
    isEmail: true,
    label: 'Email',
  },
};

