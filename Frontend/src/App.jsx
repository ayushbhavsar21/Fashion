import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ShopNow from './pages/ShopNow';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import LogOut from './components/LogOut';
import Cart from './pages/Cart';
import Product from './components/Product';
import Order from './pages/Order';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { CartProvider } from './contexts/CartContext';
import './components/App.css';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/SignIn" element={<SignIn />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/ShopNow" element={<ShopNow />} />
          <Route exact path="/Logout" element={<LogOut />} />
          <Route exact path="/Cart" element={<Cart/>} />
          <Route exact path="/product" element={<Product/>} />
          <Route exact path="/order" element={<Order/>} />
        </Routes>
        <Footer/>
      </Router>
    </CartProvider>
  );
};

export default App;
