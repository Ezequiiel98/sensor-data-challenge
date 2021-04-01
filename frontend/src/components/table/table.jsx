import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 

import getId from '../../utils/uniqueId.js';
import TBodyItems from './components/TBodyItems/TBodyItems.js';


export default function Table({ 
  headItems, 
  bodyItems, 
  onDelete,
  onUpdate 
}) { 
  const id = `table-${getId()}`;
  
  useEffect(() => {
    const setupTable = () => $(document).ready(function () {
        $(`#${id}`).DataTable();
    });

    setupTable();
  }, [id]);
  
  return (
   <table id={id}>
     <thead>
       <tr>
         {headItems.map(item => <td key={getId()}>{ item }</td>)}
       </tr>
     </thead>
     <tbody>
       <TBodyItems 
         items={bodyItems} 
         onDelete={onDelete}
         onUpdate={onUpdate}
         canDelete={Boolean(onDelete)}
         canEdit={Boolean(onUpdate)}
       />
     </tbody>
     <tfoot>
       <tr>
         {headItems.map(item => <td key={getId()}>{ item }</td>)}
       </tr>
     </tfoot>
   </table>
  ); 
}

Table.propTypes = {
  headItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  bodyItems: PropTypes.array.isRequired,
  onUpdate: PropTypes.func,
  onDelete: PropTypes.func,
};

Table.defaultProps = {
  onUpdate: null,
  onDelete: null,
}
