import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product from './components/Product';
import './components/App.css'
import SignIn from './components/SignIn';
import Register from './components/Register';

const App = () => {
  return (
    <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/SignIn" element={<SignIn />} />
            <Route exact path="/Register" element={<Register />} />
            <Route exact path="/Product" element={<Product />} />
          </Routes>
        </Router>
  );
};

export default App;
