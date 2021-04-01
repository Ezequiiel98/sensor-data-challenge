import React, { useState } from 'react';
import {
  Button, 
  Form,
  FormGroup, 
  Label,
  Input, 
} from 'reactstrap';

import { useHttp } from '../../hooks/useHttp';
import validateLength from '../../utils/validateLength';

import CustomInput from './input';
import CustomSelect from './select';

import { INPUTS } from './constants/inputs';
import { initialStateForm,  initialStateFormErrors } from './constants/initialStates';
import { validations } from './constants/validations';


export default function FormClients({ dataClient, isFetching, onUpdate, onCreate }) {
  const initDataClient = dataClient ? { 
    ...initialStateForm, 
    ...dataClient } : initialStateForm;
  
  const isUpdate = Boolean(dataClient);
  const [formData, setFormData] = useState({...initDataClient});
  const [formErrors, setFormErrors] = useState({...initialStateFormErrors});

  const handleChange = ({ target: { name, value } }) => {
    setFormData((lastFormData) => ({ ...lastFormData, [name]: value }));
    setFormErrors((lastFormErrors) => ({ ...lastFormErrors, [name]: null }));
  }

  const validateInputs = (inputsObj = {}) => {
    const resultInputsValidations = [];

    Object.keys(inputsObj).forEach(inputKey => {
      if (validations[inputKey]) {
        const { isValid, error } = validateLength({ 
          str: inputsObj[inputKey], 
          ...validations[inputKey], 
        });
        
        resultInputsValidations.push(isValid);
        setFormErrors((lastErrors) => ({ ...lastErrors, [inputKey]: error }));
      }
    });

    return resultInputsValidations.every(result => result); 
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const passAllValidations = validateInputs(formData);
    
    if (isUpdate && passAllValidations) {
      onUpdate(formData);
    };
    
    if (!isUpdate && passAllValidations) { 
      onCreate(formData);
    };
  }
  
  const textButton = isUpdate ? 'Actualizar Cliente' : 'Crear Cliente';

  return (
    <Form onSubmit={handleSubmit}>
      {
        INPUTS.map(dataInput => (
          dataInput.type === 'select' 
          ? <CustomSelect 
            {...dataInput} 
            onChange={handleChange}
            value={formData[dataInput.name]} 
          />
          : <CustomInput
            {...dataInput} 
            onChange={handleChange}
            value={formData[dataInput.name]} 
            error={formErrors[dataInput.name]}
          />
        ))
      }
      <FormGroup check className="mt-2 mb-2">
        <Label>
          <Input 
            type="checkbox"
            name="active"
            defaultChecked={formData.active} 
            onChange={() => setFormData((last) => ({...last, active: !formData.active}))}
          /> { ' '}
          Activo
        </Label>
      </FormGroup>
      <Button type="submit" className="btn btn-primary w-100">
        { isFetching ?  <i className="fas fa-spinner fa-pulse"></i> : textButton }
      </Button>
    </Form>
  );
}
