import React from 'react'
import section31 from '../assets/section31.png'
import section32 from '../assets/section32.png'
import { useTranslation } from 'react-i18next'
function Section3() {

const {t}=useTranslation()

  return (
    <div className='bg-primary sm:pt-0 pt-16 h-auto'>
        <div className='md:pr-12 md:text-right p-0 text-center'>
        <h1 className='font-dancing sm:text-[36px] text-[20px] text-gray-900'><span className='sm:text-[64px] text-[40px]'>{t("Winter")}</span>{t("Collections")}</h1> 
        <p className='font-playfair text-[20px] text-gray-900'>{t("We consider your look and comfort on cold weather.")}</p>
        </div>
 <div className='flex w-full h-auto justify-around sm:flex-row flex-col'> 
      <div className='flex flex-col sm:w-[40vw] items-center w-full text-center sm:text-left justify-center'>
      <div className='relative sm:top-36 top-8'>
        <p className='font-playfair'>
        {t("We provide the largest clothing collection for any season. You can choose trendy or classy design according to your preferences. Our services are super fast and we update within 24 hours.")}
        </p>
      </div>
      <div className='relative bottom-24'>
        <img src={section31} alt="" className='relative sm:top-[282px] top-44 xl:left-[250px] lg:left-[200px] sm:left-[130px] left-[90px] lg:h-[350px] lg:w-[200px] sm:h-[250px] sm:w-[200px] w-[150px] h-[200px]'/>
        <img src={section32} alt="" className='relative lg:h-[250px] lg:w-[350px] sm:h-[170px] sm:w-[250px] h-[130px] w-[200px] lg:top-8 sm:top-28 top-[46px] sm:right-0 right-8' />
      </div>
      </div>
      <div className='flex flex-col sm:w-[40vw] justify-center items-center text-center gap-12'>
         <div className='sm:self-end self-center'>
         <a href="" className='font-playfair bg-tertiary border-[2px] border-quaternary px-8 py-4 rounded-2xl '>{t("View All")}</a>
         </div>
         <div>
         <p className='font-playfair'>{t("Our main aim is to serve our customer with better quality product. We try to understand their needs and provide them within a short period of time. We provide the largest clothing collection for any season. You can choose trendy or classy design according to your preferences. Our services are super fast and we update within 24 hours.")}</p>
         </div>
      </div>
    </div>
    </div>
   
  )
}

export default Section3
