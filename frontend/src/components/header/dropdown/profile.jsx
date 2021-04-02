import React, { useState, useContext } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { useHttp } from '../../../hooks/useHttp';
import { AuthContext } from '../../../context/AuthContext';

export default function DropdownProfile() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dataAuth, setDataAuth] = useContext(AuthContext);
  const { httpGet } = useHttp();
  const toggle = () => setDropdownOpen(!dropdownOpen);

  const handleLogout = async () => {
    try {
      await httpGet('/auth/logout');
    } catch (err) {
      console.log('error');
    }
    setDataAuth({});
    localStorage.removeItem('token');
  }

  return (
    <Dropdown 
      isOpen={dropdownOpen} 
      toggle={toggle} 
      className="dropdown navbar-user" 
      tag="li" 
      style={{cursor: 'pointer'}}
    >
      <DropdownToggle tag="a">
        <div className="image image-icon bg-black text-grey-darker">
          <i className="fa fa-user"></i>
        </div>
        <span className="d-none d-md-inline">{ dataAuth.username }</span> <b className="caret"></b>
      </DropdownToggle>
      <DropdownMenu className="dropdown-menu dropdown-menu-right" tag="ul">
        <DropdownItem onClick={handleLogout}>Cerrar Sesíon</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

