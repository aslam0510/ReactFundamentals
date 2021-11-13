import React from 'react';

function ItemList({ item, onHandleCheck, onHandleDelete }) {
  return (
    <div>
        <input
          type="checkbox"
          checked={item.checked}
          onChange={() => onHandleCheck(item.id)}
        />
        <label className="ml-3"
          style={item.checked ? { textDecoration: 'line-through' } : null}
          onDoubleClick={() => onHandleCheck(item.id)}
        >
          {item.item}
        </label>
        <button type="button" className="mx-4 btn btn-danger" onClick={() => onHandleDelete(item.id)}>
          Delete
        </button><br/><br/>
    </div>
  );
}

export default ItemList;
