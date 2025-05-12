import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out",
        isScrolled 
          ? "bg-tibet-navy/90 backdrop-blur-sm shadow-md py-3" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center"
          >
            <img 
              src="/logo.png" 
              alt="古硯齋" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Language Toggle */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
            <LanguageToggle />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                cn("text-sm font-medium transition-colors hover:text-tibet-gold relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-tibet-gold after:transition-all hover:after:w-full", 
                   isActive ? "text-tibet-gold after:w-full" : "text-white")
              }
            >
              {t('home')}
            </NavLink>
            <NavLink 
              to="/collection" 
              className={({ isActive }) => 
                cn("text-sm font-medium transition-colors hover:text-tibet-gold relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-tibet-gold after:transition-all hover:after:w-full", 
                   isActive ? "text-tibet-gold after:w-full" : "text-white")
              }
            >
              {t('collection')}
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                cn("text-sm font-medium transition-colors hover:text-tibet-gold relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-tibet-gold after:transition-all hover:after:w-full", 
                   isActive ? "text-tibet-gold after:w-full" : "text-white")
              }
            >
              {t('about')}
            </NavLink>
            <div className="ml-6 p-2 rounded-full bg-tibet-amber/20 hover:bg-tibet-amber/30 transition-colors">
              <ShoppingCart className="h-5 w-5 text-tibet-gold" />
            </div>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-tibet-navy/95 z-40 transform transition-transform duration-300 ease-in-out pt-24",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="container mx-auto px-6 py-8 flex flex-col space-y-8">
          <div className="mb-6 self-center">
            <LanguageToggle />
          </div>
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              cn("text-lg font-medium text-center", 
                 isActive ? "text-tibet-gold" : "text-white")
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            {t('home')}
          </NavLink>
          <NavLink 
            to="/collection" 
            className={({ isActive }) => 
              cn("text-lg font-medium text-center", 
                 isActive ? "text-tibet-gold" : "text-white")
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            {t('collection')}
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              cn("text-lg font-medium text-center", 
                 isActive ? "text-tibet-gold" : "text-white")
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            {t('about')}
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
