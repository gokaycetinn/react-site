const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const navigation = {
  tr: [
    { label: "Hakkımda", href: "#about" },
    { label: "Projeler", href: "#projects" },
    { label: "Deneyim", href: "#experience" },
    { label: "İletişim", href: "#contact" },
  ],
  en: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
};

export const copy = {
  tr: {
    skip: "Ana içeriğe geç",
    brandRole: "Yazılım Mühendisi",
    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
    theme: "Temayı değiştir",
    language: "Dili değiştir",
    heroEyebrow: "Gökay Çetinakdoğan • Yazılım Mühendisi",
    heroTitle: "Fikirleri çalışan ürünlere ve sistemlere dönüştürüyorum.",
    heroBody:
      "Sistemler üzerinde kapsamlı geliştirmeler yaparak sürdürülebilir çözümler sunuyorum. Yapay zekâ destekli sistemler ve projelerde modern teknolojileri kullanarak kullanıcı dostu, yüksek performanslı yazılımlar geliştiriyorum.",
    heroPrimary: "Projeleri İncele",
    heroSecondary: "GitHub",
    heroVisualAlt:
      "Gökay'ın projelerini ve teknik uzmanlıklarını gösteren interaktif macOS terminal penceresi",
    aboutTitle: "Mühendislik disiplini ve kullanıcı odaklı yaklaşım.",
    aboutLead:
      "Yazılım geliştirmeyi sadece kod yazmak olarak değil; gerçek dünyadaki karmaşık problemleri yalın, sağlam ve sürdürülebilir ürünlere dönüştürme süreci olarak görüyorum.",
    aboutBody:
      "Çankaya Üniversitesi Bilgisayar Mühendisliği mezunuyum. Uçtan uca sistem geliştirme süreçlerinde; yapay zekâ modelleri, veri işleme hatları ve kullanıcı odaklı modern arayüzleri entegre ediyorum. Sistemleri sadece çalıştırmakla kalmıyor; performans, sürdürülebilirlik ve temiz mimari standartlarına göre inşa ediyorum.",
    projectsStat: "Öne Çıkan Proje",
    education: "Eğitim",
    educationValue: "Bilgisayar Mühendisliği",
    educationMeta: "Çankaya Üniversitesi, 2021-2026",
    location: "Çalışma Biçimi",
    locationValue: "Ankara / Hibrit & Remote",
    locationMeta: "Global fırsatlara açık",
    featuredTitle: "Projeler",
    featuredBody:
      "Yapay zekâ destekli sistemlerden dağıtık veri akışlarına ve kullanıcı odaklı ürünlere kadar geliştirdiğim çalışmaların teknik kapsamını ve mimarisini keşfedin.",
    previous: "Önceki proje",
    next: "Sonraki proje",
    dragHint: "Kartı sürükleyebilir veya okları kullanabilirsiniz.",
    viewProject: "Projeyi İncele",
    liveDemo: "Canlı Demo",
    appStore: "App Store",
    website: "Web Sitesi",
    imageLoading: "Proje görseli yükleniyor...",
    imageError: "Görsel yüklenemedi",
    moreProjectsTitle: "Diğer Çalışmalar & Açık Kaynak Çözümler",
    experienceEyebrow: "Kariyer & Deneyim",
    ongoing: "Devam ediyor",
    contactTitle: "Birlikte yeni bir ürün inşa edelim.",
    contactBody:
      "Yapay zekâ destekli sistemler, ürün mimarileri veya yeni mühendislik fırsatları için dilediğiniz zaman iletişime geçebilirsiniz.",
    contactCta: "İletişime Geç",
    allProjects: "Tüm Projeler",
    projectIndex: "Proje indeksi",
    experienceOpen: "Detayları göster",
    experienceClose: "Detayları gizle",
    contactAvailability: "Yeni projeler ve profesyonel iş birlikleri için açık.",
    contactMediaAlt: "Yazılım geliştirme sürecini gösteren animasyon",
    contactVisualAlt: "Yazılım sistemlerini temsil eden krom ve füme cam soyut heykel",
    emailLabel: "E-posta",
    phoneLabel: "Telefon",
    socialLabel: "Profesyonel Ağlar",
    rights: "Tüm hakları saklıdır.",
    notFoundTitle: "Sayfa bulunamadı",
    notFoundBody: "Aradığınız sayfa mevcut değil veya taşınmış olabilir.",
    notFoundBack: "Ana sayfaya dön",
    downloadCV: "CV Görüntüle",
    caseStudy: "Detayları İncele",
    closeDrawer: "Kapat",
    architecture: "Mimari & Mühendislik Yaklaşımı",
    highlights: "Öne Çıkan Başarılar & Çıktılar",
    keyFeatures: "Temel Yetenekler",
    githubStatsTitle: "Açık Kaynak & GitHub Aktivitesi",
    githubActiveStatus: "GitHub'da Aktif Geliştirme",
    viewAllRepos: "Tüm Repoları Gör",
    terminalHelpHint: "Komut yazabilirsiniz (örn: help, projects, exp, cv, contact)",
  },
  en: {
    skip: "Skip to main content",
    brandRole: "Software Engineer",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    theme: "Switch theme",
    language: "Switch language",
    heroEyebrow: "Gökay Çetinakdoğan • Software Engineer",
    heroTitle: "Building scalable system architectures & intelligent solutions.",
    heroBody:
      "Delivering comprehensive, sustainable software solutions across modern systems. Leveraging AI, computer vision, and robust architectures to build high-performance, user-friendly products.",
    heroPrimary: "Explore Projects",
    heroSecondary: "GitHub",
    heroVisualAlt:
      "Interactive macOS terminal window showcasing Gökay's projects and technical stack",
    aboutTitle: "Engineering rigor meets product mindset.",
    aboutLead:
      "I view software engineering not just as writing code, but as transforming real-world complexities into clean, resilient, and sustainable products.",
    aboutBody:
      "Computer Engineering graduate from Çankaya University. I engineer end-to-end systems by integrating AI models, distributed data processing pipelines, and modern user interfaces. Focused on performance, sustainable architectures, and clean engineering standards.",
    projectsStat: "Featured Projects",
    education: "Education",
    educationValue: "Computer Engineering (B.S.)",
    educationMeta: "Çankaya University, 2021-2026",
    location: "Work Style",
    locationValue: "Ankara / Hybrid & Remote",
    locationMeta: "Open to global opportunities",
    featuredTitle: "Projects",
    featuredBody:
      "From AI-powered systems and distributed data pipelines to user-centric products, explore the technical scope and architecture of my work.",
    previous: "Previous project",
    next: "Next project",
    dragHint: "Drag the card or use arrow controls.",
    viewProject: "View Project",
    liveDemo: "Live Demo",
    appStore: "App Store",
    website: "Website",
    imageLoading: "Loading project visual...",
    imageError: "Visual could not be loaded",
    moreProjectsTitle: "More Work & Open Source Systems",
    experienceEyebrow: "Career & Experience",
    ongoing: "Present",
    contactTitle: "Let's build something remarkable together.",
    contactBody:
      "Feel free to reach out for AI-driven systems, software architecture projects, or new engineering opportunities.",
    contactCta: "Get in Touch",
    allProjects: "All Projects",
    projectIndex: "Project index",
    experienceOpen: "Show details",
    experienceClose: "Hide details",
    contactAvailability: "Available for new projects and full-time opportunities.",
    contactMediaAlt: "Animation illustrating software development lifecycle",
    contactVisualAlt: "Abstract chrome sculpture representing software systems",
    emailLabel: "Email",
    phoneLabel: "Phone",
    socialLabel: "Social & Professional",
    rights: "All rights reserved.",
    notFoundTitle: "Page not found",
    notFoundBody: "The page you're looking for doesn't exist or has been moved.",
    notFoundBack: "Back to homepage",
    downloadCV: "View CV",
    caseStudy: "Case Study & Details",
    closeDrawer: "Close",
    architecture: "Architecture & Engineering Approach",
    highlights: "Key Engineering Highlights",
    keyFeatures: "Core Capabilities",
    githubStatsTitle: "Open Source & GitHub Activity",
    githubActiveStatus: "Active on GitHub",
    viewAllRepos: "View All Repos",
    terminalHelpHint: "Type a command (e.g. help, projects, exp, cv, contact)",
  },
};

export const technicalSkills = {
  programming: ["Python", "C#", "JavaScript", "TypeScript", "C++", "SQL"],
  frameworks: ["React Native", ".NET", "FastAPI", "React", "OpenCV", "YOLO", "Flutter"],
  tools: ["Git", "Firebase", "Linux", "Azure DevOps", "Kafka", "Spark", "MongoDB"],
};

export const featuredProjects = [
  {
    slug: "ai-chef",
    title: { tr: "AI Chef - Akıllı Tarifler", en: "AI Chef - Smart Recipes" },
    category: { tr: "Canlı Mobil Ürün • iOS", en: "Live Mobile Product • iOS" },
    description: {
      tr: "Kullanıcının elindeki malzemelere göre dinamik ve kişiselleştirilmiş tarifler üreten, Apple App Store'da aktif olarak yayında olan yapay zekâ destekli mobil uygulama.",
      en: "An AI-powered mobile application published live on the Apple App Store that dynamically crafts personalized recipes from available ingredients.",
    },
    image: `${basePath}/images/ai-chef-home.webp`,
    gallery: [
      `${basePath}/images/ai-chef-home.webp`,
      `${basePath}/images/ai-chef-recipes.webp`,
      `${basePath}/images/ai-chef-favorites.webp`,
    ],
    imageAlt: { tr: "AI Chef mobil uygulamasının ana ekranı", en: "AI Chef mobile app home screen" },
    tech: ["React Native", "AI & LLM", "iOS", "App Store"],
    links: [
      {
        type: "appstore",
        labelKey: "appStore",
        href: "https://apps.apple.com/tr/app/ai-chef-ak%C4%B1ll%C4%B1-tarifler/id6754893777?l=tr",
      },
      {
        type: "website",
        labelKey: "website",
        href: "https://gokaycetinn.github.io/ai-chef-website/",
      },
    ],
    caseStudy: {
      problem: {
        tr: "Mutfakta mevcut olan rastgele malzemeleri israf etmeden lezzetli öğünlere dönüştürmek ve kişisel beslenme tercihlerine uygun pratik tarifler bulmak günlük bir problemdir.",
        en: "Transforming random kitchen ingredients into delicious meals without waste while matching personal dietary preferences is a daily challenge.",
      },
      solution: {
        tr: "React Native ile sıfırdan inşa edilen AI Chef, seçilen malzemelere göre anlık prompt mühendisliği ile dinamik tarif ve porsiyon hesaplaması yapan modern bir mobil çözümdür.",
        en: "Engineered with React Native, AI Chef uses real-time prompt engineering to generate dynamic recipes and portion calculations tailored to selected ingredients.",
      },
      architecture: {
        tr: "React Native mobil istemcisi, LLM API entegrasyonu, yerel Async Storage favori mimarisi ve dinamik porsiyon ölçekleme motoru.",
        en: "React Native mobile client, LLM API integration, local Async Storage caching architecture, and dynamic portion scaling engine.",
      },
      highlights: {
        tr: [
          "Apple App Store üzerinde yayında ve aktif kullanıcılar tarafından kullanılmakta",
          "Kişiselleştirilmiş malzeme seçimi ve anlık dinamik tarif üretimi",
          "Karanlık ve aydınlık tema desteği, akıcı mikro animasyonlar",
        ],
        en: [
          "Published live on Apple App Store with active daily users",
          "Personalized ingredient selector and dynamic real-time recipe generation",
          "Dark & Light theme support with fluid micro-interactions",
        ],
      },
    },
  },
  {
    slug: "traffic-analysis",
    title: { tr: "CNN Based Traffic Analysis", en: "CNN Based Traffic Analysis" },
    category: { tr: "Bilgisayarlı Görü & Derin Öğrenme", en: "Computer Vision & Deep Learning" },
    description: {
      tr: "UA-DETRAC veri setiyle eğitilmiş YOLOv8 modeli ve OpenCV video işleme hattı ile gerçek zamanlı araç tespiti ve trafik yoğunluk analizi yapan sistem.",
      en: "Real-time vehicle detection and traffic density analytics pipeline powered by a custom-trained YOLOv8 model on the UA-DETRAC dataset.",
    },
    image: `${basePath}/images/cnn-traffic.webp`,
    gallery: [`${basePath}/images/cnn-traffic.webp`],
    imageAlt: { tr: "Araç tespit ve trafik analizi arayüzü", en: "Vehicle detection and traffic analysis interface" },
    tech: ["Python", "YOLOv8", "OpenCV", "Streamlit"],
    links: [
      {
        type: "github",
        labelKey: "viewProject",
        href: "https://github.com/gokaycetinn/CNN-Based-Traffic-Analysis",
      },
      {
        type: "website",
        labelKey: "liveDemo",
        href: "https://vehicle-detect.streamlit.app",
      },
    ],
    caseStudy: {
      problem: {
        tr: "Değişken hava koşulları, gece görüşü ve yoğun trafik senaryolarında araçların gerçek zamanlı tespit edilmesi ve akış istatistiklerinin çıkarılması yüksek hesaplama verimliliği gerektirir.",
        en: "Detecting vehicles and calculating density statistics in real time across challenging weather and lighting conditions requires optimized computation.",
      },
      solution: {
        tr: "UA-DETRAC veri kümesiyle eğitilen YOLOv8 derin öğrenme mimarisi OpenCV kare işleme hattıyla birleştirilerek Streamlit Cloud üzerinde canlı analiz paneline dönüştürüldü.",
        en: "A custom-trained YOLOv8 neural network combined with an OpenCV frame processing pipeline, deployed as an interactive live dashboard on Streamlit Cloud.",
      },
      architecture: {
        tr: "YOLOv8 nesne tanıma modeli, OpenCV video pipeline optimizasyonu, Streamlit interaktif web paneli ve bulut dağıtımı.",
        en: "YOLOv8 object detection model, OpenCV video stream pipeline, Streamlit interactive web dashboard, and cloud deployment.",
      },
      highlights: {
        tr: [
          "Gerçek zamanlı video akışlarında yüksek FPS ve doğruluk oranı",
          "Streamlit Cloud üzerinde canlı çalışan interaktif web arayüzü",
          "Araç sınıflandırma ve anlık trafik yoğunluk metrikleri",
        ],
        en: [
          "High FPS throughput and accuracy on realtime video streams",
          "Live interactive web application hosted on Streamlit Cloud",
          "Vehicle categorization and realtime density analytics",
        ],
      },
    },
  },
  {
    slug: "wellness-ai",
    title: { tr: "Wellness AI", en: "Wellness AI" },
    category: { tr: "Yapay Zekâ Mobil Koçluk", en: "AI Mobile Coaching" },
    description: {
      tr: "Firebase AI, Remote Config, Hive ve Cubit mimarisiyle geliştirilen; dinamik koç profilleri ve çevrimdışı sohbet geçmişi sunan kapsamlı Flutter uygulaması.",
      en: "A cross-platform Flutter app featuring dynamic AI wellness personas and offline-first chat history built with Cubit, Hive, and Firebase AI.",
    },
    image: `${basePath}/images/wellness-home.webp`,
    gallery: [
      `${basePath}/images/wellness-home.webp`,
      `${basePath}/images/wellness-dietitian.webp`,
      `${basePath}/images/wellness-fitness.webp`,
    ],
    imageAlt: { tr: "Wellness AI koç seçim ekranı", en: "Wellness AI coach selection screen" },
    tech: ["Flutter", "Firebase AI", "Cubit", "Hive NoSQL"],
    links: [
      {
        type: "github",
        labelKey: "viewProject",
        href: "https://github.com/gokaycetinn/WellnessAi",
      },
    ],
    caseStudy: {
      problem: {
        tr: "Kullanıcıların beslenme ve fitness hedeflerine yönelik uzmanlaşmış yapay zekâ yönlendirmelerini, internet kesintilerinden etkilenmeyen hızlı bir mobil arayüzde bir araya getirmek.",
        en: "Delivering domain-specialized AI guidance (diet & fitness) in a single responsive mobile experience with offline resilience.",
      },
      solution: {
        tr: "Flutter ile geliştirilen; Firebase Remote Config üzerinden dinamik persona enjeksiyonu yapan, Hive NoSQL ile yerel sohbetleri saklayan ve Cubit ile temiz state yöneten bir mobil mimari kuruldu.",
        en: "Built a Flutter app utilizing Firebase Remote Config for dynamic persona injection, Hive NoSQL for offline-first chat caching, and Cubit for robust state management.",
      },
      architecture: {
        tr: "Flutter UI katmanı, BLoC/Cubit durum yönetimi, Firebase AI & Remote Config, Hive NoSQL yerel depolama.",
        en: "Flutter UI layer, BLoC/Cubit state management, Firebase AI & Remote Config, and Hive NoSQL local datastore.",
      },
      highlights: {
        tr: [
          "Diyetisyen ve Fitness koçu için özel prompt optimizasyonları",
          "İnternetsiz ortamda dahi erişilebilir yerel Hive sohbet geçmişi",
          "Modüler, test edilebilir ve sürdürülebilir Cubit mimarisi",
        ],
        en: [
          "Specialized prompt engineering for fitness and dietitian personas",
          "Offline-resilient chat persistence using Hive NoSQL",
          "Modular, testable, and maintainable Cubit architecture",
        ],
      },
    },
  },
];

export const additionalProjects = [
  {
    slug: "product-recommendation",
    title: "Product Recommendation System",
    category: { tr: "Büyük Veri & Dağıtık Sistemler", en: "Big Data & Distributed Systems" },
    description: {
      tr: "Apache Spark, Kafka ve MongoDB kullanarak kullanıcı davranışlarını analiz eden ve gerçek zamanlı kişiselleştirilmiş ürün önerileri üreten dağıtık büyük veri mimarisi.",
      en: "Real-time retail recommendation engine leveraging Apache Spark, Kafka, and MongoDB to deliver personalized product suggestions at scale.",
    },
    tech: ["Python", "Spark", "Kafka", "MongoDB"],
    href: "https://github.com/gokaycetinn/Product-Recommendation-System",
    image: `${basePath}/images/recommendation-system.webp`,
    icon: "brain",
    caseStudy: {
      problem: {
        tr: "Yüksek trafikli e-ticaret sistemlerinde anlık kullanıcı tıklama ve satın alma hareketlerine milisaniyeler içinde kişiselleştirilmiş öneriler sunabilmek.",
        en: "Delivering real-time personalized recommendations to high-throughput e-commerce streams within millisecond latency.",
      },
      solution: {
        tr: "Kafka ile kullanıcı olay akışları toplandı, Spark Streaming ile collaborative filtering algoritmaları çalıştırıldı ve MongoDB'de anlık sorgulanabilir öneriler saklandı.",
        en: "Ingested event streams via Kafka, processed collaborative filtering models with Spark Streaming, and indexed real-time recommendations into MongoDB.",
      },
      architecture: {
        tr: "Kafka Event Streaming -> Spark Dağıtık ML Hattı -> MongoDB NoSQL -> REST API Öneri Servisi.",
        en: "Kafka Event Streaming -> Spark Distributed ML Pipeline -> MongoDB NoSQL -> REST API Recommendation Service.",
      },
      highlights: {
        tr: [
          "Spark & Kafka ile uçtan uca dağıtık akış mimarisi",
          "Kullanıcı bazlı ve ürün bazlı filtreleme algoritmaları",
          "MongoDB ile düşük gecikmeli öneri sorgulama performansı",
        ],
        en: [
          "End-to-end distributed stream processing with Spark & Kafka",
          "User-based and item-based collaborative filtering algorithms",
          "Low-latency recommendation querying powered by MongoDB",
        ],
      },
    },
  },
  {
    slug: "plant-disease-detection",
    title: "Plant Disease Detection",
    category: { tr: "Derin Öğrenme & Tarım Teknolojileri", en: "Deep Learning & Agritech" },
    description: {
      tr: "Bitki yapraklarındaki hastalıkları CNN tabanlı derin öğrenme modeliyle sınıflandıran ve çiftçiler için erken teşhis imkanı sunan yapay zekâ sistemi.",
      en: "Deep learning system utilizing CNN architectures to classify plant leaf diseases and provide early diagnosis for agricultural health.",
    },
    tech: ["Python", "TensorFlow", "CNN", "OpenCV"],
    href: "https://github.com/gokaycetinn/Plant-Disease-Detection",
    image: `${basePath}/images/plant-disease.webp`,
    icon: "leaf",
    caseStudy: {
      problem: {
        tr: "Tarımsal üretimde yaprak hastalıklarının geç teşhis edilmesi ciddi verim kaybına yol açmaktadır; erken ve otomatik teşhis kritik önemdedir.",
        en: "Late detection of agricultural plant diseases causes severe yield losses, requiring rapid and automated visual diagnosis.",
      },
      solution: {
        tr: "Konvolüsyonel Sinir Ağları (CNN) eğitilerek yaprak fotoğraflarından hastalık türlerini yüksek doğrulukla tespit eden sınıflandırma modeli geliştirildi.",
        en: "Trained Convolutional Neural Networks (CNN) to classify diverse plant leaf diseases with high accuracy from standard field imagery.",
      },
      architecture: {
        tr: "Görüntü ön işleme ve veri artırma (OpenCV) -> CNN Derin Öğrenme Modeli -> Sınıflandırma ve Doğruluk Raporlama.",
        en: "Data augmentation & preprocessing (OpenCV) -> Custom CNN Deep Learning Model -> Classification & Confidence Output.",
      },
      highlights: {
        tr: [
          "Farklı bitki türlerinde yüksek doğruluklu hastalık sınıflandırması",
          "Veri artırma (data augmentation) ile dayanıklı model performansı",
          "Erken teşhis odaklı pratik teşhis pipeline'ı",
        ],
        en: [
          "High-accuracy disease classification across multiple plant species",
          "Robust model generalization via extensive data augmentation",
          "Fast inference pipeline designed for early diagnosis",
        ],
      },
    },
  },
  {
    slug: "spotify-playlist-ai",
    title: "Spotify Playlist AI",
    category: { tr: "Yapay Zekâ & Müzik Analitiği", en: "AI & Music Analytics" },
    description: {
      tr: "Kullanıcının anlık ruh haline, müzik zevkine ve Spotify dinleme geçmişine göre akıllı çalma listeleri oluşturan Python ve Spotify Web API entegrasyonu.",
      en: "Intelligent playlist curation engine utilizing Spotify Web API and sentiment analysis to craft mood-tailored playlists.",
    },
    tech: ["Python", "Spotify API", "NLP", "Flask"],
    href: "https://github.com/gokaycetinn/Spotify-Playlist-AI",
    image: `${basePath}/images/spotify-ai.webp`,
    icon: "music",
    caseStudy: {
      problem: {
        tr: "Milyonlarca parça arasından kullanıcının anlık ruh haline ve müzik zevkine tam uyan çalma listelerini manuel olarak derlemek zahmetlidir.",
        en: "Manually curating playlists from millions of tracks to match fleeting moods and specific acoustic preferences is tedious.",
      },
      solution: {
        tr: "Spotify Web API'sinin akustik ses özelliklerini (tempo, enerji, valans) NLP tabanlı ruh hali analiziyle eşleştiren akıllı bir kürasyon motoru geliştirildi.",
        en: "Engineered a smart curation engine mapping Spotify audio features (tempo, energy, valence) to NLP mood embeddings.",
      },
      architecture: {
        tr: "Spotify OAuth 2.0 Doğrulama -> Akustik Özellik Çıkarımı -> Ruh Hali Eşleme Algoritması -> Otomatik Çalma Listesi Üretimi.",
        en: "Spotify OAuth 2.0 Auth -> Audio Feature Extraction -> Mood Matching Algorithm -> Automatic Playlist Generation.",
      },
      highlights: {
        tr: [
          "Spotify OAuth 2.0 entegrasyonu ile doğrudan kullanıcı hesabına liste aktarımı",
          "Valans, dans edilebilirlik ve enerji parametreleriyle hassas müzik filtreleme",
          "Kullanıcı dostu arayüz ve anlık önizleme",
        ],
        en: [
          "Direct playlist creation into user accounts via Spotify OAuth 2.0",
          "Granular acoustic filtering by valence, danceability, and energy",
          "Instant playback previews and clean interface",
        ],
      },
    },
  },
  {
    slug: "habit-tracker",
    title: "Habit Tracker",
    category: { tr: "Üretkenlik & Mobil Arayüz", en: "Productivity & Mobile UI" },
    description: {
      tr: "Kullanıcıların günlük alışkanlıklarını takip etmelerini sağlayan, minimalist arayüz ve yerel veri saklama odaklı React Native mobil uygulaması.",
      en: "Minimalist habit tracking mobile application built with React Native, emphasizing local storage and smooth user workflows.",
    },
    tech: ["React Native", "TypeScript", "Local Storage"],
    href: "https://github.com/gokaycetinn/Habit-Tracker",
    image: `${basePath}/images/habit-tracker.webp`,
    icon: "check",
    caseStudy: {
      problem: {
        tr: "Karmaşık ve reklam dolu alışkanlık takip uygulamaları kullanıcıların odaklanmasını zorlaştırır; sade ve hızlı bir arayüze ihtiyaç vardır.",
        en: "Bloated, ad-heavy habit apps create friction; users need an ultra-fast, minimal tool for daily consistency.",
      },
      solution: {
        tr: "React Native ve TypeScript ile sıfır dikkat dağıtıcı içeren, çevrimdışı çalışan ve serileri görselleştiren hafif bir mobil uygulama geliştirildi.",
        en: "Built a distraction-free, offline-first mobile app using React Native and TypeScript to visualize daily consistency streaks.",
      },
      architecture: {
        tr: "React Native, TypeScript tip güvenliği, yerel Async Storage veritabanı ve mikro etkileşimler.",
        en: "React Native client, TypeScript type safety, local Async Storage, and custom micro-animations.",
      },
      highlights: {
        tr: [
          "Minimalist ve akıcı kullanıcı deneyimi",
          "Tamamen çevrimdışı ve gizlilik odaklı yerel veri saklama",
          "Seri (streak) ve ilerleme görselleştirmeleri",
        ],
        en: [
          "Clean and distraction-free mobile UX",
          "Fully offline, privacy-first local persistence",
          "Visual consistency streaks and progress tracking",
        ],
      },
    },
  },
  {
    slug: "classroom-reservation",
    title: "Classroom Reservation",
    category: { tr: "Web Uygulaması & Veri Yönetimi", en: "Web Application & Management" },
    description: {
      tr: "Üniversiteler için sınıf ve laboratuvar rezervasyon süreçlerini çakışmasız ve yetkilendirmeli olarak yöneten web uygulaması.",
      en: "A web application that manages conflict-free classroom and laboratory reservations for academic institutions.",
    },
    tech: ["Web App", "Database", "SQL"],
    href: "https://github.com/gokaycetinn/Classroom-Reservation",
    icon: "calendar",
  },
  {
    slug: "digital-diary",
    title: "Digital Diary",
    category: { tr: "Masaüstü Veri Yönetimi", en: "Desktop Application" },
    description: {
      tr: "Kişisel notları, günlük kayıtlarını ve belgeleri düzenlemek için E4E stajında geliştirilmiş masaüstü yönetim yazılımı.",
      en: "A desktop data organization tool for managing personal notes and logs, developed during E4E internship.",
    },
    tech: ["Python", "Desktop GUI", "Data Management"],
    href: "https://github.com/gokaycetinn/Digital-Diary",
    icon: "notebook",
  },
];

export const experiences = [
  {
    company: "SPORTS DIGITALE",
    role: { tr: "Yazılım Mühendisi (Yarı Zamanlı)", en: "Software Engineer (Part-Time)" },
    date: { tr: "Mart 2026 - Devam Ediyor", en: "Mar 2026 - Present" },
    ongoing: true,
    logo: `${basePath}/logos/sports-digitale.jpg`,
    summary: {
      tr: "TÜBİTAK destekli yapay zekâ ve bilgisayarlı görü projelerinde gerçek zamanlı görüntü işleme ve spor analitiği algoritmaları geliştiriyorum.",
      en: "Developing real-time computer vision pipelines and sports analytics algorithms across TÜBİTAK-supported AI initiatives.",
    },
    bullets: {
      tr: [
        "Gerçek zamanlı video akışlarında nesne tanıma ve görüntü işleme boru hatlarını optimize ediyorum.",
        "TÜBİTAK onaylı Ar-Ge süreçlerinde yapay zekâ modellerinin entegrasyonunu ve testlerini yürütüyorum.",
        "Büyük veri ve video işleme süreçlerinde performans odaklı mimariler tasarlıyorum.",
      ],
      en: [
        "Optimizing real-time object detection and video processing pipelines.",
        "Executing AI model integration and testing in TÜBİTAK-approved R&D workflows.",
        "Architecting performance-driven pipelines for large-scale video processing.",
      ],
    },
    tags: ["TÜBİTAK", "Computer Vision", "YOLO", "Python"],
  },
  {
    company: "Yapay Zeka ve Teknoloji Akademisi",
    role: { tr: "Yapay Zekâ Bursiyeri", en: "AI & Software Trainee" },
    date: { tr: "Aralık 2025 - Devam Ediyor", en: "Dec 2025 - Present" },
    ongoing: true,
    logo: `${basePath}/logos/ai-academy.webp`,
    summary: {
      tr: "Google Türkiye ve Girişimcilik Vakfı destekli akademide üretken yapay zekâ, makine öğrenmesi ve uçtan uca modern yazılım geliştirme süreçlerinde yer alıyorum.",
      en: "Participating in Google Turkey-backed academy focused on Generative AI, Machine Learning, and end-to-end modern product delivery.",
    },
    bullets: {
      tr: [
        "Büyük dil modelleri (LLM) ve derin öğrenme servislerini mobil/web uygulamalarına entegre ediyorum.",
        "Hackathon ve ideathon maratonlarında takım liderliği ve prototipleme sorumluluğu üstleniyorum.",
        "Güncel yapay zekâ araçlarını üretim odaklı senaryolarda uyguluyorum.",
      ],
      en: [
        "Integrating Large Language Models (LLMs) into mobile and web applications.",
        "Leading prototyping and rapid engineering in hackathons and ideathons.",
        "Applying cutting-edge AI toolsets to production-oriented real-world scenarios.",
      ],
    },
    tags: ["Generative AI", "Google", "Machine Learning", "LLM"],
  },
  {
    company: "BLUESENSE",
    role: { tr: "Mobil Yazılım Mühendisi Stajyeri", en: "Mobile Software Engineer Intern" },
    date: { tr: "Nisan 2025 - Ekim 2025 (7 ay)", en: "Apr 2025 - Oct 2025 (7 months)" },
    location: { tr: "Vancouver, Kanada / Uzaktan", en: "Vancouver, Canada / Remote" },
    logo: `${basePath}/logos/bluesense.svg`,
    summary: {
      tr: "Vancouver merkezli uluslararası ekiple Smart Beauty yapay zekâ mobil uygulamasının arayüz mimarisi, performansı ve kullanıcı deneyimi üzerinde çalıştım.",
      en: "Collaborated with a Vancouver-based team on the UI architecture, performance, and user experience of the Smart Beauty AI mobile app.",
    },
    bullets: {
      tr: [
        "Smart Beauty uygulaması için kullanıcı odaklı yeni modüller ve akıcı animasyonlar geliştirdim.",
        "Mobil arayüz performansını ve yerel durum yönetimini (state management) optimize ettim.",
        "Agile/Scrum metodolojisiyle uzaktan çalışan çok uluslu ürün ekibiyle sprint hedeflerini tamamladım.",
      ],
      en: [
        "Engineered user-centric feature modules and fluid animations for Smart Beauty app.",
        "Optimized mobile render performance and reactive state management.",
        "Collaborated across a distributed multinational team in an Agile/Scrum environment.",
      ],
    },
    tags: ["React Native", "Mobile UI/UX", "State Management", "Remote"],
  },
  {
    company: "E4E Elektronik Mühendislik Yazılım Tasarım A.Ş.",
    role: { tr: "Yazılım Mühendisi Stajyeri", en: "Software Engineer Intern" },
    date: { tr: "Eylül 2024 - Ekim 2024 (2 ay)", en: "Sep 2024 - Oct 2024 (2 months)" },
    logo: `${basePath}/logos/e4e.webp`,
    summary: {
      tr: "Masaüstü veri yönetimi ve otomasyon süreçlerinde kurumsal dijital dönüşüm çözümleri tasarlayıp geliştirdim.",
      en: "Designed and built enterprise digital transformation and desktop data management solutions.",
    },
    bullets: {
      tr: [
        "Kişisel veri organizasyonunu sağlayan Digital Diary masaüstü uygulamasını sıfırdan geliştirdim.",
        "Veri tabanı şemalarını modelledim ve veri işleme süreçlerini optimize ettim.",
        "Masaüstü GUI ve veri güvenliği mimarilerini projelendirdim.",
      ],
      en: [
        "Architected and built the Digital Diary desktop application from scratch.",
        "Modelled database schemas and optimized data handling routines.",
        "Engineered responsive desktop GUI workflows and local data security.",
      ],
    },
    tags: ["Python", "Desktop Architecture", "Data Management", "SQL"],
  },
];
