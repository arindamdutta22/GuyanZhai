import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Hero = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            const src = img.getAttribute('data-src');
            if (src) {
              img.src = src;
              img.classList.add('loaded');
              observer.unobserve(img);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-tibet-navy/90 to-tibet-navy/70"></div>
        <div className="w-full h-full">
          <img
            ref={imageRef}
            className="w-full h-full object-cover object-center image-lazy-load opacity-40"
            src="/placeholder.svg"
            data-src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=1800&q=80"
            alt="Tibetan landscape"
          />
        </div>
      </div>

      <div className="container px-6 md:px-8 pt-10 md:pt-16 relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <span className={cn("inline-block px-4 py-1 mb-6 bg-tibet-amber/20 text-tibet-gold text-xs uppercase tracking-wider rounded-full")}>
            {t('authentic_tibetan')}
          </span>
          
          <h1 className="text-4xl md:text-6xl font-display font-medium mb-6 leading-tight text-white">
            <span className="block reveal-text">
              {t('sacred_treasures')}
            </span>
            
            <span className="block reveal-text text-tibet-red mt-2">
              {t('from_himalayas')}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl">
            {t('explore_collection')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#featured-collection" 
              className={cn(
                "btn-hover inline-flex items-center gap-2 px-8 py-3 rounded-md bg-tibet-gold text-tibet-navy font-medium",
              )}
            >
              {t('explore_button')} <ArrowRight className="w-4 h-4" />
            </a>
            
            <Link 
              to="/about" 
              className={cn(
                "btn-hover inline-flex items-center gap-2 px-8 py-3 rounded-md border border-tibet-gold/30 text-tibet-gold font-medium",
              )}
            >
              {t('our_story')}
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="w-6 h-10 border-2 border-tibet-gold/50 rounded-full flex items-start justify-center">
          <div className="w-1.5 h-1.5 bg-tibet-gold rounded-full mt-2 animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
