import React from 'react';

function LangSelector(props) {
  return (
    <select
      name=""
      id=""
      value={props.lang || "en"} // Assuming props.lang holds the selected language state
      onChange={(e) => props.setLang(e.target.value)}
      className='absolute top-[12vh] right-0 w-32 bg-primary border-[2px] border-imperialred rounded shadow z-20'
    >
      <option key={"en"} value="en" disabled hidden={!props.lang}>
        {props.lang ? 'Languages' : 'English'} {/* Display 'Languages' if lang is set, otherwise 'English' */}
      </option>
      <option key={"en"} value="en" className='p-2 cursor-pointer hover:bg-gray-200'>
        English
      </option>
      <option key={"hi"} value="hi" className='p-2 cursor-pointer hover:bg-gray-200'>
        Hindi
      </option>
      <option key={"ta"} value="ta" className='p-2 cursor-pointer hover:bg-gray-200'>
        Tamil
      </option>
      <option key={"te"} value="te" className='p-2 cursor-pointer hover:bg-gray-200'>
        Telugu
      </option>
      <option key={"od"} value="od" className='p-2 cursor-pointer hover:bg-gray-200'>
        Odia
      </option>
    </select>
  );
}

export default LangSelector;
