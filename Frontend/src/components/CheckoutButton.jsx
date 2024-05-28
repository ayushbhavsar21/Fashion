import React from 'react';


function CheckoutButton() {

  return (
    <a href='/payment'>
    <button 
      className="mt-4 w-full rounded-sm bg-secondary px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
      Checkout
    </button>
    </a>
  );
}

export default CheckoutButton;
