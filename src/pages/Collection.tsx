import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ArtifactCard from '@/components/ArtifactCard';
import { Search, Filter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Sample artifacts data - in a real app this would come from an API
const allArtifacts = [
  {
    id: "1",
    image: "/images/artifacts/artifact1.png",
    name: "Wrathful Vajrakilaya Bronze",
    origin: "Tibet",
    period: "19th Century",
    price: "NT$ 165,000",
    description: "Exquisite bronze statue depicting Vajrakilaya, a wrathful protector deity, with intricate floral bow details and dynamic posture. Features remarkable red-tinted crown flames and detailed metalwork.",
    category: "Buddhist Artifacts"
  },
  {
    id: "2",
    image: "/images/artifacts/artifact2.png",
    name: "Thousand-Armed Avalokiteshvara",
    origin: "Tibet",
    period: "Early 20th Century",
    price: "NT$ 245,000",
    description: "Magnificent gilded statue of the thousand-armed Avalokiteshvara with multiple heads, symbolizing infinite compassion. Features an elaborate mandorla and intricate details in traditional Tibetan style.",
    category: "Buddhist Artifacts"
  },
  {
    id: "3",
    image: "/images/artifacts/artifact3.png",
    name: "Ancient Bronze Buddhist Master",
    origin: "Tibet",
    period: "18th Century",
    price: "NT$ 180,000",
    description: "Rare bronze statue of a Buddhist master in meditation pose, showing remarkable age patina. Notable for its serene expression and fine sculptural details in traditional Tibetan style.",
    category: "Buddhist Artifacts"
  },
  {
    id: "4",
    image: "/images/artifacts/artifact4.png",
    name: "Green Tara with Turquoise",
    origin: "Nepal",
    period: "19th Century",
    price: "NT$ 195,000",
    description: "Beautiful bronze statue of Green Tara adorned with turquoise and coral inlays. Features exceptional craftsmanship with detailed crown and jewelry work in Nepalese style.",
    category: "Buddhist Artifacts"
  },
  {
    id: "5",
    image: "/images/artifacts/artifact5.png",
    name: "Bronze Ganesha Statue",
    origin: "Nepal",
    period: "Late 19th Century",
    price: "NT$ 186,000",
    description: "Finely crafted bronze Ganesha statue with rich patina, seated on a lotus throne. Features traditional attributes including the axe and sacred thread, with detailed ornamental work.",
    category: "Ritual Objects"
  },
  {
    id: "6",
    image: "/images/artifacts/artifact6.png",
    name: "Tribal Floral Embroidery",
    origin: "Taiwan",
    period: "Mid 20th Century",
    price: "NT$ 58,000",
    description: "Stunning tribal textile featuring intricate floral medallion patterns in vibrant colors including yellow, white, and red. Shows exceptional craftsmanship with detailed circular motifs and geometric borders.",
    category: "Indigenous Art"
  },
  {
    id: "7",
    image: "/images/artifacts/artifact7.png",
    name: "Black Geometric Textile",
    origin: "Taiwan",
    period: "Early 20th Century",
    price: "NT$ 62,000",
    description: "Remarkable black textile with vibrant geometric patterns in pink, red, and turquoise. Features traditional motifs and symbols with intricate embroidery work and green fringe details.",
    category: "Indigenous Art"
  },
  {
    id: "8",
    image: "/images/artifacts/artifact8.png",
    name: "Ceremonial Embroidered Panel",
    origin: "Taiwan",
    period: "Mid 20th Century",
    price: "NT$ 45,000",
    description: "Exquisite ceremonial panel with central floral medallion surrounded by geometric patterns. Features fine embroidery work in purple, green, and pink with traditional border designs.",
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
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let results = allArtifacts;
    
    // Apply search filter
    if (searchTerm) {
      results = results.filter(
        item => 
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply origin filter
    if (selectedOrigin !== 'All Origins') {
      results = results.filter(item => item.origin === selectedOrigin);
    }
    
    // Apply category filter
    if (selectedCategory !== 'All Categories') {
      results = results.filter(item => item.category === selectedCategory);
    }
    
    setFilteredArtifacts(results);
  }, [searchTerm, selectedOrigin, selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Collection Header - changed background color */}
        <section className="py-12 bg-tibet-blue/20">
          <div className="container px-6 md:px-8">
            <h1 className="text-3xl md:text-5xl font-display font-medium mb-4 text-tibet-amber">{t('collection_title')}</h1>
            <p className="text-foreground/80 max-w-2xl">
              {t('collection_description')}
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
                  placeholder={t('search_artifacts')}
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
                {showFilters ? t('hide_filters') : t('show_filters')}
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
                    <option key={category} value={category}>{t(category.toLowerCase().replace(/ /g, '_'))}</option>
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
                    name={artifact.name}
                    origin={artifact.origin}
                    period={artifact.period}
                    price={artifact.price}
                    description={artifact.description}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium mb-2">{t('no_artifacts')}</h3>
                <p className="text-foreground/70">{t('adjust_search')}</p>
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
