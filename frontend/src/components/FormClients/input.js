import React, { useState } from 'react';
import {
  Button, 
  Form,
  FormGroup, 
  Label,
  Input, 
  FormText 
} from 'reactstrap';

export default function FormClients({
  name,
  type,
  value,
  error,
  label,
  onChange,
}) {
  return (
      <FormGroup>
        <Label for={name}>{label}: </Label>
        <Input 
          name={name}
          type={type} 
          id={name}
          value={value}
          placeholder={`${label}...`} 
          onChange={onChange}
        />
        { error && <p className="text-danger p-3">{error}</p> }
      </FormGroup>
    );
}

