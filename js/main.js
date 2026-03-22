/**
 * Academic Personal Website - Zhenning Wang
 * Language switching, navigation, and interactions
 */

(function () {
    'use strict';

    // === Language Switching ===
    let currentLang = 'zh';

    const langToggle = document.getElementById('langToggle');
    const langLabel = document.getElementById('langLabel');

    function switchLanguage(lang) {
        currentLang = lang;

        // Update all elements with data-zh and data-en attributes
        document.querySelectorAll('[data-zh][data-en]').forEach(function (el) {
            const text = el.getAttribute('data-' + lang);
            if (text !== null) {
                // Check if the content contains HTML
                if (text.includes('<') && text.includes('>')) {
                    el.innerHTML = text;
                } else {
                    el.textContent = text;
                }
            }
        });

        // Update html lang attribute
        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

        // Update toggle button label
        langLabel.textContent = lang === 'zh' ? 'EN' : '中文';

        // Update page title
        document.title = lang === 'zh' ? '王振宁 | Zhenning Wang' : 'Zhenning Wang | 王振宁';

        // Store preference
        try {
            localStorage.setItem('preferred-lang', lang);
        } catch (e) {
            // localStorage not available
        }
    }

    langToggle.addEventListener('click', function () {
        switchLanguage(currentLang === 'zh' ? 'en' : 'zh');
    });

    // Restore language preference
    try {
        var savedLang = localStorage.getItem('preferred-lang');
        if (savedLang && (savedLang === 'zh' || savedLang === 'en')) {
            switchLanguage(savedLang);
        }
    } catch (e) {
        // localStorage not available
    }

    // === Mobile Navigation Toggle ===
    var navToggle = document.getElementById('navToggle');
    var navMenu = document.getElementById('navMenu');

    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('open');
        // Animate hamburger
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navMenu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            navMenu.classList.remove('open');
            navToggle.classList.remove('active');
        });
    });

    // === Navbar Scroll Effect ===
    var navbar = document.getElementById('navbar');
    var lastScroll = 0;

    function onScroll() {
        var scrollY = window.scrollY || window.pageYOffset;

        // Add shadow when scrolled
        if (scrollY > 10) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Back to top button
        var backToTop = document.getElementById('backToTop');
        if (scrollY > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }

        // Active section highlighting
        updateActiveNav();

        lastScroll = scrollY;
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    // === Back to Top ===
    document.getElementById('backToTop').addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // === Active Navigation Highlighting ===
    var sections = document.querySelectorAll('.section[id]');
    var navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

    function updateActiveNav() {
        var scrollY = window.scrollY || window.pageYOffset;
        var windowHeight = window.innerHeight;

        sections.forEach(function (section) {
            var top = section.offsetTop - 100;
            var bottom = top + section.offsetHeight;

            if (scrollY >= top && scrollY < bottom) {
                var id = section.getAttribute('id');
                navLinks.forEach(function (link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // === Smooth scroll for anchor links (fallback) ===
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;

            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                var offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // === Intersection Observer for fade-in animations ===
    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        // Add initial styles and observe
        document.querySelectorAll('.pub-item, .project-item, .award-item, .experience-item, .timeline-item, .news-item').forEach(function (el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(16px)';
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(el);
        });
    }

    // Initial call
    onScroll();
})();
