

import React, { useState } from 'react'
import bag from '../assets/bag.png'
import login from '../assets/login.png'
import ham from '../assets/ham.png'
function Navbar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
    <div className='h-[12vh] flex justify-between items-center bg-primary p-8'>
      <div>
        <h1 className='text-[22px] text-imperialred font-bold'>FASHION</h1>
      </div>
      <div className='lg:flex gap-4 hidden'>
      <div>
            <a href="" className='text-[22px] text-gray-900'>Discover</a>
        </div>
        <div >
            <a href="" className='text-[22px] text-gray-900'>Shop-Now</a>
        </div>
        <div>
            <a href="" className='text-[22px] text-gray-900'>Orders</a>
        </div>
        
        
      </div>
      <div className='flex gap-4 items-center h-[12vh]'>
        <div className='lg:block hidden'>
            <input type="text"  className='w-[30vw] h-[30px] border-[2px] border-imperialred rounded-2xl' placeholder=' Search...'/>
        </div>
      <div >
            <a href=""> <img src={login} alt="" /></a>
        </div>
        <div>
            <a href=""><img src={bag} alt="" /></a>
        </div>
        <div className='lg:hidden pt-2'>
        <button onClick={toggleDropdown}>
            <img src={ham} alt="Menu" />
          </button>
        </div>
      </div>
    </div>
   {isDropdownOpen && (
    <div className='w-full h-[100vh] flex flex-col gap-6 pl-4 pt-8'>
           
    <div>
      <a href="" className='text-[22px] text-gray-900'>
        Discover
      </a>
    </div>
    <div>
      <a href="" className='text-[22px] text-gray-900'>
        Shop-Now
      </a>
    </div>
    <div>
      <a href="" className='text-[22px] text-gray-900'>
        Orders
      </a>
    </div>
    <div  className='self-center pt-8 pr-4'>
            <input type="text"  className='w-[80vw] h-[30px] border-[2px] border-imperialred rounded-2xl' placeholder=' Search...'/>
        </div>
  </div>
)}
    </>
    
    
  )
}

export default Navbar
