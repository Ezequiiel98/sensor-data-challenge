import React from 'react';
import { Redirect } from 'react-router-dom';
import Home from './../pages/Home.js';

const routes = [
  {
    path: '/',
    exact: true,
    title: 'Home',
    component: () => <Redirect to='/clients' />
  },
  {
    path: '/clients',
    exact: true,
    title: 'Clients',
    component: () => <h1>Clients</h1>
  },
  {
    path: '/clients/new',
    exact: true,
    title: 'New client',
    component: () => <h1>Clients new</h1>
  },
  {
    path: '/maps',
    exact: true,
    title: 'Maps',
    component: () => <h1>maps</h1>
  }
];


export default routes;
