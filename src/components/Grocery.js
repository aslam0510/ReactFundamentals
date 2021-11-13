
import React, { useEffect, useState } from 'react';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import Content from './Content';
import Footer from './Footer';


const Grocery = () =>{
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('shoppingList')) || []
  );
   
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('shoppingList', JSON.stringify(items));
  }, [items]);

  const onHandleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const onHandleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setNewItem('');
    //addItem
    addItem(newItem);
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1: 1;
    const newAddItem = { id: id, checked: false, item: item };
    const listItems = [...items, newAddItem];
    setItems(listItems);
  };

  return (
    <div>
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        onHandleSubmit={onHandleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={
          items.length
            ? items.filter((item) =>
                item.item.toLowerCase().includes(search.toLowerCase())
              )
            : items
        }
        onHandleCheck={onHandleCheck}
        onHandleDelete={onHandleDelete}
      />
      <Footer length={items.length} />
    </div>
  )
}

export default Grocery
