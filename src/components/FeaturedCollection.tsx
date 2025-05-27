import React from 'react';
import ArtifactCard from './ArtifactCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const artifacts = [
  {
    id: "2",
    image: "/images/artifacts/artifact2.png",
    name: {
      en: "Sahasrabhuja Sahasranetra Avalokiteshvara",
      zh: "千手千眼觀世音菩薩"
    },
    origin: {
      en: "Tibet",
      zh: "西藏"
    },
    period: {
      en: "18th Century",
      zh: "18世紀"
    },
    price: "NT$ 120,000",
    description: {
      en: "Thousand-armed and Thousand-eyed Avalokiteshvara (Sanskrit name: Sahasrabhuja Sahasranetra Avalokiteshvara)\n• Thousand Hands: It symbolizes using countless arms to help all living beings and possesses the vast and unhindered power of compassion.\n• Thousand Eyes: One eye in each palm symbolizes the insight into all suffering and constant observation of the world.",
      zh: "千手千眼觀世音菩薩（梵文名：Sahasrabhuja Sahasranetra Avalokiteshvara）\n• 千手：象徵著用無數的手臂來幫助所有眾生，擁有廣大無礙的慈悲力量。\n• 千眼：每隻手掌中的一隻眼睛象徵著洞察一切苦難並持續觀察世界。"
    }
  },
  {
    id: "6",
    image: "/images/artifacts/artifact6.png",
    name: {
      en: "Taiwanese Tribal Embroidery",
      zh: "台灣部落刺繡"
    },
    origin: {
      en: "Taiwan",
      zh: "台灣"
    },
    period: {
      en: "Mid 20th Century",
      zh: "20世紀中期"
    },
    price: "NT$ 42,500",
    description: {
      en: "Hand-embroidered ceremonial cloth featuring traditional motifs in vibrant colors. This exquisite textile showcases the indigenous artisans' skill with circular floral patterns and intricate geometric designs.",
      zh: "手工刺繡的儀式布，展現傳統圖案和鮮豔色彩。這件精美的紡織品展現了原住民工匠的圓形花卉圖案和複雜幾何設計技巧。"
    }
  },
  {
    id: "7",
    image: "/images/artifacts/artifact7.png",
    name: {
      en: "Black Hmong Ceremonial Textile",
      zh: "黑苗族儀式紡織品"
    },
    origin: {
      en: "Taiwan",
      zh: "台灣"
    },
    period: {
      en: "Early 20th Century",
      zh: "20世紀初"
    },
    price: "NT$ 57,000",
    description: {
      en: "Stunning black textile with vibrantly colored geometric patterns and symbols, hand-woven and embroidered for ceremonial purposes, featuring pink and turquoise motifs with detailed cross-stitch work.",
      zh: "令人驚嘆的黑色紡織品，帶有鮮豔的幾何圖案和符號，手工編織和刺繡，用於儀式，並以粉紅和綠松石圖案及精細的十字繡為特色。"
    }
  }
];

const FeaturedCollection = () => {
  const { t, language } = useLanguage();
  
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
              name={artifact.name[language]}
              origin={artifact.origin[language]}
              period={artifact.period[language]}
              price={artifact.price}
              description={artifact.description[language]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
