// ============================================
// DAIGU TECHNOLOGY — SCRIPTS
// ============================================

document.addEventListener('DOMContentLoaded', () => {

    // --- INTERNATIONALISATION ---
    const translations = {
        fr: {
            hero_subtitle: "TECHNOLOGY",
            hero_title: "La Guinée des Lumières",
            hero_slogan: "\"Soyez des fous à la porte de la raison des hommes.\"",
            hero_scroll: "Découvrir",
            vision_tag: "Notre Vision",
            vision_title: "L'Inversion de la Dépendance",
            vision_text: "Le logiciel souverain d'abord. Le matériel ensuite. Aucun produit DAIGU ne sort sans son système d'exploitation, son cloud et sa cybersécurité.",
            vision_text_secondary: "La leçon de la guerre Huawei-Google est notre boussole.",
            trinity_tag: "L'Écosystème",
            trinity_title: "La Trinité Fondatrice",
            trinity_dlc: "Le Cerveau — R&D, Jumeaux Numériques, Prototypage",
            trinity_tech: "Le Corps — Holding, Stratégie, Brevets",
            trinity_duts: "Le Sang — Formation des élites techniques guinéennes",
            products_tag: "Nos Domaines",
            products_title: "L'Écosystème Produits",
            filiales_tag: "La Pile Technologique",
            filiales_title: "Nos Filiales Opérationnelles",
            stack_electronics: "Drones, Tablettes durcies, Équipements Réseau. Conception \"TROPIC-PROOF\".",
            stack_core: "DAIGU OS (Micro-Noyau), IA, Moteur de Jumeau Numérique.",
            stack_cloud: "Cloud National Guinéen, Red Team Interne, Sécurité Zéro Trust.",
            stack_energy: "Matériaux, Batteries, Valorisation des résidus de bauxite.",
            contact_tag: "Contact",
            contact_title: "Partenariat Stratégique",
            contact_text: "DAIGU est ouvert à la coopération bilatérale dans le cadre des Ateliers Luban et du FOCAC.",
            contact_private: "🔒 Espace Partenaires",
            contact_send: "Envoyer"
        },
        en: {
            hero_subtitle: "TECHNOLOGY",
            hero_title: "The Guinea of Lights",
            hero_slogan: "\"Be fools at the gate of men's reason.\"",
            hero_scroll: "Discover",
            vision_tag: "Our Vision",
            vision_title: "Inverting Dependency",
            vision_text: "Sovereign software first. Hardware second. No DAIGU product ships without its operating system, cloud, and cybersecurity.",
            vision_text_secondary: "The lesson of the Huawei-Google war is our compass.",
            trinity_tag: "The Ecosystem",
            trinity_title: "The Founding Trinity",
            trinity_dlc: "The Brain — R&D, Digital Twins, Prototyping",
            trinity_tech: "The Body — Holding, Strategy, Patents",
            trinity_duts: "The Blood — Training Guinean technical elites",
            products_tag: "Our Domains",
            products_title: "The Product Ecosystem",
            filiales_tag: "The Technology Stack",
            filiales_title: "Our Operational Subsidiaries",
            stack_electronics: "Drones, Rugged Tablets, Network Equipment. \"TROPIC-PROOF\" design.",
            stack_core: "DAIGU OS (Micro-Kernel), AI, Digital Twin Engine.",
            stack_cloud: "Guinean National Cloud, Internal Red Team, Zero Trust Security.",
            stack_energy: "Materials, Batteries, Bauxite residue valorization.",
            contact_tag: "Contact",
            contact_title: "Strategic Partnership",
            contact_text: "DAIGU is open to bilateral cooperation within the framework of Luban Workshops and FOCAC.",
            contact_private: "🔒 Partners Area",
            contact_send: "Send"
        },
        zh: {
            hero_subtitle: "TECHNOLOGY",
            hero_title: "光明几内亚",
            hero_slogan: "\"做人类理性之门前的疯子。\"",
            hero_scroll: "探索",
            vision_tag: "我们的愿景",
            vision_title: "扭转依赖",
            vision_text: "主权软件优先。硬件其次。没有任何DAIGU产品会在缺少自研操作系统、云和网络安全的情况下出厂。",
            vision_text_secondary: "华为与谷歌之战的教训是我们的指南针。",
            trinity_tag: "生态系统",
            trinity_title: "创始三位一体",
            trinity_dlc: "大脑 — 研发、数字孪生、原型制造",
            trinity_tech: "身体 — 控股、战略、专利",
            trinity_duts: "血液 — 培养几内亚技术精英",
            products_tag: "我们的领域",
            products_title: "产品生态系统",
            filiales_tag: "技术栈",
            filiales_title: "我们的运营子公司",
            stack_electronics: "无人机、加固平板、网络设备。\"热带防护\"设计。",
            stack_core: "DAIGU OS（微内核）、人工智能、数字孪生引擎。",
            stack_cloud: "几内亚国家云、内部红队、零信任安全。",
            stack_energy: "材料、电池、铝土矿废渣增值利用。",
            contact_tag: "联系",
            contact_title: "战略合作",
            contact_text: "DAIGU对在鲁班工坊和中非合作论坛框架下的双边合作持开放态度。",
            contact_private: "🔒 合作伙伴专区",
            contact_send: "发送"
        }
    };

    let currentLang = 'fr';

    function applyLanguage(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
        localStorage.setItem('daigu-lang', lang);
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            if (translations[lang]) applyLanguage(lang);
        });
    });

    // Restaurer la langue sauvegardée ou détecter celle du navigateur
    const savedLang = localStorage.getItem('daigu-lang');
    const browserLang = navigator.language.slice(0, 2);
    if (savedLang && translations[savedLang]) {
        applyLanguage(savedLang);
    } else if (translations[browserLang]) {
        applyLanguage(browserLang);
    } else {
        applyLanguage('fr');
    }

    // --- REVEAL AU SCROLL ---
    const revealElements = document.querySelectorAll('.split-content, .trinity-grid, .products-grid, .stack, .split-form');
    revealElements.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => observer.observe(el));

    // --- FORMULAIRE ---
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.textContent;
            btn.textContent = '⏳ Envoi...';
            btn.disabled = true;

            try {
                const response = await fetch('https://formspree.io/f/VOTRE_ID_FORMSPREE', {
                    method: 'POST',
                    body: new FormData(form),
                    headers: { 'Accept': 'application/json' }
                });
                btn.textContent = response.ok ? '✅ Envoyé' : '❌ Erreur';
                if (response.ok) form.reset();
            } catch {
                btn.textContent = '❌ Erreur';
            }

            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
            }, 3500);
        });
    }

});