import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import getId  from '../../../../utils/uniqueId';


export default function TBodyItems({ 
  items, 
  canEdit,
  canDelete,
  onUpdate, 
  onDelete 
}) {
  const validateItem = (item) => {
    if (typeof item === 'boolean') {
      return item.toString();
    } 

    if (item || item === 0) {
      return item;
    }

    return 'none';
  }

  return (
     <>
       {
         items.map((item) => ( 
         <tr key={getId()}>
           {
             Object.keys(item).map(key => {
             if (key !== 'id') {
               return (
                 <td key={getId()}>{ validateItem(item[key]) }</td>
               )
             }})
           }
           {(canEdit || canDelete) && (
             <td className="d-flex justify-content-between">
               { canEdit && (<button 
                 className="btn btn-warning mr-1" 
                 type="button" 
                 onClick={() => onUpdate(item.id)} 
               >
                 <i className="fas fa-pencil-alt"></i>
               </button> )}
               { canDelete && ( <button 
                 className="btn btn-danger ml-1" 
                 type="button" 
                 onClick={() => onDelete(item.id)} 
               >
                 <i className="fas fa-trash"></i>
               </button>)}
             </td>
           )
           }
          </tr>
         ))
       }
     </>
  ); 
}

TBodyItems.propTypes = {
  items: PropTypes.array,
  canEdit: PropTypes.bool,
  canDelete: PropTypes.bool,
  onUpdate: PropTypes.func,
  onDelete: PropTypes.func,
};

TBodyItems.defaultProps = {
  canEdit: false, 
  canDelete: false,
  onUpdate: null,
  onDelete: null,
};
