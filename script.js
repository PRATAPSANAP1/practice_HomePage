// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    menuBtn.querySelector('i').classList.toggle('fa-bars');
    menuBtn.querySelector('i').classList.toggle('fa-times');
  });

  function closeMenu() {
    mobileMenu.classList.remove('open');
    menuBtn.querySelector('i').classList.add('fa-bars');
    menuBtn.querySelector('i').classList.remove('fa-times');
  }
}

// Smooth active link highlight on scroll
const sections = document.querySelectorAll('section[id], footer[id]');
const navLinks = document.querySelectorAll('.nav-links a');

if (sections.length && navLinks.length) {
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 100) current = sec.getAttribute('id');
    });
    navLinks.forEach(a => {
      a.style.color = a.getAttribute('href') === `#${current}` ? '#33ccff' : '';
    });
  });
}

// Animate stats counter
function animateCounter(el) {
  const target = parseInt(el.textContent);
  const suffix = el.textContent.replace(/[0-9]/g, '');
  let count = 0;
  const step = Math.ceil(target / 60);
  const timer = setInterval(() => {
    count = Math.min(count + step, target);
    el.textContent = count + suffix;
    if (count >= target) clearInterval(timer);
  }, 20);
}

const statNumbers = document.querySelectorAll('.hero-stats .stat span');
if (statNumbers.length) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCounter(e.target);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(n => observer.observe(n));
}
