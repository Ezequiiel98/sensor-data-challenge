const initialStateForm = {
  businessName: '',
  rucNumber: 0,
  address: '',
  country: '',
  postalCode: '',
  zone: 'sur',
  phone: '',
  fax: '',
  web: '',
  email: '',
  transitInsurance: 'opcional',
  transitCargeInsurance: 'opcional',
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
