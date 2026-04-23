// ============================================
// DAIGU TECHNOLOGY — SCRIPT PRINCIPAL
// ============================================

document.addEventListener('DOMContentLoaded', () => {

    // --- SCROLL NAVBAR ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });

    // --- HAMBURGER MENU ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // --- COOKIE BANNER ---
    const cookieBanner = document.getElementById('cookieBanner');
    const cookieAccept = document.getElementById('cookieAccept');
    if (!localStorage.getItem('daigu-cookies-accepted')) {
        cookieBanner.style.display = 'flex';
    }
    cookieAccept.addEventListener('click', () => {
        cookieBanner.style.display = 'none';
        localStorage.setItem('daigu-cookies-accepted', 'true');
    });

    // --- FAQ ACCORDION ---
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const faqItem = button.parentElement;
            const isActive = faqItem.classList.contains('active');

            // Fermer tous
            document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));
            // Ouvrir celui cliqué
            if (!isActive) faqItem.classList.add('active');
        });
    });

    // --- REVEAL ON SCROLL ---
    const revealSections = () => {
        const sections = document.querySelectorAll('.section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(section);
        });

        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.opacity = '1';
            hero.style.transform = 'translateY(0)';
        }
    };
    revealSections();

    // --- STACK HOVER ANIMATION ---
    document.querySelectorAll('.stack-item').forEach(item => {
        item.addEventListener('click', function() {
            this.style.transform = 'scale(1.01)';
            setTimeout(() => this.style.transform = '', 200);
        });
    });

    // --- BLOG DYNAMIQUE ---
    const blogGrid = document.getElementById('blogGrid');
    if (blogGrid) {
        const posts = [
            { title: 'blog_post1_title', date: 'blog_post1_date', excerpt: 'blog_post1_excerpt' },
            { title: 'blog_post2_title', date: 'blog_post2_date', excerpt: 'blog_post2_excerpt' },
            { title: 'blog_post3_title', date: 'blog_post3_date', excerpt: 'blog_post3_excerpt' }
        ];

        posts.forEach(post => {
            const card = document.createElement('article');
            card.className = 'blog-card';
            card.innerHTML = `
                <div class="blog-date" data-i18n="${post.date}">${post.date}</div>
                <h3 data-i18n="${post.title}">${post.title}</h3>
                <p data-i18n="${post.excerpt}">${post.excerpt}</p>
                <a href="#" class="blog-readmore" data-i18n="blog_readmore">Lire la suite →</a>
            `;
            blogGrid.appendChild(card);
        });
    }

    // --- CONTACT FORM ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const button = contactForm.querySelector('button');
            const originalText = button.textContent;
            button.textContent = '✓ Message envoyé';
            button.style.background = 'var(--accent-success)';
            button.disabled = true;
            contactForm.reset();
            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = '';
                button.disabled = false;
            }, 3000);
        });
    }

});