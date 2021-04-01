const validateLength = ({ 
  str, 
  min = 1, 
  max = 100,
  name = 'Campo' 
}) => { 
  const  result = { isValid: true, error: null };

  if (str < min) {
    result.isValid = false;
    result.error = `El ${name} debe ser mayor a ${min} caracteres`
  }

  if (str > max) {
    result.isValid = false;
    result.error = `El ${name} debe ser menor a ${max} caracteres`
  }
  
  return result;
}
