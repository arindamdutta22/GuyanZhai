
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2 bg-tibet-amber/10 px-3 py-1 rounded-full">
      <button
        onClick={() => setLanguage('en')}
        className={cn(
          "text-xs font-medium transition-colors px-2 py-1 rounded",
          language === 'en' 
            ? "bg-tibet-gold text-white" 
            : "text-tibet-blue hover:text-tibet-gold"
        )}
        aria-label="Switch to English"
      >
        English
      </button>
      <div className="h-3 w-px bg-tibet-sand/50"></div>
      <button
        onClick={() => setLanguage('zh')}
        className={cn(
          "text-xs font-medium transition-colors px-2 py-1 rounded",
          language === 'zh' 
            ? "bg-tibet-gold text-white" 
            : "text-tibet-blue hover:text-tibet-gold"
        )}
        aria-label="切換到繁體中文"
      >
        繁體中文
      </button>
    </div>
  );
};

export default LanguageToggle;
