import React, { useContext, useState } from 'react';
import {
  Button, 
  Form,
  Label,
} from 'reactstrap';

import Input from '../components/FormClients/input';
import { validateLength } from '../utils/validateLength';
import { useHttp}  from '../hooks/useHttp';

import { AuthContext } from '../context/AuthContext';

export default function UnauthenticatedHome() {
  const [dataAuth, setDataAuth] = useContext(AuthContext);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({
    username: '',
    password: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setFormData((lastData) => ({ ...lastData, [name]: value }));
    setFormErrors((lastErrors)  => ({ ...lastErrors, [name]: '' }));
  };
    const { isFetching, httpPost } = useHttp();

  const validateInputs = () =>  {
    const {
      isValid: usernameIsValid,
      error: usernameError
    } = validateLength({ min: 3, max: 100, str: formData.username });
    
    const {
      isValid: passwordIsValid,
      error: passwordError
    } = validateLength({ min: 3, max: 100, str: formData.password });
  
    setFormErrors({ username: usernameError, password: passwordError });
    
    return { passwordIsValid, usernameIsValid };
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { passwordIsValid, usernameIsValid } = validateInputs();

    if (passwordIsValid && usernameIsValid) {
       try {
         const { data: { user }  } = await httpPost('/auth/login', formData);
         console.log(user);
         setDataAuth({...user});
       } catch (e) {
         if (e.message === '500') {
           setFormErrors((last) => ({
             ...last,
             password: 'Húbo un error, intente más tarde'
           }));
         } else {
           setFormErrors((last) => ({
             ...last,
             password: 'El usuario o contraseña incorrecto'
           }));
         }
       }
    }
  }

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Form onSubmit={handleSubmit} style={{ width: '350px' }}>
        <Input 
          label="Usuario"
          name="username"
          value={formData.username}
          error={formErrors.username}
          onChange={handleChange}
          type="text"  
      />
        <Input 
          label="Contraseña"
          type="password"
          name="password"
          value={formData.password}
          error={formErrors.password}
          onChange={handleChange}
        />
      <Button type="submit" className="btn w-100" disabled={isFetching}>
        { isFetching ?  <i className="fas fa-spinner fa-pulse"></i> : 'Enviar' }
      </Button>

      </Form>
    </div>
  ) 
}
