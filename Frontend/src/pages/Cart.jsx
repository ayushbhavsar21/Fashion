import React from 'react';
import { useCart } from '../contexts/CartContext';
import CheckoutButton from '../components/CheckoutButton';
import CartCard from '../components/CartCard';

function Cart() {
  const { cartItems } = useCart();

  // Calculate the total price
  const totalPrice = cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

  return (
    <div className='bg-primary min-h-[80vh]'>
      <div className='text-center '>
        <h1 className='font-dancing sm:text-[36px] text-[20px] text-gray-900 '>
          <span className='sm:text-[64px] text-[40px]'>Your </span>Cart
        </h1>
      </div>
      <div className="mx-auto my-4 max-w-4xl md:my-6 px-4 pb-28">
        <div className="overflow-hidden rounded-xl border border-quaternary shadow bg-tertiary">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Product List */}
            <div className="px-5 py-6 md:border-r border-quaternary md:px-8">
              <div className="flow-root">
                <ul className="-my-7 divide-y divide-quaternary">
                  {cartItems.length === 0 ? (
                    <p className="mt-3 text-sm text-gray-600 p-8">Your cart is empty.</p>
                  ) : (
                    <div>
                      <ul className="mt-3">
                        {cartItems.map((item, index) => (
                          <CartCard
                          key={index}
                          product={item}
                          />
                        ))}
                      </ul>
                    </div>
                  )}
                </ul>
                <hr className="mt-6 border-quaternary" />
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center justify-between">
                    <p className="text-sm font-medium ">Total</p>
                    <p className="text-sm font-bold ">₹{totalPrice.toFixed(2)}</p>
                  </li>
                </ul>
                <CheckoutButton />
              </div>
            </div>
            {/* Contact Info */}
            <div className="px-5 py-6 md:px-8">
              <div className="flow-root">
                <div className="-my-6 divide-y divide-quaternary">
                  <div className="py-6">
                    <h2 className="text-base font-bold text-black">Contact Information</h2>
                    <p className="fontmedium mt-3 text-xs text-gray-700">Order Number: #9876567890</p>
                    <p className="text-xs font-medium text-gray-700">Date: March 03, 2023</p>
                    <button
                      type="button"
                      className="mt-4 rounded-md bg-secondary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-secondary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Proceed to Pay
                    </button>
                  </div>
                  <div className="py-6">
                    <h2 className="mb-2 text-base font-bold text-black">Shipping Information</h2>
                    <p className="mt-3 text-xs font-medium text-gray-700">Lem Deluce</p>
                    <p className="text-xs font-medium text-gray-700">1 Ronald Regan Court</p>
                    <p className="text-xs font-medium text-gray-700">102-655-3689</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
