// ==========================================
// PORTFOLIO WEBSITE - INTERACTIVE FEATURES
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // NAVIGATION
    // ==========================================
    
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    const navLinkItems = document.querySelectorAll('.nav-link');
    
    // Sticky navbar on scroll
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add shadow when scrolled
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Active nav link based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavLink() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinkItems.forEach(link => link.classList.remove('active'));
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavLink);
    
    // ==========================================
    // SMOOTH SCROLLING
    // ==========================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#" or empty
            if (href === '#' || href === '') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ==========================================
    // SCROLL TO TOP BUTTON
    // ==========================================
    
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ==========================================
    // INTERSECTION OBSERVER - FADE IN ANIMATIONS
    // ==========================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const fadeInElements = document.querySelectorAll(
        '.project-card, .publication-card, .timeline-item, .skill-category, .education-card, .highlight-card'
    );
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    fadeInElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
    
    // ==========================================
    // SKILL BARS ANIMATION
    // ==========================================
    
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillsSection = document.querySelector('#skills');
    
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 200);
                });
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }
    
    // ==========================================
    // STATISTICS COUNTER ANIMATION
    // ==========================================
    
    const statNumbers = document.querySelectorAll('.stat-number');
    const heroSection = document.querySelector('.hero');
    let hasAnimated = false;
    
    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + '+';
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + '+';
            }
        }, 16);
    }
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.textContent);
                    if (!isNaN(target)) {
                        animateCounter(stat, target);
                    }
                });
            }
        });
    }, { threshold: 0.5 });
    
    if (heroSection) {
        statsObserver.observe(heroSection);
    }
    
    // ==========================================
    // TYPING EFFECT FOR HERO SUBTITLE
    // ==========================================
    
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const originalText = heroSubtitle.textContent;
        const titles = [
            'Research & Data Analyst',
            'Machine Learning Specialist',
            'Real Estate Analytics Expert',
            'Sports Performance Analyst',
            'Healthcare AI Researcher'
        ];
        
        let titleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingDelay = 150;
        
        function typeEffect() {
            const currentTitle = titles[titleIndex];
            
            if (isDeleting) {
                heroSubtitle.textContent = currentTitle.substring(0, charIndex - 1);
                charIndex--;
                typingDelay = 50;
            } else {
                heroSubtitle.textContent = currentTitle.substring(0, charIndex + 1);
                charIndex++;
                typingDelay = 150;
            }
            
            if (!isDeleting && charIndex === currentTitle.length) {
                isDeleting = true;
                typingDelay = 2000; // Wait before deleting
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                titleIndex = (titleIndex + 1) % titles.length;
                typingDelay = 500; // Wait before typing next title
            }
            
            setTimeout(typeEffect, typingDelay);
        }
        
        // Start typing effect after 1 second
        setTimeout(() => {
            heroSubtitle.textContent = '';
            typeEffect();
        }, 1000);
    }
    
    // ==========================================
    // PROJECT CARD INTERACTIONS
    // ==========================================
    
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // ==========================================
    // TIMELINE ANIMATION
    // ==========================================
    
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.2 });
    
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        timelineObserver.observe(item);
    });
    
    // ==========================================
    // PARALLAX EFFECT FOR HERO SECTION
    // ==========================================
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroContent = document.querySelector('.hero-content');
        
        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
            heroContent.style.opacity = 1 - (scrolled / 500);
        }
    });
    
    // ==========================================
    // PUBLICATION CARDS HOVER EFFECT
    // ==========================================
    
    const publicationCards = document.querySelectorAll('.publication-card');
    
    publicationCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const pubNumber = this.querySelector('.pub-number');
            if (pubNumber) {
                pubNumber.style.opacity = '0.6';
                pubNumber.style.transform = 'scale(1.2)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const pubNumber = this.querySelector('.pub-number');
            if (pubNumber) {
                pubNumber.style.opacity = '0.3';
                pubNumber.style.transform = 'scale(1)';
            }
        });
    });
    
    // ==========================================
    // LAZY LOADING FOR IMAGES (if any are added)
    // ==========================================
    
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // ==========================================
    // COPY EMAIL TO CLIPBOARD
    // ==========================================
    
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    
    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const email = this.href.replace('mailto:', '');
            
            // Try to copy to clipboard
            if (navigator.clipboard) {
                e.preventDefault();
                navigator.clipboard.writeText(email).then(() => {
                    // Show tooltip or notification
                    showNotification('Email copied to clipboard!');
                    // Still open email client after a delay
                    setTimeout(() => {
                        window.location.href = this.href;
                    }, 1000);
                });
            }
        });
    });
    
    // ==========================================
    // NOTIFICATION SYSTEM
    // ==========================================
    
    function showNotification(message, duration = 3000) {
        // Remove existing notification if any
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            bottom: 2rem;
            left: 50%;
            transform: translateX(-50%);
            background-color: var(--primary-color);
            color: white;
            padding: 1rem 2rem;
            border-radius: 0.5rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            z-index: 10000;
            animation: slideUp 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Remove after duration
        setTimeout(() => {
            notification.style.animation = 'slideDown 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, duration);
    }
    
    // ==========================================
    // ADD CSS ANIMATIONS FOR NOTIFICATIONS
    // ==========================================
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideUp {
            from {
                transform: translateX(-50%) translateY(100px);
                opacity: 0;
            }
            to {
                transform: translateX(-50%) translateY(0);
                opacity: 1;
            }
        }
        
        @keyframes slideDown {
            from {
                transform: translateX(-50%) translateY(0);
                opacity: 1;
            }
            to {
                transform: translateX(-50%) translateY(100px);
                opacity: 0;
            }
        }
        
        .nav-link.active {
            color: var(--primary-color);
        }
        
        .nav-link.active::after {
            width: 100%;
        }
    `;
    document.head.appendChild(style);
    
    // ==========================================
    // DARK MODE TOGGLE (Optional - for future enhancement)
    // ==========================================
    
    // Uncomment to enable dark mode feature
    /*
    const darkModeToggle = document.createElement('button');
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    darkModeToggle.className = 'dark-mode-toggle';
    darkModeToggle.style.cssText = `
        position: fixed;
        bottom: 6rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--primary-color);
        color: white;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: var(--shadow-lg);
        z-index: 998;
    `;
    
    document.body.appendChild(darkModeToggle);
    
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const icon = darkModeToggle.querySelector('i');
        if (document.body.classList.contains('dark-mode')) {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    });
    */
    
    // ==========================================
    // PERFORMANCE OPTIMIZATION
    // ==========================================
    
    // Debounce function for scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Apply debounce to scroll-heavy functions
    const debouncedHighlight = debounce(highlightNavLink, 100);
    window.addEventListener('scroll', debouncedHighlight);
    
    // ==========================================
    // CONSOLE MESSAGE
    // ==========================================
    
    console.log('%c👋 Welcome to Md Mohaiminul Islam Emon\'s Portfolio!', 'color: #2563eb; font-size: 20px; font-weight: bold;');
    console.log('%cInterested in the code? Check out the GitHub repository!', 'color: #64748b; font-size: 14px;');
    console.log('%c🔗 https://github.com/Mohaiminul036', 'color: #10b981; font-size: 14px;');
    
    // ==========================================
    // INITIALIZATION COMPLETE
    // ==========================================
    
    console.log('%c✓ Portfolio initialized successfully', 'color: #10b981; font-weight: bold;');
});

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Get scroll percentage
function getScrollPercentage() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    return (winScroll / height) * 100;
}

// ==========================================
// HANDLE PAGE LOAD PERFORMANCE
// ==========================================

window.addEventListener('load', () => {
    // Hide loading screen if exists
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 300);
    }
    
    // Log performance metrics
    if (window.performance) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`⚡ Page loaded in ${pageLoadTime}ms`);
    }
});

// ==========================================
// ERROR HANDLING
// ==========================================

window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.error);
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
});

