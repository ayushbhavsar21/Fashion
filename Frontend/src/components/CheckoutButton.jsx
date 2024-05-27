import React from 'react';
import { useCart } from '../contexts/CartContext';
import axios from 'axios';
import { toast } from 'react-toastify';

function CheckoutButton() {
  const { cartItems, setCartItems } = useCart();

  const handleOrder = async () => {
    try {
      const orderItems = cartItems.map(item => ({
        productId: item.id,
        quantity: item.quantity
      }));

      const response = await axios.post("/api/v1/orders/add", {
        orderItems
      });

      const res = response.data;

      toast.success(res.message);

      setCartItems([]);
    } catch (error) {
      console.error(error); 
      toast.error('Failed to place order');
    }
  };

  return (
    <button 
      onClick={handleOrder} 
      className="mt-4 w-full rounded-sm bg-secondary px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
      Checkout
    </button>
  );
}

export default CheckoutButton;
