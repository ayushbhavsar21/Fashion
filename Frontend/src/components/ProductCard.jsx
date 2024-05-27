import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { toast } from 'react-toastify';

function ProductCard({ props }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const product = {
      id: props._id,
      name: props.name,
      price: props.price,
      productImage: props.productImage,
      quantity: quantity,
    };
    console.log('Product to add:', product); // Debugging line
    addToCart(product);

    setQuantity(1);

    toast.success("Added to cart!!")
  };

  return (
    <div className="rounded-md border border-quaternary font-playfair bg-tertiary">
      <img
        src={props.productImage}
        alt="Laptop"
        className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">{props.name}</h1>
        <p className="mt-3 text-sm text-gray-600">
          {props.description}
        </p>

        <div className="mt-3 flex items-center space-x-2">
              <span className="block text-sm font-semibold">Price : ₹{props.price}</span>
              
        </div>
        <div className="mt-3 flex items-center space-x-2">
              <span className="block text-sm font-semibold">Category : {props.category}</span>
              
        </div>
        <div className="mt-2 flex items-center space-x-2">
          <label className="block text-sm font-semibold">Quantity: </label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
            className="block w-16 rounded-md border border-gray-300 p-1 text-sm"
          />
        </div>

        <button
          type="button"
          onClick={handleAddToCart}
          className="mt-4 w-full rounded-sm bg-secondary px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
