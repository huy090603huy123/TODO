import React from 'react';
import { useLanguage, useTranslation } from '../hooks';

const LanguageToggle = () => {
  const { currentLanguage, toggleLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <div className="language">
      <button 
        className={currentLanguage === 'en' ? 'active' : ''}
        onClick={() => toggleLanguage()}
      >
        {t('language.en')}
      </button>
      <span>/</span>
      <button 
        className={currentLanguage === 'vi' ? 'active' : ''}
        onClick={() => toggleLanguage()}
      >
        {t('language.vi')}
      </button>
    </div>
  );
};

export default LanguageToggle; 