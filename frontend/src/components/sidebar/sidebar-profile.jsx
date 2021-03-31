import React from 'react';
import { Link } from 'react-router-dom';
import { PageSettings } from './../../config/page-settings.js';

export default function SidebarProfile() {
  return (
    <ul className="nav">
      <li className={"nav-profile expand"}>
        <div className="cover with-shadow"></div>
        <div className="image image-icon bg-black text-grey-darker">
          <i className="fa fa-user"></i>
        </div>
        <div className="info">
          user name 
        </div>
      </li>
    </ul>
  )
}
