document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Fade in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Navigation background on scroll
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 100) {
            nav.style.background = document.body.classList.contains('light-theme') 
                ? 'rgba(255, 255, 255, 0.95)' 
                : 'rgba(15, 23, 42, 0.95)';
        } else {
            nav.style.background = document.body.classList.contains('light-theme') 
                ? 'rgba(255, 255, 255, 0.8)' 
                : 'rgba(15, 23, 42, 0.8)';
        }

        // Scroll-to-top button visibility
        const scrollToTopBtn = document.querySelector('#scroll-to-top');
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    // Scroll-to-top button functionality
    document.querySelector('#scroll-to-top').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Form submission
    document.querySelector('.contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! I\'ll get back to you soon.');
    });

    // Theme toggle
    const themeToggle = document.querySelector('#theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        themeToggle.textContent = document.body.classList.contains('light-theme') ? '🌞' : '🌙';
    });

    // Typing effect for hero title
    const text = "Alex Chen";
    let index = 0;
    const typedText = document.querySelector('#typed-text');
    
    function type() {
        if (index < text.length) {
            typedText.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        } else {
            typedText.style.animation = 'none';
        }
    }
    
    typedText.style.animation = 'typing 1s steps(9, end) forwards';
    setTimeout(type, 100);

    // Project filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tech = button.getAttribute('data-tech');
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            projectCards.forEach(card => {
                if (tech === 'all' || card.getAttribute('data-tech').includes(tech)) {
                    card.style.display = 'block';
                    card.classList.add('fade-in');
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Floating elements random movement
    document.querySelectorAll('.floating-element').forEach(element => {
        setInterval(() => {
            const x = Math.random() * 20 - 10;
            const y = Math.random() * 20 - 10;
            element.style.transform = `translate(${x}px, ${y}px)`;
        }, 3000);
    });
});