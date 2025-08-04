import React, { createContext, useContext, useState, useEffect } from 'react';
import { LANGUAGES } from '../utils/languages';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(LANGUAGES.EN);

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('todo-language');
    if (savedLanguage && Object.values(LANGUAGES).includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    } else {
      // Auto-detect browser language
      const browserLang = navigator.language || navigator.userLanguage;
      const detectedLang = browserLang.startsWith('vi') ? LANGUAGES.VI : LANGUAGES.EN;
      setCurrentLanguage(detectedLang);
      localStorage.setItem('todo-language', detectedLang);
    }
  }, []);

  const changeLanguage = (language) => {
    if (Object.values(LANGUAGES).includes(language)) {
      setCurrentLanguage(language);
      localStorage.setItem('todo-language', language);
    }
  };

  const toggleLanguage = () => {
    const newLang = currentLanguage === LANGUAGES.EN ? LANGUAGES.VI : LANGUAGES.EN;
    changeLanguage(newLang);
  };

  const value = {
    currentLanguage,
    changeLanguage,
    toggleLanguage,
    isEnglish: currentLanguage === LANGUAGES.EN,
    isVietnamese: currentLanguage === LANGUAGES.VI
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}; 