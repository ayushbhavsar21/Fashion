import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import axios from 'axios';
import { toast } from 'react-toastify';

function Payment() {
  const { cartItems, setCartItems, totalAmount } = useCart();

  const handleOrderCreation = async (paymentId) => {
    try {
      const orderItems = cartItems.map(item => ({
        productId: item.id,
        quantity: item.quantity
      }));

      const response = await axios.post("/api/v1/orders/add", {
        orderItems,
        paymentId,
      });

      const res = response.data;

      toast.success(res.message);
      setCartItems([]);
      window.location.href = "/";
    } catch (error) {
      console.error(error);
      toast.error('Failed to place order');
    }
  };

  const handleOrder = (e) => {
    e.preventDefault();

    var options = {
      key: "rzp_test_PxyRvyrtC90mqn",
      key_secret: "MyOrpu3fQfm9l0PE4ErdNvht",
      amount: totalAmount * 100,
      currency: "INR",
      name: "Vis-Utd",
      description: "for testing purpose",
      handler: function (response) {
        alert(response.razorpay_payment_id);
        handleOrderCreation(response.razorpay_payment_id);
      },
      prefill: {
        name: "",
        email: "mvel1620r@gmail.com",
        contact: "7904425033"
      },
      notes: {
        address: "Razorpay Corporate office"
      },
      theme: {
        color: "#3399cc"
      },
    };
    var pay = new window.Razorpay(options);
    pay.open();
  };

  return (
    <div className="App h-screen flex flex-col items-center justify-center bg-primary">
      <h2 className="text-3xl text-white font-bold mb-4">Subscribe for Mentorship Sessions</h2>
      <p className="text-gray-600 mb-6">Enter the amount and proceed with the payment to place your order.</p>
      <div className="rounded-md">
        <input
          type="text"
          placeholder="Enter Amount"
          value={totalAmount}
          readOnly
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        onClick={handleOrder}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
      >
        Pay
      </button>
    </div>
  );
}

export default Payment;
