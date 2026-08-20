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
    brandRole: "Bilgisayar Mühendisi",
    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
    theme: "Temayı değiştir",
    language: "Dili değiştir",
    heroEyebrow: "Gökay Çetinakdoğan • Bilgisayar Mühendisi",
    heroTitle: "Yazılım ve yapay zekâ çözümleri geliştiriyorum.",
    heroBody:
      "Full-stack geliştirme, mobil ve web uygulamaları, bilgisayarlı görü, derin öğrenme ve LLM tabanlı çözümler üzerinde çalışan bir Bilgisayar Mühendisiyim.",
    heroPrimary: "Projeleri İncele",
    heroSecondary: "GitHub",
    heroVisualAlt:
      "Gökay'ın projelerini ve teknik uzmanlıklarını gösteren interaktif macOS terminal penceresi",
    aboutTitle: "Hakkımda",
    aboutLead:
      "Çankaya Üniversitesi Bilgisayar Mühendisliği bölümünden 2026 yılında mezun oldum. Yazılım geliştirme ve yapay zekâ odaklı teknolojilerde uygulamalı deneyime sahibim; full-stack geliştirme, mobil ve web uygulamaları, bilgisayarlı görü, derin öğrenme ve LLM tabanlı çözümler üzerinde çalışıyorum.",
    aboutBody:
      "Karmaşık problemleri çözmekten, güvenilir ve ölçeklenebilir yazılımlar geliştirmekten ve teknik yetkinliklerimi sürekli ilerletmekten keyif alıyorum. Güçlü yazılım mühendisliği prensiplerini yeni nesil teknolojilerle birleştirerek pratik, verimli ve anlamlı dijital çözümler üretmeyi hedefliyorum.",
    education: "Eğitim",
    educationValue: "Bilgisayar Mühendisliği Lisans",
    educationMeta: "Çankaya Üniversitesi, 2021-2026",
    educationLogoAlt: "Çankaya Üniversitesi logosu",
    profileFactsLabel: "Profil bilgileri",
    location: "Konum",
    locationValue: "Ankara, Türkiye",
    locationMeta: "Yeni fırsatlara açık",
    featuredTitle: "Projeler",
    featuredBody:
      "Mobil uygulamalardan bilgisayarlı görü, veri madenciliği ve dağıtık sistemlere uzanan seçili çalışmalarımı inceleyin.",
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
    experienceEyebrow: "Staj & İş Deneyimi",
    ongoing: "Devam ediyor",
    contactTitle: "Yazılım ve yapay zekâ projeleri için iletişime geçin.",
    contactBody:
      "Full-stack geliştirme, mobil uygulamalar ve yapay zekâ tabanlı çözümlerle ilgili projeler ve profesyonel fırsatlar için iletişime geçebilirsiniz.",
    contactCta: "İletişime Geç",
    allProjects: "Tüm Projeler",
    projectIndex: "Proje indeksi",
    experienceOpen: "Detayları göster",
    experienceClose: "Detayları gizle",
    contactAvailability: "Yeni projelere ve profesyonel fırsatlara açık.",
    contactMediaAlt: "Yazılım geliştirme sürecini gösteren animasyon",
    contactVisualAlt: "Yazılım sistemlerini temsil eden krom ve füme cam soyut heykel",
    emailLabel: "E-posta",
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
    brandRole: "Computer Engineer",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    theme: "Switch theme",
    language: "Switch language",
    heroEyebrow: "Gökay Çetinakdoğan • Computer Engineer",
    heroTitle: "Building software and AI-driven solutions.",
    heroBody:
      "My work spans full-stack development, mobile and web applications, computer vision, deep learning, and LLM-based solutions.",
    heroPrimary: "Explore Projects",
    heroSecondary: "GitHub",
    heroVisualAlt:
      "Interactive macOS terminal window showcasing Gökay's projects and technical stack",
    aboutTitle: "About Me",
    aboutLead:
      "I graduated from Çankaya University with a Bachelor's degree in Computer Engineering in 2026. I have hands-on experience in software development and AI-driven technologies, including full-stack development, mobile and web applications, computer vision, deep learning, and LLM-based solutions.",
    aboutBody:
      "I enjoy solving complex problems, building reliable and scalable software, and continuously improving my technical skills. I aim to combine strong software engineering principles with emerging technologies to create practical, efficient, and meaningful digital solutions.",
    education: "Education",
    educationValue: "B.Sc. in Computer Engineering",
    educationMeta: "Çankaya University, 2021-2026",
    educationLogoAlt: "Çankaya University logo",
    profileFactsLabel: "Profile facts",
    location: "Location",
    locationValue: "Ankara, Türkiye",
    locationMeta: "Open to new opportunities",
    featuredTitle: "Projects",
    featuredBody:
      "Explore selected work spanning mobile applications, computer vision, data mining, and distributed systems.",
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
    experienceEyebrow: "Internship & Work Experience",
    ongoing: "Present",
    contactTitle: "Get in touch for software and AI projects.",
    contactBody:
      "Contact me about full-stack development, mobile applications, AI-driven solutions, and professional opportunities.",
    contactCta: "Get in Touch",
    allProjects: "All Projects",
    projectIndex: "Project index",
    experienceOpen: "Show details",
    experienceClose: "Hide details",
    contactAvailability: "Open to new projects and professional opportunities.",
    contactMediaAlt: "Animation illustrating software development lifecycle",
    contactVisualAlt: "Abstract chrome sculpture representing software systems",
    emailLabel: "Email",
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
      overview: {
        tr: "AI Chef, kullanıcıların mutfaktaki mevcut malzemeleri değerlendirmesini ve beslenme tercihlerine uygun tariflere hızla ulaşmasını sağlayan yapay zekâ destekli bir mobil üründür. React Native ile sıfırdan geliştirilen uygulama, seçilen malzemeleri anlık prompt mühendisliğiyle işleyerek kişiselleştirilmiş tarifler ve dinamik porsiyon hesaplamaları üretir.",
        en: "AI Chef is an AI-powered mobile product that helps users make the most of available ingredients and quickly find recipes suited to their dietary preferences. Built from the ground up with React Native, it processes selected ingredients through real-time prompt engineering to generate personalized recipes and dynamic portion calculations.",
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
    gallery: [
      `${basePath}/images/cnn-traffic.webp`,
      `${basePath}/images/cnn-traffic-detection.png`,
    ],
    galleryMode: "browser",
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
      overview: {
        tr: "Bu sistem, değişken hava ve ışık koşullarında gerçek zamanlı araç tespiti yaparak trafik akışını ölçmek için geliştirildi. UA-DETRAC veri kümesiyle eğitilen YOLOv8 modeli, optimize edilmiş OpenCV kare işleme hattıyla birleştirildi ve sonuçların canlı izlenebildiği etkileşimli bir Streamlit Cloud uygulamasına dönüştürüldü.",
        en: "This system was developed to detect vehicles in real time and measure traffic flow across changing weather and lighting conditions. A YOLOv8 model trained on the UA-DETRAC dataset was combined with an optimized OpenCV frame-processing pipeline and delivered through an interactive Streamlit Cloud application for live analysis.",
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
      overview: {
        tr: "Wellness AI, beslenme ve fitness hedeflerine göre uzmanlaşmış yapay zekâ koçlarını tek bir hızlı mobil deneyimde bir araya getirir. Flutter tabanlı mimari, Firebase Remote Config üzerinden dinamik koç profilleri sunarken Hive NoSQL ile sohbet geçmişini çevrimdışı saklar ve Cubit ile uygulama durumunu modüler biçimde yönetir.",
        en: "Wellness AI brings specialized nutrition and fitness coaches into one responsive mobile experience. Its Flutter architecture delivers dynamic coach profiles through Firebase Remote Config, stores chat history offline with Hive NoSQL, and manages application state through a modular Cubit structure.",
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
    galleryMode: "browser",
    icon: "brain",
    caseStudy: {
      overview: {
        tr: "Product Recommendation System, yüksek trafikli e-ticaret uygulamalarında kullanıcı davranışlarını gerçek zamanlı işleyerek kişiselleştirilmiş ürün önerileri üretir. Kullanıcı olayları Kafka ile toplanır, Spark Streaming üzerinde collaborative filtering algoritmalarıyla işlenir ve düşük gecikmeyle sorgulanabilen öneriler MongoDB'de saklanır.",
        en: "Product Recommendation System processes user behavior in real time to generate personalized suggestions for high-traffic commerce applications. Events are ingested with Kafka, evaluated by collaborative filtering algorithms in Spark Streaming, and stored in MongoDB for low-latency retrieval.",
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
    slug: "data-mining-project",
    title: "Data Mining Project",
    category: { tr: "Veri Madenciliği & Makine Öğrenmesi", en: "Data Mining & Machine Learning" },
    description: {
      tr: "Tahıl verimi sınıflandırması için farklı makine öğrenmesi algoritmalarını ortak metrikler, ROC eğrileri ve karışıklık matrisi üzerinden karşılaştıran Python projesi.",
      en: "A Python data mining project comparing machine learning algorithms for grain yield classification through shared metrics, ROC curves, and confusion matrices.",
    },
    tech: ["Python", "scikit-learn", "Pandas", "XGBoost"],
    href: "https://github.com/gokaycetinn/Data-Mining-Project",
    image: `${basePath}/images/data.png`,
    galleryMode: "browser",
    imageAlt: {
      tr: "Tahıl verimi sınıflandırma modellerinin ROC eğrileri ve karışıklık matrisi",
      en: "ROC curves and confusion matrix for grain yield classification models",
    },
    icon: "chart",
    caseStudy: {
      overview: {
        tr: "Data Mining Project, tahıl verimi sınıflarını tahmin etmek için on farklı sınıflandırma algoritmasını aynı veri hazırlama ve değerlendirme hattında karşılaştırır. Veri temizleme, ölçekleme ve özellik seçimi adımlarından geçen modeller; doğruluk, F1, precision, recall, MCC ve AUC gibi ortak ölçütlerle analiz edilir.",
        en: "Data Mining Project compares ten classification algorithms for predicting grain yield classes within a shared data preparation and evaluation pipeline. After data cleaning, scaling, and feature selection, the models are analyzed using common measures including accuracy, F1, precision, recall, MCC, and AUC.",
      },
      architecture: {
        tr: "Excel veri kümesi -> Pandas veri temizleme -> StandardScaler -> SelectKBest ve RFE -> sınıflandırma modelleri -> ROC, AUC ve karışıklık matrisi raporları.",
        en: "Excel dataset -> Pandas data cleaning -> StandardScaler -> SelectKBest and RFE -> classification models -> ROC, AUC, and confusion matrix reports.",
      },
      highlights: {
        tr: [
          "On sınıflandırma modelini aynı değerlendirme hattında karşılaştırma",
          "Tüm özellikler ile seçilen özelliklerin sonuçlarını ayrı analiz etme",
          "ROC grafikleri, karışıklık matrisleri ve Excel raporları üretme",
        ],
        en: [
          "Comparison of ten classifiers within one evaluation pipeline",
          "Separate analysis of all features and selected feature subsets",
          "ROC charts, confusion matrices, and Excel report generation",
        ],
      },
    },
  },
  {
    slug: "turkish-legal-rag",
    title: "Turkish Legal RAG",
    category: { tr: "Doğal Dil İşleme & RAG", en: "Natural Language Processing & RAG" },
    description: {
      tr: "BM25 ve yoğun aramayı, fine-tuned E5 embeddings, BGE reranking ve Trendyol LLM ile birleştiren kaynak gösterimli Türkçe hukuk soru-cevap sistemi.",
      en: "A citation-grounded Turkish legal QA system combining BM25, dense E5 retrieval, BGE reranking, and a fine-tuned Trendyol LLM.",
    },
    tech: ["Python", "Hybrid RAG", "E5 & BGE", "Trendyol LLM"],
    href: "https://github.com/gokaycetinn/NLP-Turkish-Legal-Rag",
    image: `${basePath}/images/nlp.png`,
    galleryMode: "browser",
    imageAlt: {
      tr: "Türkçe Hukuki RAG sisteminin soru, yanıt ve kaynak maddeler arayüzü",
      en: "Question, answer, and cited source interface of the Turkish Legal RAG system",
    },
    icon: "brain",
    caseStudy: {
      overview: {
        tr: "Turkish Legal RAG, Türk hukuku alanındaki sorulara ilgili mevzuatı bularak açık kaynaklarla yanıt vermek için geliştirilmiş akademik bir doğal dil işleme sistemidir. Hibrit arama, yeniden sıralama ve alan uyarlamalı üretim katmanları; yanlış belge erişimini ve kaynaksız yanıt üretimini azaltmak üzere birlikte çalışır.",
        en: "Turkish Legal RAG is an academic natural language processing system designed to answer questions about Turkish law by retrieving relevant legislation and returning explicit citations. Hybrid retrieval, reranking, and domain-adapted generation work together to reduce incorrect document retrieval and unsupported answers.",
      },
      architecture: {
        tr: "BM25 ve dense E5 retrieval -> Reciprocal Rank Fusion -> fine-tuned BGE cross-encoder reranker -> Trendyol 7B QLoRA/SFT generator -> kaynak gösterimli hukuki yanıt.",
        en: "BM25 and dense E5 retrieval -> Reciprocal Rank Fusion -> fine-tuned BGE cross-encoder reranker -> Trendyol 7B QLoRA/SFT generator -> citation-grounded legal answer.",
      },
      highlights: {
        tr: [
          "Türkçe hukuk alanına odaklı kaynak gösterimli soru-cevap akışı",
          "BM25 ve dense retrieval sonuçlarını birleştiren hibrit arama",
          "Sistem bileşenlerini ayrı ölçen ablation değerlendirmesi",
        ],
        en: [
          "Citation-grounded question answering focused on Turkish law",
          "Hybrid retrieval combining BM25 and dense search results",
          "Ablation evaluation measuring each system component",
        ],
      },
    },
  },
  {
    slug: "blackout",
    title: "BLACKOUT",
    category: { tr: "Oyun Geliştirme & Yapay Zekâ", en: "Game Development & AI" },
    description: {
      tr: "Godot 4 ile geliştirilen; dinamik düşman yapay zekâsı, gizlilik, kaynak yönetimi ve atmosferik keşfi birleştiren 2D top-down survival horror oyunu.",
      en: "A 2D top-down survival horror game built with Godot 4, combining dynamic enemy AI, stealth, resource management, and atmospheric exploration.",
    },
    tech: ["Godot 4", "GDScript", "Game AI", "2D"],
    href: "https://github.com/gokaycetinn/Blackout",
    image: `${basePath}/images/blackout.png`,
    gallery: [
      `${basePath}/images/blackout.png`,
      `${basePath}/images/actions0081.png`,
      `${basePath}/images/actions0185.png`,
      `${basePath}/images/actions0217.png`,
    ],
    galleryMode: "browser",
    imageAlt: {
      tr: "BLACKOUT oyun menüsü ve Queen Spider boss karakteri",
      en: "BLACKOUT game menu and Queen Spider boss character",
    },
    icon: "brain",
    caseStudy: {
      overview: {
        tr: "BLACKOUT, uzak bir yeraltı araştırma tesisindeki ani güç kesintisini inceleyen bir müfettişi merkeze alır. Oyuncu karanlık koridorlarda jeneratörleri yeniden etkinleştirirken pil, mühimmat ve sağlık kitlerini yönetir; sese ve görünürlüğe tepki veren düşmanlardan saklanır ve tesisin derinliklerindeki Queen Spider boss ile yüzleşir.",
        en: "BLACKOUT follows an Inspector investigating a sudden power failure at a remote underground research facility. While restoring generators in dark corridors, the player manages batteries, ammunition, and medkits, avoids enemies that react to noise and visibility, and confronts the Queen Spider boss deep inside the facility.",
      },
      architecture: {
        tr: "Godot 4 sahne ve node mimarisi, GDScript tabanlı düşman durum makineleri, ses ve görünürlük algılama sistemi, pil tüketimli el feneri, kaynak envanteri ve çok aşamalı boss dövüşü.",
        en: "Godot 4 scene and node architecture, GDScript enemy state machines, noise and visibility detection, battery-powered flashlight, resource inventory, and multi-phase boss combat.",
      },
      highlights: {
        tr: [
          "Devriye, şüphe, araştırma, takip ve arama durumlarına geçen düşman yapay zekâsı",
          "Pil, mühimmat, sağlık kiti ve jeneratör etkileşimlerini birleştiren kaynak yönetimi",
          "Sağlık çubuğu, dinamik saldırı aşamaları ve çok kareli ölüm animasyonu bulunan Queen Spider boss",
        ],
        en: [
          "Enemy AI transitioning through patrol, suspicious, investigate, chase, and search states",
          "Resource management combining batteries, ammunition, medkits, and generator interactions",
          "Queen Spider boss with a health bar, dynamic combat phases, and a multi-frame death animation",
        ],
      },
      sequence: {
        title: { tr: "Queen Spider Ölüm Sekansı", en: "Queen Spider Death Sequence" },
        description: {
          tr: "Boss yenilgi animasyonu, aktif savaş duruşundan çöken ara kareye ve kıvrılmış son duruma kesintisiz biçimde ilerler.",
          en: "The boss defeat animation moves from the active battle pose through a collapsing transition frame into the final curled state.",
        },
        items: [
          {
            title: { tr: "Aktif Savaş Durumu", en: "Active Battle State" },
            image: `${basePath}/images/actions0081.png`,
            imageAlt: { tr: "Aktif savaş durumundaki Queen Spider", en: "Queen Spider in the active battle state" },
            path: "idle/actions0081.png",
          },
          {
            title: { tr: "Çökme ve Hasar Durumu", en: "Collapsing and Hurt State" },
            image: `${basePath}/images/actions0185.png`,
            imageAlt: { tr: "Çöken Queen Spider animasyon karesi", en: "Queen Spider collapsing animation frame" },
            path: "death/actions0185.png",
          },
          {
            title: { tr: "Yenilmiş Son Durum", en: "Defeated Lifeless State" },
            image: `${basePath}/images/actions0217.png`,
            imageAlt: { tr: "Yenilmiş Queen Spider son animasyon karesi", en: "Queen Spider final defeated animation frame" },
            path: "death/actions0217.png",
          },
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
    image: `${basePath}/images/classroom1.png`,
    gallery: [
      `${basePath}/images/classroom1.png`,
      `${basePath}/images/classroom2.png`,
      `${basePath}/images/classroom3.png`,
    ],
    galleryMode: "browser",
    imageAlt: {
      tr: "Classroom Reservation uygulamasının giriş, rezervasyon ve haftalık program ekranları",
      en: "Login, reservation, and weekly schedule screens of the Classroom Reservation app",
    },
    icon: "calendar",
    caseStudy: {
      overview: {
        tr: "Classroom Reservation, öğretim görevlileri ve yöneticiler için sınıf rezervasyon sürecini tek arayüzde toplar. Kullanıcılar dönem, sınıf, tarih ve saat seçerek talep oluşturabilir; rezervasyon durumlarını izleyebilir, haftalık sınıf programını görüntüleyebilir ve geri bildirim gönderebilir.",
        en: "Classroom Reservation brings the classroom booking process for instructors and administrators into one interface. Users can choose a term, classroom, date, and time to create a request, track reservation statuses, view the weekly classroom schedule, and send feedback.",
      },
      architecture: {
        tr: "Web istemcisi, rol tabanlı öğretim görevlisi ve yönetici erişimi, çakışma kontrollü rezervasyon akışı, SQL veri katmanı ve haftalık program görünümü.",
        en: "Web client, role-based instructor and administrator access, conflict-aware reservation flow, SQL data layer, and weekly schedule view.",
      },
      highlights: {
        tr: [
          "Öğretim görevlisi ve yönetici için ayrı yetkilendirme akışları",
          "Onaylandı, beklemede ve reddedildi durumlarıyla rezervasyon takibi",
          "Haftalık program görünümü ile aydınlık ve karanlık tema desteği",
        ],
        en: [
          "Separate authorization flows for instructors and administrators",
          "Reservation tracking with approved, pending, and rejected states",
          "Weekly schedule view with light and dark theme support",
        ],
      },
    },
  },
];

export const experiences = [
  {
    company: "SPORTS DIGITALE",
    role: { tr: "Yazılım Mühendisi", en: "Software Engineer" },
    date: { tr: "Mart 2026 - Devam Ediyor", en: "Mar 2026 - Present" },
    ongoing: true,
    logo: `${basePath}/logos/sports-digitale.jpg`,
    roles: [
      {
        title: { tr: "Yazılım Mühendisi", en: "Software Engineer" },
        employmentType: { tr: "Tam Zamanlı", en: "Full-Time" },
        date: { tr: "Ağustos 2026 - Devam Ediyor", en: "Aug 2026 - Present" },
        ongoing: true,
      },
      {
        title: { tr: "Yazılım Mühendisi", en: "Software Engineer" },
        employmentType: { tr: "Yarı Zamanlı", en: "Part-Time" },
        date: { tr: "Mart 2026 - Temmuz 2026", en: "Mar 2026 - Jul 2026" },
        ongoing: false,
      },
    ],
    summary: {
      tr: "TÜBİTAK destekli gerçek dünya projelerinde frontend ve backend geliştirmeye katkı sağlıyor, temel ürün işlevlerini iyileştiriyorum.",
      en: "Contributing to frontend and backend development on TÜBİTAK-funded real-world projects while improving core product functionality.",
    },
    bullets: {
      tr: [
        "Bilgisayarlı görü, görüntü işleme, derin öğrenme ve LLM tabanlı yapay zekâ çözümleri geliştiriyor ve destekliyorum.",
        "Yapay zekâ uygulamalarının ürünlere entegrasyonu, test edilmesi ve temel işlevlerinin iyileştirilmesi üzerinde çalışıyorum.",
      ],
      en: [
        "Developing and supporting AI solutions involving computer vision, image processing, deep learning, and LLM-based applications.",
        "Working on AI integrations, testing, and improvements to core product functionality.",
      ],
    },
    tags: ["TÜBİTAK", "Computer Vision", "YOLO", "Python"],
  },
  {
    company: "Yapay Zeka ve Teknoloji Akademisi",
    role: { tr: "Trainee (Tam Zamanlı)", en: "Trainee (Full-Time)" },
    date: { tr: "Aralık 2025 - Ağustos 2026 (9 ay)", en: "Dec 2025 - Aug 2026 (9 months)" },
    ongoing: false,
    logo: `${basePath}/logos/ai-academy.webp`,
    summary: {
      tr: "Yapay Zeka ve Teknoloji Akademisi'nin eğitim programlarına aktif olarak katıldım ve yapay zekâ destekli uygulamalar geliştirdim. Uygulama odaklı projeler aracılığıyla teknik yetkinliklerimi geliştirmeye devam ettim.",
      en: "I actively participated in training programs at the Artificial Intelligence and Technology Academy and worked on developing AI-powered applications. Through application-oriented projects, I continued to enhance my technical competencies.",
    },
    bullets: {
      tr: [
        "Yapay zekâ destekli mobil uygulama ve yazılım projeleri üzerinde çalıştım.",
        "Çeşitli yapay zekâ araçları ve servisleriyle uygulama geliştirme süreçlerine odaklandım.",
        "Hackathon ve ideathon gibi teknoloji odaklı etkinliklere aktif olarak katıldım.",
        "Takım çalışması ve proje geliştirme süreçlerinde aktif sorumluluk üstlendim.",
        "Güncel yapay zekâ teknolojilerini takip ederek yenilikçi çözümler üzerinde çalıştım.",
      ],
      en: [
        "Worked on AI-powered mobile and software projects.",
        "Focused on application development processes using various AI tools and services.",
        "Actively participated in technology-focused events such as hackathons and ideathons.",
        "Took active responsibility in teamwork and project development processes.",
        "Kept up with the latest AI technologies and worked on innovative solutions.",
      ],
    },
    tags: ["Agile Methods", "Software Development", "AI Tools", "Hackathons", "Teamwork"],
  },
  {
    company: "BLUESENSE",
    role: { tr: "Stajyer", en: "Intern" },
    date: { tr: "Nisan 2025 - Ekim 2025 (7 ay)", en: "Apr 2025 - Oct 2025 (7 months)" },
    location: {
      tr: "Vancouver, British Columbia, Kanada / Uzaktan",
      en: "Vancouver, British Columbia, Canada / Remote",
    },
    logo: `${basePath}/logos/bluesense.svg`,
    summary: {
      tr: "Stajım sırasında yapay zekâ tabanlı mobil uygulamaların geliştirilmesine katkı sağladım.",
      en: "During my internship, I contributed to the development of AI-based mobile applications.",
    },
    bullets: {
      tr: [
        "Smart Beauty: Skincare, Beauty uygulaması için özellikler geliştirdim.",
        "Uygulamanın performansını ve kullanıcı deneyimini iyileştirdim.",
        "Mobil geliştirme görevlerine ve hata düzeltme çalışmalarına destek verdim.",
        "Uzaktan çalışan ekiple etkili bir şekilde iş birliği yaptım.",
      ],
      en: [
        "Developed features for the Smart Beauty: Skincare, Beauty app.",
        "Improved the app's performance and user experience.",
        "Supported mobile development tasks and bug fixes.",
        "Collaborated effectively with a remote team.",
      ],
    },
    tags: ["Mobile Development", "AI Applications", "Performance", "Remote Collaboration"],
  },
  {
    company: "E4E Elektronik Mühendislik Yazılım Tasarım A.Ş.",
    role: { tr: "Stajyer", en: "Intern" },
    date: { tr: "Eylül 2024 - Ekim 2024 (2 ay)", en: "Sep 2024 - Oct 2024 (2 months)" },
    location: { tr: "Ankara, Türkiye / Hibrit", en: "Ankara, Türkiye / Hybrid" },
    logo: `${basePath}/logos/e4e.webp`,
    summary: {
      tr: "E4E'deki stajım sırasında dijital veri yönetimi ve masaüstü uygulama geliştirme alanlarına odaklandım. Yapılandırılmış, verimli ve kullanıcı odaklı yazılım çözümleri geliştirerek katkı sağladım.",
      en: "During my internship at E4E, I focused on digital data management and desktop application development. I contributed by developing structured, efficient, and user-oriented software solutions.",
    },
    bullets: {
      tr: [
        "Dijital verilerin düzenlenmesi, yönetilmesi ve optimize edilmesi süreçlerinde çalıştım.",
        "Masaüstü uygulamalarının geliştirilmesine ve iyileştirilmesine katkı sağladım.",
        "Kişisel dijital notları ve günlük kayıtları yönetmek için Digital Diary masaüstü uygulamasını tasarlayıp geliştirdim.",
        "Yapılandırılmış geliştirme ve test süreçlerinde ekip üyeleriyle iş birliği yaptım.",
      ],
      en: [
        "Worked on digital data organization, management, and optimization processes.",
        "Contributed to the development and enhancement of desktop applications.",
        "Designed and developed Digital Diary, a desktop application for managing personal digital notes and daily logs.",
        "Collaborated with team members throughout structured development and testing processes.",
      ],
    },
    tags: ["Data Management", "Desktop Development", "Testing", "Teamwork"],
  },
];
