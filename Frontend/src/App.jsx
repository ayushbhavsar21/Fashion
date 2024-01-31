import React, { useState, useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ShopNow from './pages/ShopNow';
import './components/App.css'
import SignIn from './components/SignIn';
import Register from './components/Register';
import LogOut from './components/LogOut';

const App = () => {

  return (
      <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/SignIn" element={<SignIn />} />
            <Route exact path="/Register" element={<Register />} />
            <Route exact path="/ShopNow" element={<ShopNow />} />
            <Route exact path="/Logout" element={<LogOut />} />
          </Routes>
      </Router>
   
  );
};

export default App;
