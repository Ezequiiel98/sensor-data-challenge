import { useState } from 'react'
import PropTypes from 'prop-types';
import axios from 'axios'

const baseUrl = process.env.REACT_APP_API_URL;

export const useHttp = (initialFetchingState) => {
  const [isFetching, setIsFetching] = useState(initialFetchingState);

  const getTokenFromStorageAndSetHeaders = () => {
    const storedToken = localStorage.getItem('token');
    const config = storedToken !== null
      ? { headers: { authorization: storedToken } }
      : {}
    return config;
  }

  const handleError = (err) => {
    setIsFetching(false);
    throw new Error(err.response?.data?.data?.message || 500);
  }

  const requestWithTryCatch = async (callback, route, body) => {
    const axiosConfig = getTokenFromStorageAndSetHeaders();
    const validatedRoute = route[0] === '/' ? route : `/${route}`;
    const url = `${baseUrl}${validatedRoute}`;
    const callbackArgs = body
      ? [url, body, axiosConfig]
      : [url, axiosConfig]

    setIsFetching(true);
    try {
      const response = await callback(...callbackArgs);
      setIsFetching(false);
      return response.data;
    } catch (err) {
      handleError(err);
    };
  };

  const httpGet = (route) => {
    return requestWithTryCatch(axios.get, route, null);
  };

  const httpPost = (route, body) => {
    return requestWithTryCatch(axios.post, route, body);
  };

  const httpUpdate = (route, body) => {
    return requestWithTryCatch(axios.put, route, body);
  };

  const httpDelete = (route) => {
    return requestWithTryCatch(axios.delete, route, null);
  };

  return { isFetching, httpGet, httpPost, httpUpdate, httpDelete };
}

useHttp.propTypes = {
 initialFetchingState: PropTypes.bool, 
}

useHttp.defaultProps = {
 initialFetchingState: false, 
}
