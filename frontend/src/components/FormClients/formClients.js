import React, { useState } from 'react';
import {
  Button, 
  Form,
  FormGroup, 
  Label,
  Input, 
} from 'reactstrap';

import getId from '../../utils/uniqueId';
import CustomInput from './input';
import CustomSelect from './select';

import { INPUTS } from './constants/inputs';
import { initialStateForm,  initialStateFormErrors } from './constants/initialStates';


export default function FormClients() {
  const [formData, setFormData] = useState({...initialStateForm});
  const [formErrors, setFormErrors] = useState({...initialStateFormErrors});
  
  const handleChange = ({ target: { name, value } }) => {
    setFormData((lastFormData) => ({ ...lastFormData, [name]: value }));
    setFormErrors((lastFormErrors) => ({ ...lastFormErrors, [name]: null }));
  }
  return (
    <Form>
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
          <Input type="checkbox" name="active" value={formData.active} /> { ' '}
            Activo
          </Label>
        </FormGroup>
        <Button className="btn btn-primary w-100">Submit</Button>
      </Form>
  );
}
