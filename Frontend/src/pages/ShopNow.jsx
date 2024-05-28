import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';
import ProductCard from '../components/ProductCard';
import { useLanguage } from '../contexts/LanguageContext'; 
import { useTranslation } from 'react-i18next';
import search from '../assets/search.png'
import shopnow from '../assets/shopnow.jpg'

function ShopNow() {

  const [searchData, setSearchData] = useState("");

  const { token } = useAuth();
  
  const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

  const { selectedLanguage, translateData } = useLanguage();
  const [products, setProducts] = useState([]);
  const [translatedProducts, setTranslatedProducts] = useState([]);
  const {t}=useTranslation()

  const getProducts = async () => {
    const response = await axios.get(`${API_URL}/api/v1/products/getProducts`, {
      headers: {
        Authorization: `${token}`,
      },
    });

    const res = response.data;
    setProducts(res.data);

    const translatedData = await translateData(res.data);
    setTranslatedProducts(translatedData);
  };

  useEffect(() => {
    getProducts();
  }, [selectedLanguage]);

  const handleSearch = ()=>{

  }

  return (
   <div className='bg-primary'>
 <div>
<img src={shopnow} alt=""  className='sm:h-[80vh] w-[99.9vw] h-[50vh]'/>

  <div className='flex justify-center mt-10'>
    <input
      type="text"
      value={searchData}
      onChange={(e)=>{setSearchData(e.target.value)}}
      className={`sm:w-[33vw] w-[30vw] h-[30px] border-[2px] border-imperialred rounded-2xl`}
      placeholder=' Search...'
    />

    <button onClick={handleSearch}>
    <img src={search} alt="" className='h-[23px] pl-2' />
    </button>
   </div>

    </div>
      <div className='mt-8'>
        <h1 className='font-dancing sm:text-[36px] text-[20px] text-gray-900 xl:pl-32 pl-4'>
          <span className='sm:text-[64px] text-[40px]'>{t("Men's")}</span> {t("Wear")}
        </h1>
      </div>
      <div className='mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4'>
        {translatedProducts
          .filter((item) => item.category === 'mens')
          .map((item) => (
            <ProductCard key={item.id} props={item} />
          ))}
      </div>
      <div className='mt-8'>
    <h1 className='font-dancing sm:text-[36px] text-[20px] text-gray-900 xl:pl-32 pl-4'><span className='sm:text-[64px] text-[40px]'>{t("Women's")}</span> {t("Wear")}</h1> 
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
    <div className='mt-8'>
    <h1 className='font-dancing sm:text-[36px] text-[20px] text-gray-900 xl:pl-32 pl-4'><span className='sm:text-[64px] text-[40px]'>{t("Shoes")}</span></h1> 
    </div>
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {translatedProducts.filter(item=>(
          item.category==='shoes'
        )).map(item=>(
          <ProductCard 
          key= {item.id}
          props= {item}
          />
        ))}
    </div>
   </div>

    
  )
}

export default ShopNow
