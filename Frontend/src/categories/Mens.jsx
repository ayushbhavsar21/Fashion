import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';
import ProductCard from '../components/ProductCard';
import { useLanguage } from '../contexts/LanguageContext'; 
import { useTranslation } from 'react-i18next';

function Mens() {
  const { token } = useAuth();
  const { selectedLanguage, translateData } = useLanguage();
  const [products, setProducts] = useState([]);
  const [translatedProducts, setTranslatedProducts] = useState([]);
  const {t}=useTranslation()

  const getProducts = async () => {
    const response = await axios.get('/api/v1/products/getProducts', {
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

  return (
    <>
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
    </>
  );
}

export default Mens;
