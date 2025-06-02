document.addEventListener('DOMContentLoaded', function() {
    // Mise à jour de l'année dans le footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Toggle du menu mobile
    const menuToggle = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    
    menuToggle.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
        
        // Change l'icône du menu
        const icon = menuToggle.querySelector('i');
        if (mobileNav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Fermer le menu mobile quand on clique sur un lien
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // Toggle du thème (clair/sombre)
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    const body = document.body;
    
    // Fonction pour basculer le thème
    function toggleTheme() {
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        }
    }
    
    // Appliquer le thème enregistré ou le thème par défaut
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    }
    
    // Ajouter les écouteurs d'événements pour les boutons de thème
    themeToggle.addEventListener('click', toggleTheme);
    themeToggleMobile.addEventListener('click', toggleTheme);
    
    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupération des valeurs du formulaire
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Validation simple
            if (!name || !email || !subject || !message) {
                alert('Veuillez remplir tous les champs du formulaire.');
                return;
            }
            
            // Ici, vous pourriez ajouter du code pour envoyer le formulaire via AJAX
            // Pour l'instant, on affiche juste un message de confirmation
            alert('Merci pour votre message ! Je vous répondrai dès que possible.');
            contactForm.reset();
        });
    }
    
    // Animation au défilement
    const sections = document.querySelectorAll('section');
    
    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Initialiser les sections comme invisibles
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Vérifier le défilement au chargement et lors du défilement
    window.addEventListener('load', checkScroll);
    window.addEventListener('scroll', checkScroll);
});