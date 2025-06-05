import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ArtifactCard from '@/components/ArtifactCard';
import { Search, Filter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Sample artifacts data - in a real app this would come from an API
const allArtifacts = [
  {
    id: "10",
    image: "/images/artifacts/artifact10.png",
    name: { en: "Amitayus Buddha", zh: "無量壽佛" },
    origin: { en: "Tibet", zh: "西藏" },
    period: { en: "18th Century", zh: "18世紀" },
    description: {
      en: "The Buddha of Longevity (Amitayus), also known as the Buddha of Infinite Life (Amitayus Buddha), is the manifestation of 'Amitabha' or the Buddha of Infinite Light. He is the main deity in the west among the 'Five Buddhas' of the Lotus Division. In the Garbha-dhatu realm, it is called 'Amitābha', and in the Vajra-dhatu realm, it is called 'Amitabha'. 'Amitābha' means innumerable and boundless. It is another form of the Dharmakāya Amitabha Buddha in the form of the Sambhogakaya Buddha.",
      zh: '無量壽佛，又稱無量壽如來，是「阿彌陀佛」或無量光佛的化現。他是蓮華部五方佛中西方的主尊。在胎藏界稱為「阿彌陀佛」，在金剛界稱為「阿彌陀佛」。「阿彌陀」意為無量、無邊，是法身阿彌陀佛以報身佛形態出現的另一種形象。'
    },
    category: "Buddhist Artifacts"
  },
  {
    id: "9",
    image: "/images/artifacts/artifact9.png",
    name: { en: "Guru Padmasambhava", zh: "蓮花生大師" },
    origin: { en: "Tibet", zh: "西藏" },
    period: { en: "18th Century", zh: "18世紀" },
    description: {
      en: "Guru Padmasambhava, also known as Guru Rinpoche, is an important founder of Tibetan Buddhism and an important leader of Tibetan Tantric Buddhism. He is known for building the first monastery in Tibet and translating important exoteric and esoteric texts into Tibetan, laying the foundation for the development of Tibetan Buddhism.",
      zh: "蓮花生大師，又稱蓮師，是藏傳佛教的重要創始人，也是藏傳密宗的重要領袖。他以在西藏建立第一座寺院並將重要的顯密經典譯為藏文而聞名，為藏傳佛教的發展奠定了基礎。"
    },
    category: "Buddhist Artifacts"
  },
  {
    id: "2",
    image: "/images/artifacts/artifact2.png",
    name: { en: "Sahasrabhuja Sahasranetra Avalokiteshvara", zh: "千手千眼觀世音菩薩" },
    origin: { en: "Tibet", zh: "西藏" },
    period: { en: "18th Century", zh: "18世紀" },
    description: {
      en: "Thousand-armed and Thousand-eyed Avalokiteshvara (Sanskrit name: Sahasrabhuja Sahasranetra Avalokiteshvara)\n• Thousand Hands: It symbolizes using countless arms to help all living beings and possesses the vast and unhindered power of compassion.\n• Thousand Eyes: One eye in each palm symbolizes the insight into all suffering and constant observation of the world.",
      zh: "千手千眼觀世音菩薩（梵文名：Sahasrabhuja Sahasranetra Avalokiteshvara）\n• 千手：象徵著用無數的手臂來幫助所有眾生，擁有廣大無礙的慈悲力量。\n• 千眼：每隻手掌中的一隻眼睛象徵著洞察一切苦難並持續觀察世界。"
    },
    category: "Buddhist Artifacts"
  },
  {
    id: "3",
    image: "/images/artifacts/artifact3.png",
    name: { en: "Guru Padmasambhava", zh: "蓮花生大師" },
    origin: { en: "Tibet", zh: "西藏" },
    period: { en: "19th Century", zh: "19世紀" },
    description: {
      en: "Guru Padmasambhava, also known as Guru Rinpoche, is an important founder of Tibetan Buddhism and an important leader of Tibetan Tantric Buddhism. He is known for building the first monastery in Tibet and translating important exoteric and esoteric texts into Tibetan, laying the foundation for the development of Tibetan Buddhism.",
      zh: "蓮花生大師，又稱蓮師，是藏傳佛教的重要創始人，也是藏傳密宗的重要領袖。他以在西藏建立第一座寺院並將重要的顯密經典譯為藏文而聞名，為藏傳佛教的發展奠定了基礎。"
    },
    dimensions: { en: "approx. 40cm", zh: "約40厘米" },
    category: "Buddhist Artifacts"
  },
  {
    id: "4",
    image: "/images/artifacts/artifact4.png",
    name: { en: "Sita Tara", zh: "白度母" },
    origin: { en: "Tibet", zh: "西藏" },
    period: { en: "19th Century", zh: "19世紀" },
    description: {
      en: "White Tara (Tibetan: མོ་དཀར་་, Sanskrit: Sita Tārā) is one of the most important female deities in Tibetan Buddhism, representing \"longevity, purity, compassion\" and \"quick liberation\".",
      zh: "白度母（藏文：མོ་དཀར་་，梵文：Sita Tārā）是藏傳佛教中最重要的女性神祇之一，代表「長壽、純潔、慈悲」及「迅速解脫」。"
    },
    dimensions: { en: "approx. 21cm", zh: "約21厘米" },
    category: "Buddhist Artifacts"
  },
  {
    id: "5",
    image: "/images/artifacts/artifact5.png",
    name: { en: "Ganesha", zh: "象鼻財神" },
    origin: { en: "Bhutan", zh: "不丹" },
    period: { en: "Late 19th Century", zh: "19世紀末" },
    description: {
      en: "The elephant-nosed god of wealth (Tibetan: རྡོ་རྗེ་རྒྱལ་པོ་དུང་དཀར་, transliterated: Dunga God of Wealth, or 'Elephant-Headed God of Wealth') in Tibetan Buddhism is a guardian deity with an elephant head and a human body. He is mainly in charge of wealth and blessings and is deeply worshipped by Tibetans and Tantric practitioners.",
      zh: "形象猶如印度教中的象頭神「迦尼薩（Ganesha）」，但在藏傳佛教中轉化為一位密宗財神與護法。"
    },
    category: "Ritual Objects"
  },
  {
    id: "6",
    image: "/images/artifacts/artifact6.png",
    name: { en: "Exquisite Craft [ twist & couching stitches ]", zh: "精湛的刺繡 之［ 絞繡 ]" },
    origin: { en: "Taiwan", zh: "台灣" },
    period: { en: "Mid 20th Century", zh: "20世紀中期" },
    description: {
      en: "The Miao in Zi-jing in the northwestern region of Gui-zhou province are famous for this refined skill.",
      zh: "絞繡，是苗繡中運用較多的技法之一。其做法是先將一根棉線、麻線、絲線或馬尾鬃，用細絲線纏絞、包裹起來，再釘縫在布面上，譜成極為精細、綺麗的圖案。\n以「絞繡」為創作主要構圖而聞名的，包括貴州織金、大方及普定一帶的苗族。"
    },
    detailedDescription: {
      en: "This is another work of great labor. First, one has to twist, twine, and wring several fine silk threads together and then secure the twisted thread on the cloth in a dense couch embroidery. The Miao in Zi-jing in the northwestern region of Gui-zhou province are famous for this refined skill.",
      zh: "絞繡，是苗繡中運用較多的技法之一。其做法是先將一根棉線、麻線、絲線或馬尾鬃，用細絲線纏絞、包裹起來，再釘縫在布面上，譜成極為精細、綺麗的圖案。\n以「絞繡」為創作主要構圖而聞名的，包括貴州織金、大方及普定一帶的苗族。"
    },
    category: "Indigenous Art"
  },
  {
    id: "7",
    image: "/images/artifacts/artifact7.png",
    name: { en: "Cross-stitch headscarves of ethnic minorities in the southwest", zh: "西南少數民族十字繡頭巾" },
    origin: { en: "China", zh: "中國" },
    period: { en: "Early 20th Century", zh: "20世紀初" },
    description: { en: "", zh: "" },
    category: "Indigenous Art"
  },
  {
    id: "8",
    image: "/images/artifacts/artifact8.png",
    name: "Ceremonial Embroidered Panel",
    origin: "Taiwan",
    period: "Mid 20th Century",
    description: "A ceremonial textile panel with a central medallion design. The piece features intricate embroidery in purple, green, and pink, with traditional patterns and symbols arranged in a balanced composition. The panel's design elements and color scheme reflect the ceremonial significance of textiles in Taiwanese indigenous culture, serving both decorative and ritual purposes.",
    category: "Tibetan Textiles"
  },
  {
    id: "11",
    image: "/images/artifacts/artifact11.png",
    name: { en: "Twenty-One Tara", zh: "二十一度母" },
    origin: { en: "Tibet", zh: "西藏" },
    period: { en: "Contemporary", zh: "當代" },
    description: {
      en: "Tiantie Twenty-Tara Buddha Shrine\n• Main deity: Holy Tara (Green Tara) – Located in the center, she is the incarnation of Avalokitesvara, symbolizing compassion and swift relief from suffering.\n• Surrounded by: twenty incarnations of Taras – collectively known as the 'Twenty-one Taras', each representing a different rescue power, such as removing obstacles, pacifying disasters, increasing benefits, and bringing about appeasement.",
      zh: "天鐵二十一度母佛龕\n• 主尊：聖救度佛母（綠度母）——位於中央，是觀音菩薩的化身，象徵慈悲與迅速救苦。\n• 周圍環繞：二十一尊度母化身——合稱'二十一度母'，每一尊代表不同的救度力量，如消除障礙、息災、增益、調和等。"
    },
    category: "Buddhist Artifacts"
  }
];

const origins = ["All Origins", "Tibet", "Bhutan", "Taiwan", "Nepal"];
const categories = ["All Categories", "Buddhist Artifacts", "Ancient Scrolls", "Ritual Objects", "Indigenous Art", "Tibetan Textiles"];

const Collection = () => {
  const [filteredArtifacts, setFilteredArtifacts] = useState(allArtifacts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrigin, setSelectedOrigin] = useState('All Origins');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [showFilters, setShowFilters] = useState(false);
  const { t, language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let results = allArtifacts;
    
    // Apply search filter
    if (searchTerm) {
      results = results.filter(
        item => 
          item.name[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description[language].toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply origin filter
    if (selectedOrigin !== 'All Origins') {
      results = results.filter(item => item.origin[language] === selectedOrigin);
    }
    
    // Apply category filter
    if (selectedCategory !== 'All Categories') {
      results = results.filter(item => item.category === selectedCategory);
    }
    
    setFilteredArtifacts(results);
  }, [searchTerm, selectedOrigin, selectedCategory, language]);

  // Helper function to safely get translations
  const getTranslation = (key: string) => {
    try {
      return t(key) || key;
    } catch (error) {
      console.warn(`Translation not found for key: ${key}`);
      return key;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Collection Header - changed background color */}
        <section className="py-12 bg-tibet-blue/20">
          <div className="container px-6 md:px-8">
            <h1 className="text-3xl md:text-5xl font-display font-medium mb-4 text-tibet-amber">{getTranslation('collection_title')}</h1>
            <p className="text-foreground/80 max-w-2xl">
              {getTranslation('collection_description')}
            </p>
          </div>
        </section>
        
        {/* Filters and Search - changed background color */}
        <section className="py-8 bg-tibet-blue/10 border-b border-tibet-sand/30">
          <div className="container px-6 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="relative w-full md:w-auto md:min-w-[320px]">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50 h-5 w-5" />
                <input
                  type="text"
                  placeholder={getTranslation('search_artifacts')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border border-tibet-gold/30 rounded-md bg-tibet-blue/5 focus:outline-none focus:ring-2 focus:ring-tibet-gold/30 text-tibet-blue"
                />
              </div>
              
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 text-sm font-medium text-foreground md:hidden"
              >
                <Filter className="h-4 w-4" />
                {showFilters ? getTranslation('hide_filters') : getTranslation('show_filters')}
              </button>
              
              <div className={`flex flex-col md:flex-row gap-4 w-full md:w-auto ${showFilters ? 'block' : 'hidden md:flex'}`}>
                <select
                  value={selectedOrigin}
                  onChange={(e) => setSelectedOrigin(e.target.value)}
                  className="px-4 py-2 border border-tibet-gold/30 rounded-md bg-tibet-blue/5 focus:outline-none focus:ring-2 focus:ring-tibet-gold/30 text-tibet-blue"
                  aria-label="Filter by origin"
                >
                  {origins.map(origin => (
                    <option key={origin} value={origin}>{origin}</option>
                  ))}
                </select>
                
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-tibet-gold/30 rounded-md bg-tibet-blue/5 focus:outline-none focus:ring-2 focus:ring-tibet-gold/30 text-tibet-blue"
                  aria-label="Filter by category"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {getTranslation(category.toLowerCase().replace(/ /g, '_'))}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>
        
        {/* Artifacts Grid */}
        <section className="py-12">
          <div className="container px-6 md:px-8">
            {filteredArtifacts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {filteredArtifacts.map(artifact => (
                  <ArtifactCard
                    key={artifact.id}
                    id={artifact.id}
                    image={artifact.image}
                    name={typeof artifact.name === 'object' ? artifact.name[language] : artifact.name}
                    origin={typeof artifact.origin === 'object' ? artifact.origin[language] : artifact.origin}
                    period={typeof artifact.period === 'object' ? artifact.period[language] : artifact.period}
                    description={typeof artifact.description === 'object' ? artifact.description[language] : artifact.description}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium mb-2">{getTranslation('no_artifacts')}</h3>
                <p className="text-foreground/70">{getTranslation('adjust_search')}</p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Collection;
