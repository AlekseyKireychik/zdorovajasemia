import React, {Component} from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Services from './components/pages/services/Services';
import Footer from './components/footer/Footer';
import {BrowserRouter, Route} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Route path='/home' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/services' component={Services}/>
          <Route path='/home' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/services' component={Services}/>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
