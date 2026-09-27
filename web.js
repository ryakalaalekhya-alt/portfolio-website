// Mobile Hamburguer Menu Interactions
const mobileMenuButton = document.getElementById('mobile-menu');
const navigationMenu = document.getElementById('nav-menu');

mobileMenuButton.addEventListener('click', () => {
    navigationMenu.classList.toggle('active');
});

// Automatically collapse mobile navigation after clicking an option
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navigationMenu.classList.remove('active');
    });
});

// Intercept contact submission events
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! This form setup operates as a placeholder.');
    this.reset();
});
