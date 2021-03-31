import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default function DropdownProfile() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);
  
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
        <span className="d-none d-md-inline">Username</span> <b className="caret"></b>
      </DropdownToggle>
      <DropdownMenu className="dropdown-menu dropdown-menu-right" tag="ul">
        <DropdownItem>Log Out</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

