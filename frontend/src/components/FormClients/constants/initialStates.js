const initialStateForm = {
  businessName: '',
  rucNumber: '',
  address: '',
  country: '',
  postalCode: '',
  zone: 'Sur',
  phone: '',
  fax: '',
  web: '',
  email: '',
  transitInsurance: 'Opcional',
  transitCargeInsurance: 'Opcional',
  active: false,
}

const initialStateFormErrors = {
  businessName: null,
  rucNumber: null,
  address: null,
  country: null,
  postalCode: null,
  zone: null,
  phone: null,
  fax: null,
  web: null,
  email: null,
  transitInsurance: null,
  transitCargeInsurance: null,
  active: null,
}

export { initialStateForm, initialStateFormErrors };
