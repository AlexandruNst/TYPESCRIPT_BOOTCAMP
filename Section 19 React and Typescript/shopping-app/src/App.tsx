import React, { useState } from 'react';
import Greeter from './components/Greeter';
import ShoppingList from './components/ShoppingList';
import Item from './models/Item';
import ShoppingListForm from './components/ShoppingListForm';
import { v4 as getId } from "uuid";
import './App.css';



function App() {

  const [items, setItems] = useState<Item[]>([]);

  function addItem(product: string, quantity: number): void {
    setItems([...items, { id: getId(), product, quantity: quantity }])
  }

  // const items = [
  //   {
  //     id: 1,
  //     product: "Lemon",
  //     quantity: 3
  //   },
  //   {
  //     id: 2,
  //     product: "Chicken Breast",
  //     quantity: 2
  //   },

  // ];
  return (
    <div className="App">
      <Greeter person="Alex" />
      <ShoppingListForm onAddItem={addItem} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
