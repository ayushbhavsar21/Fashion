import React from 'react'
import section41 from '../assets/section41.jpg'
import section42 from '../assets/section42.png'
import section43 from '../assets/section43.png'
function Section4() {
  return (
    <div className='bg-primary pt-7'>
        <div className='md:pl-12 md:text-left md:p-0 text-center pb-8'>
        <h1 className='font-dancing sm:text-[36px] text-[20px] text-gray-900'><span className='sm:text-[64px] text-[40px]'>Summer</span> Collections</h1> 
        <p className='font-playfair text-[20px] text-gray-900'>We consider  your look and comfort on scorching weather.</p>
        </div>
    <div className='w-full h-auto flex flex-col gap-8 md:gap-0 md:flex-row justify-around items-center'>
      <div className='md:w-[45vw] md:h-[80vh] w-full h-auto flex md:flex-col flex-col-reverse gap-8 items-center justify-start'>
        
        <div >
            <img src={section41} alt="" className=' lg:h-[65vh] lg:w-[25vw] md:w-[35vw] md:h-[50vh] w-[80vw] rounded-2xl'/>
        </div>
        <div className='text-center lg:w-[30vw] md:w-[35vw] w-[90vw]'>
            <p className='font-playfair'>Our main aim is to serve our customer with better quality product. We try to understand their needs and provide them within a short period of time.</p>
        </div>
      </div>
      <div className='md:w-[45vw] flex flex-col items-center justify-center pt-4'>
         <div className='md:w-[40vw] w-[90vw] pb-8'>
            <p className='font-playfair'>We provide the largest clothing collection for any season. You can choose trendy or classy design according to your preferences. Our services are super fast and we update within 24 hours.</p>
         </div>
         <div>
            <img src={section42} alt=""  className='md:w-[25vw] w-[65vw] relative left-12 md:left-0'/>
            <img src={section43} alt="" className='relative lg:bottom-44 lg:right-28 lg:w-[18vw] md:w-[18vw] w-[50vw] md:right-24 md:bottom-36 bottom-44 right-12'/>
         <div className='text-center'>
         <a href="" className='font-playfair bg-tertiary border-[2px] border-quaternary px-8 py-4 rounded-2xl relative lg:bottom-36 md:bottom-28 bottom-24'>Explore</a>
         </div>
       

         </div>
         
      </div>
    </div>
    </div>
    
  )
}

export default Section4
