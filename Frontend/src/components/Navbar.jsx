import React, { useState } from 'react';
import bag from '../assets/bag.png';
import login from '../assets/login.png';
import search from '../assets/search.png';
import ham from '../assets/ham.png';
import languages from '../assets/languages.png';
import fashion from '../assets/Fashion4.svg'
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import LangSelector from './LangSelector';
import { useAuth } from '../contexts/AuthContext';

function Navbar() {

  const {isLoggedIn} = useAuth();

  const { t } = useTranslation()
  const [currentLang, setCurrentLang] = useState('en');
  useEffect(() => {
    const lang = localStorage.getItem("language") || "en";
    console.log("Language from localStorage:", lang);
    setCurrentLang(lang);
    i18next.changeLanguage(lang)
  }, [])
  const setLang = (data) => {
    console.log(data)
    localStorage.setItem('language', data)
   // window.location.reload()
   setCurrentLang(data);
   i18next.changeLanguage(data);

  }



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
      <div className='h-[11vh] flex justify-between items-center bg-primary sm:p-8 pr-2 pl-0 font-playfair'>
        <div><a href="/">
          <img className='sm:h-[12vh] h-[8vh]' src={fashion} alt="FASHION" />
        </a>
          {/* <h1 className='sm:text-[22px] text-[18px] text-imperialred font-bold'>FASHION</h1> */}
          
        </div>
        <div className='lg:flex gap-4 hidden'>
          <div>
            <a href="/" className='text-[19px] text-gray-900'>
              {t("Discover")}
            </a>
          </div>
          {isLoggedIn ? (
            <>
            <div>
            <a href="/ShopNow" className='text-[19px] text-gray-900'>
              {t("Shop-Now")}
            </a>
          </div>
          <div>
            <a href="/order" className='text-[19px] text-gray-900'>
              {t("Orders")}
            </a>
          </div>
            </>
            
          ):(
            <>
            <div>
            <a href="/SignIn" className='text-[19px] text-gray-900'>
              {t("Shop-Now")}
            </a>
          </div>
          <div>
            <a href="/SignIn" className='text-[19px] text-gray-900'>
              {t("Orders")}
            </a>
          </div>
            </>
          )

          }
        </div>
        <div className='flex sm:gap-4 gap-2 items-center h-[12vh]'>
          <div className='flex gap-1'>
            <input
              type="text"
              className={`sm:w-[33vw] w-[30vw] h-[30px] border-[2px] border-imperialred rounded-2xl ${
                isSearchOpen ? 'block' : 'hidden'
              }`}
              placeholder=' Search...'
            />
            <button onClick={toggleSearch}>
              <img src={search} alt="" className='h-[23px]' />
            </button>
          </div>
          
          {isLoggedIn ? (
            <div  className='hidden lg:block'>
            <a href="/Cart">
              <img src={bag} alt="" className='h-[23px]' />
            </a>
          </div>
            
          ):(
            <div  className='hidden lg:block'>
            <a href="/SignIn">
              <img src={bag} alt="" className='h-[23px]' />
            </a>
          </div>
          )

          }
          
          <div>
            
                <LangSelector setLang={setLang} lang={currentLang} />
           
          </div>
          {isLoggedIn ? (
            <a href="/Logout">
              <button className="text-imperialred" >
               LogOut
              </button>
            </a>
            
          ):(
            <a href="/SignIn">
              <button className="text-imperialred" >
               SignIn
            </button>
            </a>
          )

          }
          
          
          <div className='lg:hidden pt-2'>
            <button onClick={toggleDropdown}>
              <img src={ham} alt="Menu" />
            </button>
          </div>
        </div>
      </div>
      {isDropdownOpen && (
        <div className='w-full h-[100vh] flex flex-col gap-6 pt-4 bg-primary'>
         
          <div>
            <a href="/" className='text-[18px] text-gray-900 pl-2'>
              Discover
            </a>
            <hr className="absolute left-2 right-2 border-gray-400 lg:hidden my-2" />
          </div>
          <div>
            <a href="/ShopNow" className='text-[18px] text-gray-900 pl-2'>
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
          <a href="/Cart" className='flex text-[18px] text-gray-900 pl-2 items-center gap-2'>
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