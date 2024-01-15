import React, { useState } from 'react';
import BuyerSignIn from './BuyerSignIn';
import SellerSignIn from './SellerSignIn';
import Buyer from '../assets/Buyerregister.svg';
import Seller from '../assets/Sellerregister.svg';
import Navbar from './Navbar';
function SignIn() {
  const [showBuyerSignIn, setShowBuyerSignIn] = useState(true);

  const handleBuyerButtonClick = () => {
    setShowBuyerSignIn(true);
  };

  const handleSellerButtonClick = () => {
    setShowBuyerSignIn(false);
  };

  return (
    <>
    <Navbar/>
       <div className='lg:h-[88.9vh] bg-primary font-playfair flex lg:flex-row flex-col ' >
      
      <div className='lg:w-[50%] w-[100%] lg:h-[88.9vh] sm:h-[50vh] h-[40vh] flex lg:flex-col flex-row lg:justify-around sm:gap-8 gap-4 items-center justify-center bg-primary'>
        <button
          onClick={handleBuyerButtonClick}
          className='focus:border-2 focus:border-imperialred bg-tertiary rounded-full p-4 transition-colors duration-100 ease-in-out hover:scale-95 shadow-2xl' 
        >
          <img src={Buyer} className='lg:h-[200px] lg:w-[220px] sm:h-[150px] sm:w-[170px] h-[80px] w-[100px]' alt='' />
          <p className='sm:text-lg text-xs'>Buyer's - Sign In</p>
        </button>
        <button
          onClick={handleSellerButtonClick}
          className='focus:border-2 focus:border-imperialred bg-tertiary rounded-full p-4 transition-colors duration-100 ease-in-out hover:scale-95 shadow-2xl' 
        >
          <img src={Seller} className='lg:h-[200px] lg:w-[220px] sm:h-[150px] sm:w-[170px] h-[80px] w-[100px]' alt='' />
          <p  className='sm:text-lg text-xs'>Seller's - Sign In</p>
        </button>
      </div>
      <div>
        {showBuyerSignIn && <BuyerSignIn />}
        {!showBuyerSignIn && <SellerSignIn />}
      </div>
    </div>
    </>
 
  );
}

export default SignIn;
