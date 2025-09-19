// Portfolio Website JavaScript
class PortfolioWebsite {
    constructor() {
        this.portfolioData = null;
        this.currentTheme = 'dark';
        this.init();
    }

    async init() {
        try {
            await this.loadPortfolioData();
            this.setupEventListeners();
            this.populateContent();
            this.initializeComponents();
            this.setupScrollEffects();
        } catch (error) {
            console.error('Error initializing portfolio:', error);
        }
    }

    async loadPortfolioData() {
        try {
            // Add cache-busting parameter to prevent caching issues
            const response = await fetch(`Information/portfolio-data.json?t=${Date.now()}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            this.portfolioData = await response.json();
            console.log('Portfolio data loaded successfully:', this.portfolioData);
        } catch (error) {
            console.error('Error loading portfolio data:', error);
            // Fallback to default data if JSON loading fails
            this.portfolioData = this.getDefaultData();
        }
    }

    getDefaultData() {
        return {
            personal: {
                name: "Tarequl Islam",
                title: "Student Developer",
                tagline: "Student at United International University",
                bio: "Tarequl Islam | Student at United International University | Backend web developer(Node.js , Express , MySQL) | UI/UX Designer |Python, C, and Java",
                email: "tareq.tmns@email.com",
                phone: "+880 1682909653",
                location: "Dhaka, Bangladesh"
            },
            skills: {
                frontend: ["React", "Vue.js", "Angular", "TypeScript", "HTML5", "Tailwind CSS"],
                backend: ["Node.js", "Python", "Java", "Express.js", "Django"],
                database: ["MongoDB", "PostgreSQL", "MySQL"],
                devops: ["Git"],
                tools: ["VS Code", "Figma", "Postman", "Jira"]
            },
            programmingLanguages: [
                {
                    "name": "JavaScript",
                    "proficiency": 70,
                    "description": "Intermediate - Full-stack development, Node.js, React"
                },
                {
                    "name": "Python",
                    "proficiency": 45,
                    "description": "Beginner - Backend development, Django, data analysis"
                },
                {
                    "name": "Java",
                    "proficiency": 65,
                    "description": "Intermediate - Desktop applications, Android development"
                },
                {
                    "name": "C",
                    "proficiency": 70,
                    "description": "Intermediate - System programming, algorithms"
                },
                {
                    "name": "HTML/CSS",
                    "proficiency": 80,
                    "description": "Advanced - Web development, responsive design"
                }
            ],
            experience: [
                {
                    title: "Backend Developer Intern",
                    company: "Tech Solutions Ltd.",
                    period: "June 2023 - August 2023",
                    description: "Developed RESTful APIs using Node.js and Express. Collaborated with frontend developers to integrate APIs with React applications. Improved database performance by optimizing queries in MongoDB.",
                    technologies: ["Node.js", "Express", "MongoDB", "React"]
                }
            ],
            projects: [
                {
                    title: "Chess engine",
                    description: "offline 2 player chess game",
                    image: "project1.jpg",
                    technologies: ["Java", "JavaFX", "MySQL", "SceneBuilder"],
                    liveUrl: "#",
                    githubUrl: "https://github.com/tarequl822/chess-game",
                    category: "app"
                }
            ],
            testimonials: [],
            social: {
                github: "https://github.com/tarequl822",
                linkedin: "https://www.linkedin.com/in/tarequlislam-2b5a52269/",
                facebook: "https://www.facebook.com/mdtarequl.is",
                instagram: "https://www.instagram.com/_tarequl__islam/"
            }
        };
    }

    setupEventListeners() {
        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // Mobile navigation
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => this.toggleMobileMenu(navToggle, navMenu));
        }

        // Smooth scrolling for navigation links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => this.handleSmoothScroll(e));
        });

        // Project filters
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => this.filterProjects(e));
        });

        // Contact form
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => this.handleContactForm(e));
        }

        // Close mobile menu when clicking on a link
        const mobileNavLinks = document.querySelectorAll('.nav-menu a');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMobileMenu());
        });
    }

    populateContent() {
        if (!this.portfolioData) return;

        // Update page title
        document.title = `${this.portfolioData.personal.name} - ${this.portfolioData.personal.title}`;

        // Populate hero section
        this.updateElement('heroSubtitle', this.portfolioData.personal.tagline);
        this.updateElement('heroDescription', this.portfolioData.personal.bio);

        // Populate about section
        this.updateElement('aboutBio', this.portfolioData.personal.aboutBio || this.portfolioData.personal.bio);
        this.updateElement('education', this.portfolioData.education?.[0]?.degree || 'Bachelor of Science in Computer Science');
        this.updateElement('location', this.portfolioData.personal.location);
        this.updateElement('interests', this.portfolioData.interests?.join(', ') || 'Photography, Reading, Hiking, Cooking, Gaming');

        // Populate contact section
        this.updateElement('contactEmail', this.portfolioData.personal.email);
        this.updateElement('contactPhone', this.portfolioData.personal.phone);
        this.updateElement('contactLocation', this.portfolioData.personal.location);

        // Update social links
        this.updateSocialLinks();

        // Populate skills
        this.populateSkills();

        // Populate experience timeline
        this.populateExperience();

        // Populate projects
        this.populateProjects();

        // Populate programming languages chart
        this.populateProgrammingLanguages();
    }

    updateElement(id, content) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = content;
        }
    }

    updateSocialLinks() {
        if (!this.portfolioData.social) return;

        const socialLinks = {
            'githubLink': this.portfolioData.social.github,
            'linkedinLink': this.portfolioData.social.linkedin,
            'facebookLink': this.portfolioData.social.facebook,
            'instagramLink': this.portfolioData.social.instagram
        };

        Object.entries(socialLinks).forEach(([id, url]) => {
            const element = document.getElementById(id);
            if (element && url) {
                element.href = url;
            }
        });
    }

    populateSkills() {
        if (!this.portfolioData.skills) return;

        const skillCategories = {
            'frontendSkills': this.portfolioData.skills.frontend,
            'backendSkills': this.portfolioData.skills.backend,
            'databaseSkills': this.portfolioData.skills.database,
            'toolsSkills': this.portfolioData.skills.devops || this.portfolioData.skills.tools
        };

        Object.entries(skillCategories).forEach(([containerId, skills]) => {
            const container = document.getElementById(containerId);
            if (container && skills) {
                container.innerHTML = skills.map(skill => 
                    `<span class="skill-tag">${skill}</span>`
                ).join('');
            }
        });
    }

    populateExperience() {
        if (!this.portfolioData.experience) return;

        const timeline = document.getElementById('experienceTimeline');
        if (!timeline) return;

        timeline.innerHTML = this.portfolioData.experience.map(exp => `
            <div class="timeline-item">
                <div class="timeline-content">
                    <h3 class="timeline-title">${exp.title || exp.role}</h3>
                    <p class="timeline-company">${exp.company}</p>
                    <p class="timeline-period">${exp.period}</p>
                    <p class="timeline-description">${exp.description || exp.details}</p>
                    <div class="timeline-tech">
                        ${(exp.technologies || []).map(tech => `<span>${tech}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }

    populateProjects() {
        if (!this.portfolioData.projects) return;

        const projectsGrid = document.getElementById('projectsGrid');
        if (!projectsGrid) return;

        projectsGrid.innerHTML = this.portfolioData.projects.map(project => `
            <div class="project-card" data-category="${project.category}">
                <img src="Photos/${project.image}" alt="${project.title}" class="project-image" 
                     onerror="this.src='https://via.placeholder.com/400x200/4a90e2/ffffff?text=${encodeURIComponent(project.title)}'">
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${project.liveUrl}" class="project-link live" target="_blank" rel="noopener">
                            <i class="fas fa-external-link-alt"></i> Live Demo
                        </a>
                        <a href="${project.githubUrl}" class="project-link github" target="_blank" rel="noopener">
                            <i class="fab fa-github"></i> Code
                        </a>
                    </div>
                </div>
            </div>
        `).join('');
    }

    populateProgrammingLanguages() {
        if (!this.portfolioData.programmingLanguages) {
            console.error('Programming languages data not found');
            return;
        }

        const languagesChart = document.querySelector('.languages-chart');
        if (!languagesChart) {
            console.error('Languages chart element not found');
            return;
        }

        console.log('Loading programming languages:', this.portfolioData.programmingLanguages);

        languagesChart.innerHTML = this.portfolioData.programmingLanguages.map(lang => `
            <div class="language-item" data-skill="${lang.proficiency}">
                <div class="language-info">
                    <span class="language-name">${lang.name}</span>
                    <span class="language-percentage">${lang.proficiency}%</span>
                </div>
                <div class="skill-bar">
                    <div class="skill-progress" style="width: 0%"></div>
                </div>
            </div>
        `).join('');
    }





    initializeComponents() {
        // Initialize intersection observer for animations
        this.initializeAnimations();
    }

    setupScrollEffects() {
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Active navigation highlighting
        this.setupActiveNavigation();
    }

    setupActiveNavigation() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }

    toggleTheme() {
        const body = document.body;
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        
        body.classList.remove(`${this.currentTheme}-mode`);
        body.classList.add(`${newTheme}-mode`);
        
        this.currentTheme = newTheme;
        localStorage.setItem('portfolio-theme', newTheme);
        
        // Update navbar background for light mode
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (newTheme === 'light') {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            } else {
                navbar.style.background = 'rgba(13, 17, 23, 0.95)';
            }
        }
    }

    toggleMobileMenu(navToggle, navMenu) {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    }

    closeMobileMenu() {
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        if (navToggle && navMenu) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }

    handleSmoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    filterProjects(e) {
        const filter = e.target.getAttribute('data-filter');
        const projectCards = document.querySelectorAll('.project-card');
        const filterBtns = document.querySelectorAll('.filter-btn');

        // Update active filter button
        filterBtns.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');

        // Filter projects
        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.5s ease-in-out';
            } else {
                card.style.display = 'none';
            }
        });
    }





    initializeAnimations() {
        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    
                    // Special handling for language items
                    if (entry.target.classList.contains('language-item')) {
                        this.animateLanguageBar(entry.target);
                    }
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animateElements = document.querySelectorAll('.skill-category, .timeline-item, .project-card, .stat-item, .language-item');
        animateElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    animateLanguageBar(languageItem) {
        const skillBar = languageItem.querySelector('.skill-progress');
        const skillLevel = languageItem.getAttribute('data-skill');
        
        if (skillBar) {
            // Add animation class
            languageItem.classList.add('animate');
            
            // Animate the skill bar
            setTimeout(() => {
                skillBar.style.setProperty('--skill-width', `${skillLevel}%`);
                skillBar.classList.add('animate');
            }, 300);
        }
    }

    async handleContactForm(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const formObject = Object.fromEntries(formData.entries());
        
        // Simple validation
        if (!formObject.name || !formObject.email || !formObject.message) {
            this.showNotification('Please fill in all required fields.', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formObject.email)) {
            this.showNotification('Please enter a valid email address.', 'error');
            return;
        }

        try {
            // Simulate form submission (replace with actual form handling)
            await this.simulateFormSubmission(formObject);
            this.showNotification('Thank you! Your message has been sent successfully.', 'success');
            e.target.reset();
        } catch (error) {
            this.showNotification('Sorry, there was an error sending your message. Please try again.', 'error');
        }
    }

    async simulateFormSubmission(formData) {
        // Simulate API call delay
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Form submitted:', formData);
                resolve();
            }, 1000);
        });
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;

        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 400px;
        `;

        // Add to page
        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        });

        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (document.body.contains(notification)) {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    if (document.body.contains(notification)) {
                        document.body.removeChild(notification);
                    }
                }, 300);
            }
        }, 5000);
    }

    // Load saved theme preference
    loadSavedTheme() {
        const savedTheme = localStorage.getItem('portfolio-theme');
        if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
            this.currentTheme = savedTheme;
            document.body.classList.remove('dark-mode', 'light-mode');
            document.body.classList.add(`${savedTheme}-mode`);
        }
    }
}

// Initialize the portfolio website when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const portfolio = new PortfolioWebsite();
    
    // Load saved theme
    portfolio.loadSavedTheme();
    
    // Add loading animation
    document.body.classList.add('loaded');
    
    // Force refresh programming languages after a short delay to ensure DOM is ready
    setTimeout(() => {
        if (portfolio.portfolioData && portfolio.portfolioData.programmingLanguages) {
            portfolio.populateProgrammingLanguages();
        }
    }, 100);
});

// Add CSS for loading animation
const style = document.createElement('style');
style.textContent = `
    body:not(.loaded) {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    }
    
    .notification-close:hover {
        opacity: 0.8;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);

// Add error handling for images
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.style.display = 'none';
    }
}, true);

// Performance optimization: Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
} 