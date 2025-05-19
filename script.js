// script.js

// Language toggle
const langBtn = document.getElementById('lang-btn');
const elements = document.querySelectorAll('[data-en], [data-fa]');

let currentLang = 'fa';

function toggleLang() {
  currentLang = currentLang === 'fa' ? 'en' : 'fa';
  elements.forEach(el => {
    el.innerText = el.getAttribute(`data-${currentLang}`);
  });
  langBtn.innerText = currentLang === 'fa' ? 'English' : 'فارسی';
  document.body.dir = currentLang === 'fa' ? 'rtl' : 'ltr';
}

langBtn.addEventListener('click', toggleLang);

// Scroll animation
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  observer.observe(section);
});
