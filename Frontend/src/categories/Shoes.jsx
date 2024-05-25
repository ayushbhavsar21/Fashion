import React from 'react'
import { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext';
import ProductCard from '../components/ProductCard'

function Shoes() {

  const {token} = useAuth();
  const [products, setProducts] = useState([]);

  const getProducts = async(e)=>{
    const response = await fetch('http://localhost:8000/api/v1/products/getProducts',{
      method: "GET",
      headers: {
        'Authorization': `${token}`
      }
    })

    const res = await response.json();

    console.log(res.data);
    setProducts(res.data);
  }

  useEffect(()=>{
    getProducts();
  },[])

    return (
    <>
    <div className='mt-8'>
    <h1 className='font-dancing sm:text-[36px] text-[20px] text-gray-900 xl:pl-32 pl-4'><span className='sm:text-[64px] text-[40px]'>Shoes</span></h1> 
    </div>
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {products.filter(item=>(
          item.category==='shoes'
        )).map(item=>(
          <ProductCard 
          key= {item.id}
          props= {item}
          />
        ))}
    </div>
    </>
        
      )
}


export default Shoes