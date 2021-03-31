import React, { useEffect } from 'react';

import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 

import getId from '../../utils/uniqueId.js';

export default function Table({ items }) {
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
         <th>thead</th>
       </tr>
     </thead>
     <tbody>
       <tr>
         <td>tbody</td>
       </tr>
     </tbody>
     <tfoot>
       <tr>
         <th>tfoot</th>
       </tr>
     </tfoot>
   </table>
  ); 
}
