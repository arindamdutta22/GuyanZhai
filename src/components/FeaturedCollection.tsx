import React from 'react';
import ArtifactCard from './ArtifactCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const artifacts = [
  {
    id: "1",
    image: "/images/artifacts/artifact1.png",
    name: "Tibetan Thangka - Avalokiteshvara",
    origin: "Tibet",
    period: "19th Century",
    price: "NT$ 135,000",
    description: "Exquisite thangka painting depicting the Buddhist deity Avalokiteshvara with multiple arms, representing compassion and mercy, created with natural pigments on cotton canvas."
  },
  {
    id: "2",
    image: "/images/artifacts/artifact2.png",
    name: "Vajrakilaya Thangka",
    origin: "Tibet",
    period: "Early 20th Century",
    price: "NT$ 120,000",
    description: "Powerful thangka depicting Vajrakilaya, a wrathful manifestation of enlightened energy that removes obstacles on the spiritual path, painted on traditional cotton with mineral pigments."
  },
  {
    id: "6",
    image: "/images/artifacts/artifact6.png",
    name: "Taiwanese Tribal Embroidery",
    origin: "Taiwan",
    period: "Mid 20th Century",
    price: "NT$ 42,500",
    description: "Hand-embroidered ceremonial cloth featuring traditional motifs in vibrant colors. This exquisite textile showcases the indigenous artisans' skill with circular floral patterns and intricate geometric designs."
  },
  {
    id: "7",
    image: "/images/artifacts/artifact7.png",
    name: "Black Hmong Ceremonial Textile",
    origin: "Taiwan",
    period: "Early 20th Century",
    price: "NT$ 57,000",
    description: "Stunning black textile with vibrantly colored geometric patterns and symbols, hand-woven and embroidered for ceremonial purposes, featuring pink and turquoise motifs with detailed cross-stitch work."
  }
];

const FeaturedCollection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="featured-collection" className="py-20 bg-tibet-navy/95 text-white">
      <div className="container px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <span className="inline-block px-3 py-1 mb-3 bg-tibet-amber/20 text-tibet-amber text-xs uppercase tracking-wider rounded-full">
              {t('our_collection')}
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-medium text-white">
              {t('featured_artifacts')}
            </h2>
          </div>
          <Link 
            to="/collection" 
            className="group mt-4 md:mt-0 flex items-center gap-2 text-tibet-gold hover:text-tibet-red transition-colors"
          >
            {t('view_all')} 
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {artifacts.map((artifact) => (
            <ArtifactCard 
              key={artifact.id}
              id={artifact.id}
              image={artifact.image}
              name={artifact.name}
              origin={artifact.origin}
              period={artifact.period}
              price={artifact.price}
              description={artifact.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
