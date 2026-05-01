// ============================================
// DAIGU TECHNOLOGY — Scripts Complets
// 7 langues — Footer colonnes — Formspree
// ============================================

document.addEventListener('DOMContentLoaded', () => {

    // --- BURGER ---
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('navLinks');
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // --- NAV SCROLL ---
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 50);
    });

    // --- LANG DROPDOWN ---
    const langToggle = document.getElementById('langToggle');
    const langDropdown = document.getElementById('langDropdown');
    const langFlag = document.getElementById('langFlag');
    const langCode = document.getElementById('langCode');
    const langInfo = {
        fr: { flag: '🇫🇷', code: 'FR' },
        en: { flag: '🇬🇧', code: 'EN' },
        zh: { flag: '🇨🇳', code: '中文' },
        de: { flag: '🇩🇪', code: 'DE' },
        ru: { flag: '🇷🇺', code: 'RU' },
        ar: { flag: '🇸🇦', code: 'AR' },
        es: { flag: '🇪🇸', code: 'ES' }
    };
    langToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('open');
        langToggle.classList.toggle('open');
    });
    document.addEventListener('click', () => {
        langDropdown.classList.remove('open');
        langToggle.classList.remove('open');
    });
    langDropdown.addEventListener('click', (e) => e.stopPropagation());

    // --- PARALLAXE ---
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    window.addEventListener('scroll', () => {
        parallaxElements.forEach(el => {
            const speed = parseFloat(el.getAttribute('data-parallax'));
            el.style.transform = `translateY(${window.scrollY * speed}px)`;
        });
    });

    // --- REVEAL ---
    const revealElements = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('revealed');
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealElements.forEach(el => observer.observe(el));

    // --- TRADUCTIONS (7 LANGUES) ---
    const i18n = {
        fr: {
            nav_ecosystem:"Écosystème",nav_products:"Produits",nav_filiales:"Filiales",nav_video:"Vision",nav_roadmap:"Roadmap",nav_contact:"Contact",nav_blog:"Blog",
            hero_badge:"DAIGU TECHNOLOGY • Guinée 2026",hero_line1:"La Guinée des",hero_line2:"Lumières",
            hero_motto:"Soyez des fous à la porte de la raison des hommes",hero_scroll:"Découvrir",
            s1_tag:"Recherche & Développement",s1_desc:"Le Cerveau de l'écosystème. Au cœur de Conakry, nos chercheurs développent les jumeaux numériques, l'intelligence artificielle et les prototypes qui alimentent toutes nos filiales. Un laboratoire souverain pour une innovation sans dépendance.",
            s2_tag:"Stratégie & Pilotage",s2_desc:"Le Corps. La holding qui verrouille le capital, protège les brevets et oriente la stratégie sur 30 ans. Un fonds de dotation garantit que les profits retournent à la formation et à la recherche.",
            s3_tag:"Formation & Excellence",s3_desc:"Le Sang. Ici, l'étudiant est un co-créateur. Chaque promotion travaille sur des projets réels des filiales, encadrée par les ingénieurs de DLC. Pas de simulacre : du code, des prototypes, de la souveraineté.",
            video_tag:"Production du Futur",video_title:"L'Usine Intelligente",video_desc:"Des chaînes de montage automatisées aux véhicules électriques conçus pour l'Afrique. DAIGU construit l'industrie de demain, aujourd'hui.",
            prod_tag:"Portfolio",prod_title:"L'Écosystème Produits",prod_sub:"Huit verticales intégrées, toutes alimentées par DAIGU OS.",
            prod_phone:"Smartphone souverain",prod_console:"Jeu nouvelle génération",prod_pc:"PC & stations de travail",prod_os:"Système d'exploitation",prod_cloud:"Cloud national",prod_ev:"Véhicule électrique",prod_cyber:"Cybersécurité",prod_drone:"Drones & IoT",
            quote_text:"De l'Atome au Logiciel, tout est pensé, conçu et sécurisé ici",quote_source:"— Doctrine DAIGU",
            fil_tag:"La Pile Technologique",fil_title:"Nos Filiales",
            fil_04:"Matériel & Intégration — Drones, tablettes durcies, équipements réseau « TROPIC-PROOF ».",fil_04_badge:"Sommet",
            fil_03:"Logiciel & IA — DAIGU OS micro-noyau, IA agentique, moteur de jumeau numérique.",fil_03_badge:"Noyau",
            fil_02:"Cyber & Infra — Cloud national, Red Team interne, Zéro Trust, résilience offline.",fil_02_badge:"Bouclier",
            fil_01:"Matériaux & Batteries — Stockage, valorisation bauxite, micro-grids solaires.",fil_01_badge:"Base",
            road_tag:"Feuille de Route",road_title:"2026 – 2035",
            tl_phase0:"Phase 0",tl_0_title:"Fondations Silencieuses",tl_0_desc:"Constitution de la holding, ouverture DUTS, acquisition DLC.",
            tl_phase1:"Phase 1",tl_1_title:"Noyau Souverain",tl_1_desc:"DAIGU OS V0.1, Cloud privé guinéen.",
            tl_phase2:"Phase 2",tl_2_title:"Incarnation Physique",tl_2_desc:"Premier terminal autonome, production pilote de batteries.",
            tl_phase3:"Phase 3",tl_3_title:"Démultiplication",tl_3_desc:"Expansion régionale, DAIGU OS multi-support.",
            partner_tag:"Partenariat",partner_title:"Construisons l'avenir ensemble",partner_desc:"DAIGU est ouvert à la coopération bilatérale dans le cadre des Ateliers Luban et du FOCAC. Nous collaborons avec des partenaires qui partagent notre vision de souveraineté technologique.",
            partner_private:"🔒 Espace Partenaires",partner_send:"Envoyer",
            footer_motto:"Soyez des fous à la porte de la raison des hommes",footer_tagline:"La Guinée des Lumières",
            footer_nav_title:"Navigation",footer_docs_title:"Ressources",footer_legal_title:"Mentions légales",
            footer_doc_wp:"Livre Blanc (PDF)",footer_doc_partner:"Dossier Partenariat",footer_private:"Espace Partenaires"
        },
        en: {
            nav_ecosystem:"Ecosystem",nav_products:"Products",nav_filiales:"Subsidiaries",nav_video:"Vision",nav_roadmap:"Roadmap",nav_contact:"Contact",nav_blog:"Blog",
            hero_badge:"DAIGU TECHNOLOGY • Guinea 2026",hero_line1:"The Guinea of",hero_line2:"Lights",
            hero_motto:"Be fools at the gate of men's reason",hero_scroll:"Discover",
            s1_tag:"Research & Development",s1_desc:"The Brain of the ecosystem. In the heart of Conakry, our researchers develop digital twins, artificial intelligence, and prototypes for all our subsidiaries. A sovereign laboratory for innovation without dependency.",
            s2_tag:"Strategy & Steering",s2_desc:"The Body. The holding company that locks capital, protects patents, and steers strategy over 30 years. An endowment fund ensures profits return to training and research.",
            s3_tag:"Training & Excellence",s3_desc:"The Blood. Here, the student is a co-creator. Each cohort works on real subsidiary projects, supervised by DLC engineers. No simulation: code, prototypes, sovereignty.",
            video_tag:"Future Production",video_title:"The Smart Factory",video_desc:"From automated assembly lines to electric vehicles for Africa. DAIGU builds tomorrow's industry, today.",
            prod_tag:"Portfolio",prod_title:"The Product Ecosystem",prod_sub:"Eight integrated verticals, all powered by DAIGU OS.",
            prod_phone:"Sovereign smartphone",prod_console:"Next-gen gaming",prod_pc:"PCs & workstations",prod_os:"Operating system",prod_cloud:"National cloud",prod_ev:"Electric vehicle",prod_cyber:"Cybersecurity",prod_drone:"Drones & IoT",
            quote_text:"From the Atom to the Software, everything is designed, built, and secured here",quote_source:"— DAIGU Doctrine",
            fil_tag:"The Technology Stack",fil_title:"Our Subsidiaries",
            fil_04:"Hardware & Integration — Drones, rugged tablets, network equipment \"TROPIC-PROOF\".",fil_04_badge:"Summit",
            fil_03:"Software & AI — DAIGU OS micro-kernel, agentic AI, digital twin engine.",fil_03_badge:"Kernel",
            fil_02:"Cyber & Infra — National cloud, internal Red Team, Zero Trust, offline resilience.",fil_02_badge:"Shield",
            fil_01:"Materials & Batteries — Storage, bauxite valorization, solar micro-grids.",fil_01_badge:"Base",
            road_tag:"Roadmap",road_title:"2026 – 2035",
            tl_phase0:"Phase 0",tl_0_title:"Silent Foundations",tl_0_desc:"Holding constitution, DUTS opening, DLC acquisition.",
            tl_phase1:"Phase 1",tl_1_title:"Sovereign Kernel",tl_1_desc:"DAIGU OS V0.1, Guinean private cloud.",
            tl_phase2:"Phase 2",tl_2_title:"Physical Incarnation",tl_2_desc:"First autonomous terminal, pilot battery production.",
            tl_phase3:"Phase 3",tl_3_title:"Scaling Up",tl_3_desc:"Regional expansion, multi-device DAIGU OS.",
            partner_tag:"Partnership",partner_title:"Let's build the future together",partner_desc:"DAIGU is open to bilateral cooperation under the Luban Workshops and FOCAC framework. We collaborate with partners who share our vision of technological sovereignty.",
            partner_private:"🔒 Partners Area",partner_send:"Send",
            footer_motto:"Be fools at the gate of men's reason",footer_tagline:"The Guinea of Lights",
            footer_nav_title:"Navigation",footer_docs_title:"Resources",footer_legal_title:"Legal Notice",
            footer_doc_wp:"White Paper (PDF)",footer_doc_partner:"Partnership Dossier",footer_private:"Partners Area"
        },
        zh: {
            nav_ecosystem:"生态系统",nav_products:"产品",nav_filiales:"子公司",nav_video:"愿景",nav_roadmap:"路线图",nav_contact:"联系",nav_blog:"博客",
            hero_badge:"DAIGU TECHNOLOGY • 几内亚 2026",hero_line1:"光明",hero_line2:"几内亚",
            hero_motto:"做人类理性之门前的疯子",hero_scroll:"探索",
            s1_tag:"研发",s1_desc:"生态系统的大脑。在科纳克里市中心，我们的研究人员开发数字孪生、人工智能和原型，为所有子公司提供动力。",
            s2_tag:"战略与指导",s2_desc:"身体。锁定资本、保护专利、规划30年战略的控股公司。捐赠基金确保利润回流至培训和研究。",
            s3_tag:"培训与卓越",s3_desc:"血液。在这里，学生是共同创造者。每届学生都在DLC工程师的指导下参与真实的子公司项目。",
            video_tag:"未来生产",video_title:"智能工厂",video_desc:"从自动化装配线到为非洲设计的电动汽车。DAIGU正在建设未来的工业，就在今天。",
            prod_tag:"产品组合",prod_title:"产品生态系统",prod_sub:"八个集成垂直领域，全部由DAIGU OS驱动。",
            prod_phone:"主权智能手机",prod_console:"次世代游戏",prod_pc:"电脑与工作站",prod_os:"操作系统",prod_cloud:"国家云",prod_ev:"电动汽车",prod_cyber:"网络安全",prod_drone:"无人机与物联网",
            quote_text:"从原子到软件，一切都在这里设计、制造和保护",quote_source:"— DAIGU教义",
            fil_tag:"技术栈",fil_title:"我们的子公司",
            fil_04:"硬件与集成 — 无人机、加固平板、网络设备。",fil_04_badge:"顶峰",
            fil_03:"软件与AI — DAIGU OS微内核、智能代理AI、数字孪生引擎。",fil_03_badge:"内核",
            fil_02:"网络与基础设施 — 国家云、内部红队、零信任、离线韧性。",fil_02_badge:"盾牌",
            fil_01:"材料与电池 — 存储、铝土矿增值、太阳能微电网。",fil_01_badge:"基础",
            road_tag:"路线图",road_title:"2026 – 2035",
            tl_phase0:"第0阶段",tl_0_title:"奠基",tl_0_desc:"控股公司成立，DUTS开学，DLC用地获取。",
            tl_phase1:"第1阶段",tl_1_title:"主权内核",tl_1_desc:"DAIGU OS V0.1，几内亚私有云。",
            tl_phase2:"第2阶段",tl_2_title:"物理实体",tl_2_desc:"首台自主终端，电池中试生产。",
            tl_phase3:"第3阶段",tl_3_title:"扩展",tl_3_desc:"区域扩张，多设备DAIGU OS。",
            partner_tag:"合作",partner_title:"共创未来",partner_desc:"DAIGU对在鲁班工坊和中非合作论坛框架下的双边合作持开放态度。",
            partner_private:"🔒 合作伙伴专区",partner_send:"发送",
            footer_motto:"做人类理性之门前的疯子",footer_tagline:"光明几内亚",
            footer_nav_title:"导航",footer_docs_title:"资源",footer_legal_title:"法律声明",
            footer_doc_wp:"白皮书 (PDF)",footer_doc_partner:"合作档案",footer_private:"合作伙伴专区"
        },
        de: {
            nav_ecosystem:"Ökosystem",nav_products:"Produkte",nav_filiales:"Tochtergesellschaften",nav_video:"Vision",nav_roadmap:"Roadmap",nav_contact:"Kontakt",nav_blog:"Blog",
            hero_badge:"DAIGU TECHNOLOGY • Guinea 2026",hero_line1:"Das Guinea der",hero_line2:"Lichter",
            hero_motto:"Seid Narren am Tor der Vernunft der Menschen",hero_scroll:"Entdecken",
            s1_tag:"Forschung & Entwicklung",s1_desc:"Das Gehirn des Ökosystems. Im Herzen von Conakry entwickeln unsere Forscher digitale Zwillinge, KI und Prototypen für alle unsere Tochtergesellschaften.",
            s2_tag:"Strategie & Steuerung",s2_desc:"Der Körper. Die Holding, die Kapital sichert, Patente schützt und die Strategie über 30 Jahre lenkt.",
            s3_tag:"Ausbildung & Exzellenz",s3_desc:"Das Blut. Hier ist der Student ein Mitgestalter. Jeder Jahrgang arbeitet an echten Projekten der Tochtergesellschaften.",
            video_tag:"Produktion der Zukunft",video_title:"Die Intelligente Fabrik",video_desc:"Von automatisierten Montagelinien bis zu Elektrofahrzeugen für Afrika. DAIGU baut die Industrie von morgen, heute.",
            prod_tag:"Portfolio",prod_title:"Das Produkt-Ökosystem",prod_sub:"Acht integrierte Vertikale, alle betrieben von DAIGU OS.",
            prod_phone:"Souveränes Smartphone",prod_console:"Next-Gen Gaming",prod_pc:"PCs & Workstations",prod_os:"Betriebssystem",prod_cloud:"Nationale Cloud",prod_ev:"Elektrofahrzeug",prod_cyber:"Cybersicherheit",prod_drone:"Drohnen & IoT",
            quote_text:"Vom Atom zur Software — alles wird hier entworfen, gebaut und gesichert",quote_source:"— DAIGU Doktrin",
            fil_tag:"Technologie-Stack",fil_title:"Unsere Tochtergesellschaften",
            fil_04:"Hardware & Integration — Drohnen, robuste Tablets, Netzwerkausrüstung.",fil_04_badge:"Gipfel",
            fil_03:"Software & KI — DAIGU OS Mikrokernel, agentische KI, Digital Twin Engine.",fil_03_badge:"Kernel",
            fil_02:"Cyber & Infra — Nationale Cloud, internes Red Team, Zero Trust.",fil_02_badge:"Schild",
            fil_01:"Materialien & Batterien — Speicher, Bauxit-Verwertung, Solar-Mikronetze.",fil_01_badge:"Basis",
            road_tag:"Roadmap",road_title:"2026 – 2035",
            tl_phase0:"Phase 0",tl_0_title:"Stille Fundamente",tl_0_desc:"Gründung der Holding, Eröffnung DUTS, Erwerb DLC-Gelände.",
            tl_phase1:"Phase 1",tl_1_title:"Souveräner Kernel",tl_1_desc:"DAIGU OS V0.1, Guineische Private Cloud.",
            tl_phase2:"Phase 2",tl_2_title:"Physische Inkarnation",tl_2_desc:"Erstes autonomes Terminal, Pilotproduktion von Batterien.",
            tl_phase3:"Phase 3",tl_3_title:"Skalierung",tl_3_desc:"Regionale Expansion, Multi-Geräte DAIGU OS.",
            partner_tag:"Partnerschaft",partner_title:"Gemeinsam die Zukunft bauen",partner_desc:"DAIGU ist offen für bilaterale Zusammenarbeit im Rahmen der Luban-Werkstätten und des FOCAC.",
            partner_private:"🔒 Partnerbereich",partner_send:"Senden",
            footer_motto:"Seid Narren am Tor der Vernunft der Menschen",footer_tagline:"Das Guinea der Lichter",
            footer_nav_title:"Navigation",footer_docs_title:"Ressourcen",footer_legal_title:"Impressum",
            footer_doc_wp:"Whitepaper (PDF)",footer_doc_partner:"Partnerschaftsdossier",footer_private:"Partnerbereich"
        },
        ru: {
            nav_ecosystem:"Экосистема",nav_products:"Продукты",nav_filiales:"Компании",nav_video:"Видение",nav_roadmap:"План",nav_contact:"Контакт",nav_blog:"Блог",
            hero_badge:"DAIGU TECHNOLOGY • Гвинея 2026",hero_line1:"Гвинея",hero_line2:"Света",
            hero_motto:"Будьте безумцами у ворот разума людей",hero_scroll:"Узнать",
            s1_tag:"Исследования и разработки",s1_desc:"Мозг экосистемы. В центре Конакри наши исследователи создают цифровые двойники, ИИ и прототипы для всех наших компаний.",
            s2_tag:"Стратегия и управление",s2_desc:"Тело. Холдинг, защищающий капитал, патенты и направляющий стратегию на 30 лет.",
            s3_tag:"Обучение и мастерство",s3_desc:"Кровь. Здесь студент — соавтор. Каждый курс работает над реальными проектами компаний.",
            video_tag:"Производство будущего",video_title:"Умная фабрика",video_desc:"От автоматизированных сборочных линий до электромобилей для Африки.",
            prod_tag:"Портфолио",prod_title:"Экосистема продуктов",prod_sub:"Восемь интегрированных направлений на базе DAIGU OS.",
            prod_phone:"Суверенный смартфон",prod_console:"Игровая консоль",prod_pc:"ПК и станции",prod_os:"Операционная система",prod_cloud:"Национальное облако",prod_ev:"Электромобиль",prod_cyber:"Кибербезопасность",prod_drone:"Дроны и IoT",
            quote_text:"От атома до программ — всё спроектировано, построено и защищено здесь",quote_source:"— Доктрина DAIGU",
            fil_tag:"Технологический стек",fil_title:"Наши компании",
            fil_04:"Оборудование и интеграция — Дроны, защищённые планшеты, сетевое оборудование.",fil_04_badge:"Вершина",
            fil_03:"ПО и ИИ — DAIGU OS микроядро, агентный ИИ, движок цифровых двойников.",fil_03_badge:"Ядро",
            fil_02:"Кибер и инфра — Национальное облако, внутренняя Red Team, Zero Trust.",fil_02_badge:"Щит",
            fil_01:"Материалы и батареи — Хранение, переработка бокситов, солнечные микросети.",fil_01_badge:"Основа",
            road_tag:"План",road_title:"2026 – 2035",
            tl_phase0:"Фаза 0",tl_0_title:"Тихий фундамент",tl_0_desc:"Создание холдинга, открытие DUTS, приобретение земли DLC.",
            tl_phase1:"Фаза 1",tl_1_title:"Суверенное ядро",tl_1_desc:"DAIGU OS V0.1, частное облако Гвинеи.",
            tl_phase2:"Фаза 2",tl_2_title:"Физическое воплощение",tl_2_desc:"Первый автономный терминал, пилотное производство батарей.",
            tl_phase3:"Фаза 3",tl_3_title:"Масштабирование",tl_3_desc:"Региональная экспансия, DAIGU OS на разных устройствах.",
            partner_tag:"Партнёрство",partner_title:"Построим будущее вместе",partner_desc:"DAIGU открыт для двустороннего сотрудничества в рамках Мастерских Лубань и FOCAC.",
            partner_private:"🔒 Партнёрская зона",partner_send:"Отправить",
            footer_motto:"Будьте безумцами у ворот разума людей",footer_tagline:"Гвинея Света",
            footer_nav_title:"Навигация",footer_docs_title:"Ресурсы",footer_legal_title:"Правовая информация",
            footer_doc_wp:"Белая книга (PDF)",footer_doc_partner:"Партнёрское досье",footer_private:"Партнёрская зона"
        },
        ar: {
            nav_ecosystem:"النظام البيئي",nav_products:"المنتجات",nav_filiales:"الشركات",nav_video:"الرؤية",nav_roadmap:"الخريطة",nav_contact:"اتصال",nav_blog:"مدونة",
            hero_badge:"DAIGU TECHNOLOGY • غينيا 2026",hero_line1:"غينيا",hero_line2:"الأنوار",
            hero_motto:"كونوا مجانين على باب عقل البشر",hero_scroll:"اكتشف",
            s1_tag:"البحث والتطوير",s1_desc:"عقل النظام البيئي. في قلب كوناكري، يطور باحثونا التوائم الرقمية والذكاء الاصطناعي والنماذج الأولية لجميع شركاتنا.",
            s2_tag:"الاستراتيجية والتوجيه",s2_desc:"الجسد. الشركة القابضة التي تؤمن رأس المال وتحمي براءات الاختراع وتوجه الاستراتيجية على مدى 30 عاماً.",
            s3_tag:"التدريب والتميز",s3_desc:"الدم. هنا الطالب شريك في الإبداع. كل دفعة تعمل على مشاريع حقيقية للشركات.",
            video_tag:"إنتاج المستقبل",video_title:"المصنع الذكي",video_desc:"من خطوط التجميع الآلية إلى السيارات الكهربائية لأفريقيا.",
            prod_tag:"المحفظة",prod_title:"نظام المنتجات",prod_sub:"ثمانية قطاعات متكاملة، جميعها تعمل بنظام DAIGU OS.",
            prod_phone:"هاتف ذكي سيادي",prod_console:"ألعاب الجيل التالي",prod_pc:"حواسيب ومحطات عمل",prod_os:"نظام تشغيل",prod_cloud:"سحابة وطنية",prod_ev:"سيارة كهربائية",prod_cyber:"أمن سيبراني",prod_drone:"طائرات بدون طيار وإنترنت الأشياء",
            quote_text:"من الذرة إلى البرمجيات — كل شيء يُصمم ويُبنى ويُؤمن هنا",quote_source:"— عقيدة DAIGU",
            fil_tag:"المكدس التكنولوجي",fil_title:"شركاتنا",
            fil_04:"الأجهزة والتكامل — طائرات بدون طيار، أجهزة لوحية متينة، معدات شبكات.",fil_04_badge:"القمة",
            fil_03:"البرمجيات والذكاء الاصطناعي — DAIGU OS نواة دقيقة، ذكاء اصطناعي وكيلي، محرك توأم رقمي.",fil_03_badge:"النواة",
            fil_02:"الأمن السيبراني والبنية التحتية — سحابة وطنية، فريق أحمر داخلي، Zero Trust.",fil_02_badge:"الدرع",
            fil_01:"المواد والبطاريات — تخزين، تثمين مخلفات البوكسيت، شبكات شمسية مصغرة.",fil_01_badge:"القاعدة",
            road_tag:"الخريطة",road_title:"2026 – 2035",
            tl_phase0:"المرحلة 0",tl_0_title:"الأسس الصامتة",tl_0_desc:"تأسيس الشركة القابضة، افتتاح DUTS، حيازة أرض DLC.",
            tl_phase1:"المرحلة 1",tl_1_title:"النواة السيادية",tl_1_desc:"DAIGU OS V0.1، السحابة الخاصة الغينية.",
            tl_phase2:"المرحلة 2",tl_2_title:"التجسيد المادي",tl_2_desc:"أول جهاز طرفي مستقل، إنتاج تجريبي للبطاريات.",
            tl_phase3:"المرحلة 3",tl_3_title:"التوسع",tl_3_desc:"توسع إقليمي، DAIGU OS على أجهزة متعددة.",
            partner_tag:"شراكة",partner_title:"لنبني المستقبل معاً",partner_desc:"DAIGU منفتحة على التعاون الثنائي في إطار ورش عمل لوبان وFOCAC.",
            partner_private:"🔒 منطقة الشركاء",partner_send:"إرسال",
            footer_motto:"كونوا مجانين على باب عقل البشر",footer_tagline:"غينيا الأنوار",
            footer_nav_title:"التنقل",footer_docs_title:"الموارد",footer_legal_title:"إشعار قانوني",
            footer_doc_wp:"الكتاب الأبيض (PDF)",footer_doc_partner:"ملف الشراكة",footer_private:"منطقة الشركاء"
        },
        es: {
            nav_ecosystem:"Ecosistema",nav_products:"Productos",nav_filiales:"Filiales",nav_video:"Visión",nav_roadmap:"Hoja de ruta",nav_contact:"Contacto",nav_blog:"Blog",
            hero_badge:"DAIGU TECHNOLOGY • Guinea 2026",hero_line1:"La Guinea de las",hero_line2:"Luces",
            hero_motto:"Sed locos a la puerta de la razón de los hombres",hero_scroll:"Descubrir",
            s1_tag:"Investigación y Desarrollo",s1_desc:"El Cerebro del ecosistema. En el corazón de Conakry, nuestros investigadores desarrollan gemelos digitales, inteligencia artificial y prototipos para todas nuestras filiales.",
            s2_tag:"Estrategia y Dirección",s2_desc:"El Cuerpo. El holding que asegura el capital, protege las patentes y orienta la estrategia a 30 años.",
            s3_tag:"Formación y Excelencia",s3_desc:"La Sangre. Aquí el estudiante es co-creador. Cada promoción trabaja en proyectos reales de las filiales.",
            video_tag:"Producción del Futuro",video_title:"La Fábrica Inteligente",video_desc:"De líneas de montaje automatizadas a vehículos eléctricos para África.",
            prod_tag:"Portafolio",prod_title:"El Ecosistema de Productos",prod_sub:"Ocho verticales integradas, todas impulsadas por DAIGU OS.",
            prod_phone:"Smartphone soberano",prod_console:"Consola de juegos",prod_pc:"PCs y estaciones",prod_os:"Sistema operativo",prod_cloud:"Nube nacional",prod_ev:"Vehículo eléctrico",prod_cyber:"Ciberseguridad",prod_drone:"Drones e IoT",
            quote_text:"Del átomo al software — todo se diseña, construye y asegura aquí",quote_source:"— Doctrina DAIGU",
            fil_tag:"La Pila Tecnológica",fil_title:"Nuestras Filiales",
            fil_04:"Hardware e Integración — Drones, tabletas robustas, equipos de red.",fil_04_badge:"Cima",
            fil_03:"Software e IA — DAIGU OS micronúcleo, IA agente, motor de gemelo digital.",fil_03_badge:"Núcleo",
            fil_02:"Ciber e Infra — Nube nacional, Red Team interno, Zero Trust.",fil_02_badge:"Escudo",
            fil_01:"Materiales y Baterías — Almacenamiento, valorización de bauxita, microrredes solares.",fil_01_badge:"Base",
            road_tag:"Hoja de ruta",road_title:"2026 – 2035",
            tl_phase0:"Fase 0",tl_0_title:"Cimientos Silenciosos",tl_0_desc:"Constitución del holding, apertura de DUTS, adquisición del terreno DLC.",
            tl_phase1:"Fase 1",tl_1_title:"Núcleo Soberano",tl_1_desc:"DAIGU OS V0.1, nube privada guineana.",
            tl_phase2:"Fase 2",tl_2_title:"Encarnación Física",tl_2_desc:"Primer terminal autónomo, producción piloto de baterías.",
            tl_phase3:"Fase 3",tl_3_title:"Expansión",tl_3_desc:"Expansión regional, DAIGU OS multi-dispositivo.",
            partner_tag:"Asociación",partner_title:"Construyamos el futuro juntos",partner_desc:"DAIGU está abierto a la cooperación bilateral en el marco de los Talleres Luban y el FOCAC.",
            partner_private:"🔒 Área de Socios",partner_send:"Enviar",
            footer_motto:"Sed locos a la puerta de la razón de los hombres",footer_tagline:"La Guinea de las Luces",
            footer_nav_title:"Navegación",footer_docs_title:"Recursos",footer_legal_title:"Aviso legal",
            footer_doc_wp:"Libro Blanco (PDF)",footer_doc_partner:"Dosier de Asociación",footer_private:"Área de Socios"
        }
    };

    let currentLang = 'fr';
    function applyLang(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (i18n[lang]?.[key]) el.textContent = i18n[lang][key];
        });
        document.querySelectorAll('.lang-option').forEach(opt => opt.classList.toggle('active', opt.dataset.lang === lang));
        if (langInfo[lang]) {
            langFlag.textContent = langInfo[lang].flag;
            langCode.textContent = langInfo[lang].code;
        }
        localStorage.setItem('daigu-lang', lang);
    }
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', () => {
            if (i18n[btn.dataset.lang]) {
                applyLang(btn.dataset.lang);
                langDropdown.classList.remove('open');
                langToggle.classList.remove('open');
            }
        });
    });
    const saved = localStorage.getItem('daigu-lang');
    const browser = navigator.language.slice(0,2);
    applyLang(saved && i18n[saved] ? saved : i18n[browser] ? browser : 'fr');

    // --- FORM ---
    const form = document.getElementById('contactForm');
    if (form) form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        const orig = btn.textContent;
        btn.textContent = '⏳ Envoi...'; btn.disabled = true;
        try {
            const res = await fetch('https://formspree.io/f/mrejbl...', { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } });
            btn.textContent = res.ok ? '✅ Envoyé' : '❌ Erreur';
            if (res.ok) form.reset();
        } catch { btn.textContent = '❌ Erreur'; }
        setTimeout(() => { btn.textContent = orig; btn.disabled = false; }, 3500);
    });

});