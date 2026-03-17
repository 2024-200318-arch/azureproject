// Change Navbar background on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.padding = '1rem 10%';
        nav.style.background = '#ffffff';
    } else {
        nav.style.padding = '1.5rem 10%';
    }
});

// Simple mobile menu toggle (for the hamburger)
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if(hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}