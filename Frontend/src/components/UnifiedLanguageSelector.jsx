import React, { useState } from 'react';
import languagesImage from '../assets/languages.png'; // Import languagesImage
import { useLanguage } from '../contexts/LanguageContext'; // Adjust the path as needed
import { useTranslation } from 'react-i18next';

const UnifiedLanguageSelector = (props) => {
  const { setSelectedLanguage, supportedLanguages } = useLanguage();
  const { t } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSelectLang = (lang) => {
    setSelectedLanguage(lang);
    setDropdownOpen(false);
    // If props.setLang exists, call it with the selected language
    if (props.setLang) {
      props.setLang(lang);
    }
  };

  const renderOptions = () => {
    const languagesList = [
      { code: 'en', name: 'English' },
      { code: 'hi', name: 'Hindi' },
      { code: 'bn', name: 'Bengali' },
      { code: 'mr', name: 'Marathi' },
      { code: 'pa', name: 'Punjabi' },
    ];

    return languagesList.map((lang) => (
      <div
        key={lang.code}
        className='p-2 cursor-pointer hover:bg-gray-200'
        onClick={() => handleSelectLang(lang.code)}
      >
        {lang.name}
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

export default UnifiedLanguageSelector;
