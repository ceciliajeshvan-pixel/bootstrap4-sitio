// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', function() {
  const nav = document.getElementById('mainNav');
  if (window.scrollY > 80) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// ===== SCROLL TOP BUTTON =====
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', function() {
  if (window.scrollY > 400) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});

scrollTopBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== SCROLLREVEAL ANIMATIONS =====
ScrollReveal().reveal('.reveal', {
  distance: '50px',
  duration: 800,
  easing: 'ease-out',
  origin: 'bottom',
  interval: 100,
  reset: false
});

// ===== COUNTER ANIMATION =====
function animateCounter(el, target, duration) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(function() {
    start += step;
    if (start >= target) {
      el.textContent = target + '+';
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(start);
    }
  }, 16);
}

// Trigger counters when the stats section is visible
const statsSection = document.querySelector('.stats-section');
let countersDone = false;

const observer = new IntersectionObserver(function(entries) {
  if (entries[0].isIntersecting && !countersDone) {
    countersDone = true;
    document.querySelectorAll('.counter').forEach(function(el) {
      const target = parseInt(el.textContent);
      animateCounter(el, target, 1500);
    });
  }
}, { threshold: 0.4 });

observer.observe(statsSection);

// ===== SMOOTH SCROLL PARA NAVBAR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Cerrar menu en mobile
      const navCollapse = document.getElementById('navbarNav');
      if (navCollapse.classList.contains('show')) {
        navCollapse.classList.remove('show');
      }
    }
  });
});
