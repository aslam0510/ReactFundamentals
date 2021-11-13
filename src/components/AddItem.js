import React,{useRef} from 'react';

function AddItem({ newItem, setNewItem, onHandleSubmit }) {
  const inputRef = useRef();
  return (
    <form onSubmit={onHandleSubmit}>
      <input
        ref={inputRef}
        type="text"
        autoFocus
        id="addItem"
        placeholder="Add Item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      /><br/>
      
      <button type="submit" className="mt-5 mx-3 btn btn-primary" onClick={()=> inputRef.current.focus()}>
        Add Item
      </button><br/><br/><br/>
    </form>
  );
}

export default AddItem;
