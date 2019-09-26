import React from 'react';
import Catalog from './components/Catalog/Catalog'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'
import Admin from './components/Admin/Admin'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Catalog />
      <Cart />
      <Admin />
    </div>
  );
}

export default App;
