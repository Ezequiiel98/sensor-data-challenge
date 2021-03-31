import React from 'react';
import { Redirect } from 'react-router-dom';
import Home from './../pages/Home.js';
import Clients from './../pages/Clients.js';

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
    component: () => <Clients />
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
