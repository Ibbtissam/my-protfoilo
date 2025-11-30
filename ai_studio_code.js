// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Dark Mode Toggle Logic
const themeToggles = document.querySelectorAll('#theme-toggle, #theme-toggle-mobile');
const html = document.documentElement;
const icons = document.querySelectorAll('.fa-moon');

// Check local storage for theme preference
if (localStorage.getItem('theme') === 'dark') {
    html.classList.add('dark');
    updateIcons('dark');
}

themeToggles.forEach(btn => {
    btn.addEventListener('click', () => {
        html.classList.toggle('dark');
        
        if (html.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
            updateIcons('dark');
        } else {
            localStorage.setItem('theme', 'light');
            updateIcons('light');
        }
    });
});

function updateIcons(mode) {
    icons.forEach(icon => {
        if (mode === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });
}

// Scroll Animation (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
});

const hiddenElements = document.querySelectorAll('.reveal');
hiddenElements.forEach((el) => observer.observe(el));