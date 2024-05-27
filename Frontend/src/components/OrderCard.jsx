import React from 'react';
import { X } from 'lucide-react'

const OrderCard = ({props}) => {
  return (
    <div className="w-[320px] border-r bg-tertiary md:max-w-xs">
    <div className="p-8">
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
        <div className="mb-4">
          <div className="text-sm font-semibold">Order ID</div>
          <div className="text-sm font-medium text-gray-700">{props._id}</div>
        </div>
        <div className="mb-4">
          <div className="text-sm font-semibold">Date</div>
          <div className="text-sm font-medium text-gray-700">{props.date}</div>
        </div>
        <div className="mb-4">
          <div className="text-sm font-semibold">Total Amount</div>
          <div className="text-sm font-medium text-gray-700">₹{props.orderPrice}</div>
        </div>
        <div className="mb-4">
          <div className="text-sm font-semibold">Order Status</div>
          <div className="text-sm font-medium text-gray-700">{props.status}</div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default OrderCard;
