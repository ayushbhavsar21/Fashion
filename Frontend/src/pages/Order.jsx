import React, { useState, useEffect } from 'react'
import CartCard from '../components/CartCard'
import { useAuth } from '../contexts/AuthContext';

const Order = () => {

    const [orders, setOrders] = useState([]);

    const { token } = useAuth();

    const getOrders = async()=>{

        const response = await fetch('http://localhost:8000/api/v1/orders/getOrders',{
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
    {orders.map(item=>(
        <CartCard
        key={item.id}
        product={item}
        />
    ))}
    </>
  )
}

export default Order