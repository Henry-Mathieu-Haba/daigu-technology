// ============================================
// DAIGU TECHNOLOGY — Scripts Immersifs
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

    // --- PARALLAXE ---
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    window.addEventListener('scroll', () => {
        parallaxElements.forEach(el => {
            const speed = parseFloat(el.getAttribute('data-parallax'));
            const y = window.scrollY * speed;
            el.style.transform = `translateY(${y}px)`;
        });
    });

    // --- REVEAL AU SCROLL ---
    const revealElements = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealElements.forEach(el => observer.observe(el));

    // --- TRADUCTIONS --- (version compacte conservée)
    const i18n = {
        fr: {
            nav_ecosystem:"Écosystème",nav_products:"Produits",nav_filiales:"Filiales",nav_video:"Vision",nav_roadmap:"Roadmap",nav_contact:"Contact",
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
            footer_motto:"Soyez des fous à la porte de la raison des hommes",footer_tagline:"La Guinée des Lumières"
        },
        en: {
            nav_ecosystem:"Ecosystem",nav_products:"Products",nav_filiales:"Subsidiaries",nav_video:"Vision",nav_roadmap:"Roadmap",nav_contact:"Contact",
            hero_badge:"DAIGU TECHNOLOGY • Guinea 2026",hero_line1:"The Guinea of",hero_line2:"Lights",
            hero_motto:"Be fools at the gate of men's reason",hero_scroll:"Discover",
            s1_tag:"Research & Development",s1_desc:"The Brain of the ecosystem. In the heart of Conakry, our researchers develop digital twins, artificial intelligence, and prototypes that power all our subsidiaries. A sovereign laboratory for innovation without dependency.",
            s2_tag:"Strategy & Steering",s2_desc:"The Body. The holding company that locks capital, protects patents, and steers strategy over 30 years. An endowment fund ensures profits return to training and research.",
            s3_tag:"Training & Excellence",s3_desc:"The Blood. Here, the student is a co-creator. Each cohort works on real subsidiary projects, supervised by DLC engineers. No simulation: code, prototypes, sovereignty.",
            video_tag:"Future Production",video_title:"The Smart Factory",video_desc:"From automated assembly lines to electric vehicles designed for Africa. DAIGU is building tomorrow's industry, today.",
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
            footer_motto:"Be fools at the gate of men's reason",footer_tagline:"The Guinea of Lights"
        },
        zh: {
            nav_ecosystem:"生态系统",nav_products:"产品",nav_filiales:"子公司",nav_video:"愿景",nav_roadmap:"路线图",nav_contact:"联系",
            hero_badge:"DAIGU TECHNOLOGY • 几内亚 2026",hero_line1:"光明",hero_line2:"几内亚",
            hero_motto:"做人类理性之门前的疯子",hero_scroll:"探索",
            s1_tag:"研发",s1_desc:"生态系统的大脑。在科纳克里市中心，我们的研究人员开发数字孪生、人工智能和原型，为所有子公司提供动力。一个主权实验室，实现无依赖的创新。",
            s2_tag:"战略与指导",s2_desc:"身体。锁定资本、保护专利、规划30年战略的控股公司。捐赠基金确保利润回流至培训和研究。",
            s3_tag:"培训与卓越",s3_desc:"血液。在这里，学生是共同创造者。每届学生都在DLC工程师的指导下参与真实的子公司项目。没有模拟：代码、原型、主权。",
            video_tag:"未来生产",video_title:"智能工厂",video_desc:"从自动化装配线到为非洲设计的电动汽车。DAIGU正在建设未来的工业，就在今天。",
            prod_tag:"产品组合",prod_title:"产品生态系统",prod_sub:"八个集成垂直领域，全部由DAIGU OS驱动。",
            prod_phone:"主权智能手机",prod_console:"次世代游戏",prod_pc:"电脑与工作站",prod_os:"操作系统",prod_cloud:"国家云",prod_ev:"电动汽车",prod_cyber:"网络安全",prod_drone:"无人机与物联网",
            quote_text:"从原子到软件，一切都在这里设计、制造和保护",quote_source:"— DAIGU教义",
            fil_tag:"技术栈",fil_title:"我们的子公司",
            fil_04:"硬件与集成 — 无人机、加固平板、网络设备\"热带防护\"。",fil_04_badge:"顶峰",
            fil_03:"软件与AI — DAIGU OS微内核、智能代理AI、数字孪生引擎。",fil_03_badge:"内核",
            fil_02:"网络与基础设施 — 国家云、内部红队、零信任、离线韧性。",fil_02_badge:"盾牌",
            fil_01:"材料与电池 — 存储、铝土矿增值、太阳能微电网。",fil_01_badge:"基础",
            road_tag:"路线图",road_title:"2026 – 2035",
            tl_phase0:"第0阶段",tl_0_title:"奠基",tl_0_desc:"控股公司成立，DUTS开学，DLC用地获取。",
            tl_phase1:"第1阶段",tl_1_title:"主权内核",tl_1_desc:"DAIGU OS V0.1，几内亚私有云。",
            tl_phase2:"第2阶段",tl_2_title:"物理实体",tl_2_desc:"首台自主终端，电池中试生产。",
            tl_phase3:"第3阶段",tl_3_title:"扩展",tl_3_desc:"区域扩张，多设备DAIGU OS。",
            partner_tag:"合作",partner_title:"共创未来",partner_desc:"DAIGU对在鲁班工坊和中非合作论坛框架下的双边合作持开放态度。我们与认同我们技术主权愿景的伙伴合作。",
            partner_private:"🔒 合作伙伴专区",partner_send:"发送",
            footer_motto:"做人类理性之门前的疯子",footer_tagline:"光明几内亚"
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
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
        localStorage.setItem('daigu-lang', lang);
    }
    document.querySelectorAll('.lang-btn').forEach(b => b.addEventListener('click', () => { if (i18n[b.dataset.lang]) applyLang(b.dataset.lang); }));
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
            const res = await fetch('https://formspree.io/f/VOTRE_ID_FORMSPREE', { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } });
            btn.textContent = res.ok ? '✅ Envoyé' : '❌ Erreur';
            if (res.ok) form.reset();
        } catch { btn.textContent = '❌ Erreur'; }
        setTimeout(() => { btn.textContent = orig; btn.disabled = false; }, 3500);
    });

});