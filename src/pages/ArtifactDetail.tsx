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
    name: "Guru Padmasambhava",
    name_zh: "蓮花生大師",
    origin: "Tibet",
    origin_zh: "西藏",
    period: "19th Century",
    period_zh: "19世紀",
    price: "",
    description: "Padmasambhava\n\nGuru Padmasambhava, also known as Guru Rinpoche, is an important founder of Tibetan Buddhism and an important leader of Tibetan Tantric Buddhism. He is known for building the first monastery in Tibet and translating important exoteric and esoteric texts into Tibetan, laying the foundation for the development of Tibetan Buddhism.",
    description_zh: "蓮花生大師，又稱蓮師，是藏傳佛教的重要創始人，也是藏傳密宗的重要領袖。他以在西藏建立第一座寺院並將重要的顯密經典譯為藏文而聞名，為藏傳佛教的發展奠定了基礎。",
    detailedDescription: `The symbolic meaning of Guru Padmasambhava:\nWisdom and Compassion:\nGuru Padmasambhava is usually depicted wearing a red robe, holding a vajra in his right hand and a skull bowl (a bowl made of human skull) in his left hand, symbolizing wisdom and compassion. \nBreaking down barriers:\nThe vajra represents the removal of all obstacles and the subjugation of troubles, while the skull bowl represents great compassion and emptiness. \nBuddhist inheritance:\nGuru Padmasambhava's rebirth from a lotus symbolizes the emergence of the Dharma from the lotus and has become a symbol of the transmission of the Dharma. \nOther names and titles:\nGuru Padmasambhava: A respectful title given to Guru Padmasambhava by his disciples and believers.\nGuru Rinpoche: The Tibetan name for Guru Padmasambhava, meaning "honorable master."It is completely made of wood.`,
    detailedDescription_zh: `蓮花生大師的象徵意義：\n智慧與慈悲：\n蓮花生大師通常身穿紅袍，右手持金剛杵，左手持顱器（以人頭骨製成的缽），象徵智慧與慈悲。\n破除障礙：\n金剛杵代表消除一切障礙與降伏煩惱，顱器則象徵大悲與空性。\n佛法傳承：\n蓮花生大師從蓮花中化生，象徵佛法從蓮花中誕生，成為佛法傳承的象徵。\n其他名稱與尊號：\n蓮花生大師：弟子與信眾對蓮花生大師的尊稱。\n蓮師（Guru Rinpoche）：藏語對蓮花生大師的稱呼，意為「尊貴的上師」。此件為全木雕。`,
    dimensions: "approx. 40cm",
    dimensions_zh: "約40厘米",
    condition: "",
    condition_zh: "",
    provenance: "",
    provenance_zh: "",
    authentication: "",
    authentication_zh: "",
    shipping: "International shipping available. Professionally packed and fully insured.",
    shipping_zh: "提供國際運送。專業包裝並全額保險。",
    moreImages: [
      "/images/artifacts/artifact3.png"
    ]
  },
  {
    id: '4',
    image: "/images/artifacts/artifact4.png",
    name: "Sita Tara",
    name_zh: "白度母",
    origin: "Tibet",
    origin_zh: "西藏",
    period: "19th century",
    period_zh: "19世紀",
    price: "",
    description: "White Tara (Tibetan: མོ་དཀར་་, Sanskrit: Sita Tārā) is one of the most important female deities in Tibetan Buddhism, representing \"longevity, purity, compassion\" and \"quick liberation\".",
    description_zh: "白度母（藏文：མོ་དཀར་་，梵文：Sita Tārā）是藏傳佛教中最重要的女性神祇之一，代表「長壽、純潔、慈悲」及「迅速解脫」。",
    detailedDescription: "Tara is the incarnation of Avalokitesvara. According to legend, Avalokitesvara shed tears out of compassion for all living beings. The left tear turned into Green Tara and the right tear turned into White Tara. ",
    detailedDescription_zh: "度母是觀音菩薩的化身。相傳觀音菩薩因憐憫一切眾生而落淚，左眼的眼淚化為綠度母，右眼的眼淚化為白度母。",
    dimensions: "21cm approx.",
    dimensions_zh: "約21厘米",
    condition: "",
    condition_zh: "",
    provenance: "",
    provenance_zh: "",
    authentication: "",
    authentication_zh: "",
    shipping: "International shipping available. Professionally packed and fully insured.",
    shipping_zh: "提供國際運送。專業包裝並全額保險。",
    moreImages: [
      "/images/artifacts/artifact4.png"
    ]
  },
  {
    id: '5',
    image: "/images/artifacts/artifact5.png",
    name: "Ganesha",
    name_zh: "象鼻財神",
    origin: "Bhutan",
    origin_zh: "不丹",
    period: "Late 19th Century",
    period_zh: "19世紀末",
    price: "NT$ 186,000",
    description: "The elephant-nosed god of wealth (Tibetan: རྡོ་རྗེ་རྒྱལ་པོ་དུང་དཀར་, transliterated: Dunga God of Wealth, or 'Elephant-Headed God of Wealth') in Tibetan Buddhism is a guardian deity with an elephant head and a human body. He is mainly in charge of wealth and blessings and is deeply worshipped by Tibetans and Tantric practitioners.",
    description_zh: "形象猶如印度教中的象頭神「迦尼薩（Ganesha）」，但在藏傳佛教中轉化為一位密宗財神與護法。",
    detailedDescription: "His image is similar to the elephant-headed god 'Ganesha' in Hinduism, but in Tibetan Buddhism he is transformed into a Tantric god of wealth and guardian.",
    detailedDescription_zh: `藏傳佛教中的象鼻財神（藏語：རྡོ་རྗེ་རྒྱལ་པོ་དུང་དཀར་，音譯：敦嘎‧財神，或稱「象頭財神」），是一位具有象頭人身形象的護法神祇，主要掌管財富與福德，深受藏民與密宗修行者的供奉。\n\n形象猶如印度教中的象頭神「迦尼薩（Ganesha）」，但在藏傳佛教中轉化為一位密宗財神與護法。`,
    dimensions: "25cm × 18cm × 15cm (10\" × 7\" × 6\")",
    dimensions_zh: "25厘米 × 18厘米 × 15厘米 (10\" × 7\" × 6\")",
    condition: "Very good - minor tarnishing consistent with age, all stones intact",
    condition_zh: "非常好 - 與年代相符的輕微失去光澤，所有石頭完好無損",
    provenance: "Private collection",
    provenance_zh: "私人收藏",
    shipping: "International shipping available. Professionally packed and fully insured.",
    shipping_zh: "提供國際運輸。 專業包裝並已全額投保。",
    moreImages: [
      "/images/artifacts/artifact5.png"
    ]
  },
  {
    id: '6',
    image: "/images/artifacts/artifact6.png",
    name: "Exquisite Craft [ twist & couching stitches ]",
    name_zh: "精湛的刺繡 之［ 絞繡 ]",
    origin: "China",
    origin_zh: "中國",
    period: "Mid 20th Century",
    period_zh: "20世紀中期",
    price: "",
    description: "The Miao in Zi-jing in the northwestern region of Gui-zhou province are famous for this refined skill.",
    description_zh: "絞繡，是苗繡中運用較多的技法之一。其做法是先將一根棉線、麻線、絲線或馬尾鬃，用細絲線纏絞、包裹起來，再釘縫在布面上，譜成極為精細、綺麗的圖案。\n以「絞繡」為創作主要構圖而聞名的，包括貴州織金、大方及普定一帶的苗族。",
    detailedDescription: "This is another work of great labor. First, one has to twist, twine, and wring several fine silk threads together and then secure the twisted thread on the cloth in a dense couch embroidery. The Miao in Zi-jing in the northwestern region of Gui-zhou province are famous for this refined skill.",
    detailedDescription_zh: "絞繡，是苗繡中運用較多的技法之一。其做法是先將一根棉線、麻線、絲線或馬尾鬃，用細絲線纏絞、包裹起來，再釘縫在布面上，譜成極為精細、綺麗的圖案。\n以「絞繡」為創作主要構圖而聞名的，包括貴州織金、大方及普定一帶的苗族。",
    dimensions: "",
    dimensions_zh: "",
    condition: "",
    condition_zh: "",
    provenance: "",
    provenance_zh: "",
    authentication: "",
    authentication_zh: "",
    shipping: "",
    shipping_zh: "",
    moreImages: [
      "/images/artifacts/artifact6.png"
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
  },
  {
    id: '7',
    image: "/images/artifacts/artifact7.png",
    name: "Cross-stitch headscarves of ethnic minorities in the southwest",
    name_zh: "西南少數民族十字繡頭巾",
    origin: "China",
    origin_zh: "中國",
    period: "Early 20th Century",
    period_zh: "20世紀初",
    price: "",
    description: "",
    description_zh: "",
    detailedDescription: "",
    detailedDescription_zh: "",
    dimensions: "",
    dimensions_zh: "",
    condition: "",
    condition_zh: "",
    provenance: "",
    provenance_zh: "",
    authentication: "",
    authentication_zh: "",
    shipping: "",
    shipping_zh: "",
    moreImages: [
      "/images/artifacts/artifact7.png"
    ]
  },
  {
    id: '8',
    image: "/images/artifacts/artifact8.png",
    name: "Baby Carriers - Flowers of the Banyan tree",
    name_zh: "侗族榕樹花揹兒帶",
    origin: "China",
    origin_zh: "中國",
    period: "Mid 20th Century",
    period_zh: "20世紀中期",
    price: "",
    description: "a child was sick and frail, his mother would bring him to a dragon tree to pray for good health.",
    description_zh: "侗族人凡有體弱多病、難以養活的孩子，都會將孩子帶到榕樹下，拜榕樹為「父母」，好為孩子消災解厄。",
    detailedDescription: "Regarding the banyan flower as a symbol of life is particular to minorities living in the Li-ping County in Gui-zhou Province and San-jiang County in Guang-xi Province. Dong people believe that when the banyan flowers are in full bloom, the tree grows into the moon and brings light and luster to the moon.",
    detailedDescription_zh: "貴州黎平龍額鄉，以及廣西三江地區的侗族，則對「榕樹花」有特的信仰，甚至形成當地特有的「榕樹花」紋飾。這兩地的侗族深信「榕樹長在月亮中，月亮裡沒有榕樹，就沒有光亮」的傳說，因而將榕樹視為神樹，侗族的母親們也會在揹兒帶的蓋片上，繡上「榕樹花」，以守護孩子順利、健康地成長。",
    dimensions: "",
    dimensions_zh: "",
    condition: "",
    condition_zh: "",
    provenance: "",
    provenance_zh: "",
    authentication: "",
    authentication_zh: "",
    shipping: "",
    shipping_zh: "",
    moreImages: [
      "/images/artifacts/artifact8.png"
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
