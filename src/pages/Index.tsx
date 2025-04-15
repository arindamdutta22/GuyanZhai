
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedCollection from '@/components/FeaturedCollection';
import Footer from '@/components/Footer';
import { ArrowRight, Scroll, Heart, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        
        {/* About Section */}
        <section className="py-20 bg-tibet-sand/10">
          <div className="container px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1">
                <span className="inline-block px-3 py-1 mb-3 bg-tibet-red/10 text-tibet-red text-xs uppercase tracking-wider rounded-full">
                  {t('our_philosophy')}
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-medium mb-6 leading-tight text-tibet-amber">
                  {t('preserving_heritage')}
                </h2>
                <p className="text-foreground/80 mb-6">
                  {t('about_text_1')}
                </p>
                <p className="text-foreground/80 mb-8">
                  {t('about_text_2')}
                </p>
                <Link 
                  to="/about" 
                  className="group inline-flex items-center gap-2 text-tibet-teal hover:text-tibet-red transition-colors"
                >
                  {t('learn_more')}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              
              <div className="order-1 md:order-2 relative">
                <div className="aspect-square relative z-10 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=800&q=80" 
                    alt="Tibetan monastery" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-1/4 -right-6 w-48 h-48 bg-tibet-amber/20 rounded-full -z-10"></div>
                <div className="absolute bottom-1/4 -left-6 w-32 h-32 bg-tibet-teal/20 rounded-full -z-10"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Collection */}
        <FeaturedCollection />
        
        {/* Features */}
        <section className="py-20 bg-tibet-blue/5">
          <div className="container px-6 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block px-3 py-1 mb-3 bg-tibet-blue/10 text-tibet-teal text-xs uppercase tracking-wider rounded-full">
                {t('why_choose_us')}
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-medium mb-6 text-tibet-amber">
                {t('authenticity_excellence')}
              </h2>
              <p className="text-foreground/80">
                {t('commitment_text')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-tibet-sand/10 p-8 rounded-lg text-center artifact-shadow border border-tibet-gold/10">
                <div className="w-16 h-16 bg-tibet-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Scroll className="w-8 h-8 text-tibet-red" />
                </div>
                <h3 className="text-xl font-display font-medium mb-4">{t('verified_authenticity')}</h3>
                <p className="text-foreground/70">
                  {t('verified_text')}
                </p>
              </div>
              
              <div className="bg-tibet-teal/5 p-8 rounded-lg text-center artifact-shadow border border-tibet-teal/10">
                <div className="w-16 h-16 bg-tibet-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-tibet-teal" />
                </div>
                <h3 className="text-xl font-display font-medium mb-4">{t('ethical_sourcing')}</h3>
                <p className="text-foreground/70">
                  {t('ethical_text')}
                </p>
              </div>
              
              <div className="bg-tibet-amber/5 p-8 rounded-lg text-center artifact-shadow border border-tibet-gold/10">
                <div className="w-16 h-16 bg-tibet-amber/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-tibet-amber" />
                </div>
                <h3 className="text-xl font-display font-medium mb-4">{t('cultural_education')}</h3>
                <p className="text-foreground/70">
                  {t('cultural_text')}
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-24 bg-tibet-blue/90 text-white relative overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1800&q=80" 
              alt="Background texture" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container px-6 md:px-8 text-center">
            <span className="inline-block px-3 py-1 mb-3 bg-white/20 text-white text-xs uppercase tracking-wider rounded-full">
              {t('join_community')}
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-medium mb-6 max-w-3xl mx-auto">
              {t('begin_journey')}
            </h2>
            <p className="text-white/80 mb-10 max-w-2xl mx-auto">
              {t('subscribe_text')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder={t('email_placeholder')} 
                className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-md text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 flex-grow"
              />
              <button className="btn-hover px-6 py-3 bg-tibet-amber text-tibet-blue font-medium rounded-md whitespace-nowrap">
                {t('subscribe')}
              </button>
            </div>
          </div>
        </section>
        
        <Footer />
      </main>
    </div>
  );
};

export default Index;
