import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import Home from './pages/Home';
import Buyerregister from './components/Buyerregister';
import Sellerregister from './components/Sellerregister';
import Product from './components/Product';
import fashion from './assets/Girl.png';

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

  return (
    <div className="App">
      {loading ? (
        // Display loading animation or message
        <div className='flex justify-center items-center w-[100%] h-[90vh] ' >
           <img className='h-[95%] mt-[1vh]' src={fashion} alt="logo" /> 
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
