import React, { useState, useEffect } from 'react';
import section11 from '../assets/section11.svg';
import section12 from '../assets/section12.svg';
import section13 from '../assets/section13.svg';
import { useTranslation } from 'react-i18next'

function Section1() {

  const { t } = useTranslation()

  const sections = [
    { image: section11, text: ' High Fashion' },
    { image: section12, text: ' High Trends' },
    { image: section13, text: ' High Style' },
  ];

  const [currentSection, setCurrentSection] = useState(0);

  const handleNextSection = () => {
    setCurrentSection((prevIndex) => (prevIndex === sections.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextSection();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentSection]);

  return (
    <div className='h-[88vh] w-full flex justify-center relative bg-primary'>
      {sections.map((section, index) => (
        <div
          key={index}
          className={`h-[88vh] full flex justify-center ${index === currentSection ? '' : 'hidden'
            } transition-opacity duration-500 ease-in-out`}
        >

          <div className='absolute top-[13%]'>
            <h1 className='  xl:text-[250px] lg:text-[200px] md:text-[160px] sm:text-[130px] text-[80px] font-bold font-style: italic'>FASHION</h1></div>
          <div className='absolute top-[13%] text-transparent z-10' style={{ WebkitTextStroke: '2px white' }}>
            <h1 className='  xl:text-[250px] font-bold lg:text-[200px] md:text-[160px] sm:text-[130px] text-[80px] font-style: italic'>FASHION</h1>
          </div>
          <div className='absolute top-4 lg:right-[20vw] md:right-[10vw] sm:right-[5vw] right-0'>
            <img src={section.image} alt="" className='lg:h-[80vh] h-[60vh]' />
          </div>
          <div className= 'mt-[10vh] text-gray-900 absolute lg:top-[70%] md:top-[50%] lg:left-[16vw] md:left-[15vw] sm:left-[10vw] sm:top-[40%] top-[40%] left-5 font-poppins'>
            <div >
              <p className='sm:text-[16px] text-sm drop-shadow-[-1px_10px_10px_rgba(0,0,0,1)] font-bold ' >{t("Discover The Epitome Of")}</p>
              <div className='sm:text-[20px] text-sm font-bold text-blue-700 drop-shadow-[-1px_10px_10px_rgba(29,78,216,1)] font-style: italic' >{t(section.text)}</div>
              </div>
            <button className='mt-[3vh] px-4 py-1 bg-secondary text-white  rounded-md'>
              {t("Explore")}
            </button>
            
          </div>
        </div>
      ))}
    </div>
  );
}

export default Section1;
