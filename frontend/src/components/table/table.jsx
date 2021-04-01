import React, { useEffect } from 'react';

import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 

import getId from '../../utils/uniqueId.js';

export default function Table({ headItems, bodyItems }) {
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
         {headItems.map(item => <td>{ item }</td>)}
       </tr>
     </thead>
     <tbody>
       {
         bodyItems.map((item) => ( 
         <tr>
           { Object.keys(item).map(key => {
             if(key !== 'id') {
               return (<td>{
                 typeof item[key] === 'boolean' ? 
                   item[key].toString()
                 : item[key] || 'none'
               }</td>)
             }} 
           ) 
           }
         </tr>
         ))
       }
     </tbody>
     <tfoot>
       <tr>
         {headItems.map(item => <td>{ item }</td>)}
       </tr>
     </tfoot>
   </table>
  ); 
}
