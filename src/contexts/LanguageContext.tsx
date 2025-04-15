
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type LanguageType = 'en' | 'zh';

interface LanguageContextType {
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'home': 'Home',
    'collection': 'Collection',
    'about': 'About',
    
    // General
    'authentic_tibetan': 'Authentic Tibetan',
    'sacred_treasures': 'Sacred Treasures',
    'from_himalayas': 'from the Himalayas',
    'explore_collection': 'Discover exquisite artifacts with rich historical and cultural significance from the heart of Tibet.',
    'our_philosophy': 'Our Philosophy',
    'preserving_heritage': 'Preserving Heritage Through Knowledge',
    'about_text_1': 'At Tibetan Treasures Exchange, we believe that understanding the cultural significance of these artifacts is as important as appreciating their beauty.',
    'about_text_2': 'We work closely with Tibetan scholars and artisans to ensure the authenticity and cultural integrity of each piece in our collection.',
    'learn_more': 'Learn more about our mission',
    'why_choose_us': 'Why Choose Us',
    'authenticity_excellence': 'Authenticity & Cultural Expertise',
    'commitment_text': 'Our commitment to cultural preservation and education sets us apart. Each artifact comes with a detailed history and provenance.',
    'verified_authenticity': 'Verified Authenticity',
    'verified_text': 'Each piece in our collection undergoes rigorous authentication by experts in Himalayan art and artifacts.',
    'ethical_sourcing': 'Ethical Sourcing',
    'ethical_text': 'We ensure all artifacts are ethically sourced, with proper documentation and respect for cultural heritage.',
    'cultural_education': 'Cultural Education',
    'cultural_text': 'We provide detailed information about the history, symbolism, and significance of each artifact.',
    'join_community': 'Join Our Community',
    'begin_journey': 'Begin Your Journey into Tibetan Art and Culture',
    'subscribe_text': 'Subscribe to receive updates about new artifacts, educational content, and upcoming exhibitions.',
    'email_placeholder': 'Enter your email',
    'subscribe': 'Subscribe',
    'featured_artifacts': 'Featured Artifacts',
    'featured_text': 'Explore our curated selection of rare and significant Tibetan cultural artifacts.',
    'view_all': 'View All Artifacts',
    'footer_about': 'About Tibetan Treasures Exchange',
    'footer_about_text': 'Specializing in authentic Tibetan artifacts, we curate cultural treasures with a focus on education and preservation.',
    'quick_links': 'Quick Links',
    'contact': 'Contact',
    'contact_us': 'Contact Us',
    'contact_hours': 'Open Tuesday - Saturday, 10am - 6pm',
    'copyright': '© 2025 Tibetan Treasures Exchange. All rights reserved.',
    'explore_button': 'Explore Collection',
    'our_story': 'Our Story',
    
    // Collection page
    'collection_title': 'Our Collection',
    'collection_description': 'Explore our curated selection of authentic Tibetan artifacts, each with its own unique history and cultural significance.',
    'search_artifacts': 'Search artifacts',
    'show_filters': 'Show Filters',
    'hide_filters': 'Hide Filters',
    'no_artifacts': 'No artifacts found',
    'adjust_search': 'Please adjust your search criteria and try again.',
    
    // Artifact details
    'contact_about_artifact': 'Contact About This Artifact',
    'back_to_collection': 'Back to Collection',
    'contact_for_price': 'Contact for Price',
    'contact_for_inquiries': 'Contact For Inquiries',
    'phone': 'Phone',
    'email': 'Email',
    'shop_address': 'Shop Address',
    'detailed_description': 'Detailed Description',
    'specifications': 'Specifications',
    'dimensions': 'Dimensions',
    'period': 'Period',
    'origin': 'Origin',
    'condition': 'Condition',
    'provenance': 'Provenance',
    'authentication': 'Authentication',
    'contact_about': 'Contact About This Artifact',
    'contact_text': 'Interested in this piece? Send us a message and we\'ll respond within 24 hours with more information.',
    'your_name': 'Your Name',
    'your_email': 'Your Email',
    'your_message': 'Your Message',
    'inquiry_placeholder': 'I\'m interested in this artifact and would like to know more about its history and availability...',
    'send_inquiry': 'Send Inquiry',
    
    // About page
    'our_mission': 'Our Mission',
    'mission_text': 'To preserve and share the rich cultural heritage of Tibet through education and the thoughtful curation of authentic artifacts.',
    'our_story_title': 'Our Story',
    'story_text_1': 'Tibetan Treasures Exchange began with a profound appreciation for the artistry and spiritual significance of Tibetan culture. Founded by a collective of scholars and collectors, our gallery emerged from a shared dedication to preserving these cultural treasures.',
    'story_text_2': 'Over decades, we\'ve cultivated relationships with monasteries, artisans, and ethical collectors throughout the Himalayan region, allowing us to offer pieces of exceptional quality and provenance.',
    'meet_team': 'Meet Our Team',
    'founder': 'Founder & Curator',
    'founder_bio': 'With over 20 years of experience studying Tibetan art and culture, Tenzin leads our curation with deep knowledge and respect for tradition.',
    'art_specialist': 'Art Specialist',
    'specialist_bio': 'Sarah\'s expertise in Himalayan art history ensures the authenticity and cultural significance of each piece in our collection.',
    'education_coordinator': 'Education Coordinator',
    'coordinator_bio': 'Jamyang develops our educational programs, connecting visitors with the rich cultural context behind each artifact.',
    
    // Categories
    'categories': 'Categories',
    'buddhist_artifacts': 'Buddhist Artifacts',
    'ancient_scrolls': 'Ancient Scrolls',
    'ritual_objects': 'Ritual Objects',
    'indigenous_art': 'Indigenous Art',
    'tibetan_textiles': 'Tibetan Textiles',
    'rights_reserved': 'All rights reserved.',
    
    // Additional translations
    'conservation': 'Conservation',
    'shipping_returns': 'Shipping & Returns',
    'privacy_policy': 'Privacy Policy',
    'terms_of_service': 'Terms of Service',
    'cookie_policy': 'Cookie Policy',
    'our_collection': 'OUR COLLECTION',
  },
  
  zh: {
    // Navigation
    'home': '首頁',
    'collection': '收藏品',
    'about': '關於我們',
    
    // General
    'authentic_tibetan': '正宗西藏文物',
    'sacred_treasures': '神聖寶藏',
    'from_himalayas': '來自喜馬拉雅山脈',
    'explore_collection': '探索具有豐富歷史和文化意義的精美文物，源自西藏的心臟地帶。',
    'our_philosophy': '我們的理念',
    'preserving_heritage': '通過知識保存文化遺產',
    'about_text_1': '在古硯齋，我們相信理解這些文物的文化意義與欣賞其美感同樣重要。',
    'about_text_2': '我們與西藏學者和工匠密切合作，確保每件收藏品的真實性和文化完整性。',
    'learn_more': '了解更多關於我們的使命',
    'why_choose_us': '為何選擇我們',
    'authenticity_excellence': '真實性與文化專業知識',
    'commitment_text': '我們對文化保存和教育的承諾使我們與眾不同。每件文物都附有詳細的歷史和來源。',
    'verified_authenticity': '經過驗證的真實性',
    'verified_text': '我們收藏中的每一件作品都經過喜馬拉雅藝術和文物專家的嚴格認證。',
    'ethical_sourcing': '道德採購',
    'ethical_text': '我們確保所有文物都是道德採購的，具有適當的文件記錄並尊重文化遺產。',
    'cultural_education': '文化教育',
    'cultural_text': '我們提供關於每件文物的歷史、象徵意義和重要性的詳細信息。',
    'join_community': '加入我們的社區',
    'begin_journey': '開始您的西藏藝術與文化之旅',
    'subscribe_text': '訂閱以接收有關新文物、教育內容和即將舉行的展覽的最新消息。',
    'email_placeholder': '輸入您的電子郵件',
    'subscribe': '訂閱',
    'featured_artifacts': '精選文物',
    'featured_text': '探索我們精心挑選的稀有且具有重要意義的西藏文化文物。',
    'view_all': '查看所有文物',
    'footer_about': '關於古硯齋',
    'footer_about_text': '專門收藏正宗的西藏文物，我們以教育和保存為重點，精心策劃文化寶藏。',
    'quick_links': '快速鏈接',
    'contact': '聯繫',
    'contact_us': '聯繫我們',
    'contact_hours': '營業時間：週二至週六，上午10點至下午6點',
    'copyright': '© 2025 古硯齋。保留所有權利。',
    'explore_button': '探索收藏品',
    'our_story': '我們的故事',
    
    // Collection page
    'collection_title': '我們的收藏',
    'collection_description': '探索我們精心挑選的正宗西藏文物，每件都有其獨特的歷史和文化意義。',
    'search_artifacts': '搜索文物',
    'show_filters': '顯示過濾器',
    'hide_filters': '隱藏過濾器',
    'no_artifacts': '未找到文物',
    'adjust_search': '請調整您的搜索條件並重試。',
    
    // Artifact details
    'contact_about_artifact': '關於此文物的聯繫',
    'back_to_collection': '返回收藏',
    'contact_for_price': '聯繫詢價',
    'contact_for_inquiries': '聯繫詢問',
    'phone': '電話',
    'email': '電子郵件',
    'shop_address': '店鋪地址',
    'detailed_description': '詳細描述',
    'specifications': '規格',
    'dimensions': '尺寸',
    'period': '時期',
    'origin': '來源',
    'condition': '狀況',
    'provenance': '來源證明',
    'authentication': '認證',
    'contact_about': '關於此文物的聯繫',
    'contact_text': '對這件作品感興趣？給我們發送消息，我們將在24小時內回覆更多信息。',
    'your_name': '您的姓名',
    'your_email': '您的電子郵件',
    'your_message': '您的留言',
    'inquiry_placeholder': '我對這件文物很感興趣，想了解更多關於它的歷史和可用性...',
    'send_inquiry': '發送詢問',
    
    // About page
    'our_mission': '我們的使命',
    'mission_text': '通過教育和對正宗文物的細心策劃，保存和分享西藏豐富的文化遺產。',
    'our_story_title': '我們的故事',
    'story_text_1': '古硯齋源於對西藏藝術和精神意義的深刻欣賞。由學者和收藏家共同創立，我們的畫廊源於對保存這些文化寶藏的共同奉獻精神。',
    'story_text_2': '幾十年來，我們在喜馬拉雅地區與修道院、工匠和道德收藏家建立了良好關係，使我們能夠提供品質卓越且來源正當的作品。',
    'meet_team': '認識我們的團隊',
    'founder': '創始人與策展人',
    'founder_bio': '擁有超過20年研究西藏藝術和文化的經驗，丹增以深厚的知識和對傳統的尊重引領我們的策展工作。',
    'art_specialist': '藝術專家',
    'specialist_bio': '莎拉在喜馬拉雅藝術史方面的專業知識確保了我們收藏中每件作品的真實性和文化意義。',
    'education_coordinator': '教育協調員',
    'coordinator_bio': '嘉央開發我們的教育項目，將訪客與每件文物背後豐富的文化背景聯繫起來。',
    
    // Categories
    'categories': '類別',
    'buddhist_artifacts': '佛教文物',
    'ancient_scrolls': '古代卷軸',
    'ritual_objects': '儀式物品',
    'indigenous_art': '原住民藝術',
    'tibetan_textiles': '西藏紡織品',
    'rights_reserved': '版權所有。',
    
    // Additional translations
    'conservation': '保護',
    'shipping_returns': '運輸與退貨',
    'privacy_policy': '隱私政策',
    'terms_of_service': '服務條款',
    'cookie_policy': 'Cookie 政策',
    'our_collection': '我們的收藏',
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
});

export const useLanguage = () => useContext(LanguageContext);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<LanguageType>('en');
  
  useEffect(() => {
    // Check if there's a language preference in localStorage
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage === 'en' || savedLanguage === 'zh') {
      setLanguage(savedLanguage);
    }
  }, []);
  
  // Save language preference when it changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);
  
  // Translation function
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
