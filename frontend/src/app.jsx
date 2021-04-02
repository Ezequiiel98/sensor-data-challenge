import React, { useContext, useEffect } from 'react';
import { AuthContext } from './context/AuthContext';

import { useHttp } from './hooks/useHttp';
import Loader from './components/loader/loader';
import Admin from './admin.jsx';
import UnauthenticatedHome from './pages/UnauthenticatedHome';

export default function App() {
  const [dataAuth, setDataAuth] = useContext(AuthContext);
  const { httpGet, isFetching } = useHttp();
  
  const getDataUser = async () => {
    if (dataAuth.token) {
      try {
        const { data: { user } } = await httpGet('/auth/me');
        setDataAuth({ ...user, token: dataAuth.token })
      } catch {
        setDataAuth({});
        localStorage.removeItem('token');
      }
    }

    return null;
  };

  useEffect(getDataUser, []);
  
  if (isFetching) {
    return (
     <Loader />  
  )
  }

  return (dataAuth.token ? <Admin /> : <UnauthenticatedHome />)
}
