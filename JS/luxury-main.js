document.addEventListener('DOMContentLoaded', () => {
    // GSAP ScrollTrigger Registration
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis for Smooth Scrolling
    const lenis = new Lenis({
        duration: 1.0, // Snappier
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.1,
        smoothTouch: false,
        touchMultiplier: 1.5,
        infinite: false,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Fade-in Animations for Sections
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => {
        gsap.from(el, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Car Cards staggered reveal
    if (document.querySelector('.car-grid')) {
        gsap.from('.premium-card', {
            opacity: 0,
            y: 40,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.car-grid',
                start: 'top 85%'
            }
        });
    }

    // Hero Content Animation
    if (document.querySelector('.hero-content')) {
        gsap.from('.hero-title', {
            opacity: 0,
            y: 100,
            duration: 1.5,
            ease: 'power4.out',
            delay: 0.5
        });
        gsap.from('.hero-subtitle', {
            opacity: 0,
            y: 20,
            duration: 1,
            ease: 'power2.out',
            delay: 1.2
        });
    }

    // Navbar scroll effect
    const nav = document.querySelector('.premium-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.padding = '1rem 4rem';
            nav.style.background = 'rgba(5, 5, 5, 0.9)';
        } else {
            nav.style.padding = '1.5rem 4rem';
            nav.style.background = 'var(--glass-bg)';
        }
    });
});
