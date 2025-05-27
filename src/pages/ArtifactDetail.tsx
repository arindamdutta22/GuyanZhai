import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';
import Map from '@/components/Map';

// This would normally come from a database or API
const artifacts = [
  {
    id: '1',
    image: "/images/artifacts/artifact1.png",
    name: "Tibetan Thangka - Avalokiteshvara",
    name_zh: "藏傳唐卡 - 觀世音菩薩",
    origin: "Tibet",
    origin_zh: "西藏",
    period: "19th Century",
    period_zh: "19世紀",
    price: "NT$ 135,000",
    description: "Exquisite thangka painting depicting the Buddhist deity Avalokiteshvara with multiple arms, representing compassion and mercy, created with natural pigments on cotton canvas.",
    description_zh: "精美的唐卡畫作描繪了多臂觀世音菩薩，象徵慈悲與憐憫，使用天然顏料在棉布畫布上創作而成。",
    detailedDescription: "This exceptional Tibetan thangka portrays Avalokiteshvara, the bodhisattva of compassion, in his most recognizable form with multiple arms radiating outward in a gesture of universal compassion. Created by master artists from Tibet using traditional techniques passed down through generations, this piece exemplifies the highest standards of Himalayan sacred art.\n\nThe thangka was crafted using natural mineral pigments on handwoven cotton canvas that has been prepared with traditional gesso. Gold details highlight the deity's ornaments and sacred symbols, applied using an ancient technique of ground mineral gold mixed with a natural binding agent.\n\nThe iconography follows strict traditional proportions and symbolism, making it suitable for both meditation practice and as a stunning artistic centerpiece. The painting displays exceptional attention to detail in the facial features, ornate jewelry, and flowing garments.",
    detailedDescription_zh: "這幅卓越的西藏唐卡描繪了觀世音菩薩，即慈悲的菩薩，以其最為人熟知的形象出現，多隻手臂向外輻射，象徵普世慈悲。由西藏大師藝術家使用代代相傳的傳統技法創作，這件作品體現了喜馬拉雅神聖藝術的最高標準。\n\n唐卡使用天然礦物顏料在經過傳統石膏處理的手工棉布上繪製。神明的飾品和神聖符號以金色細節點綴，採用古老技術將礦物金粉與天然黏合劑混合而成。\n\n這幅畫的圖像學嚴格遵循傳統比例和象徵意義，使其既適合冥想修行，又可作為令人驚嘆的藝術中心點。繪畫在面部特徵、華麗珠寶和飄逸服飾上顯示出非凡的細節關注。",
    dimensions: "86cm × 64cm (34\" × 25\")",
    dimensions_zh: "86厘米 × 64厘米 (34\" × 25\")",
    condition: "Excellent - minor age-related wear consistent with period",
    condition_zh: "極佳 - 僅有與年代相符的輕微使用痕跡",
    provenance: "Private collection, Kathmandu, Nepal",
    provenance_zh: "尼泊爾加德滿都私人收藏",
    authentication: "Certificate of authenticity included, verified by Dr. Jamyang Dorje, Himalayan Art Expert",
    authentication_zh: "包含真品證書，經喜馬拉雅藝術專家Jamyang Dorje博士驗證",
    shipping: "International shipping available. Professionally packed and fully insured.",
    shipping_zh: "提供國際運送。專業包裝並全額保險。",
    moreImages: [
      "/images/artifacts/artifact1.png",
      "https://images.unsplash.com/photo-1618228129223-c8457b56dd7e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1575112634938-27e387855a6c?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: '2',
    image: "/images/artifacts/artifact2.png",
    name: "Sahasrabhuja Sahasranetra Avalokiteshvara",
    name_zh: "千手千眼觀世音菩薩",
    origin: "Tibet",
    origin_zh: "西藏",
    period: "18th Century",
    period_zh: "18世紀",
    price: "NT$ 120,000",
    description: "Thousand-armed and Thousand-eyed Avalokiteshvara (Sanskrit name: Sahasrabhuja Sahasranetra Avalokiteshvara)\n• Thousand Hands: It symbolizes using countless arms to help all living beings and possesses the vast and unhindered power of compassion.\n• Thousand Eyes: One eye in each palm symbolizes the insight into all suffering and constant observation of the world.",
    description_zh: "千手千眼觀世音菩薩（梵文名：Sahasrabhuja Sahasranetra Avalokiteshvara）\n• 千手：象徵著用無數的手臂來幫助所有眾生，擁有廣大無礙的慈悲力量。\n• 千眼：每隻手掌中的一隻眼睛象徵著洞察一切苦難並持續觀察世界。",
    detailedDescription: "The statue's head has eleven sides, arranged in multiple layers and stacked from bottom to top. The top is often seen with a wrathful face or a Buddha face (such as Amitabha Buddha), indicating Guanyin's multiple observation abilities and levels of wisdom.\n\nThe face has a compassionate and solemn expression, which is a typical style of Tibetan Buddhist Guanyin statues.\n\nThe first two hands are joined or in a mudra, while the rest of the hands are around to the left and right. Each palm contains a \"wisdom eye\", and some hold lotus, rosary, Dharma wheel, conch, vase and other instruments, symbolizing the infinite convenience of saving sentient beings in the six realms.\n\nThe feet stand upright on the lotus platform, in a standing posture, dignified and upright.\n\nThere is a circular halo behind the Bodhisattva, surrounded by continuous lotus patterns and diamond flame patterns. It is a common design in Tibetan Buddhist statues, symbolizing boundless magical power.\n\nThe base is a double-layer lotus pedestal.",
    detailedDescription_zh: "雕像的頭部有十一面，呈多層排列，從下往上堆疊。頂部常見忿怒面或佛面（如阿彌陀佛），表示觀音的多重觀察能力和智慧層次。\n\n面部表情慈悲莊嚴，是藏傳佛教觀音像的典型風格。\n\n前兩隻手合十或結印，其餘的手向左右展開。每隻手掌中都有一隻「智慧眼」，有些手持蓮花、念珠、法輪、海螺、寶瓶等法器，象徵著救度六道眾生的無量方便。\n\n雙腳直立於蓮花台上，呈站立姿態，莊嚴挺拔。\n\n菩薩身後有圓形光環，環繞著連續的蓮花紋和鑽石火焰紋，是藏傳佛教造像中常見的設計，象徵無邊的法力。\n\n底座為雙層蓮花座。",
    dimensions: "approx. 105cm x 83cm x 33cm",
    dimensions_zh: "約105厘米 x 83厘米 x 33厘米",
    condition: "Very good - some natural fading of pigments consistent with age",
    condition_zh: "非常好 - 有些顏料隨時間自然褪色，與年代相符",
    provenance: "Former collection of a Tibetan monastery, acquired through authorized channels",
    provenance_zh: "曾為西藏寺院收藏，通過授權渠道取得",
    authentication: "Examined and authenticated by the Tibet House Cultural Center",
    authentication_zh: "經西藏之家文化中心檢驗和認證",
    shipping: "International shipping available. Professionally packed and fully insured.",
    shipping_zh: "提供國際運送。專業包裝並全額保險。",
    moreImages: [
      "/images/artifacts/artifact2.png"
    ]
  },
  {
    id: '3',
    image: "/images/artifacts/artifact3.png",
    name: "Gilded Bronze Wealth Deity",
    name_zh: "鎏金銅財神",
    origin: "Bhutan",
    origin_zh: "不丹",
    period: "18th Century",
    period_zh: "18世紀",
    price: "NT$ 210,000",
    description: "Finely crafted golden bronze statue depicting a wealth deity, adorned with precious stones and intricate decorative elements that symbolize abundance and prosperity.",
    description_zh: "精美的鎏金銅像，描繪了一位財神，飾有寶石和精美的裝飾元素，象徵著富裕和繁榮。",
    detailedDescription: "This exceptional gilded bronze statue depicts Jambhala, the Buddhist deity of wealth and prosperity, in his traditional posture seated on a lotus throne. Created in 18th century Bhutan by master metalsmiths, this statue exemplifies the highest level of Himalayan craftsmanship during this significant artistic period.\n\nThe statue was cast using the lost-wax method, then meticulously gilded with 24k gold using the traditional fire-gilding technique. The surface details were then carefully chased and adorned with semi-precious stones, including turquoise, coral, and lapis lazuli. The facial features display the serene expression characteristic of enlightened beings in Buddhist iconography.\n\nThis piece is not only a rare collector's item but also holds significant cultural and religious importance as an authentic ritual object from the Bhutanese Buddhist tradition.",
    detailedDescription_zh: "這尊非凡的鎏金銅像描繪了佛教的財富和繁榮之神—— Jambhala，他以傳統的姿勢坐在蓮花寶座上。這座雕像由 18 世紀不丹的金屬工匠大師創作，是喜馬拉雅工藝在這重要的藝術時期的最高水平的典範。\n\n這座雕像是使用失蠟法鑄造的，然後使用傳統的火鍍金技術精心鍍上 24k 金。然後仔細地對表面細節進行雕琢，並飾有半寶石，包括綠松石、珊瑚和青金石。面部特徵呈現出佛教圖像中開明眾生特有的寧靜表情。\n\n這件作品不僅是一件罕見的收藏品，而且作為不丹佛教傳統的正宗儀式物品，具有重要的文化和宗教意義。",
    dimensions: "23cm × 16cm × 12cm (9\" × 6.5\" × 4.7\")",
    dimensions_zh: "23厘米 × 16厘米 × 12厘米 (9\" × 6.5\" × 4.7\")",
    condition: "Excellent for its age - minor wear to gilding consistent with ritual use",
    condition_zh: "就其年代而言，狀況極佳 - 鎏金的輕微磨損與儀式用途相符",
    provenance: "Private collection, Thimphu, Bhutan. Previously housed in a family shrine.",
    provenance_zh: "不丹廷布私人收藏。 之前供奉在家庭神殿中。",
    authentication: "Includes certificate of authenticity from the Association of Asian Art Specialists",
    authentication_zh: "包括亞洲藝術專家協會的真品證書",
    shipping: "International shipping available. Professionally packed and fully insured.",
    shipping_zh: "提供國際運輸。 專業包裝並已全額投保。",
    moreImages: [
      "/images/artifacts/artifact3.png",
      "https://images.unsplash.com/photo-1515091120043-83d5905414cf?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1613091253237-560f0716f072?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: '4',
    image: "/images/artifacts/artifact4.png",
    name: "Bronze Manjushri Statue",
    name_zh: "文殊菩薩銅像",
    origin: "Tibet",
    origin_zh: "西藏",
    period: "19th Century",
    period_zh: "19世紀",
    price: "NT$ 163,000",
    description: "Beautifully detailed bronze statue of Manjushri, the Bodhisattva of wisdom, depicted holding the sword of wisdom that cuts through ignorance, gilded with 24k gold.",
    description_zh: "精美的文殊菩薩銅像，他是智慧的菩薩，手持智慧之劍，斬斷無明，並鍍有 24k 金。",
    detailedDescription: "This exquisite bronze sculpture portrays Manjushri, the Bodhisattva of Wisdom in Mahayana Buddhism, in his classic form holding the sword of wisdom that cuts through ignorance. Cast in the 19th century by Tibetan master craftsmen, this piece represents a high point in Tibetan sculptural traditions.\n\nThe statue features Manjushri seated in the traditional lotus position on an ornate double-lotus base. His right hand holds aloft the flaming sword of wisdom, while his left hand holds the stem of a lotus flower that supports the Prajnaparamita text, symbolizing the perfection of wisdom. The face displays the characteristic meditative expression with downcast eyes and a gentle smile, embodying compassionate wisdom.\n\nSelective gilding has been applied to highlight important elements, including the face, crown, and ornaments. The patina on the bronze body has developed a beautiful depth of color over the years, testament to its age and authenticity.",
    detailedDescription_zh: "這座精美的青銅雕塑描繪了摩訶衍佛教中的智慧菩薩文殊菩薩，他以經典的形式手持智慧之劍，斬斷無明。 這件作品由西藏工匠大師於 19 世紀鑄造，代表了西藏雕塑傳統的頂峰。\n\n這座雕像的特點是文殊菩薩以傳統的蓮花姿勢坐落在華麗的雙蓮花底座上。 他的右手高舉著火焰般的智慧之劍，而他的左手則握著一朵蓮花的莖，蓮花支撐著《般若波羅蜜多經》，象徵著智慧的完美。 臉部呈現出特有的冥想表情，眼睛低垂，面帶微笑，體現了慈悲的智慧。\n\n有選擇地應用了鍍金來突出重要元素，包括面部、皇冠和裝飾品。 青銅主體上的銅綠經過多年的發展，形成了美麗的色彩深度，證明了它的年代和真實性。",
    dimensions: "28cm × 20cm × 16cm (11\" × 8\" × 6.3\")",
    dimensions_zh: "28厘米 × 20厘米 × 16厘米 (11\" × 8\" × 6.3\")",
    condition: "Excellent - minor wear consistent with age and reverent handling",
    condition_zh: "極佳 - 與年代和虔誠的處理相符的輕微磨損",
    provenance: "From the collection of a European diplomat stationed in Lhasa during the early 20th century",
    provenance_zh: "來自 20 世紀初駐紮在拉薩的歐洲外交官的收藏",
    authentication: "Examined and certified by the International Institute of Tibetan Art",
    authentication_zh: "由國際西藏藝術研究所檢查和認證",
    shipping: "International shipping available. Professionally packed and fully insured.",
    shipping_zh: "提供國際運輸。 專業包裝並已全額投保。",
    moreImages: [
      "/images/artifacts/artifact4.png",
      "https://images.unsplash.com/photo-1599202889922-b263a8aecda4?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1603118375687-9c7abc6f6ed4?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: '5',
    image: "/images/artifacts/artifact5.png",
    name: "Silver & Gold Ganesha Statue",
    name_zh: "銀鎏金象頭神雕像",
    origin: "Nepal",
    origin_zh: "尼泊爾",
    period: "Late 19th Century",
    period_zh: "19世紀末",
    price: "NT$ 186,000",
    description: "Intricately crafted statue of Lord Ganesha, the remover of obstacles, made from silver with gold plating and adorned with semi-precious stones and detailed metalwork.",
    description_zh: "精雕細琢的象頭神雕像，他是障礙的消除者，由銀製成，鍍金，並飾有半寶石和精細的金屬製品。",
    detailedDescription: "This magnificent statue portrays Lord Ganesha, the beloved elephant-headed deity revered as the remover of obstacles in Hindu and Buddhist traditions throughout the Himalayan region. This exceptionally detailed piece was crafted in Nepal during the late 19th century by Newar artisans, who are renowned for their metalworking traditions dating back over a millennium.\n\nThe statue is primarily composed of silver, with selective gold plating applied to highlight specific sacred elements. The surface is adorned with intricate repoussé work, showing remarkable attention to detail in the deity's ornaments, crown, and symbolic attributes. Semi-precious stones including turquoise and coral have been set into the crown and jewelry.\n\nLord Ganesha is depicted in his classic form, seated in royal ease with his trunk curved toward a bowl of sweets. His four arms hold traditional attributes: an axe (to cut attachments), a rope (to pull devotees closer to the spiritual goal), a modaka sweet (representing reward), and a broken tusk (symbolizing sacrifice and wisdom).",
    detailedDescription_zh: "這座宏偉的雕像描繪了象頭神，他是深受喜愛的象頭神，被尊為喜馬拉雅地區印度教和佛教傳統中障礙的消除者。 這件極其精緻的作品由尼瓦爾工匠於 19 世紀末在尼泊爾製作，他們以其金屬加工傳統而聞名，其歷史可以追溯到一千多年前。\n\n這座雕像主要由銀製成，並有選擇地鍍金，以突出特定的神聖元素。 表面裝飾有複雜的錘擊紋，在神靈的裝飾品、皇冠和象徵性屬性中顯示出對細節的非凡關注。 半寶石，包括綠松石和珊瑚，已被鑲嵌在皇冠和珠寶中。\n\n象頭神以其經典形式描繪，他以皇家般的輕鬆姿態坐著，象鼻彎向一碗糖果。 他的四隻手臂持有傳統屬性：一把斧頭（用於切割附件）、一根繩索（用於將奉獻者拉近精神目標）、一個莫達卡糖果（代表獎勵）和一根斷裂的象牙（象徵犧牲和智慧）。",
    dimensions: "25cm × 18cm × 15cm (10\" × 7\" × 6\")",
    dimensions_zh: "25厘米 × 18厘米 × 15厘米 (10\" × 7\" × 6\")",
    condition: "Very good - minor tarnishing consistent with age, all stones intact",
    condition_zh: "非常好 - 與年代相符的輕微失去光澤，所有石頭完好無損",
    provenance: "Private collection, Kathmandu. Previously housed in a family shrine in the Kathmandu Valley.",
    provenance_zh: "加德滿都私人收藏。 之前供奉在加德滿都谷的一個家庭神殿中。",
    authentication: "Certificate of authentication from the Nepal Handicraft Association",
    authentication_zh: "尼泊爾手工藝品協會的真品證書",
    shipping: "International shipping available. Professionally packed and fully insured.",
    shipping_zh: "提供國際運輸。 專業包裝並已全額投保。",
    moreImages: [
      "/images/artifacts/artifact5.png",
      "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1580397581415-4c07a1361db9?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: '9',
    image: "/images/artifacts/artifact9.png",
    name: "Guru Padmasambhava",
    name_zh: "蓮花生大師",
    origin: "Tibet",
    origin_zh: "西藏",
    period: "18th Century",
    period_zh: "18世紀",
    price: "",
    description: "Guru Padmasambhava, also known as Guru Rinpoche, is an important founder of Tibetan Buddhism and an important leader of Tibetan Tantric Buddhism. He is known for building the first monastery in Tibet and translating important exoteric and esoteric texts into Tibetan, laying the foundation for the development of Tibetan Buddhism.",
    description_zh: "蓮花生大師，又稱蓮師，是藏傳佛教的重要創始人，也是藏傳密宗的重要領袖。他以在西藏建立第一座寺院並將重要的顯密經典譯為藏文而聞名，為藏傳佛教的發展奠定了基礎。",
    detailedDescription: `The symbolic meaning of Guru Padmasambhava:\n\nWisdom and Compassion:\nGuru Padmasambhava is usually depicted wearing a red robe, holding a vajra in his right hand and a skull bowl (a bowl made of human skull) in his left hand, symbolizing wisdom and compassion.\n\nBreaking down barriers:\nThe vajra represents the removal of all obstacles and the subjugation of troubles, while the skull bowl represents great compassion and emptiness.\n\nBuddhist inheritance:\nGuru Padmasambhava's rebirth from a lotus symbolizes the emergence of the Dharma from the lotus and has become a symbol of the transmission of the Dharma.\n\nOther names and titles:\nGuru Padmasambhava: A respectful title given to Guru Padmasambhava by his disciples and believers.\nGuru Rinpoche: The Tibetan name for Guru Padmasambhava, meaning "honorable master."`,
    detailedDescription_zh: `蓮花生大師的象徵意義：\n\n智慧與慈悲：\n蓮花生大師通常身穿紅袍，右手持金剛杵，左手持顱器（以人頭骨製成的缽），象徵智慧與慈悲。\n\n破除障礙：\n金剛杵代表消除一切障礙與降伏煩惱，顱器則象徵大悲與空性。\n\n佛法傳承：\n蓮花生大師從蓮花中化生，象徵佛法從蓮花中誕生，成為佛法傳承的象徵。\n\n其他名稱與尊號：\n蓮花生大師：弟子與信眾對蓮花生大師的尊稱。\n蓮師（Guru Rinpoche）：藏語對蓮花生大師的稱呼，意為「尊貴的上師」。`,
    dimensions: "Approx. 30cm tall",
    dimensions_zh: "約30厘米高",
    condition: "Excellent - as shown in photo",
    condition_zh: "極佳 - 如照片所示",
    provenance: "Private collection, Taiwan",
    provenance_zh: "台灣私人收藏",
    authentication: "",
    authentication_zh: "",
    shipping: "International shipping available. Professionally packed and fully insured.",
    shipping_zh: "提供國際運送。專業包裝並全額保險。",
    moreImages: [
      "/images/artifacts/artifact9.png"
    ]
  },
  {
    id: '10',
    image: "/images/artifacts/artifact10.png",
    name: "Amitayus Buddha",
    name_zh: "無量壽佛",
    origin: "Tibet",
    origin_zh: "西藏",
    period: "18th Century",
    period_zh: "18世紀",
    price: "",
    description: "The Buddha of Longevity (Amitayus), also known as the Buddha of Infinite Life (Amitayus Buddha), is the manifestation of 'Amitabha' or the Buddha of Infinite Light. He is the main deity in the west among the 'Five Buddhas' of the Lotus Division. In the Garbha-dhatu realm, it is called 'Amitābha', and in the Vajra-dhatu realm, it is called 'Amitabha'. 'Amitābha' means innumerable and boundless. It is another form of the Dharmakāya Amitabha Buddha in the form of the Sambhogakaya Buddha.",
    description_zh: '無量壽佛，又稱無量壽如來，是「阿彌陀佛」或無量光佛的化現。他是蓮華部五方佛中西方的主尊。在胎藏界稱為「阿彌陀佛」，在金剛界稱為「阿彌陀佛」。「阿彌陀」意為無量、無邊，是法身阿彌陀佛以報身佛形態出現的另一種形象。',
    detailedDescription: `This statue is cast in copper, gilded on the outside, with exquisite surface details and inlaid with gemstones. It belongs to the common statue-making style of Tibetan Buddhism. His hands are in the Dhyana Mudra, with a vase (symbolizing nectar) in his hands, representing practice and wisdom. Crossing the legs is called Vajra posture, which is the most formal meditation posture in Buddhism.\nLotus Seat: The statue seat is a single-layered lotus seat, which is a symbol of sacredness and purity in Buddhist statues.`,
    detailedDescription_zh: `此像以銅鑄造，外部鎏金，表面細節精美，鑲嵌寶石，屬於藏傳佛教常見的造像風格。雙手結禪定印，手持寶瓶（象徵甘露），代表修行與智慧。雙腿交叉稱為金剛跏趺坐，是佛教中最正式的禪定姿勢。\n蓮花座：像座為單層蓮花座，是佛像中神聖與純淨的象徵。`,
    dimensions: "Approx. 30cm tall",
    dimensions_zh: "約30厘米高",
    condition: "Excellent - as shown in photo",
    condition_zh: "極佳 - 如照片所示",
    provenance: "Private collection, Taiwan",
    provenance_zh: "台灣私人收藏",
    authentication: "",
    authentication_zh: "",
    shipping: "International shipping available. Professionally packed and fully insured.",
    shipping_zh: "提供國際運送。專業包裝並全額保險。",
    moreImages: [
      "/images/artifacts/artifact10.png"
    ]
  },
  {
    id: '11',
    image: "/images/artifacts/artifact11.png",
    name: "Twenty-One Tara",
    name_zh: "二十一度母",
    origin: "Tibet",
    origin_zh: "西藏",
    period: "Contemporary",
    period_zh: "當代",
    price: "",
    description: "Tiantie Twenty-Tara Buddha Shrine\n• Main deity: Holy Tara (Green Tara) – Located in the center, she is the incarnation of Avalokitesvara, symbolizing compassion and swift relief from suffering.\n• Surrounded by: twenty incarnations of Taras – collectively known as the 'Twenty-one Taras', each representing a different rescue power, such as removing obstacles, pacifying disasters, increasing benefits, and bringing about appeasement.",
    description_zh: "天鐵二十一度母佛龕\n• 主尊：聖救度佛母（綠度母）——位於中央，是觀音菩薩的化身，象徵慈悲與迅速救苦。\n• 周圍環繞：二十一尊度母化身——合稱'二十一度母'，每一尊代表不同的救度力量，如消除障礙、息災、增益、調和等。",
    detailedDescription: "This Buddha shrine is made of Tiantie (also known as meteorite iron), an extremely rare material. Tiantie, being from meteorites, is believed in Tibetan Buddhism to carry the blessing power of the 'heavenly realm', symbolizing a treasure bestowed from the heavens, full of spirituality and protective power. The surface is finely polished and engraved, displaying intricate patterns and divine forms. It uses the Tibetan repoussé technique, giving it a strong three-dimensional effect.",
    detailedDescription_zh: "此佛龕由 天鐵（又稱隕鐵）製成，為極為稀有的材料。天鐵因來自隕石，藏密中認為其帶有「天界」加持力，象徵天降法寶，極具靈性與保護力。\n表面經過精緻打磨與雕刻，展現繁複細緻的花紋與神祇姿態。採用藏傳佛錘揲工藝，具有強烈的立體感。",
    dimensions: "approx. 126cm x 90cm",
    dimensions_zh: "約126厘米 x 90厘米",
    condition: "Excellent - as shown in photo",
    condition_zh: "極佳 - 如照片所示",
    provenance: "Private collection, Taiwan",
    provenance_zh: "台灣私人收藏",
    authentication: "",
    authentication_zh: "",
    shipping: "International shipping available. Professionally packed and fully insured.",
    shipping_zh: "提供國際運送。專業包裝並全額保險。",
    moreImages: [
      "/images/artifacts/artifact11.png"
    ]
  }
];

const ArtifactDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t, language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState('');
  
  // Find the artifact based on the ID
  const artifact = artifacts.find(item => item.id === id);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set the first image as selected by default
    if (artifact) {
      setSelectedImage(artifact.moreImages[0]);
    }
  }, [artifact]);
  
  if (!artifact) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-20">
          <div className="container px-6 md:px-8 text-center">
            <h2 className="text-2xl font-display mb-4">Artifact not found</h2>
            <p className="mb-6">The artifact you're looking for doesn't exist or has been removed.</p>
            <Button onClick={() => navigate('/collection')} className="text-tibet-teal">
              {t('back_to_collection')}
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        {/* Breadcrumb and back button */}
        <div className="container px-6 md:px-8 mb-8">
          <button 
            onClick={() => navigate(-1)} 
            className="inline-flex items-center gap-2 text-tibet-teal hover:text-tibet-red transition-colors"
          >
            <ArrowLeft size={18} />
            {t('back_to_collection')}
          </button>
        </div>
        
        {/* Artifact detail layout */}
        <div className="container px-6 md:px-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left column - Images */}
            <div className="space-y-6">
              <div className="aspect-square rounded-lg overflow-hidden bg-tibet-navy/50 border border-tibet-gold/20">
                <img 
                  src={selectedImage} 
                  alt={language === 'en' ? artifact.name : artifact.name_zh} 
                  className="w-full h-full object-contain p-4"
                />
              </div>
              
              <div className="flex gap-4 overflow-x-auto pb-2">
                {artifact.moreImages.map((img, index) => (
                  <button 
                    key={index}
                    className={`aspect-square w-24 h-24 rounded-md overflow-hidden border-2 transition-all ${
                      selectedImage === img ? 'border-tibet-gold' : 'border-transparent hover:border-tibet-gold/50'
                    }`}
                    onClick={() => setSelectedImage(img)}
                  >
                    <img 
                      src={img} 
                      alt={`${language === 'en' ? artifact.name : artifact.name_zh} - view ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Right column - Details and contact info */}
            <div className="space-y-8">
              <div>
                <div className="flex items-start justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 mb-3 bg-tibet-amber/20 text-tibet-amber text-xs uppercase tracking-wider rounded-full">
                      {language === 'en' ? artifact.origin : artifact.origin_zh}
                    </span>
                    <h1 className="text-3xl md:text-4xl font-display font-medium mb-2 leading-tight">
                      {language === 'en' ? artifact.name : artifact.name_zh}
                    </h1>
                  </div>
                </div>
                
                <p className="text-lg font-medium text-tibet-gold mb-2">
                  {t('contact_for_price')}
                </p>
                
                <p className="text-foreground/80 mb-4">
                  {language === 'en' ? artifact.period : artifact.period_zh}
                </p>
                
                <div className="space-y-2 mb-6">
                  <p className="text-foreground/90">
                    {language === 'en' ? artifact.description : artifact.description_zh}
                  </p>
                </div>
                
                {/* Contact Information */}
                <div className="bg-tibet-blue/20 p-6 rounded-lg border border-tibet-blue/30 mt-8">
                  <h3 className="text-xl font-medium mb-4">{t('contact_for_inquiries')}</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-tibet-amber mt-0.5" />
                      <div>
                        <p className="font-medium">{t('phone')}</p>
                        <p className="text-foreground/80">+886-226261359</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-tibet-amber mt-0.5" />
                      <div>
                        <p className="font-medium">{t('email')}</p>
                        <a href="mailto:guyanzhai.tamsui@gmail.com" className="text-tibet-amber hover:text-tibet-red transition-colors">
                          guyanzhai.tamsui@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-tibet-amber mt-0.5" />
                      <div>
                        <p className="font-medium">{t('shop_address')}</p>
                        <p className="text-foreground/80">1F., No. 9, Sanmin St., Tamsui Dist., New Taipei City 251024, Taiwan</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Detailed description section */}
        <div className="container px-6 md:px-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-tibet-navy/50 p-8 rounded-lg border border-tibet-gold/20">
                <h2 className="text-2xl font-display font-medium mb-6 text-tibet-gold">
                  {t('detailed_description')}
                </h2>
                <div className="prose prose-invert prose-tibet max-w-none">
                  {(language === 'en' ? artifact.detailedDescription : artifact.detailedDescription_zh).split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-foreground/80">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              
              <div className="bg-tibet-navy/50 p-8 rounded-lg border border-tibet-gold/20">
                <h2 className="text-2xl font-display font-medium mb-6 text-tibet-gold">
                  {t('specifications')}
                </h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                    <div>
                      <h3 className="text-tibet-amber text-sm uppercase tracking-wider mb-1">{t('dimensions')}</h3>
                      <p className="text-foreground/80">{language === 'en' ? artifact.dimensions : artifact.dimensions_zh}</p>
                    </div>
                    <div>
                      <h3 className="text-tibet-amber text-sm uppercase tracking-wider mb-1">{t('period')}</h3>
                      <p className="text-foreground/80">{language === 'en' ? artifact.period : artifact.period_zh}</p>
                    </div>
                    <div>
                      <h3 className="text-tibet-amber text-sm uppercase tracking-wider mb-1">{t('origin')}</h3>
                      <p className="text-foreground/80">{language === 'en' ? artifact.origin : artifact.origin_zh}</p>
                    </div>
                    <div>
                      <h3 className="text-tibet-amber text-sm uppercase tracking-wider mb-1">{t('condition')}</h3>
                      <p className="text-foreground/80">{language === 'en' ? artifact.condition : artifact.condition_zh}</p>
                    </div>
                    <div>
                      <h3 className="text-tibet-amber text-sm uppercase tracking-wider mb-1">{t('provenance')}</h3>
                      <p className="text-foreground/80">{language === 'en' ? artifact.provenance : artifact.provenance_zh}</p>
                    </div>
                    <div>
                      <h3 className="text-tibet-amber text-sm uppercase tracking-wider mb-1">{t('authentication')}</h3>
                      <p className="text-foreground/80">{language === 'en' ? artifact.authentication : artifact.authentication_zh}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact form section */}
            <div className="lg:col-span-1">
              <div className="bg-tibet-blue/20 p-8 rounded-lg border border-tibet-blue/30 sticky top-24">
                <h2 className="text-xl font-display font-medium mb-6">
                  {t('contact_about')}
                </h2>
                <p className="text-foreground/80 mb-6">
                  {t('contact_text')}
                </p>
                
                <form
                  action="https://formsubmit.co/guyanzhai.tamsui@gmail.com"
                  method="POST"
                  className="space-y-4"
                >
                  <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ''} />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="Artifact Name" value={language === 'en' ? artifact.name : artifact.name_zh} />
                  <input type="hidden" name="_template" value="table" />
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">{t('your_name')}</label>
                    <Input
                      id="name"
                      name="name"
                      className="bg-tibet-navy/30 border-tibet-gold/30 text-white placeholder:text-white/50"
                      placeholder={t('your_name')}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">{t('your_email')}</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      className="bg-tibet-navy/30 border-tibet-gold/30 text-white placeholder:text-white/50"
                      placeholder={t('your_email')}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">{t('your_message')}</label>
                    <Textarea
                      id="message"
                      name="message"
                      className="bg-tibet-navy/30 border-tibet-gold/30 text-white placeholder:text-white/50 min-h-[120px]"
                      placeholder={t('inquiry_placeholder')}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-tibet-amber hover:bg-tibet-red text-white"
                  >
                    {t('send_inquiry')}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ArtifactDetail;
