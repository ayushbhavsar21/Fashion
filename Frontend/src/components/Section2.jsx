import React from 'react'
import section21 from "../assets/section21.png" 
import section22 from "../assets/section22.png"
import section23 from "../assets/section23.png"
function Section2() {
  return (
  <div className='bg-primary'>
  <div className='md:pl-12 md:text-left p-0 text-center'>
    <h1 className='font-dancing sm:text-[36px] text-[20px] text-gray-900'><span className='sm:text-[64px] text-[40px]'>Trending</span> Collections</h1>
    <p className='font-playfair text-[20px] text-gray-900'>Have a look on what's trending now!</p>
  </div>
  <div className='h-auto w-full flex md:flex-row flex-col items-center justify-evenly'>
    <div className='flex justify-center md:h-[100vh] h-[85vh] xl:w-[33vw] md:w-[28vw] w-[90vw] items-center '>
        <div className='bg-tertiary border-[2px] border-quaternary p-8 rounded-2xl'>
            <div>
                <img src={section21} alt="" />
            </div>
            <div>
                <h3 className='font-playfair text-center pt-3 text-[22px] text-gray-900 font-medium'>Formal Shirt For Woman</h3>
                <p className='font-playfair text-center pt-1 text-[18px] text-gray-900'>Price: ₹999</p>
            </div>
        </div>
    </div>
    <div className='flex justify-center md:h-[100vh] h-[85vh] md:w-[35vw] w-[90vw]  items-center '>
        <div className='bg-tertiary border-[2px] border-quaternary p-8 rounded-2xl'>
            <div>
                <img src={section22} alt="" />
            </div>
            <div>
                <h3 className='font-playfair text-center pt-3 text-[22px] text-gray-900 font-medium'>Black and Gray Exercise Outfit</h3>
                <p className='font-playfair text-center pt-1 text-[18px] text-gray-900'>Price: ₹1999</p>
            </div>
        </div>
    </div>
    <div className='flex justify-center md:h-[100vh] h-[85vh] xl:w-[33vw] md:w-[28vw] w-[90vw] items-center pt-20 sm:pt-0'>
        <div className='flex flex-col gap-12 justify-end'>
        <div className='bg-tertiary border-[2px] border-quaternary p-8 rounded-2xl'>
            <div>
                <img src={section23} alt="" />
            </div>
            <div>
                <h3 className='font-playfair text-center pt-3 text-[22px] text-gray-900 font-medium'>Yellow Jackets for Winter</h3>
                <p className='font-playfair text-center pt-1 text-[18px] text-gray-900'>Price: ₹999</p>
            </div>
        </div>
        <div className="self-end">
            <a href="" className='font-playfair bg-tertiary border-[2px] border-quaternary px-8 py-4 rounded-2xl'>View All</a>
        </div>
        </div>
      
    </div>
  </div>
  </div>

  
    )
}

export default Section2
