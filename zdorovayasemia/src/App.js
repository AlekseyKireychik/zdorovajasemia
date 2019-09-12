import React, {Component} from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/pages/home/Home';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
