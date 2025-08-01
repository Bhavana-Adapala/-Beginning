import React, { useState } from "react";
import AddItemForm from "./crud";
import ItemList from "./itemlist";

function App() {
  const [items, setItems] = useState([]);
  const addItem = (name) => {
    const newItem = {
      id: items.length + 1,
      name,
    };

    setItems([...items, newItem]);
  }

  const updateItem = (id, name) => {
    const updatedItems = items.map((item) => 
      item.id === id ? {...item, name} : item
    );

    setItems(updatedItems);
  };

  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>Simple CRUD App using React</h1>
      <AddItemForm addItem={addItem} />
      <ItemList items={items} updateItem={updateItem} deleteItem={deleteItem} />
    </div>
  );
}

export default App;