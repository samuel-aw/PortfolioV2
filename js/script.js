// ============================================
// PROJECTS DATA
// ============================================

const projectsData = [
    {
        id: 1,
        title: 'Carte NFT',
        description: 'Une carte NFT moderne avec design épuré et effets de survol',
        longDescription: "Ce petit projet est une carte NFT que j'ai créée en HTML et CSS. L'idée était de reproduire le style des plateformes NFT, avec un design épuré et moderne, et un rendu visuel attrayant. La carte affiche une image 3D, le nom de l'œuvre, une brève description, le prix en ETH, le temps restant et le nom du créateur du NFT. J'ai porté une attention particulière au style pour que tout soit bien centré, équilibré et agréable à regarder, avec des effets de survol et des couleurs subtiles pour une ambiance futuriste.",
        image: './img/NFT-CARD-IMG2.png',
        technologies: ['HTML', 'CSS'],
        category: 'frontend',
        liveUrl: './projets/carte-nft.html',
        githubUrl: 'https://github.com/samuel-aw'
    },
    {
        id: 2,
        title: 'Section de quatre cartes',
        description: 'Interface web avec quatre cartes présentant différentes fonctionnalités',
        longDescription: "Ce projet est une section d'interface web que j'ai créée en HTML et CSS. L'objectif était de concevoir une mise en page claire et équilibrée, composée de quatre cartes présentant différentes fonctionnalités d'un service. Chaque carte possède son propre style et une bordure de couleur unique pour les différencier visuellement. Le design privilégie la simplicité, la lisibilité et la hiérarchie visuelle, tout en restant adaptatif à toutes les tailles d'écran.",
        image: './img/Four-Card-Img.png',
        technologies: ['HTML', 'CSS'],
        category: 'frontend',
        liveUrl: './projets/section-quatre-cartes.html',
        githubUrl: 'https://github.com/samuel-aw'
    },
    {
        id: 3,
        title: 'Trois cartes colorées',
        description: 'Section de fiches à trois colonnes avec catégories de véhicules',
        longDescription: "Ce projet est une section de fiches à trois colonnes que j'ai créée en HTML et CSS. Chaque fiche représente une catégorie de véhicule (berlines, SUV et luxe), avec une couleur, une icône et un texte descriptif uniques. L'objectif était de créer une mise en page épurée, moderne et adaptative, tout en utilisant des couleurs contrastées et des bords arrondis pour une harmonie visuelle. Le bouton 'En savoir plus' change de style au survol pour un effet interactif subtil.",
        image: './img/Column-Card-Img.png',
        technologies: ['HTML', 'CSS'],
        category: 'frontend',
        liveUrl: './projets/trois-cartes-coorees.html',
        githubUrl: 'https://github.com/samuel-aw'
    },
    {
        id: 4,
        title: 'Projet Agenda 2030',
        description: 'Site WordPress sur les objectifs de développement durable',
        longDescription: "Ce projet Agenda 2030 est un site web créé avec WordPress, HTML et CSS, portant sur les objectifs de développement durable des Nations Unies. L'objectif était de sensibiliser aux 17 objectifs de développement durable à travers une interface claire et accessible. J'ai travaillé sur la structure du contenu, l'intégration WordPress et le design responsive pour assurer une expérience utilisateur optimale sur tous les appareils.",
        image: './img/Agenda-2030-img.png',
        technologies: ['HTML', 'CSS', 'WordPress'],
        category: 'wordpress',
        liveUrl: './projets/agenda-2030.html'
    }
];

// ============================================
// SKILLS DATA
// ============================================

const skillsData = [
    { name: 'HTML', level: 90, category: 'frontend' },
    { name: 'CSS', level: 85, category: 'frontend' },
    { name: 'JavaScript', level: 75, category: 'frontend' },
    { name: 'React', level: 70, category: 'frontend' },
    { name: 'Tailwind CSS', level: 80, category: 'frontend' },
    { name: 'Node.js', level: 60, category: 'backend' },
    { name: 'PHP', level: 30, category: 'backend' },
    { name: 'Laravel', level: 0, category: 'backend' },
    { name: 'SQL', level: 75, category: 'database' },
    { name: 'MongoDB', level: 0, category: 'database' },
    { name: 'Merise', level: 70, category: 'database' },
    { name: 'Git', level: 60, category: 'tools' },
    { name: 'Figma', level: 70, category: 'tools' },
    { name: 'WordPress', level: 80, category: 'tools' },
    { name: 'VS Code', level: 85, category: 'tools' }
];

// ============================================
// THEME TOGGLE
// ============================================

const themeToggle = document.getElementById('theme-toggle');
let isDarkMode = true; // Default to dark mode

themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// Check saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    isDarkMode = savedTheme === 'dark';
    document.body.classList.toggle('dark-mode', isDarkMode);
}

// ============================================
// MOBILE MENU
// ============================================

const burgerToggle = document.getElementById('burger-toggle');
const mobileNav = document.getElementById('mobile-nav');

burgerToggle.addEventListener('click', () => {
    burgerToggle.classList.toggle('active');
    mobileNav.classList.toggle('active');
});

// Close mobile menu when clicking a link
const mobileNavLinks = document.querySelectorAll('.nav-link-mobile');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerToggle.classList.remove('active');
        mobileNav.classList.remove('active');
    });
});

// ============================================
// SMOOTH SCROLL & ACTIVE NAVIGATION
// ============================================

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerHeight = 80;
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

// Update active navigation link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
    const scrollY = window.pageYOffset + 100;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-section') === sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// Add click events to all navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('href').substring(1);
        scrollToSection(sectionId);
    });
});

// ============================================
// SCROLL ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Observe sections for fade-in effect
document.querySelectorAll('.section-header').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ============================================
// PROJECTS
// ============================================

function renderProjects(category = 'all') {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = '';

    const filteredProjects = category === 'all'
        ? projectsData
        : projectsData.filter(project => project.category === category);

    filteredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
        <div class="project-overlay">
          ${project.liveUrl ? `
            <a href="${project.liveUrl}" class="project-link" onclick="event.stopPropagation()">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              <span>Voir</span>
            </a>
          ` : ''}
          ${project.githubUrl ? `
            <a href="${project.githubUrl}" class="project-link project-link-github" target="_blank" onclick="event.stopPropagation()">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          ` : ''}
        </div>
      </div>
      <div class="project-info">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-technologies">
          ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
      </div>
    `;

        projectCard.addEventListener('click', () => openProjectModal(project));
        projectsGrid.appendChild(projectCard);
    });
}

// Project filters
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const category = button.getAttribute('data-category');
        renderProjects(category);
    });
});

// Initialize projects
renderProjects();

// ============================================
// PROJECT MODAL
// ============================================

const modal = document.getElementById('project-modal');
const modalClose = document.getElementById('modal-close');
const modalOverlay = modal.querySelector('.modal-overlay');

function openProjectModal(project) {
    document.getElementById('modal-img').src = project.image;
    document.getElementById('modal-img').alt = project.title;
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-description').textContent = project.longDescription;

    const techContainer = document.getElementById('modal-technologies');
    techContainer.innerHTML = project.technologies
        .map(tech => `<span class="tech-tag">${tech}</span>`)
        .join('');

    const actionsContainer = document.getElementById('modal-actions');
    actionsContainer.innerHTML = '';

    if (project.liveUrl) {
        const liveBtn = document.createElement('a');
        liveBtn.href = project.liveUrl;
        liveBtn.className = 'modal-btn modal-btn-primary';
        liveBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </svg>
      <span>Voir le projet</span>
    `;
        actionsContainer.appendChild(liveBtn);
    }

    if (project.githubUrl) {
        const githubBtn = document.createElement('a');
        githubBtn.href = project.githubUrl;
        githubBtn.className = 'modal-btn modal-btn-secondary';
        githubBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
      <span>Code source</span>
    `;
        actionsContainer.appendChild(githubBtn);
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeProjectModal);
modalOverlay.addEventListener('click', closeProjectModal);

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeProjectModal();
    }
});

// ============================================
// SKILLS
// ============================================

function renderSkills(category = 'all') {
    const skillsGrid = document.getElementById('skills-grid');
    skillsGrid.innerHTML = '';

    const filteredSkills = category === 'all'
        ? skillsData
        : skillsData.filter(skill => skill.category === category);

    filteredSkills.forEach((skill, index) => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.style.animationDelay = `${index * 50}ms`;
        skillItem.innerHTML = `
      <div class="skill-header">
        <span class="skill-name">${skill.name}</span>
        <span class="skill-level skill-level-${skill.category}">${skill.level}%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-progress skill-progress-${skill.category}" style="width: 0%;" data-level="${skill.level}"></div>
      </div>
    `;
        skillsGrid.appendChild(skillItem);
    });

    // Animate skill bars
    setTimeout(() => {
        document.querySelectorAll('.skill-progress').forEach(bar => {
            const level = bar.getAttribute('data-level');
            bar.style.width = `${level}%`;
        });
    }, 100);
}

// Skill filters
const skillFilterButtons = document.querySelectorAll('.skill-filter-btn');
skillFilterButtons.forEach(button => {
    button.addEventListener('click', () => {
        skillFilterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const category = button.getAttribute('data-skill-category');
        renderSkills(category);
    });
});

// Initialize skills
renderSkills();

// ============================================
// CONTACT FORM
// ============================================

const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const successMessage = document.getElementById('success-message');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    // On récupère les données du formulaire
    const formData = new FormData(contactForm);

    // On envoie vraiment les données à Formspree
    try {
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: JSON.stringify(Object.fromEntries(formData)),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            // SUCCESS : Tout s'est bien passé
            successMessage.classList.add('active');
            contactForm.reset();
        } else {
            // ERREUR : Formspree a répondu mais avec un problème
            alert("Oups ! Il y a eu un problème lors de l'envoi.");
        }
    } catch (error) {
        // ERREUR : Problème de connexion internet par exemple
        alert("Erreur de connexion au serveur");
    }

    // Dans tous les cas, on remet le bouton à la normale
    submitBtn.classList.remove('loading');
    submitBtn.disabled = false;

    // Cacher le message de succès après 5 secondes
    setTimeout(() => {
        successMessage.classList.remove('active');
    }, 5000);
});

// ============================================
// SCROLL TO TOP
// ============================================

const scrollToTopBtn = document.getElementById('scroll-to-top');

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
