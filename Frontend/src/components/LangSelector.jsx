// import React from 'react';

// function LangSelector(props) {
//   return (
//     <select
//       name=""
//       id=""
//       value={props.lang || "en"} // Assuming props.lang holds the selected language state
//       onChange={(e) => props.setLang(e.target.value)}
//       className='right-0 w-32 bg-primary border-[2px] border-imperialred rounded shadow z-20'
//     >
//       <option key={"en"} value="en" disabled hidden={!props.lang}>
//         {props.lang ? 'Languages' : 'English'} {/* Display 'Languages' if lang is set, otherwise 'English' */}
//       </option>
//       <option key={"en"} value="en" className='p-2 cursor-pointer hover:bg-gray-200'>
//         English
//       </option>
//       <option key={"hi"} value="hi" className='p-2 cursor-pointer hover:bg-gray-200'>
//         Hindi
//       </option>
//       <option key={"ta"} value="ta" className='p-2 cursor-pointer hover:bg-gray-200'>
//         Tamil
//       </option>
//       <option key={"te"} value="te" className='p-2 cursor-pointer hover:bg-gray-200'>
//         Telugu
//       </option>
//       <option key={"od"} value="od" className='p-2 cursor-pointer hover:bg-gray-200'>
//         Odia
//       </option>
//     </select>
//   );
// }

// export default LangSelector;
import React, { useState } from 'react';
import languagesImage from '../assets/languages.png';

function LangSelector(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSelectLang = (lang) => {
    props.setLang(lang);
    setDropdownOpen(false);
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
      <div
        
        onClick={handleToggleDropdown}
      >
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
}

export default LangSelector;
