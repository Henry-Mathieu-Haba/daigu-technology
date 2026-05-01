// ============================================
// DAIGU TECHNOLOGY — SCRIPTS
// ============================================

document.addEventListener('DOMContentLoaded', () => {

    // --- BURGER ---
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // --- TRADUCTIONS ---
    const i18n = {
        fr: {
            nav_ecosystem:"Écosystème",nav_products:"Produits",nav_filiales:"Filiales",nav_roadmap:"Roadmap",nav_contact:"Contact",
            hero_badge:"Guinée • 2026",hero_title_main:"La Guinée des",hero_title_accent:"Lumières",
            hero_motto:"Soyez des fous à la porte de la raison des hommes",hero_scroll:"Découvrir le projet",
            eco_tag:"Architecture",eco_title:"Un écosystème complet et souverain",eco_lead:"Trois piliers fondateurs pour une indépendance technologique durable. Du laboratoire à l'université, chaque maillon est intégré.",
            eco_dlc_tag:"Recherche & Développement",eco_dlc_desc:"Le Cerveau. Jumeaux numériques, intelligence artificielle, prototypage rapide. Le bureau des projets de convergence.",
            eco_tech_tag:"Stratégie & Pilotage",eco_tech_desc:"Le Corps. Holding stratégique, protection des brevets, pilotage à horizon 2030-2050. Fonds de dotation verrouillé.",
            eco_duts_tag:"Formation & Excellence",eco_duts_desc:"Le Sang. Écoles d'ingénierie système, électronique, chimie énergétique et cryptographie. L'étudiant est co-créateur.",
            quote_text:"De l'Atome au Logiciel, tout est pensé, conçu et sécurisé ici",quote_source:"— Doctrine DAIGU, Livre Blanc Stratégique",
            prod_tag:"Portfolio",prod_title:"Nos domaines d'innovation",prod_lead:"Huit verticales technologiques intégrées, toutes alimentées par notre système d'exploitation souverain DAIGU OS.",
            prod_phone:"Smartphone sous DAIGU OS",prod_console:"Console de jeu nouvelle génération",prod_pc:"PC & stations de travail",prod_os:"Système d'exploitation souverain",prod_cloud:"Cloud national guinéen",prod_ev:"Véhicule électrique africain",prod_cyber:"Cybersécurité Zéro Trust",prod_drone:"Drones & IoT tropicalisés",
            fil_tag:"Structure opérationnelle",fil_title:"La pile technologique",fil_lead:"Quatre filiales, une chaîne de valeur verticale. Chaque couche alimente celle du dessus.",
            fil_04_desc:"Matériel & Intégration. Drones, tablettes durcies, équipements réseau. Conception « TROPIC-PROOF ».",fil_04_role:"Sommet visible",
            fil_03_desc:"Logiciel & IA. DAIGU OS (micro-noyau temps réel), IA agentique, moteur de jumeau numérique.",fil_03_role:"Noyau souverain",
            fil_02_desc:"Cyber & Infrastructures. Cloud national guinéen, red team interne, architecture zéro trust, résilience offline.",fil_02_role:"Bouclier",
            fil_01_desc:"Matériaux & Batteries. Stockage stationnaire, valorisation des résidus de bauxite, micro-grids solaires.",fil_01_role:"Base énergétique",
            road_tag:"Feuille de route",road_title:"2026 – 2035",road_lead:"Un plan décennal structuré en quatre phases, de la fondation juridique à l'expansion régionale.",
            road_phase0:"Phase 0",road_phase0_title:"Fondations Silencieuses",road_phase0_desc:"Constitution juridique de la holding, ouverture de la première cohorte DUTS, acquisition du terrain DLC.",road_phase0_year:"Année 1",
            road_phase1:"Phase 1",road_phase1_title:"Noyau Souverain",road_phase1_desc:"Sortie de DAIGU OS Lite V0.1. Lancement du Cloud privé guinéen. Premiers projets de convergence.",road_phase1_year:"Année 2 – 4",
            road_phase2:"Phase 2",road_phase2_title:"Incarnation Physique",road_phase2_desc:"Assemblage du premier terminal autonome : tablette durcie sous DAIGU OS. Production pilote de batteries.",road_phase2_year:"Année 4 – 7",
            road_phase3:"Phase 3",road_phase3_title:"Démultiplication",road_phase3_desc:"Expansion régionale du Cloud. DAIGU OS sur TV et véhicules. DUTS ouvre ses portes à la sous-région.",road_phase3_year:"Année 7 – 10",
            ctc_tag:"Contact",ctc_title:"Partenariat stratégique",ctc_lead:"DAIGU est ouvert à la coopération bilatérale dans le cadre des Ateliers Luban et du FOCAC.",
            ctc_address_title:"Adresse",ctc_email_title:"Email",ctc_private_title:"Espace Partenaires",ctc_private_link:"🔒 Accès sécurisé",
            ctc_form_note:"Nous répondons sous 48 heures.",ctc_send:"Envoyer",
            footer_motto:"Soyez des fous à la porte de la raison des hommes",footer_copy:"La Guinée des Lumières.",
            footer_nav_title:"Navigation",footer_docs_title:"Documents",footer_doc_wp:"Livre Blanc (PDF)",footer_doc_partner:"Dossier Partenariat (PDF)",footer_private:"Espace Partenaires"
        },
        en: {
            nav_ecosystem:"Ecosystem",nav_products:"Products",nav_filiales:"Subsidiaries",nav_roadmap:"Roadmap",nav_contact:"Contact",
            hero_badge:"Guinea • 2026",hero_title_main:"The Guinea of",hero_title_accent:"Lights",
            hero_motto:"Be fools at the gate of men's reason",hero_scroll:"Discover the project",
            eco_tag:"Architecture",eco_title:"A complete, sovereign ecosystem",eco_lead:"Three founding pillars for lasting technological independence. From laboratory to university, every link is integrated.",
            eco_dlc_tag:"Research & Development",eco_dlc_desc:"The Brain. Digital twins, artificial intelligence, rapid prototyping. The Convergence Projects Office.",
            eco_tech_tag:"Strategy & Steering",eco_tech_desc:"The Body. Strategic holding, patent protection, 2030-2050 steering. Locked endowment fund.",
            eco_duts_tag:"Training & Excellence",eco_duts_desc:"The Blood. Schools of systems engineering, electronics, energy chemistry, and cryptography. The student is a co-creator.",
            quote_text:"From the Atom to the Software, everything is designed, built, and secured here",quote_source:"— DAIGU Doctrine, Strategic White Paper",
            prod_tag:"Portfolio",prod_title:"Our innovation domains",prod_lead:"Eight integrated technological verticals, all powered by our sovereign operating system DAIGU OS.",
            prod_phone:"Smartphone running DAIGU OS",prod_console:"Next-gen gaming console",prod_pc:"PCs & workstations",prod_os:"Sovereign operating system",prod_cloud:"Guinean national cloud",prod_ev:"African electric vehicle",prod_cyber:"Zero Trust cybersecurity",prod_drone:"Tropicalized drones & IoT",
            fil_tag:"Operational Structure",fil_title:"The technology stack",fil_lead:"Four subsidiaries, one vertical value chain. Each layer feeds the one above.",
            fil_04_desc:"Hardware & Integration. Drones, rugged tablets, network equipment. \"TROPIC-PROOF\" design.",fil_04_role:"Visible Summit",
            fil_03_desc:"Software & AI. DAIGU OS (real-time micro-kernel), agentic AI, digital twin engine.",fil_03_role:"Sovereign Kernel",
            fil_02_desc:"Cyber & Infrastructure. Guinean national cloud, internal red team, zero trust architecture, offline resilience.",fil_02_role:"Shield",
            fil_01_desc:"Materials & Batteries. Stationary storage, bauxite residue valorization, solar micro-grids.",fil_01_role:"Energy Base",
            road_tag:"Roadmap",road_title:"2026 – 2035",road_lead:"A ten-year plan structured in four phases, from legal foundation to regional expansion.",
            road_phase0:"Phase 0",road_phase0_title:"Silent Foundations",road_phase0_desc:"Legal constitution of the holding, opening of the first DUTS cohort, DLC land acquisition.",road_phase0_year:"Year 1",
            road_phase1:"Phase 1",road_phase1_title:"Sovereign Kernel",road_phase1_desc:"Release of DAIGU OS Lite V0.1. Launch of the Guinean Private Cloud. First convergence projects.",road_phase1_year:"Year 2 – 4",
            road_phase2:"Phase 2",road_phase2_title:"Physical Incarnation",road_phase2_desc:"Assembly of the first autonomous terminal: rugged tablet running DAIGU OS. Pilot battery production.",road_phase2_year:"Year 4 – 7",
            road_phase3:"Phase 3",road_phase3_title:"Scaling Up",road_phase3_desc:"Regional Cloud expansion. DAIGU OS on TV and vehicles. DUTS opens to the sub-region.",road_phase3_year:"Year 7 – 10",
            ctc_tag:"Contact",ctc_title:"Strategic Partnership",ctc_lead:"DAIGU is open to bilateral cooperation within the framework of Luban Workshops and FOCAC.",
            ctc_address_title:"Address",ctc_email_title:"Email",ctc_private_title:"Partners Area",ctc_private_link:"🔒 Secure Access",
            ctc_form_note:"We respond within 48 hours.",ctc_send:"Send",
            footer_motto:"Be fools at the gate of men's reason",footer_copy:"The Guinea of Lights.",
            footer_nav_title:"Navigation",footer_docs_title:"Documents",footer_doc_wp:"White Paper (PDF)",footer_doc_partner:"Partnership Dossier (PDF)",footer_private:"Partners Area"
        },
        zh: {
            nav_ecosystem:"生态系统",nav_products:"产品",nav_filiales:"子公司",nav_roadmap:"路线图",nav_contact:"联系",
            hero_badge:"几内亚 • 2026",hero_title_main:"光明",hero_title_accent:"几内亚",
            hero_motto:"做人类理性之门前的疯子",hero_scroll:"探索项目",
            eco_tag:"架构",eco_title:"完整且主权的生态系统",eco_lead:"三个创始支柱，实现持久的技术独立。从实验室到大学，每个环节都紧密相连。",
            eco_dlc_tag:"研发",eco_dlc_desc:"大脑。数字孪生、人工智能、快速原型制造。融合项目办公室。",
            eco_tech_tag:"战略与指导",eco_tech_desc:"身体。战略控股、专利保护、2030-2050年规划。锁定捐赠基金。",
            eco_duts_tag:"培训与卓越",eco_duts_desc:"血液。系统工程、电子、能源化学和密码学学院。学生是共同创造者。",
            quote_text:"从原子到软件，一切都在这里设计、制造和保护",quote_source:"— DAIGU教义，战略白皮书",
            prod_tag:"产品组合",prod_title:"我们的创新领域",prod_lead:"八个集成的技术垂直领域，全部由我们的主权操作系统DAIGU OS驱动。",
            prod_phone:"运行DAIGU OS的智能手机",prod_console:"次世代游戏主机",prod_pc:"电脑与工作站",prod_os:"主权操作系统",prod_cloud:"几内亚国家云",prod_ev:"非洲电动汽车",prod_cyber:"零信任网络安全",prod_drone:"热带化无人机与物联网",
            fil_tag:"运营结构",fil_title:"技术栈",fil_lead:"四个子公司，一条垂直价值链。每一层都滋养上一层。",
            fil_04_desc:"硬件与集成。无人机、加固平板、网络设备。\"热带防护\"设计。",fil_04_role:"可见之巅",
            fil_03_desc:"软件与AI。DAIGU OS（实时微内核）、智能代理AI、数字孪生引擎。",fil_03_role:"主权内核",
            fil_02_desc:"网络与基础设施。几内亚国家云、内部红队、零信任架构、离线韧性。",fil_02_role:"盾牌",
            fil_01_desc:"材料与电池。固定存储、铝土矿废渣增值、太阳能微电网。",fil_01_role:"能源基础",
            road_tag:"路线图",road_title:"2026 – 2035",road_lead:"一个十年计划，分为四个阶段，从法律基础到区域扩张。",
            road_phase0:"第0阶段",road_phase0_title:"沉默的奠基",road_phase0_desc:"控股公司法律注册，首批DUTS学员开学，DLC土地获取。",road_phase0_year:"第一年",
            road_phase1:"第1阶段",road_phase1_title:"主权内核",road_phase1_desc:"发布DAIGU OS Lite V0.1。几内亚私有云上线。首批融合项目。",road_phase1_year:"第2-4年",
            road_phase2:"第2阶段",road_phase2_title:"物理实体",road_phase2_desc:"首台自主终端组装：运行DAIGU OS的加固平板。电池中试生产。",road_phase2_year:"第4-7年",
            road_phase3:"第3阶段",road_phase3_title:"扩展",road_phase3_desc:"云服务区域扩展。DAIGU OS应用于电视和车辆。DUTS向次区域开放。",road_phase3_year:"第7-10年",
            ctc_tag:"联系",ctc_title:"战略合作",ctc_lead:"DAIGU对在鲁班工坊和中非合作论坛框架下的双边合作持开放态度。",
            ctc_address_title:"地址",ctc_email_title:"邮箱",ctc_private_title:"合作伙伴专区",ctc_private_link:"🔒 安全访问",
            ctc_form_note:"我们在48小时内回复。",ctc_send:"发送",
            footer_motto:"做人类理性之门前的疯子",footer_copy:"光明几内亚。",
            footer_nav_title:"导航",footer_docs_title:"文档",footer_doc_wp:"白皮书 (PDF)",footer_doc_partner:"合作档案 (PDF)",footer_private:"合作伙伴专区"
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

    // --- REVEAL ---
    document.querySelectorAll('.card, .stack-item, .timeline-card').forEach(el => el.classList.add('reveal'));
    const obs = new IntersectionObserver((entries) => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }); }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

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