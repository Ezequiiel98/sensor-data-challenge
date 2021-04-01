export const validateEmail = (email, label) => {
  const result = { isValid: true, error: null };
  const expReg = /^(([^<>()[\]\\.,;:\s@”]+(\.[^<>()[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

  if (email.trim() === '') {
    result.error = `El campo ${label} es obligatorio`;
    result.isValid = false;
    return result;
  }

  if (!expReg.test(email)) {
    result.error = `El email ingresado es invalido`;
    result.isValid = false;
    return result;
  }

  if (email.length > 150) {
    result.error = `El email no pueder ser mayor a 150 caracteres`;
    result.isValid = false;
    return result;
  }

  return result;
};

