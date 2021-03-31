import React from 'react';
import Home from './../pages/Home.js';

const routes = [
  {
    path: '/',
    exact: true,
    title: 'Home',
    component: () => <Home />,
  }, 
  {
    path: '/prueba',
    exact: true,
    title: 'Prueba',
    component: () =>  <h1>ahre </h1>
  }
];


export default routes;
