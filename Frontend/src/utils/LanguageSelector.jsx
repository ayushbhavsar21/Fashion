import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext'; // Adjust the path as needed
import languagesImage from '../assets/languages.png'; // Adjust the path as needed

const LanguageSelector = () => {
  const { setSelectedLanguage, supportedLanguages } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSelectLang = (lang) => {
    setSelectedLanguage(lang);
    setDropdownOpen(false);
  };

  const renderOptions = () => {
    return Object.keys(supportedLanguages).map((lang) => (
      <div
        key={lang}
        className='p-2 cursor-pointer hover:bg-gray-200'
        onClick={() => handleSelectLang(lang)}
      >
        {supportedLanguages[lang]}
      </div>
    ));
  };

  return (
    <div className='relative inline-block'>
      <div onClick={handleToggleDropdown}>
        <img
          src={languagesImage}
          alt='Language Selector'
          className='cursor-pointer h-[26px] mt-2'
        />
      </div>
      {dropdownOpen && (
        <div className='absolute top-[9vh] w-[130px] md:right-[-30px] right-[-43px] border-[2px] border-imperialred rounded shadow bg-white z-50'>
          {renderOptions()}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;

