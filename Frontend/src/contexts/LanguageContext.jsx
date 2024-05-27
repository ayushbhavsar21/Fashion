import React, { createContext, useState, useContext, useEffect } from 'react';
import { translateText } from '../components/Translator'; 

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const storedLanguage = localStorage.getItem('selectedLanguage'); 
  const [selectedLanguage, setSelectedLanguage] = useState(storedLanguage || 'en'); 
  const [translatedData, setTranslatedData] = useState({});

  const supportedLanguages = {
    en: 'English',
    hi: 'Hindi',
    bn: 'Bengali',
    mr: 'Marathi',
    pa: 'Punjabi',
  };

  const translateData = async (data) => {
    const translatedData = await Promise.all(
      data.map(async (item) => {
        const translatedDescription = selectedLanguage === 'en' ? item.description : await translateText(item.description, 'en', selectedLanguage);
        const translatedName = selectedLanguage === 'en' ? item.name : await translateText(item.name, 'en', selectedLanguage);
        return { ...item, name: translatedName, description: translatedDescription };
      })
    );
    return translatedData;
  };
  

  useEffect(() => {
    localStorage.setItem('selectedLanguage', selectedLanguage); 
  }, [selectedLanguage]);

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage, translateData, supportedLanguages }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
