import React, { useState, useEffect } from 'react'
import CartCard from '../components/CartCard'
import { useAuth } from '../contexts/AuthContext';

const Order = () => {

    const [orders, setOrders] = useState([]);

    const { token } = useAuth();

    const getOrders = async()=>{

        const response = await fetch('/api/v1/orders/getOrders',{
            method: "GET",
            headers:{
                "Authorization": `${token}`
            }
        })

        const res = await response.json();

        setOrders(res.data);
    }

    useEffect(()=>{
        getOrders();
    },[])

  return (
    <>
    <div className="flow-root bg-white">
              <ul className="-my-7 divide-y divide-quaternary">
              {orders.map(item=>(
        <CartCard
        key={item.id}
        product={item}
        />
    ))}
              </ul>
              <hr className="mt-6 border-quaternary" />
              <ul className="mt-6 space-y-3">
                <li className="flex items-center justify-between">
                  <p className="text-sm font-medium">Sub total</p>
                  <p className="text-sm font-medium">₹1,14,399</p>
                </li>
                <li className="flex items-center justify-between">
                  <p className="text-sm font-medium ">Total</p>
                  <p className="text-sm font-bold ">₹1,14,399</p>
                </li>
              </ul>
    </div>
    </>
  )
}

export default Order