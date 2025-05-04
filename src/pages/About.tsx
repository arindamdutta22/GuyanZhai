import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Scroll, Heart, Shield, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section - improved contrast for better readability */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-tibet-blue/60 to-tibet-blue/40"></div>
            <img
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1800&q=80"
              alt="Himalayan mountains"
              className="w-full h-full object-cover object-center opacity-25"
            />
          </div>
          
          <div className="container px-6 md:px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 mb-4 bg-tibet-teal/20 text-tibet-teal text-xs uppercase tracking-wider rounded-full">
                {t('our_story')}
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-medium mb-6 leading-tight text-tibet-blue">
                {/* Change heritage title to orange color */}
                <span className="text-tibet-amber">{t('preserving_heritage')}</span>
              </h1>
              <p className="text-lg text-foreground/90 max-w-2xl font-medium">
                {t('mission_text')}
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Mission - updated background color */}
        <section className="py-20 bg-tibet-navy/95 text-white">
          <div className="container px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-[4/5] relative z-10 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=800&q=80" 
                    alt="Tibetan monastery" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-8 -right-8 w-64 h-64 bg-tibet-red/20 rounded-full -z-10"></div>
                <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-tibet-amber/20 rounded-full -z-10"></div>
              </div>
              
              <div>
                <span className="inline-block px-3 py-1 mb-3 bg-tibet-red/20 text-tibet-red text-xs uppercase tracking-wider rounded-full">
                  {t('our_mission')}
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-medium mb-6 text-white">
                  {t('cultural_education')}
                </h2>
                <p className="text-white/80 mb-6">
                  {t('story_text_1')}
                </p>
                <p className="text-white/80 mb-6">
                  {t('story_text_2')}
                </p>
                <p className="text-white/80">
                  {t('commitment_text')}
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values - updated background and box colors */}
        <section className="py-20 bg-tibet-blue/10">
          <div className="container px-6 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block px-3 py-1 mb-3 bg-tibet-blue/20 text-tibet-blue text-xs uppercase tracking-wider rounded-full">
                {t('why_choose_us')}
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-medium mb-6 text-tibet-blue">
                {t('authenticity_excellence')}
              </h2>
              <p className="text-foreground/80">
                {t('commitment_text')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-tibet-navy/95 p-8 rounded-lg text-center artifact-shadow border border-tibet-gold/10">
                <div className="w-16 h-16 bg-tibet-red/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Scroll className="w-8 h-8 text-tibet-red" />
                </div>
                <h3 className="text-xl font-display font-medium mb-4 text-white">{t('verified_authenticity')}</h3>
                <p className="text-white/70">
                  {t('verified_text')}
                </p>
              </div>
              
              <div className="bg-tibet-navy/95 p-8 rounded-lg text-center artifact-shadow border border-tibet-gold/10">
                <div className="w-16 h-16 bg-tibet-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-tibet-gold" />
                </div>
                <h3 className="text-xl font-display font-medium mb-4 text-white">{t('ethical_sourcing')}</h3>
                <p className="text-white/70">
                  {t('ethical_text')}
                </p>
              </div>
              
              <div className="bg-tibet-navy/95 p-8 rounded-lg text-center artifact-shadow border border-tibet-gold/10">
                <div className="w-16 h-16 bg-tibet-teal/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-tibet-teal" />
                </div>
                <h3 className="text-xl font-display font-medium mb-4 text-white">{t('preserving_heritage')}</h3>
                <p className="text-white/70">
                  {t('cultural_text')}
                </p>
              </div>
              
              <div className="bg-tibet-navy/95 p-8 rounded-lg text-center artifact-shadow border border-tibet-gold/10">
                <div className="w-16 h-16 bg-tibet-amber/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-tibet-amber" />
                </div>
                <h3 className="text-xl font-display font-medium mb-4 text-white">{t('cultural_education')}</h3>
                <p className="text-white/70">
                  {t('cultural_text')}
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team - updated background color */}
        <section className="py-20 bg-tibet-cream/50">
          <div className="container px-6 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block px-3 py-1 mb-3 bg-tibet-amber/20 text-tibet-amber text-xs uppercase tracking-wider rounded-full">
                {t('meet_team')}
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-medium mb-6 text-tibet-blue">
                {t('meet_team')}
              </h2>
              <p className="text-foreground/80">
                {t('commitment_text')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="aspect-square w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80" 
                    alt="Dr. Sarah Chen" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-display font-medium">Dr. Sarah Chen</h3>
                <p className="text-tibet-blue mb-2">{t('founder')}</p>
                <p className="text-foreground/70 mx-auto max-w-xs">
                  {t('founder_bio')}
                </p>
              </div>
              
              <div className="text-center">
                <div className="aspect-square w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=500&q=80" 
                    alt="Tenzin Dorje" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-display font-medium">Tenzin Dorje</h3>
                <p className="text-tibet-blue mb-2">{t('art_specialist')}</p>
                <p className="text-foreground/70 mx-auto max-w-xs">
                  {t('specialist_bio')}
                </p>
              </div>
              
              <div className="text-center">
                <div className="aspect-square w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1573497161161-c3e73707e25c?auto=format&fit=crop&w=500&q=80" 
                    alt="Dr. Maya Lin" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-display font-medium">Dr. Maya Lin</h3>
                <p className="text-tibet-blue mb-2">{t('education_coordinator')}</p>
                <p className="text-foreground/70 mx-auto max-w-xs">
                  {t('coordinator_bio')}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
