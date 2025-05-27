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
    id: "10",
    image: "/images/artifacts/artifact10.png",
    name: {
      en: "Amitayus Buddha",
      zh: "無量壽佛"
    },
    origin: {
      en: "Tibet",
      zh: "西藏"
    },
    period: {
      en: "18th Century",
      zh: "18世紀"
    },
    price: "",
    description: {
      en: "The Buddha of Longevity (Amitayus), also known as the Buddha of Infinite Life (Amitayus Buddha), is the manifestation of 'Amitabha' or the Buddha of Infinite Light. He is the main deity in the west among the 'Five Buddhas' of the Lotus Division. In the Garbha-dhatu realm, it is called 'Amitābha', and in the Vajra-dhatu realm, it is called 'Amitabha'. 'Amitābha' means innumerable and boundless. It is another form of the Dharmakāya Amitabha Buddha in the form of the Sambhogakaya Buddha.",
      zh: '無量壽佛，又稱無量壽如來，是「阿彌陀佛」或無量光佛的化現。他是蓮華部五方佛中西方的主尊。在胎藏界稱為「阿彌陀佛」，在金剛界稱為「阿彌陀佛」。「阿彌陀」意為無量、無邊，是法身阿彌陀佛以報身佛形態出現的另一種形象。'
    }
  },
  {
    id: "9",
    image: "/images/artifacts/artifact9.png",
    name: {
      en: "Guru Padmasambhava",
      zh: "蓮花生大師"
    },
    origin: {
      en: "Tibet",
      zh: "西藏"
    },
    period: {
      en: "18th Century",
      zh: "18世紀"
    },
    price: "",
    description: {
      en: "Guru Padmasambhava, also known as Guru Rinpoche, is an important founder of Tibetan Buddhism and an important leader of Tibetan Tantric Buddhism. He is known for building the first monastery in Tibet and translating important exoteric and esoteric texts into Tibetan, laying the foundation for the development of Tibetan Buddhism.",
      zh: "蓮花生大師，又稱蓮師，是藏傳佛教的重要創始人，也是藏傳密宗的重要領袖。他以在西藏建立第一座寺院並將重要的顯密經典譯為藏文而聞名，為藏傳佛教的發展奠定了基礎。"
    }
  },
  {
    id: "11",
    image: "/images/artifacts/artifact11.png",
    name: { en: "Twenty-One Tara", zh: "二十一度母" },
    origin: { en: "Tibet", zh: "西藏" },
    period: { en: "Contemporary", zh: "當代" },
    price: "",
    description: {
      en: "Tiantie Twenty-Tara Buddha Shrine\n• Main deity: Holy Tara (Green Tara) – Located in the center, she is the incarnation of Avalokitesvara, symbolizing compassion and swift relief from suffering.\n• Surrounded by: twenty incarnations of Taras – collectively known as the 'Twenty-one Taras', each representing a different rescue power, such as removing obstacles, pacifying disasters, increasing benefits, and bringing about appeasement.",
      zh: "天鐵二十一度母佛龕\n• 主尊：聖救度佛母（綠度母）——位於中央，是觀音菩薩的化身，象徵慈悲與迅速救苦。\n• 周圍環繞：二十一尊度母化身——合稱'二十一度母'，每一尊代表不同的救度力量，如消除障礙、息災、增益、調和等。"
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
