const validateLength = ({ 
  str, 
  min = 1, 
  max = 100,
  label = '',
}) => { 
  const  result = { isValid: true, error: null };


  if (typeof str === 'number') {
    str = str.toString();
  }

  if (str.length < min) {
    result.isValid = false;
    result.error = `El campo ${label} debe ser mayor a ${min} caracteres`
  }

  if (str.length > max) {
    result.isValid = false;
    result.error = `El campo ${label} debe ser menor a ${max} caracteres`
  }
  
  return result;
}

export default validateLength;
