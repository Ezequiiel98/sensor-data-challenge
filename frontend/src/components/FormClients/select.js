import React from 'react';
import {
  FormGroup, 
  Label,
  Input, 
} from 'reactstrap';

import getId from '../../utils/uniqueId';

export default function FormClients({
  name,
  type,
  value,
  error,
  label,
  onChange,
  options,
}) {
  return (
    <FormGroup>
      <Label for={name}>{label}</Label>
      <Input 
        onChange={onChange}
        type="select"
        name={name}
        id={name}
        value={value}
      >
        { options.map(option => (
          <option key={getId()} value={option.toLowerCase()}>{option}</option>)
        )}
      </Input>
    </FormGroup>
  );
}
