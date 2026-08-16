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
    brandRole: "Yazılım Geliştirici",
    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
    theme: "Temayı değiştir",
    language: "Dili değiştir",
    heroEyebrow: "Gökay Çetinakdoğan / Yazılım Geliştirici",
    heroTitle: "Dijital ürünler. Akıllı sistemler.",
    heroBody:
      "Mobil uygulamalar, yapay zeka tabanlı ürünler ve otomasyon çözümleri geliştiriyorum.",
    heroPrimary: "Projeleri Gör",
    heroSecondary: "GitHub",
    heroVisualAlt:
      "Bilgisayar başında yazılım geliştiren bir kişiyi gösteren animasyon",
    aboutTitle: "Fikri, çalışan ürüne dönüştürüyorum.",
    aboutLead:
      "Çankaya Üniversitesi Bilgisayar Mühendisliği mezunuyum. Fikirleri kullanılabilir, sürdürülebilir ve gerçek ihtiyaçlara cevap veren yazılım ürünlerine dönüştürüyorum.",
    aboutBody:
      "React Native ve Flutter ile mobil uygulamalar; Python ile veri, yapay zeka ve otomasyon çözümleri geliştiriyorum. Ürün sürecinde performans, kullanılabilirlik ve sürdürülebilir kod yapısına odaklanıyorum.",
    projectsStat: "Proje",
    education: "Eğitim",
    educationValue: "Bilgisayar Mühendisliği Mezunu",
    educationMeta: "Çankaya Üniversitesi, 2021-2026",
    location: "Çalışma biçimi",
    locationValue: "Ankara merkezli",
    locationMeta: "Uzaktan çalışmaya açık",
    featuredTitle: "Tüm projeler, tek çalışma alanında.",
    featuredBody:
      "Yayınlanmış ürünlerden deneysel sistemlere uzanan çalışmaların tamamını görselleri, teknik kapsamı ve bağlantılarıyla inceleyin.",
    previous: "Önceki proje",
    next: "Sonraki proje",
    dragHint: "Kartı sürükleyebilir veya okları kullanabilirsiniz.",
    viewProject: "Projeyi Aç",
    liveDemo: "Canlı Demo",
    appStore: "App Store",
    website: "Web Sitesi",
    imageLoading: "Proje görseli yükleniyor",
    imageError: "Görsel yüklenemedi",
    moreProjectsTitle: "Daha fazla problem, daha fazla çözüm.",
    experienceEyebrow: "Kariyer",
    ongoing: "Devam ediyor",
    contactTitle: "Yeni bir ürün üzerinde konuşalım.",
    contactBody:
      "Mobil geliştirme, yapay zeka ve otomasyon odaklı çalışmalar için e-posta üzerinden doğrudan ulaşabilirsiniz.",
    contactCta: "İletişim",
    allProjects: "Tüm Projeler",
    projectIndex: "Proje galerisi",
    experienceOpen: "Detayları göster",
    experienceClose: "Detayları gizle",
    contactAvailability: "Yeni projeler ve iş fırsatları için ulaşılabilir.",
    contactMediaAlt: "Yazılım geliştirme sürecini gösteren animasyon",
    contactVisualAlt: "Yazılım sistemlerini temsil eden krom ve füme cam soyut heykel",
    emailLabel: "E-posta",
    phoneLabel: "Telefon",
    socialLabel: "Profesyonel ağlar",
    rights: "Tüm hakları saklıdır.",
  },
  en: {
    skip: "Skip to main content",
    brandRole: "Software Developer",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    theme: "Switch theme",
    language: "Switch language",
    heroEyebrow: "Gökay Çetinakdoğan / Software Developer",
    heroTitle: "Digital products. Intelligent systems.",
    heroBody:
      "I build mobile applications, AI-powered products, and automation solutions.",
    heroPrimary: "View Projects",
    heroSecondary: "GitHub",
    heroVisualAlt:
      "Animation of a person developing software at a computer",
    aboutTitle: "I turn ideas into working products.",
    aboutLead:
      "I am a Computer Engineering graduate from Çankaya University. I turn ideas into usable, maintainable software products that address real needs.",
    aboutBody:
      "I build mobile applications with React Native and Flutter, and develop data, AI, and automation solutions with Python. I focus on performance, usability, and maintainable code.",
    projectsStat: "Projects",
    education: "Education",
    educationValue: "Computer Engineering Graduate",
    educationMeta: "Çankaya University, 2021-2026",
    location: "Work style",
    locationValue: "Based in Ankara",
    locationMeta: "Open to remote work",
    featuredTitle: "Every project, one workspace.",
    featuredBody:
      "Explore the complete body of work, from published products to experimental systems, with visuals, technical scope, and direct links.",
    previous: "Previous project",
    next: "Next project",
    dragHint: "Drag the card or use the arrow controls.",
    viewProject: "Open Project",
    liveDemo: "Live Demo",
    appStore: "App Store",
    website: "Website",
    imageLoading: "Loading project visual",
    imageError: "The visual could not be loaded",
    moreProjectsTitle: "More problems, more solutions.",
    experienceEyebrow: "Career",
    ongoing: "Ongoing",
    contactTitle: "Let’s discuss a new product.",
    contactBody:
      "Reach out by email for work involving mobile development, artificial intelligence, and automation.",
    contactCta: "Contact",
    allProjects: "All Projects",
    projectIndex: "Project gallery",
    experienceOpen: "Show details",
    experienceClose: "Hide details",
    contactAvailability: "Available for new projects and professional opportunities.",
    contactMediaAlt: "Animation illustrating the software development process",
    contactVisualAlt: "Abstract chrome and smoked glass sculpture representing software systems",
    emailLabel: "Email",
    phoneLabel: "Phone",
    socialLabel: "Professional networks",
    rights: "All rights reserved.",
  },
};

export const featuredProjects = [
  {
    slug: "ai-chef",
    title: { tr: "AI Chef - Akıllı Tarifler", en: "AI Chef - Smart Recipes" },
    category: { tr: "Yayınlanmış mobil ürün", en: "Published mobile product" },
    description: {
      tr: "Kullanıcının seçtiği malzemelerden kişiselleştirilmiş tarifler üreten, App Store'da yayınlanmış yapay zeka destekli mobil uygulama.",
      en: "An App Store mobile product that creates personalized recipes from ingredients selected by the user.",
    },
    image: `${basePath}/images/ai-chef-home.png`,
    gallery: [
      `${basePath}/images/ai-chef-home.png`,
      `${basePath}/images/ai-chef-recipes.png`,
      `${basePath}/images/ai-chef-favorites.png`,
    ],
    imageAlt: { tr: "AI Chef mobil uygulamasının ana ekranı", en: "AI Chef mobile app home screen" },
    tech: ["React Native", "AI", "iOS"],
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
  },
  {
    slug: "traffic-analysis",
    title: { tr: "CNN Based Traffic Analysis", en: "CNN Based Traffic Analysis" },
    category: { tr: "Bilgisayarlı görü sistemi", en: "Computer vision system" },
    description: {
      tr: "UA-DETRAC verisi üzerinde eğitilmiş YOLOv8 modeliyle araçları tespit eden ve Streamlit üzerinden gerçek zamanlı analiz sunan sistem.",
      en: "A Streamlit system that detects vehicles in real time using a YOLOv8 model trained on UA-DETRAC data.",
    },
    image: `${basePath}/images/cnn-traffic.png`,
    gallery: [`${basePath}/images/cnn-traffic.png`],
    imageAlt: { tr: "Araç tespit ve trafik analizi arayüzü", en: "Vehicle detection and traffic analysis interface" },
    tech: ["Python", "YOLOv8", "Streamlit"],
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
  },
  {
    slug: "wellness-ai",
    title: { tr: "Wellness AI", en: "Wellness AI" },
    category: { tr: "Yapay zeka koçluğu", en: "AI coaching" },
    description: {
      tr: "Firebase AI, Remote Config, Hive ve Cubit ile geliştirilen; dinamik koç profilleri ve yerel sohbet geçmişi sunan Flutter uygulaması.",
      en: "A Flutter app with dynamic coaches and local chat history, built with Firebase AI, Remote Config, Hive, and Cubit.",
    },
    image: `${basePath}/images/wellness-home.png`,
    gallery: [
      `${basePath}/images/wellness-home.png`,
      `${basePath}/images/wellness-dietitian.png`,
      `${basePath}/images/wellness-fitness.png`,
    ],
    imageAlt: { tr: "Wellness AI koç seçim ekranı", en: "Wellness AI coach selection screen" },
    tech: ["Flutter", "Firebase AI", "Cubit"],
    links: [
      {
        type: "github",
        labelKey: "viewProject",
        href: "https://github.com/gokaycetinn/WellnessAi",
      },
    ],
  },
];

export const additionalProjects = [
  {
    slug: "product-recommendation",
    title: "Product Recommendation System",
    category: { tr: "Makine öğrenmesi sistemi", en: "Machine learning system" },
    description: {
      tr: "Kullanıcı davranışlarını analiz ederek kişiselleştirilmiş ürün önerileri sunan makine öğrenmesi sistemi.",
      en: "A machine learning system that analyzes user behavior to provide personalized product recommendations.",
    },
    tech: ["Python", "Machine Learning"],
    href: "https://github.com/gokaycetinn/Product-Recommendation-System",
    image: `${basePath}/images/recommendation-system.png`,
    icon: "brain",
  },
  {
    slug: "data-mining",
    title: "Data Mining Project",
    category: { tr: "Veri analizi", en: "Data analytics" },
    description: {
      tr: "Büyük veri setlerinden anlamlı örüntüler ve içgörüler çıkaran analiz çalışması.",
      en: "An analytics project that extracts meaningful patterns and insights from large datasets.",
    },
    tech: ["Python", "Data Analysis"],
    href: "https://github.com/gokaycetinn/Data-Mining-Project",
    icon: "chart",
  },
  {
    slug: "classroom-reservation",
    title: "Classroom Reservation",
    category: { tr: "Web uygulaması", en: "Web application" },
    description: {
      tr: "Üniversiteler için sınıf ve laboratuvar rezervasyon süreçlerini yöneten web uygulaması.",
      en: "A web application that manages classroom and laboratory reservations for universities.",
    },
    tech: ["Web App", "Database"],
    href: "https://github.com/gokaycetinn/Classroom-Reservation",
    icon: "calendar",
  },
  {
    slug: "digital-diary",
    title: "Digital Diary",
    category: { tr: "Masaüstü uygulaması", en: "Desktop application" },
    description: {
      tr: "Kişisel notları ve günlük kayıtlarını düzenlemek için geliştirilmiş masaüstü uygulaması.",
      en: "A desktop application for organizing personal notes and daily entries.",
    },
    tech: ["Python", "Desktop"],
    href: "https://github.com/gokaycetinn/Digital-Diary",
    icon: "notebook",
  },
];

export const experiences = [
  {
    company: "SPORTS DIGITALE",
    role: { tr: "Yarı Zamanlı", en: "Part-Time" },
    date: { tr: "Mart 2026 - Devam", en: "Mar 2026 - Present" },
    ongoing: true,
    logo: `${basePath}/logos/sports-digitale.jpg`,
    summary: {
      tr: "TÜBİTAK onaylı gerçek dünya projelerinde yazılım geliştirme süreçlerini ve yapay zeka odaklı ürün yeteneklerini destekliyorum.",
      en: "I support software delivery and AI-focused product capabilities across TÜBİTAK-approved real-world projects.",
    },
    bullets: {
      tr: [
        "Görüntü işleme uygulamaları için çözümler geliştiriyorum.",
        "Çekirdek ürün süreçlerinin genişletilmesine katkı sağlıyorum.",
        "Yapay zeka odaklı proje ekipleriyle birlikte çalışıyorum.",
      ],
      en: [
        "Developing solutions for image processing applications.",
        "Contributing to the expansion of core product capabilities.",
        "Collaborating with teams on AI-focused initiatives.",
      ],
    },
    tags: ["TÜBİTAK", "AI", "Image Processing"],
  },
  {
    company: "Yapay Zeka ve Teknoloji Akademisi",
    role: { tr: "Stajyer", en: "Intern" },
    date: { tr: "Aralık 2025 - Devam", en: "Dec 2025 - Present" },
    ongoing: true,
    logo: `${basePath}/logos/ai-academy.png`,
    summary: {
      tr: "Yapay zeka destekli uygulama geliştirme programlarına ve uygulamalı teknoloji projelerine aktif olarak katılıyorum.",
      en: "I actively participate in AI application development programs and hands-on technology projects.",
    },
    bullets: {
      tr: [
        "Mobil ve yazılım projelerinde yapay zeka servislerini kullanıyorum.",
        "Hackathon ve ideathon çalışmalarında sorumluluk alıyorum.",
        "Güncel yapay zeka araçlarını üretim odaklı senaryolarda deniyorum.",
      ],
      en: [
        "Using AI services in mobile and software projects.",
        "Taking ownership in hackathon and ideathon work.",
        "Testing current AI tools in production-oriented scenarios.",
      ],
    },
    tags: ["AI", "Machine Learning", "Google"],
  },
  {
    company: "BLUESENSE",
    role: { tr: "Stajyer", en: "Intern" },
    date: { tr: "Nisan 2025 - Ekim 2025, 7 ay", en: "Apr 2025 - Oct 2025, 7 months" },
    location: { tr: "Vancouver, Kanada / Uzaktan", en: "Vancouver, Canada / Remote" },
    logo: `${basePath}/logos/bluesense.svg`,
    summary: {
      tr: "Yapay zeka tabanlı mobil uygulamaların geliştirilmesine, performansına ve kullanıcı deneyimine katkı sağladım.",
      en: "I contributed to the development, performance, and user experience of AI-based mobile applications.",
    },
    bullets: {
      tr: [
        "Smart Beauty uygulaması için yeni özellikler geliştirdim.",
        "Mobil performans ve kullanıcı deneyimi iyileştirmeleri yaptım.",
        "Uzaktan çalışan ürün ekibiyle koordineli ilerledim.",
      ],
      en: [
        "Developed features for the Smart Beauty application.",
        "Improved mobile performance and user experience.",
        "Collaborated closely with a distributed product team.",
      ],
    },
    tags: ["Mobile Dev", "Performance", "Remote Team"],
  },
  {
    company: "E4E Elektronik Mühendislik Yazılım Tasarım A.Ş.",
    role: { tr: "Stajyer", en: "Intern" },
    date: { tr: "Eylül 2024 - Ekim 2024, 2 ay", en: "Sep 2024 - Oct 2024, 2 months" },
    logo: `${basePath}/logos/e4e.png`,
    summary: {
      tr: "Dijital veri yönetimi ve masaüstü uygulama geliştirme süreçlerinde yapılandırılmış çözümler ürettim.",
      en: "I built structured solutions across digital data management and desktop application development.",
    },
    bullets: {
      tr: [
        "Dijital veri düzenleme ve optimizasyon süreçlerinde çalıştım.",
        "Masaüstü uygulamaların geliştirilmesine katkı sundum.",
        "Digital Diary uygulamasını tasarlayıp geliştirdim.",
      ],
      en: [
        "Worked on digital data organization and optimization.",
        "Contributed to desktop application development.",
        "Designed and built the Digital Diary application.",
      ],
    },
    tags: ["Desktop Apps", "Data Management", "Digital Diary"],
  },
];
