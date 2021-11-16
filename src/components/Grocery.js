import React, { useEffect, useState } from 'react';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import Content from './Content';
import Footer from './Footer';
import ApiRequest from './ApiRequest';

const Grocery = () => {
  const API = ' http://localhost:3000/items';

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetchItem();
    }, 2000);
  }, []);

  const fetchItem = async () => {
    try {
      const response = await fetch(API);
      if (!response.ok) throw Error('Did not received expected data');
      const listItems = await response.json();
      setItems(listItems);
      setFetchError(null);
    } catch (err) {
      console.log(err.message);
      setFetchError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const onHandleCheck = async (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);

    const myItem = listItems.filter((item) => item.id === id);
    const updateOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ checked: myItem[0].checked }),
    };
    const apiUrl = `${API}/${id}`;
    const result = await ApiRequest(apiUrl, updateOptions);
    if (result) setFetchError(result);
  };

  const onHandleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    const deleteOptions = {
      method: 'DELETE',
    };
    const apiUrl = `${API}/${id}`;
    const result = await ApiRequest(apiUrl,deleteOptions);
    if(result) setFetchError(result)
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setNewItem('');
    //addItem
    addItem(newItem);
  };

  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const newAddItem = { id: id, checked: false, item: item };
    const listItems = [...items, newAddItem];
    setItems(listItems);
    const postOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newAddItem),
    };
    const result = await ApiRequest(API, postOptions);
    if (result) setFetchError(result);
  };

  return (
    <div className="container">
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        onHandleSubmit={onHandleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      {isLoading && <h3>Loading Items....</h3>}
      {fetchError && (
        <h3 style={{ color: 'red' }}>{`Error : ${fetchError}`}</h3>
      )}
      <main>
        {!fetchError && !isLoading && (
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
        )}
      </main>
      <Footer length={items.length} />
    </div>
  );
};

export default Grocery;
