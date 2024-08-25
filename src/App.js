import React from 'react';
import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { useState } from 'react';
import Additem from './Additem';
import Searchitem from './Searchitem';

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('todo_list')) || []
  );
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  const additem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addnewitem = { id, checked: false, item };
    const listitems = [...items, addnewitem];
    setItems(listitems);
    localStorage.setItem("todo_list", JSON.stringify(listitems));
  };

  const handleClick = (id) => {
    const listitems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listitems);
    localStorage.setItem("todo_list", JSON.stringify(listitems));
  };

  const handleDelete = (id) => {
    const listitems = items.filter((item) => item.id !== id);
    setItems(listitems);
    localStorage.setItem("todo_list", JSON.stringify(listitems));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    additem(newItem);
    setNewItem('');
  };

  return (
    <div className="container">
      <div className="App">
        <Header />
        <div className="form">
        <Additem 
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        />
        <br></br>
        <Searchitem 
          search={search}
          setSearch={setSearch}
        />
        <Content
          items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
          handleClick={handleClick}
          handleDelete={handleDelete}
        />
        <Footer length={items.length} />
        </div>
      </div>
    </div>
  );
}

export default App;
