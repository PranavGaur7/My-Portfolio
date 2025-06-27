// Portfolio data
const portfolioData = [
    {
        "id": 1,
        "title": "Local Exchange",
        "category": "development",
        "image": "https://png.pngtree.com/png-vector/20240201/ourmid/pngtree-ui-3d-model-cartoon-style-render-illustration-png-image_11583422.png",
        "description": "A full-stack web app for local buying, selling, and trading.",
        "technologies": ["React", "Node.js", "MongoDB", "Socket.io"],
        "year": "2024"
    },
    {
        "id": 2,
        "title": "blueare",
        "category": "development",
        "image": "https://images.ctfassets.net/aoyx73g9h2pg/5xTOYud1foLeK6Gn7QaKlB/9da738c1e892da28ce682d99374fa7a9/1J4FJKgLvSAxv0ix3doSl387kPHCCLYcI_1-Featured-1024x572.jpg",
        "description": "blueare is a Redis clone I had built from scratch using C++",
        "technologies": ["C++", "C"],
        "year": "2025"
    },
    {
        "id": 3,
        "title": "Smart Parking System",
        "category": "design",
        "image": "https://media.springernature.com/lw685/springer-static/image/art%3A10.1007%2Fs41870-021-00725-8/MediaObjects/41870_2021_725_Fig1_HTML.png",
        "description": "IoT-based solution designed to automate parking management",
        "technologies": ["HTML", "CSS", "Js", "Embedded C"],
        "year": "2025"
    },
    {
        "id": 4,
        "title": "Real-Time Chatting App",
        "category": "development",
        "image": "https://png.pngtree.com/png-vector/20240201/ourmid/pngtree-ui-3d-model-cartoon-style-render-illustration-png-image_11583422.png",
        "description": "A real-time messaging application enabling instant communication between users.",
        "technologies": ["React", "Node.js", "Socket.io"],
        "year": "2025"
    }
];


const servicesData = [
    {
        "title": "Web Development",
        "description": "Custom websites and web applications built with modern technologies",
        "icon": "💻"
    },
    {
        "title": "UI/UX Design",
        "description": "User-centered design solutions that enhance user experience",
        "icon": "🎨"
    },
    {
        "title": "Brand Identity",
        "description": "Complete branding packages from logo to style guides",
        "icon": "🚀"
    },
    {
        "title": "Consulting",
        "description": "Strategic guidance on digital projects and technology decisions",
        "icon": "💡"
    }
];

const testimonialsData = [
    {
        "name": "Sarah Johnson",
        "company": "TechStart Inc.",
        "text": "Exceptional work quality and attention to detail. Delivered exactly what we needed on time and within budget.",
        "rating": 5,
        "image": "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100"
    },
    {
        "name": "Michael Chen",
        "company": "Creative Agency",
        "text": "Professional, creative, and easy to work with. The final product exceeded our expectations.",
        "rating": 5,
        "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
    },
    {
        "name": "Emily Davis",
        "company": "E-commerce Solutions",
        "text": "Outstanding technical skills and great communication throughout the project.",
        "rating": 5,
        "image": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100"
    }
];

const skillsData = [
    { "name": "JavaScript", "level": 90 },
    { "name": "React.js", "level": 85 },
    { "name": "UI/UX Design", "level": 80 },
    { "name": "Node.js", "level": 75 },
    { "name": "Adobe Creative Suite", "level": 85 },
    { "name": "Figma/Sketch", "level": 90 }
];

// DOM Elements
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const themeToggle = document.getElementById('theme-toggle');
const backToTop = document.getElementById('back-to-top');
const contactForm = document.getElementById('contact-form');
const portfolioContainer = document.getElementById('portfolio-container');
const servicesContainer = document.getElementById('services-container');
const skillsContainer = document.getElementById('skills-container');
const testimonialsWrapper = document.getElementById('testimonials-wrapper');
const modal = document.getElementById('portfolio-modal');
const modalClose = document.getElementById('modal-close');
const modalBody = document.getElementById('modal-body');

// State
let currentTestimonial = 0;
let typingIndex = 0;
let currentText = 0;

// Typing animation texts
const typingTexts = [
    'Competitve Coder',
    'Web Developer',
    'Problem Solver'
];

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    setupNavigation();
    setupTypingAnimation();
    populatePortfolio();
    populateServices();
    populateSkills();
    populateTestimonials();
    setupPortfolioFilters();
    setupTestimonialsCarousel();
    setupContactForm();
    setupScrollAnimations();
    setupBackToTop();
    setupModal();
});

// Theme Management
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-color-scheme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-color-scheme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-color-scheme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const themeIcon = document.querySelector('.theme-toggle__icon');
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// Navigation
function setupNavigation() {
    // Mobile menu toggle
    navToggle?.addEventListener('click', () => {
        navMenu.classList.add('show');
    });

    navClose?.addEventListener('click', () => {
        navMenu.classList.remove('show');
    });

    // Close menu when clicking on links
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
        });
    });

    // Theme toggle
    themeToggle?.addEventListener('click', toggleTheme);

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Typing Animation
function setupTypingAnimation() {
    const typingElement = document.getElementById('typing-text');
    if (!typingElement) return;

    function typeText() {
        const currentTextContent = typingTexts[currentText];
        
        if (typingIndex < currentTextContent.length) {
            typingElement.textContent += currentTextContent.charAt(typingIndex);
            typingIndex++;
            setTimeout(typeText, 100);
        } else {
            setTimeout(eraseText, 2000);
        }
    }

    function eraseText() {
        if (typingIndex > 0) {
            typingElement.textContent = typingElement.textContent.slice(0, -1);
            typingIndex--;
            setTimeout(eraseText, 50);
        } else {
            currentText = (currentText + 1) % typingTexts.length;
            setTimeout(typeText, 500);
        }
    }

    typeText();
}

// Portfolio Management
function populatePortfolio() {
    if (!portfolioContainer) return;

    portfolioContainer.innerHTML = '';
    
    portfolioData.forEach(item => {
        const portfolioItem = createPortfolioItem(item);
        portfolioContainer.appendChild(portfolioItem);
    });
}

function createPortfolioItem(item) {
    const div = document.createElement('div');
    div.className = `portfolio__item ${item.category}`;
    div.dataset.category = item.category;
    div.dataset.id = item.id;
    
    div.innerHTML = `
        <img src="${item.image}" alt="${item.title}" class="portfolio__image">
        <div class="portfolio__content">
            <h3 class="portfolio__title">${item.title}</h3>
            <p class="portfolio__description">${item.description}</p>
            <div class="portfolio__tech">
                ${item.technologies.map(tech => `<span class="portfolio__tech-item">${tech}</span>`).join('')}
            </div>
            <span class="portfolio__year">${item.year}</span>
        </div>
    `;
    
    div.addEventListener('click', () => openPortfolioModal(item));
    
    return div;
}

function setupPortfolioFilters() {
    const filters = document.querySelectorAll('.portfolio__filter');
    
    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            // Update active filter
            filters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');
            
            // Filter portfolio items
            const filterValue = filter.dataset.filter;
            const portfolioItems = document.querySelectorAll('.portfolio__item');
            
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.dataset.category === filterValue) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
}

// Modal Management
function setupModal() {
    modalClose?.addEventListener('click', closePortfolioModal);
    modal?.addEventListener('click', (e) => {
        if (e.target === modal) {
            closePortfolioModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closePortfolioModal();
        }
    });
}

function openPortfolioModal(item) {
    if (!modal || !modalBody) return;
    
    modalBody.innerHTML = `
        <img src="${item.image}" alt="${item.title}" class="modal__image">
        <h2 class="modal__title">${item.title}</h2>
        <p class="modal__description">${item.description}</p>
        <div class="modal__tech">
            ${item.technologies.map(tech => `<span class="modal__tech-item">${tech}</span>`).join('')}
        </div>
        <p class="modal__year">Year: ${item.year}</p>
    `;
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closePortfolioModal() {
    modal?.classList.remove('show');
    document.body.style.overflow = '';
}

// Services Management
function populateServices() {
    if (!servicesContainer) return;

    servicesContainer.innerHTML = '';
    
    servicesData.forEach(service => {
        const serviceElement = createServiceElement(service);
        servicesContainer.appendChild(serviceElement);
    });
}

function createServiceElement(service) {
    const div = document.createElement('div');
    div.className = 'service';
    
    div.innerHTML = `
        <span class="service__icon">${service.icon}</span>
        <h3 class="service__title">${service.title}</h3>
        <p class="service__description">${service.description}</p>
    `;
    
    return div;
}

// Skills Management
function populateSkills() {
    if (!skillsContainer) return;

    skillsContainer.innerHTML = '';
    
    skillsData.forEach(skill => {
        const skillElement = createSkillElement(skill);
        skillsContainer.appendChild(skillElement);
    });
}

function createSkillElement(skill) {
    const div = document.createElement('div');
    div.className = 'skill';
    
    div.innerHTML = `
        <div class="skill__header">
            <span class="skill__name">${skill.name}</span>
            <span class="skill__percentage">${skill.level}%</span>
        </div>
        <div class="skill__bar">
            <div class="skill__progress" data-level="${skill.level}"></div>
        </div>
    `;
    
    return div;
}

// Testimonials Management
function populateTestimonials() {
    if (!testimonialsWrapper) return;

    testimonialsWrapper.innerHTML = '';
    
    testimonialsData.forEach((testimonial, index) => {
        const testimonialElement = createTestimonialElement(testimonial, index);
        testimonialsWrapper.appendChild(testimonialElement);
    });
}

function createTestimonialElement(testimonial, index) {
    const div = document.createElement('div');
    div.className = `testimonial ${index === 0 ? 'active' : ''}`;
    
    const stars = '★'.repeat(testimonial.rating);
    
    div.innerHTML = `
        <img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial__image">
        <p class="testimonial__text">"${testimonial.text}"</p>
        <h4 class="testimonial__author">${testimonial.name}</h4>
        <p class="testimonial__company">${testimonial.company}</p>
        <div class="testimonial__rating">${stars}</div>
    `;
    
    return div;
}

function setupTestimonialsCarousel() {
    const prevBtn = document.getElementById('testimonials-prev');
    const nextBtn = document.getElementById('testimonials-next');
    
    prevBtn?.addEventListener('click', () => {
        changeTestimonial(-1);
    });
    
    nextBtn?.addEventListener('click', () => {
        changeTestimonial(1);
    });
    
    // Auto-advance testimonials
    setInterval(() => {
        changeTestimonial(1);
    }, 5000);
}

function changeTestimonial(direction) {
    const testimonials = document.querySelectorAll('.testimonial');
    if (testimonials.length === 0) return;
    
    testimonials[currentTestimonial].classList.remove('active');
    
    currentTestimonial += direction;
    
    if (currentTestimonial >= testimonials.length) {
        currentTestimonial = 0;
    } else if (currentTestimonial < 0) {
        currentTestimonial = testimonials.length - 1;
    }
    
    testimonials[currentTestimonial].classList.add('active');
}

// Contact Form Management
function setupContactForm() {
    contactForm?.addEventListener('submit', handleContactSubmit);
}

function handleContactSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Clear previous errors
    clearFormErrors();
    
    // Validate form
    let isValid = true;
    
    if (!data.name.trim()) {
        showFormError('name', 'Name is required');
        isValid = false;
    }
    
    if (!data.email.trim()) {
        showFormError('email', 'Email is required');
        isValid = false;
    } else if (!isValidEmail(data.email)) {
        showFormError('email', 'Please enter a valid email');
        isValid = false;
    }
    
    if (!data.subject.trim()) {
        showFormError('subject', 'Subject is required');
        isValid = false;
    }
    
    if (!data.message.trim()) {
        showFormError('message', 'Message is required');
        isValid = false;
    }
    
    if (isValid) {
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for your message! I\'ll get back to you soon.');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1000);
    }
}

function showFormError(fieldName, message) {
    const errorElement = document.getElementById(`${fieldName}-error`);
    if (errorElement) {
        errorElement.textContent = message;
    }
}

function clearFormErrors() {
    const errorElements = document.querySelectorAll('.form-error');
    errorElements.forEach(element => {
        element.textContent = '';
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Scroll Animations
function setupScrollAnimations() {
    // Animate skills when they come into view
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillProgress = entry.target.querySelector('.skill__progress');
                const level = skillProgress.dataset.level;
                skillProgress.style.width = level + '%';
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.skill').forEach(skill => {
        skillsObserver.observe(skill);
    });
    
    // Header background on scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.9)';
        }
    });
}

// Back to Top Button
function setupBackToTop() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop?.classList.add('show');
        } else {
            backToTop?.classList.remove('show');
        }
    });
    
    backToTop?.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}