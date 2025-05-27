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
    id: "1",
    image: "/images/artifacts/artifact1.png",
    name: "Wrathful Vajrakilaya Bronze",
    origin: "Tibet",
    period: "19th Century",
    description: "A powerful bronze statue of Vajrakilaya, a wrathful deity in Tibetan Buddhism. The statue features a dynamic three-headed form with multiple arms holding ritual implements, standing on a lotus base with intricate detailing. The craftsmanship showcases traditional Tibetan metalwork techniques, with each detail carefully rendered to convey the deity's protective and transformative qualities.",
    category: "Buddhist Artifacts"
  },
  {
    id: "2",
    image: "/images/artifacts/artifact2.png",
    name: "Thousand-Armed Avalokiteshvara",
    origin: "Tibet",
    period: "Early 20th Century",
    description: "A magnificent gilded bronze statue of Avalokiteshvara, the bodhisattva of compassion. The statue displays multiple arms radiating from the central figure, each holding different symbolic objects, with a serene expression and elaborate crown. The gilding work is particularly noteworthy, with the gold leaf carefully applied to highlight the deity's divine nature and spiritual significance.",
    category: "Buddhist Artifacts"
  },
  {
    id: "3",
    image: "/images/artifacts/artifact3.png",
    name: "Ancient Bronze Buddhist Master",
    origin: "Tibet",
    period: "18th Century",
    description: "A finely crafted bronze statue of a Buddhist master in meditation pose. The figure sits in the lotus position with hands in a mudra, wearing traditional monastic robes with detailed folds and a serene expression. The patina on the bronze suggests its age and authenticity, while the master's peaceful countenance reflects deep spiritual attainment.",
    category: "Buddhist Artifacts"
  },
  {
    id: "4",
    image: "/images/artifacts/artifact4.png",
    name: "Green Tara with Turquoise",
    origin: "Nepal",
    period: "19th Century",
    description: "An elegant bronze statue of Green Tara, the female bodhisattva of compassion. The figure sits in a relaxed pose with one leg extended, adorned with traditional jewelry and a crown, featuring turquoise inlays. The statue's graceful posture and detailed ornamentation reflect the Nepalese style of Buddhist art, while the turquoise accents add a distinctive Himalayan touch.",
    category: "Buddhist Artifacts"
  },
  {
    id: "5",
    image: "/images/artifacts/artifact5.png",
    name: "Bronze Ganesha Statue",
    origin: "Nepal",
    period: "Late 19th Century",
    description: "A detailed bronze statue of Ganesha, the elephant-headed Hindu deity. The figure sits in a royal posture with multiple arms holding various attributes, including a bowl of sweets and a broken tusk. The statue's intricate detailing and balanced proportions exemplify the Nepalese tradition of metal sculpture, while the deity's benevolent expression conveys wisdom and prosperity.",
    category: "Ritual Objects"
  },
  {
    id: "6",
    image: "/images/artifacts/artifact6.png",
    name: "Tribal Floral Embroidery",
    origin: "Taiwan",
    period: "Mid 20th Century",
    description: "A vibrant textile featuring traditional tribal embroidery with floral motifs. The piece showcases intricate patterns in red, yellow, and white threads, creating a harmonious geometric design with cultural significance. The embroidery techniques used reflect the indigenous craftsmanship of Taiwan's native tribes, with each stitch carrying symbolic meaning and cultural heritage.",
    category: "Indigenous Art"
  },
  {
    id: "7",
    image: "/images/artifacts/artifact7.png",
    name: "Black Geometric Textile",
    origin: "Taiwan",
    period: "Early 20th Century",
    description: "A striking black textile adorned with geometric patterns in contrasting colors. The design features traditional symbols and motifs in pink, red, and turquoise, with precise embroidery work and decorative borders. The textile's bold color combinations and precise geometric patterns demonstrate the sophisticated textile traditions of Taiwan's indigenous cultures.",
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
                    name={artifact.name[language]}
                    origin={artifact.origin[language]}
                    period={artifact.period[language]}
                    description={artifact.description[language]}
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
