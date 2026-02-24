document.addEventListener('DOMContentLoaded', () => {
    // --- Scroll Animations (Intersection Observer) ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));


    // --- Card Hover Effect (Mouse Tracking) ---
    const cards = document.querySelectorAll('.card-hover');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });


    // --- Navbar Scroll Effect & Active Link ---
    const navbar = document.querySelector('header');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        // Navbar blur effect
        if (window.scrollY > 50) {
            navbar.classList.add('py-3', 'bg-background/60', 'backdrop-blur-2xl', 'border-b', 'border-border/50', 'shadow-sm');
            navbar.classList.remove('py-5', 'bg-transparent');
        } else {
            navbar.classList.add('py-5', 'bg-transparent');
            navbar.classList.remove('py-3', 'bg-background/60', 'backdrop-blur-2xl', 'border-b', 'border-border/50', 'shadow-sm');
        }

        // Active link highlight
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 300)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-primary');
            link.classList.add('text-muted-foreground');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('text-primary');
                link.classList.remove('text-muted-foreground');
            }
        });
    });


    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenuObj = document.getElementById('mobile-menu-overlay');
    const mobileMenuLinks = document.querySelectorAll('.mobile-nav-link');
    const mobileMenuIcon = mobileMenuBtn ? mobileMenuBtn.querySelector('svg') : null; // simplified logic for icon

    if (mobileMenuBtn && mobileMenuObj) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuObj.classList.toggle('hidden');
            mobileMenuObj.classList.toggle('flex');

            // Toggle icon (optional, simplified for vanilla)
            if (mobileMenuObj.classList.contains('flex')) {
                // Open state
                document.body.style.overflow = 'hidden';
            } else {
                // Closed state
                document.body.style.overflow = 'auto';
            }
        });

        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuObj.classList.add('hidden');
                mobileMenuObj.classList.remove('flex');
                document.body.style.overflow = 'auto';
            });
        });
    }

    // --- Theme Toggle ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Check for saved theme preference or use default (dark)
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';

    // Default to dark if no preference (since :root is dark)
    const initialTheme = savedTheme || 'dark';

    function setTheme(theme) {
        if (theme === 'light') {
            htmlElement.classList.add('light');
            htmlElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            htmlElement.classList.remove('light');
            htmlElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    }

    // Apply initial theme
    setTheme(initialTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const isDark = htmlElement.classList.contains('dark');
            setTheme(isDark ? 'light' : 'dark');
        });
    }

    // --- Smooth Scroll for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
