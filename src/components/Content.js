import React from 'react';
import ItemList from './ItemList';

function Content({ items, onHandleCheck, onHandleDelete }) {
  return (
    <>
      {items.length ? (
        items.map((item) => (
          <ItemList
            key={item.id}
            item={item}
            onHandleCheck={onHandleCheck}
            onHandleDelete={onHandleDelete}
          />
        ))
      ) : (
        <p>Your list is empty</p>
      )}
    </>
  );
}

export default Content;
