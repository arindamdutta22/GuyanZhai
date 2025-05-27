import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Map from './Map';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    setVisitorCount(prev => prev + 1);
  }, []);

  return (
    <footer className="bg-tibet-blue/95 text-white">
      <div className="container px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="font-display text-2xl">
                古硯齋
              </span>
            </Link>
            <p className="text-white/80 mb-6 max-w-xs">
              {t('footer_about_text')}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/guyanzhai_tamsui/?igsh=Zm91Z3h6a2gyY2Ix&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/80 hover:text-tibet-amber transition-colors" 
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.facebook.com/Guyanzhai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/80 hover:text-tibet-amber transition-colors" 
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display text-lg mb-6">{t('quick_links')}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/80 hover:text-tibet-amber transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link to="/collection" className="text-white/80 hover:text-tibet-amber transition-colors">
                  {t('collection')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-tibet-amber transition-colors">
                  {t('about')}
                </Link>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-tibet-amber transition-colors">
                  {t('conservation')}
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-tibet-amber transition-colors">
                  {t('shipping_returns')}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-lg mb-6">{t('categories')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/80 hover:text-tibet-amber transition-colors">
                  {t('buddhist_artifacts')}
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-tibet-amber transition-colors">
                  {t('ancient_scrolls')}
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-tibet-amber transition-colors">
                  {t('ritual_objects')}
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-tibet-amber transition-colors">
                  {t('indigenous_art')}
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-tibet-amber transition-colors">
                  {t('tibetan_textiles')}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-lg mb-6">{t('contact_us')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-tibet-amber" />
                <span className="text-white/80">1F., No. 9, Sanmin St., Tamsui Dist.,<br />New Taipei City 251024, Taiwan</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-tibet-amber" />
                <a href="tel:+886226261359" className="text-white/80 hover:text-tibet-amber transition-colors">
                  +886-226261359
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-tibet-amber" />
                <a href="mailto:guyanzhai.tamsui@gmail.com" className="text-white/80 hover:text-tibet-amber transition-colors">
                  guyanzhai.tamsui@gmail.com
                </a>
              </li>
            </ul>
            
            <Map />
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-white/60 text-sm flex flex-col md:flex-row justify-between">
          <p>© {new Date().getFullYear()} 古硯齋. {t('rights_reserved')}</p>
          <div className="mt-4 md:mt-0 flex flex-wrap gap-4">
            <a href="#" className="hover:text-tibet-amber transition-colors">{t('privacy_policy')}</a>
            <a href="#" className="hover:text-tibet-amber transition-colors">{t('terms_of_service')}</a>
            <a href="#" className="hover:text-tibet-amber transition-colors">{t('cookie_policy')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
