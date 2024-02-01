// CartCard.js
import React from 'react';
import { X } from 'lucide-react'

const CartCard = ({ product }) => {
  return (
    <li className="flex items-stretch justify-between space-x-5 py-7">
      <div className="flex flex-1 items-stretch">
        <div className="flex-shrink-0">
          <img
            className="h-20 w-20 rounded-lg border border-quaternary object-contain"
            src={product.imageSrc}
          />
        </div>

        <div className="ml-5 flex flex-col justify-between">
          <div className="flex-1">
            <p className="text-sm font-bold text-gray-900">{product.name}</p>
            <p className="mt-1.5 text-sm font-medium text-gray-600">
              {product.color}
            </p>
          </div>
          <p className="mt-4 text-sm font-medium text-gray-500">x 1</p>
        </div>
      </div>
      <div className="ml-auto flex flex-col items-end justify-between">
        <p className="text-right text-sm font-bold text-gray-900">{product.price}</p>
        <button
          type="button"
          className="-m-2 inline-flex rounded p-2 text-gray-400 transition-all duration-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
        >
          <span className="sr-only">Remove</span>
          <X className="h-5 w-5 text-quaternary" />
        </button>
      </div>
    </li>
  );
};

export default CartCard;
