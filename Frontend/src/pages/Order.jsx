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
    <div className="bg-white w-full min-h-[80vh] flex flex-col justify-center items-center">
              <ul className="-my-7 divide-y divide-quaternary">
              {orders.map(item=>(
        <CartCard
        key={item.id}
        product={item}
        />
    ))}
              </ul>
    </div>
    </>
  )
}

export default Order