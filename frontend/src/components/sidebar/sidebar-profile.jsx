import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PageSettings } from './../../config/page-settings.js';

import { AuthContext }  from '../../context/AuthContext';

export default function SidebarProfile() {
  const [dataAuth] = useContext(AuthContext);
  
  return (
    <ul className="nav">
      <li className={"nav-profile expand"}>
        <div className="cover with-shadow"></div>
        <div className="image image-icon bg-black text-grey-darker">
          <i className="fa fa-user"></i>
        </div>
        <div className="info">
          { dataAuth.username } 
        </div>
      </li>
    </ul>
  )
}
