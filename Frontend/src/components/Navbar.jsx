import React, { useState } from 'react';
import bag from '../assets/bag.png';
import login from '../assets/login.png';
import search from '../assets/search.png';
import ham from '../assets/ham.png';
import languages from '../assets/languages.png';
import fashion from '../assets/Fashion4.svg'

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isLanguagesDropdownOpen, setLanguagesDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };

  const toggleLanguagesDropdown = () => {
    setLanguagesDropdownOpen(!isLanguagesDropdownOpen);
  };

  return (
    <>
      <div className='h-[12vh] flex justify-between items-center bg-primary sm:p-8 p-3'>
        <div>
          {/* <h1 className='sm:text-[22px] text-[18px] text-imperialred font-bold'>FASHION</h1> */}
          <img className='h-[15vh] w-[25vw]' src={fashion} alt="FASHION" />
        </div>
        <div className='lg:flex gap-4 hidden'>
          <div>
            <a href="" className='text-[19px] text-gray-900'>
              Discover
            </a>
          </div>
          <div>
            <a href="" className='text-[19px] text-gray-900'>
              Shop-Now
            </a>
          </div>
          <div>
            <a href="" className='text-[19px] text-gray-900'>
              Orders
            </a>
          </div>
        </div>
        <div className='flex sm:gap-4 gap-2 items-center h-[12vh]'>
          <div className='flex gap-1'>
            <input
              type="text"
              className={`sm:w-[33vw] w-[38vw] h-[30px] border-[2px] border-imperialred rounded-2xl ${
                isSearchOpen ? 'block' : 'hidden'
              }`}
              placeholder=' Search...'
            />
            <button onClick={toggleSearch}>
              <img src={search} alt="" className='h-[23px]' />
            </button>
          </div>
          <div className='hidden lg:block'>
            <a href="">
              <img src={login} alt="" className='h-[23px]' />
            </a>
          </div>
          <div  className='hidden lg:block'>
            <a href="">
              <img src={bag} alt="" className='h-[23px]' />
            </a>
          </div>
          <div>
            <button onClick={toggleLanguagesDropdown}>
              <img src={languages} alt="" className='h-[35px] pt-2'/>
            </button>
            {isLanguagesDropdownOpen && (
              <div className='absolute top-[12vh] right-0 w-32 bg-primary border-[2px] border-imperialred rounded shadow z-20'>
                <div className='p-2 cursor-pointer hover:bg-gray-200'>English</div>
                <div className='p-2 cursor-pointer hover:bg-gray-200'>Hindi</div>
                <div className='p-2 cursor-pointer hover:bg-gray-200'>Tamil</div>
              </div>
            )}
          </div>
          <div className='lg:hidden pt-2'>
            <button onClick={toggleDropdown}>
              <img src={ham} alt="Menu" />
            </button>
          </div>
        </div>
      </div>
      {isDropdownOpen && (
        <div className='w-full h-[100vh] flex flex-col gap-6 pt-4 bg-primary'>
          <div >
            <a href="" className='flex text-[18px] text-gray-900 pl-2 items-center gap-2'>
              <p>Login / Sign Up</p>
              <img src={login} alt="" className='h-[23px]' />
            </a>
            <hr className="absolute left-2 right-2 border-gray-400 lg:hidden my-2" />

          </div>
          <div>
            <a href="" className='text-[18px] text-gray-900 pl-2'>
              Discover
            </a>
            <hr className="absolute left-2 right-2 border-gray-400 lg:hidden my-2" />
          </div>
          <div>
            <a href="" className='text-[18px] text-gray-900 pl-2'>
              Shop-Now
            </a>
            <hr className="absolute left-2 right-2 border-gray-400 lg:hidden my-2" />

          </div>
          <div>
            <a href="" className='text-[18px] text-gray-900 pl-2'>
              Orders
            </a>
            <hr className="absolute left-2 right-2 border-gray-400 lg:hidden my-2" />

          </div>
          
          <div>
          <a href="" className='flex text-[18px] text-gray-900 pl-2 items-center gap-2'>
              <p>Bag</p>
              <img src={bag} alt="" className='h-[23px]' />
            </a>
            <hr className="absolute left-2 right-2 border-gray-400 lg:hidden my-2" />
          </div>
         
        </div>
      )}
       <hr className='border-gray-400'/>
    </>
  );
}

export default Navbar;
