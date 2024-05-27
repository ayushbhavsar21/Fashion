import React from 'react'
import { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext'; 
import ProductCard from '../components/ProductCard'

function Womens() {

  const { selectedLanguage, translateData } = useLanguage();
  const [products, setProducts] = useState([]);
  const [translatedProducts, setTranslatedProducts] = useState([]);
  const {token} = useAuth();

  const getProducts = async(e)=>{
    const response = await fetch('/api/v1/products/getProducts',{
      method: "GET",
      headers:{
        "Authorization": `${token}`
      }
    })

    const res = await response.json();
    setProducts(res.data);

    const translatedData = await translateData(res.data);
    setTranslatedProducts(translatedData);
  }

  useEffect(()=>{
    getProducts();
  },[selectedLanguage])

    return (
    <>
    <div className='mt-8'>
    <h1 className='font-dancing sm:text-[36px] text-[20px] text-gray-900 xl:pl-32 pl-4'><span className='sm:text-[64px] text-[40px]'>Women's </span> Wear</h1> 
    </div>
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {translatedProducts.filter(item=>(
          item.category==='womens'
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


export default Womens