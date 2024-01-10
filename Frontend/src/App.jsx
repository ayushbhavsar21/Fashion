import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import Home from './pages/Home';
import Buyerregister from './components/Buyerregister';
import Sellerregister from './components/Sellerregister';
import Product from './components/Product';
import img from './assets/Girl.png';
import './components/App.css'

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if initial load has already occurred in the current session
    const hasLoaded = sessionStorage.getItem('hasLoaded');

    if (hasLoaded !== 'true') {
      // Simulate a 10-second loading delay
      const loadingTimeout = setTimeout(() => {
        setLoading(false);

        // Set a flag in sessionStorage to indicate the initial load has occurred
        sessionStorage.setItem('hasLoaded', 'true');
      }, 3400); // Adjusted to 10 seconds

      // Cleanup the timeout to avoid memory leaks
      return () => clearTimeout(loadingTimeout);
    } else {
      // If the app has already loaded before in the current session, set loading to false immediately
      setLoading(false);
    }
  }, []);

  const words = "FASHION•STYLE "; // Add more words if needed
  const ANIMATION_DURATION = 3000; // Define your animation duration in milliseconds

  useEffect(() => {
    const createElements = (offset) => {
      const characters = words.split("");
      characters.forEach((char, i) => {
        const div = document.createElement("div");
        div.innerText = char;
        div.classList.add("character");
        div.style.animationDelay = `-${i * (ANIMATION_DURATION / 16) - offset}ms`;

        if (offset >= 0) {
          document.getElementById("spiral").appendChild(div);
        } else {
          document.getElementById("spiral2").appendChild(div);
        }
      });
    };

    createElements(0);
    createElements(-1 * (ANIMATION_DURATION / 2));
    
  }, []);


  return (
    <div className="App">
      {loading ? (
        // Display loading animation or message
        <div className='Container' >
      
      <div id="spiral" className="spiral-container"></div>
      
        <img className="ladyImage" src={img} alt="" />
      
      <div id="spiral2" className="spiral-container"></div>
    </div>
      ) : (
        // Display your actual content when loading is complete
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/SignIn" element={<SignIn />} />
            <Route exact path="/Buyerregister" element={<Buyerregister />} />
            <Route exact path="/Sellerregister" element={<Sellerregister />} />
            <Route exact path="/Product" element={<Product />} />
          </Routes>
        </Router>
      )}
    </div>
  );
};

export default App;
