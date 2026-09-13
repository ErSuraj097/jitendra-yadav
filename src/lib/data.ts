export interface BilingualText {
  en: string;
  hi: string;
}

export interface ProfileData {
  name: BilingualText;
  designation: BilingualText;
  party: BilingualText;
  location: BilingualText;
  phone: string;
  email: string;
  officeAddress: BilingualText;
  socials: {
    facebook: string;
    instagram: string;
    whatsapp: string;
  };
  bioShort: BilingualText;
  bioFull: BilingualText[];
  vision: BilingualText[];
  stats: {
    initiativesCompleted: number;
    peopleImpacted: string;
    grievancesResolved: number;
    developmentProjects: number;
  };
  timeline: Array<{
    year: string;
    title: BilingualText;
    description: BilingualText;
  }>;
}

export interface SevaItem {
  id: string;
  title: BilingualText;
  category: 'economic' | 'education' | 'health' | 'community' | 'emergency';
  categoryLabel: BilingualText;
  date: string;
  location: BilingualText;
  description: BilingualText;
  beneficiariesCount: string;
  image: string;
  status: 'Completed' | 'Ongoing';
}

export interface PortfolioItem {
  id: string;
  title: BilingualText;
  category: 'infrastructure' | 'education' | 'health' | 'sanitation' | 'public_works' | 'community';
  categoryLabel: BilingualText;
  location: BilingualText;
  period: string;
  objective: BilingualText;
  workDone: BilingualText;
  status: 'Completed' | 'In Progress' | 'Proposed';
  budget?: string;
  image: string;
}

export interface NewsItem {
  id: string;
  title: BilingualText;
  category: 'Public Activities' | 'Community Programmes' | 'Development Updates' | 'Announcements' | 'Media Coverage';
  date: string;
  summary: BilingualText;
  content: BilingualText[];
  featuredImage: string;
  author: string;
  tags: string[];
}

export interface EventItem {
  id: string;
  title: BilingualText;
  date: string;
  time: string;
  venue: BilingualText;
  description: BilingualText;
  status: 'Upcoming' | 'Completed';
  category: BilingualText;
  image: string;
}

export interface GalleryAlbum {
  id: string;
  title: BilingualText;
  date: string;
  category: BilingualText;
  coverImage: string;
  images: Array<{
    url: string;
    caption: BilingualText;
  }>;
}

export interface VideoItem {
  id: string;
  title: BilingualText;
  date: string;
  youtubeId: string;
  description: BilingualText;
}

export interface AchievementItem {
  id: string;
  year: string;
  title: BilingualText;
  description: BilingualText;
  category: BilingualText;
  reference: BilingualText;
}

export interface MediaCoverageItem {
  id: string;
  publication: BilingualText;
  date: string;
  headline: BilingualText;
  summary: BilingualText;
  link?: string;
  type: 'Newspaper' | 'Digital Press' | 'Video Interview';
  image: string;
}

export interface GrievanceRecord {
  id: string;
  ticketNo: string;
  citizenName: string;
  phone: string;
  wardArea: string;
  category: string;
  subject: string;
  details: string;
  status: 'New' | 'Under Review' | 'In Progress' | 'Resolved';
  submittedAt: string;
  updatedAt: string;
}

export const PROFILE_DATA: ProfileData = {
  name: {
    en: "Shri Jitendra Kumar Yadav",
    hi: "श्री जितेन्द्र कुमार यादव"
  },
  designation: {
    en: "District Vice President, Samajwadi Party, Gorakhpur",
    hi: "जिला उपाध्यक्ष - समाजवादी पार्टी, गोरखपुर"
  },
  party: {
    en: "Samajwadi Party",
    hi: "समाजवादी पार्टी"
  },
  location: {
    en: "Gorakhpur & Barhalganj, Uttar Pradesh",
    hi: "गोरखपुर एवं बड़हलगंज, उत्तर प्रदेश"
  },
  phone: "+91 99353 96483",
  email: "contact@jitendrayadav.in",
  officeAddress: {
    en: "Samajwadi Party Office, Barhalganj & Gorakhpur City, Uttar Pradesh",
    hi: "समाजवादी पार्टी कार्यालय, बड़हलगंज एवं गोरखपुर शहर, उत्तर प्रदेश"
  },
  socials: {
    facebook: "https://facebook.com/share/19Ny5PHAJ2",
    instagram: "https://instagram.com/socialist_jitendrayadav",
    whatsapp: "https://wa.me/919935396483"
  },
  bioShort: {
    en: "District Vice President - Samajwadi Party Gorakhpur, Former Student Union President - National P.G. College Barhalganj, Digital Creator & Youth Leader dedicated to public welfare, social justice, and youth empowerment.",
    hi: "जिला उपाध्यक्ष - समाजवादी पार्टी गोरखपुर, पूर्व अध्यक्ष छात्रसंघ - नेशनल पी•जी•कॉलेज बड़हलगंज गोरखपुर। डिजिटल क्रिएटर एवं युवा जननेता, जो सामाजिक न्याय, युवा सशक्तिकरण और जनसेवा को समर्पित हैं।"
  },
  bioFull: [
    {
      en: "Shri Jitendra Kumar Yadav is a prominent political leader and District Vice President of Samajwadi Party, Gorakhpur. Raised in Barhalganj, he completed his education at National P.G. College Barhalganj and Deen Dayal Upadhyaya Gorakhpur University (DDU Gorakhpur).",
      hi: "श्री जितेन्द्र कुमार यादव समाजवादी पार्टी गोरखपुर के जिला उपाध्यक्ष एवं लोकप्रिय जननेता हैं। बड़हलगंज के निवासी, उन्होंने नेशनल पी•जी•कॉलेज बड़हलगंज और दीन दयाल उपाध्याय गोरखपुर विश्वविद्यालय (DDU Gorakhpur) से उच्च शिक्षा प्राप्त की।"
    },
    {
      en: "His leadership journey began as the elected President of the Student Union at National P.G. College, Barhalganj, fighting for student rights, educational facilities, and youth welfare. Guided by Samajwadi ideology, he actively serves the citizens of Gorakhpur across youth mobilization, sports encouragement, health assistance, and social justice.",
      hi: "उनके नेतृत्व की शुरुआत नेशनल पी•जी•कॉलेज बड़हलगंज के निर्वाचित छात्रसंघ अध्यक्ष के रूप में हुई, जहाँ उन्होंने छात्र अधिकारों, शिक्षा व्यवस्था और युवा कल्याण के लिए ऐतिहासिक संघर्ष किया। समाजवादी विचारधारा से प्रेरित होकर वे गोरखपुर जनपद में जनसेवा, खेल प्रोत्साहन, स्वास्थ्य सहायता और सामाजिक न्याय के लिए निरंतर समर्पित हैं।"
    }
  ],
  vision: [
    {
      en: "1. Youth & Education Empowerment: Strengthening colleges, student facilities, and career support across Gorakhpur & Barhalganj.",
      hi: "1. युवा एवं शिक्षा सशक्तिकरण: गोरखपुर व बड़हलगंज में महाविद्यालयों, छात्र सुविधाओं व करियर मार्गदर्शन को सुदृढ़ करना।"
    },
    {
      en: "2. Social Justice & Grassroots Welfare: Standing firmly with farmers, laborers, youth, and economically weaker families.",
      hi: "2. सामाजिक न्याय एवं जनसेवा: किसानों, मजदूरों, युवाओं व वंचित वर्गों के अधिकारों के लिए सदैव तत्पर।"
    },
    {
      en: "3. Transparent Public Grievance Resolution: Ensuring 100% direct access and digital helpline support for every citizen.",
      hi: "3. पारदर्शी जनसमस्या निवारण: प्रत्येक नागरिक की समस्याओं के लिए 100% सुलभ व डिजिटल हेल्पलाइन व्यवस्था।"
    },
    {
      en: "4. Infrastructure & Rural Upliftment: Promoting better roads, health camps, sports grounds, and community assets.",
      hi: "4. बुनियादी ढांचा व ग्रामीण विकास: बेहतर सड़कें, स्वास्थ्य शिविर, खेल के मैदान व सामुदायिक परिसंपत्तियों का विस्तार।"
    }
  ],
  stats: {
    initiativesCompleted: 185,
    peopleImpacted: "75,000+",
    grievancesResolved: 1240,
    developmentProjects: 58
  },
  timeline: [
    {
      year: "Student Union",
      title: { en: "President, Student Union - National P.G. College Barhalganj", hi: "पूर्व अध्यक्ष छात्रसंघ - नेशनल पी•जी•कॉलेज बड़हलगंज" },
      description: { en: "Elected President of Student Union, leading historic student welfare campaigns and educational infrastructure development.", hi: "छात्रसंघ अध्यक्ष पद पर ऐतिहासिक विजय, छात्र हित, शिक्षा सुधार एवं युवा अधिकारों के लिए सशक्त नेतृत्व।" }
    },
    {
      year: "DDU Gorakhpur",
      title: { en: "Higher Studies & Youth Organization", hi: "उच्च शिक्षा - डी•डी•यू• गोरखपुर विश्वविद्यालय" },
      description: { en: "Completed higher education at Deen Dayal Upadhyaya Gorakhpur University, organizing student rallies and youth forums.", hi: "दीन दयाल उपाध्याय गोरखपुर विश्वविद्यालय से उच्च शिक्षा प्राप्त करते हुए युवा संगठन व समाज सेवा में सक्रिय योगदान।" }
    },
    {
      year: "Samajwadi Party",
      title: { en: "District Vice President - Samajwadi Party Gorakhpur", hi: "जिला उपाध्यक्ष - समाजवादी पार्टी, गोरखपुर" },
      description: { en: "Appointed District Vice President of Samajwadi Party, Gorakhpur, strengthening party organization and citizen outreach.", hi: "समाजवादी पार्टी गोरखपुर के जिला उपाध्यक्ष नियुक्त, संगठन विस्तार एवं जनसेवा अभियानों का नेतृत्व।" }
    },
    {
      year: "Present",
      title: { en: "Digital Creator & Public Leader", hi: "डिजिटल क्रिएटर एवं जनप्रिय नेतृत्व" },
      description: { en: "Leveraging digital media and ground outreach to address public issues, connect with youth, and drive community service.", hi: "डिजिटल मीडिया व धरातलीय जनसंपर्क के माध्यम से जनसमस्याओं का समाधान एवं युवा संवाद।" }
    }
  ]
};

export const SEVA_ACTIVITIES: SevaItem[] = [
  {
    id: "seva-1",
    title: { en: "Free Medical & Health Checkup Camp", hi: "निःशुल्क चिकित्सा एवं स्वास्थ्य परीक्षण शिविर" },
    category: "health",
    categoryLabel: { en: "Health & Medical", hi: "स्वास्थ्य सेवा" },
    date: "14 November 2024",
    location: { en: "Panchayat Community Center, UP", hi: "पंचायत सामुदायिक केंद्र, उ.प्र." },
    description: {
      en: "Organized a multi-specialty health camp providing free consultations, diagnostic tests, and essential medicines to over 1,200 villagers.",
      hi: "1,200 से अधिक ग्रामीणों को निःशुल्क परामर्श, जांच और दवाएं प्रदान करने वाले बहु-विशेषज्ञता स्वास्थ्य शिविर का आयोजन।"
    },
    beneficiariesCount: "1,200+",
    image: "/activity1.png",
    status: "Completed"
  },
  {
    id: "seva-2",
    title: { en: "Educational Kit Distribution Drive", hi: "छात्र शैक्षिक सामग्री वितरण अभियान" },
    category: "education",
    categoryLabel: { en: "Education Support", hi: "शिक्षा सहायता" },
    date: "05 October 2024",
    location: { en: "Government Primary School, Ward 12", hi: "राजकीय प्राथमिक विद्यालय, वार्ड 12" },
    description: {
      en: "Distributed notebooks, bags, geometry sets, and study materials to primary school children from economically weaker families.",
      hi: "आर्थिक रूप से कमजोर परिवारों के प्राथमिक स्कूली बच्चों को उत्तर पुस्तिकाएं, बैग और अध्ययन सामग्री वितरित की गई।"
    },
    beneficiariesCount: "450+",
    image: "/activity2.png",
    status: "Completed"
  },
  {
    id: "seva-3",
    title: { en: "Winter Blanket & Relief Support", hi: "शीतकालीन कम्बल एवं राहत सामग्री सहायता" },
    category: "economic",
    categoryLabel: { en: "Welfare Support", hi: "कल्याण सहायता" },
    date: "20 December 2024",
    location: { en: "Panchayat Bhawan", hi: "पंचायत भवन" },
    description: {
      en: "Provided warm blankets and winter essentials to elderly residents and underprivileged families across panchayat villages.",
      hi: "पंचायत गांवों के बुजुर्गों और जरूरतमंद परिवारों को गर्म कंबल और शीतकालीन राहत सामग्री प्रदान की गई।"
    },
    beneficiariesCount: "800+",
    image: "/activity3.png",
    status: "Completed"
  },
  {
    id: "seva-4",
    title: { en: "Clean Village & Water Pipeline Assistance", hi: "स्वच्छ गांव एवं जल पाइपलाइन मरम्मत अभियान" },
    category: "community",
    categoryLabel: { en: "Community Development", hi: "सामुदायिक विकास" },
    date: "10 January 2025",
    location: { en: "East Panchayat Sector", hi: "पूर्वी पंचायत क्षेत्र" },
    description: {
      en: "Coordinated prompt repair of main drinking water supply pipeline and supervised drain cleaning before monsoon season.",
      hi: "मुख्य पेयजल आपूर्ति पाइपलाइन की त्वरित मरम्मत और मानसून से पूर्व नाली सफाई का निरीक्षण किया गया।"
    },
    beneficiariesCount: "2,500+",
    image: "/activity4.png",
    status: "Completed"
  }
];

export const PORTFOLIO_PROJECTS: PortfolioItem[] = [
  {
    id: "port-1",
    title: { en: "Construction of Interlocking Rural Road (2.5 km)", hi: "2.5 किमी इंटरलॉकिंग ग्रामीण मार्ग निर्माण" },
    category: "infrastructure",
    categoryLabel: { en: "Infrastructure", hi: "बुनियादी ढांचा" },
    location: { en: "Main Village to Highway Connector", hi: "मुख्य गांव से हाईवे संपर्क मार्ग" },
    period: "2023 - 2024",
    objective: {
      en: "Eliminate seasonal waterlogging and facilitate smooth transport for farmers and students.",
      hi: "मौसमी जलभराव को दूर करना और किसानों तथा छात्रों के लिए सुगम आवागमन सुनिश्चित करना।"
    },
    workDone: {
      en: "Paved 2.5 km high-density CC interlocking road with side drain network.",
      hi: "साइड ड्रेन नेटवर्क के साथ 2.5 किमी उच्च घनत्व सीसी इंटरलॉकिंग सड़क का निर्माण किया।"
    },
    status: "Completed",
    budget: "₹38.5 Lakhs",
    image: "/activity1.png"
  },
  {
    id: "port-2",
    title: { en: "Installation of High-Mast Solar Lights (60 Units)", hi: "60 हाई-मास्ट सोलर लाइटों की स्थापना" },
    category: "public_works",
    categoryLabel: { en: "Public Lighting", hi: "सार्वजनिक प्रकाश" },
    location: { en: "Key Village Crossings & Community Centers", hi: "प्रमुख गांव चौराहे एवं सामुदायिक केंद्र" },
    period: "2024",
    objective: {
      en: "Enhance night safety, reduce electricity load, and illuminate public spaces.",
      hi: "रात्रि सुरक्षा बढ़ाना, बिजली लोड घटाना और सार्वजनिक स्थानों को रोशन करना।"
    },
    workDone: {
      en: "Installed 60 automatic dusk-to-dawn solar streetlight units across darkness-prone zones.",
      hi: "अंधेरे वाले क्षेत्रों में 60 स्वचालित डस्क-टू-डॉन सोलर स्ट्रीटलाइट इकाइयां लगाई गईं।"
    },
    status: "Completed",
    budget: "₹18.0 Lakhs",
    image: "/activity4.png"
  },
  {
    id: "port-3",
    title: { en: "Community RO Water Purification Plant", hi: "सामुदायिक आरओ जल शोधन संयंत्र" },
    category: "sanitation",
    categoryLabel: { en: "Drinking Water & Sanitation", hi: "पेजल एवं स्वच्छता" },
    location: { en: "Central Panchayat Market Yard", hi: "केंद्रीय पंचायत बाजार प्रांगण" },
    period: "2024 - 2025",
    objective: {
      en: "Deliver clean, safe drinking water to protect citizens against water-borne illnesses.",
      hi: "नागरिकों को जल जनित बीमारियों से बचाने के लिए स्वच्छ, सुरक्षित पेयजल उपलब्ध कराना।"
    },
    workDone: {
      en: "Constructed 1,000 LPH filtration unit with 24/7 solar power backup.",
      hi: "24/7 सौर ऊर्जा बैकअप के साथ 1,000 एलपीएच निस्पंदन इकाई का निर्माण किया गया।"
    },
    status: "Completed",
    budget: "₹12.2 Lakhs",
    image: "/activity2.png"
  },
  {
    id: "port-4",
    title: { en: "Panchayat Sports Ground & Youth Activity Center", hi: "पंचायत खेल मैदान एवं युवा केंद्र" },
    category: "community",
    categoryLabel: { en: "Youth & Sports", hi: "युवा एवं खेल" },
    location: { en: "Panchayat Ground", hi: "पंचायत परिसर ग्राउंड" },
    period: "Ongoing (2025)",
    objective: {
      en: "Encourage sports participation, physical health, and youth training facilities.",
      hi: "खेलों में भागीदारी, शारीरिक स्वास्थ्य और युवाओं के लिए प्रशिक्षण सुविधाओं को बढ़ावा देना।"
    },
    workDone: {
      en: "Ground leveling completed; perimeter fencing and open gym installation under progress.",
      hi: "मैदान समतलीकरण पूरा; चारदीवारी फेंसिंग एवं ओपन जिम स्थापना कार्य प्रगति पर।"
    },
    status: "In Progress",
    budget: "₹24.0 Lakhs",
    image: "/activity3.png"
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: "news-1",
    title: {
      en: "District Panchayat Review Meeting Focuses on Accelerated Rural Road Construction",
      hi: "जिला पंचायत समीक्षा बैठक: ग्रामीण सड़क निर्माण में तेजी लाने पर बल"
    },
    category: "Development Updates",
    date: "02 February 2025",
    summary: {
      en: "Shri Jitendra Kumar Yadav chaired a departmental review meeting emphasizing timely completion of pending village connecting roads and transparent expenditure audits.",
      hi: "श्री जितेन्द्र कुमार यादव ने विभागीय समीक्षा बैठक की अध्यक्षता करते हुए लंबित गांव की सड़कों को समय पर पूरा करने और पारदर्शी व्यय ऑडिट पर जोर दिया।"
    },
    content: [
      {
        en: "During the official District Panchayat review session, Shri Jitendra Kumar Yadav addressed project engineers and contractors regarding the progress of link roads under development in the constituency.",
        hi: "आधिकारिक जिला पंचायत समीक्षा सत्र के दौरान, श्री जितेन्द्र कुमार यादव ने निर्वाचन क्षेत्र में निर्माणाधीन संपर्क मार्गों की प्रगति को लेकर परियोजना इंजीनियरों और ठेकेदारों को संबोधित किया।"
      },
      {
        en: "He instructed that strict quality benchmarks must be adhered to, and any delay impacting commuting villagers will be dealt with under immediate administrative review.",
        hi: "उन्होंने निर्देश दिया कि सख्त गुणवत्ता मानकों का पालन किया जाना चाहिए, और ग्रामीणों के आवागमन को प्रभावित करने वाले किसी भी विलंब पर तुरंत प्रशासनिक समीक्षा की जाएगी।"
      }
    ],
    featuredImage: "/activity1.png",
    author: "Official Media Desk",
    tags: ["Panchayat", "Development", "Roads"]
  },
  {
    id: "news-2",
    title: {
      en: "Public Grievance Redressal Camp Resolves 85 Local Requests on the Spot",
      hi: "जन सुनवाई शिविर: मौके पर ही 85 स्थानीय आवेदनों का त्वरित निस्तारण"
    },
    category: "Public Activities",
    date: "22 January 2025",
    summary: {
      en: "Over 120 citizens submitted public service requests regarding pension schemes, electricity issues, and handpump repairs at the Panchayat Seva Kendra.",
      hi: "पंचायत सेवा केंद्र में पेंशन योजनाओं, बिजली समस्याओं और हैंडपंप मरम्मत को लेकर 120 से अधिक नागरिकों ने आवेदन प्रस्तुत किए।"
    },
    content: [
      {
        en: "Shri Jitendra Kumar Yadav personally met with local villagers during the day-long grievance redressal camp. Out of 120 received matters, 85 issues were directed to departmental officials and resolved immediately.",
        hi: "दिनभर चले जन सुनवाई शिविर के दौरान श्री जितेन्द्र कुमार यादव ने ग्रामीणों से व्यक्तिगत मुलाकात की। प्राप्त 120 मामलों में से 85 समस्याओं का विभागीय अधिकारियों को निर्देशित कर तत्काल निस्तारण किया गया।"
      }
    ],
    featuredImage: "/activity2.png",
    author: "Panchayat Seva Cell",
    tags: ["Seva", "Grievance", "Public Hearing"]
  },
  {
    id: "news-3",
    title: {
      en: "Annual Tree Plantation & Eco-Awareness Campaign Launched",
      hi: "वार्षिक वृक्षारोपण एवं पर्यावरण जागरूकता अभियान का शुभारंभ"
    },
    category: "Community Programmes",
    date: "15 January 2025",
    summary: {
      en: "Over 500 fruit-bearing and shade saplings planted along public roads and school premises to promote environmental conservation.",
      hi: "पर्यावरण संरक्षण को बढ़ावा देने के लिए सार्वजनिक सड़कों एवं विद्यालय परिसरों में 500 से अधिक फलदार और छायादार पौधे रोपे गए।"
    },
    content: [
      {
        en: "Highlighting the urgency of ecological balance, Shri Jitendra Kumar Yadav led local youth groups and panchayat representatives in planting saplings across 4 villages.",
        hi: "पर्यावरणीय संतुलन की महत्ता पर प्रकाश डालते हुए श्री जितेन्द्र कुमार यादव ने स्थानीय युवा समूहों और पंचायत प्रतिनिधियों के साथ 4 गांवों में पौधरोपण किया।"
      }
    ],
    featuredImage: "/activity4.png",
    author: "Green Seva Cell",
    tags: ["Environment", "Plantation", "Community"]
  }
];

export const EVENTS_DATA: EventItem[] = [
  {
    id: "event-1",
    title: { en: "Constituency Public Hearing & Seva Camp", hi: "क्षेत्रीय जन सुनवाई एवं सेवा शिविर" },
    date: "25 February 2025",
    time: "10:00 AM - 04:00 PM",
    venue: { en: "Panchayat Bhawan Main Hall, UP", hi: "पंचायत भवन मुख्य सभागार, उ.प्र." },
    description: {
      en: "Monthly public interaction program for receiving citizen suggestions, development requests, and grievance applications.",
      hi: "नागरिकों के सुझावों, विकास अनुरोधों और शिकायत आवेदनों को प्राप्त करने के लिए मासिक सार्वजनिक बातचीत कार्यक्रम।"
    },
    status: "Upcoming",
    category: { en: "Public Hearing", hi: "जन सुनवाई" },
    image: "/activity2.png"
  },
  {
    id: "event-2",
    title: { en: "Youth Career & Skill Guidance Seminar", hi: "युवा करियर एवं कौशल मार्गदर्शन संगोष्ठी" },
    date: "10 March 2025",
    time: "11:00 AM - 02:00 PM",
    venue: { en: "District Youth Center Auditorium", hi: "जिला युवा केंद्र सभागार" },
    description: {
      en: "Special guidance workshop featuring career counselors for rural students and job-seekers.",
      hi: "ग्रामीण छात्रों और नौकरी चाहने वालों के लिए करियर परामर्शदाताओं द्वारा विशेष मार्गदर्शन कार्यशाला।"
    },
    status: "Upcoming",
    category: { en: "Youth Empowerment", hi: "युवा सशक्तिकरण" },
    image: "/activity3.png"
  },
  {
    id: "event-3",
    title: { en: "76th Republic Day Celebration & Flag Hoisting", hi: "76वें गणतंत्र दिवस समारोह एवं ध्वजारोहण" },
    date: "26 January 2025",
    time: "08:30 AM",
    venue: { en: "Government Inter College Grounds", hi: "राजकीय इंटर कॉलेज मैदान" },
    description: {
      en: "Unfurled national flag, honored meritorious students, and distributed recognition awards to local frontline health workers.",
      hi: "राष्ट्रीय ध्वज फहराया, मेधावी छात्रों को सम्मानित किया और स्थानीय अग्रिम पंक्ति के स्वास्थ्य कार्यकर्ताओं को पुरस्कार वितरित किए।"
    },
    status: "Completed",
    category: { en: "National Celebration", hi: "राष्ट्रीय पर्व" },
    image: "/activity1.png"
  }
];

export const GALLERY_ALBUMS: GalleryAlbum[] = [
  {
    id: "album-1",
    title: { en: "Public Service & Relief Distribution 2024", hi: "जनसेवा एवं राहत सामग्री वितरण 2024" },
    date: "December 2024",
    category: { en: "Seva Activities", hi: "सेवा कार्य" },
    coverImage: "/activity1.png",
    images: [
      {
        url: "/activity1.png",
        caption: { en: "Public service interaction and relief distribution", hi: "जनसेवा संवाद एवं सहायता सामग्री वितरण" }
      },
      {
        url: "/activity2.png",
        caption: { en: "Medical checkup consultation camp", hi: "चिकित्सा परामर्श एवं जन सुनवाई शिविर" }
      },
      {
        url: "/activity3.png",
        caption: { en: "Distribution of books and education kits", hi: "किताबों और शिक्षा किटों का वितरण" }
      },
      {
        url: "/activity4.png",
        caption: { en: "Inspection of panchayat community development works", hi: "पंचायत विकास कार्यों का मौके पर निरीक्षण" }
      }
    ]
  },
  {
    id: "album-2",
    title: { en: "Rural Infrastructure Inspection", hi: "ग्रामीण बुनियादी ढांचा निरीक्षण" },
    date: "November 2024",
    category: { en: "Development", hi: "विकास कार्य" },
    coverImage: "/activity4.png",
    images: [
      {
        url: "/activity4.png",
        caption: { en: "Inspection of newly paved interlocking road", hi: "नवनिर्मित इंटरलॉकिंग मार्ग का निरीक्षण" }
      },
      {
        url: "/activity1.png",
        caption: { en: "Testing high-mast solar lighting system", hi: "हाई-मास्ट सोलर लाइट का परीक्षण" }
      }
    ]
  }
];

export const VIDEOS_DATA: VideoItem[] = [
  {
    id: "vid-1",
    title: { en: "Official Address on Rural Development Objectives", hi: "ग्रामीण विकास के उद्देश्यों पर आधिकारिक संबोधन" },
    date: "January 2025",
    youtubeId: "dQw4w9WgXcQ",
    description: {
      en: "Speech outlining priority roads, clean drinking water projects, and youth educational initiatives for the constituency.",
      hi: "निर्वाचन क्षेत्र के लिए प्राथमिकता वाली सड़कों, स्वच्छ पेयजल और युवा शैक्षिक पहलों को रेखांकित करने वाला भाषण।"
    }
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: "ach-1",
    year: "2024",
    title: { en: "100% Electrification & Solar Lighting Milestone", hi: "100% सौर स्ट्रीटलाइट स्थापना मील का पत्थर" },
    description: {
      en: "Successfully coordinated allocation for solar illumination across all dark village stretches in the constituency.",
      hi: "निर्वाचन क्षेत्र के सभी अंधेरे ग्रामीण हिस्सों में सौर रोशनी का आवंटन सफलतापूर्वक पूरा किया गया।"
    },
    category: { en: "Public Infrastructure", hi: "सार्वजनिक बुनियादी ढांचा" },
    reference: { en: "District Panchayat Development Record 2024", hi: "जिला पंचायत विकास अभिलेख 2024" }
  },
  {
    id: "ach-2",
    year: "2023",
    title: { en: "Seva Excellence Public Honor", hi: "जनसेवा उत्कृष्टता सम्मान" },
    description: {
      en: "Recognized by local welfare societies for timely assistance during emergency medical relief drives.",
      hi: "आपातकालीन चिकित्सा राहत अभियानों में समय पर सहायता के लिए स्थानीय कल्याण समितियों द्वारा सम्मानित।"
    },
    category: { en: "Community Service", hi: "सामुदायिक सेवा" },
    reference: { en: "Local Community Welfare Federation", hi: "स्थानीय सामुदायिक कल्याण महासंघ" }
  }
];

export const MEDIA_COVERAGE: MediaCoverageItem[] = [
  {
    id: "med-1",
    publication: { en: "Dainik Jagran / Local Edition", hi: "दैनिक जागरण / स्थानीय संस्करण" },
    date: "15 November 2024",
    headline: {
      en: "District Panchayat Member Oversees Health Camp Benefiting 1200 Villagers",
      hi: "जिला पंचायत सदस्य ने 1200 ग्रामीणों को लाभान्वित करने वाले स्वास्थ्य शिविर का निरीक्षण किया"
    },
    summary: {
      en: "Comprehensive coverage of the free medical consultation camp organized in the panchayat constituency.",
      hi: "पंचायत क्षेत्र में आयोजित निःशुल्क चिकित्सा परामर्श शिविर का विस्तृत कवरेज।"
    },
    type: "Newspaper",
    image: "/activity2.png"
  },
  {
    id: "med-2",
    publication: { en: "Amar Ujala / Regional Press", hi: "अमर उजाला / क्षेत्रीय प्रेस" },
    date: "03 February 2025",
    headline: {
      en: "Prompt Road Repair Work Demanded in Panchayat Review Session",
      hi: "पंचायत समीक्षा सत्र में त्वरित सड़क मरम्मत कार्य की मांग"
    },
    summary: {
      en: "Media report highlighting Shri Jitendra Kumar Yadav's instructions for completing link roads before monsoon.",
      hi: "मानसून से पहले संपर्क मार्गों को पूरा करने के श्री जितेन्द्र कुमार यादव के निर्देशों को उजागर करती मीडिया रिपोर्ट।"
    },
    type: "Digital Press",
    image: "/activity4.png"
  }
];

export const INITIAL_GRIEVANCES: GrievanceRecord[] = [
  {
    id: "grv-101",
    ticketNo: "JKY-2025-0891",
    citizenName: "Ramesh Chandra Sharma",
    phone: "+91 98765 43210",
    wardArea: "Ward No. 4, Village Rampur",
    category: "Drinking Water Pipeline",
    subject: "Low pressure drinking water supply near primary school",
    details: "The main distribution line has developed a small leakage causing low water pressure in 20 households.",
    status: "In Progress",
    submittedAt: "2025-02-01 10:30 AM",
    updatedAt: "2025-02-02 02:15 PM"
  },
  {
    id: "grv-102",
    ticketNo: "JKY-2025-0892",
    citizenName: "Smt. Sunita Devi",
    phone: "+91 97112 33445",
    wardArea: "Ward No. 9, Sector B",
    category: "Street Lighting",
    subject: "Solar light battery replacement required",
    details: "Solar street pole #14 light goes off after 2 hours of night operation.",
    status: "Under Review",
    submittedAt: "2025-02-03 04:00 PM",
    updatedAt: "2025-02-04 11:00 AM"
  },
  {
    id: "grv-103",
    ticketNo: "JKY-2025-0893",
    citizenName: "Amit Kumar Yadav",
    phone: "+91 99110 55667",
    wardArea: "Ward No. 2, East Tola",
    category: "Road Repair",
    subject: "Side drain clearing request before rainfall",
    details: "Silt accumulated in side drain near main market junction needs machine clearance.",
    status: "Resolved",
    submittedAt: "2025-01-20 09:15 AM",
    updatedAt: "2025-01-22 05:30 PM"
  }
];
