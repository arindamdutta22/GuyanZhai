
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Terms = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <h1 className="font-display text-3xl md:text-4xl mb-8">Terms of Service</h1>
        <div className="prose max-w-none">
          <p>Coming soon...</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
