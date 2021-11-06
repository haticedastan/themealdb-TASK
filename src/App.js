import './App.css';
import CategoryList from './CategoryList'
import InputSearch from './InputSearch';
import React from 'react'

function App() {
  return (
    <div className="App">
      <h1>HEADER</h1><hr/>
      <InputSearch/>
      <CategoryList/>
      
    </div>
  );
}

export default App;
