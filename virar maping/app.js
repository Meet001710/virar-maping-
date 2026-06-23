// Virar Information Page - app.js

(function(){
  const backToTopBtn = document.getElementById('backToTop');
  const showThreshold = 500;

  function updateBackToTop(){
    const shouldShow = window.scrollY >= showThreshold;
    backToTopBtn?.classList.toggle('visible', shouldShow);
  }

  window.addEventListener('scroll', updateBackToTop, { passive: true });
  updateBackToTop();

  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  
  // Smooth-scroll for internal hash links
  document.addEventListener('click', (e) => {
    const el = e.target?.closest?.('a[href^="#"]');
    if(!el) return;
    const id = el.getAttribute('href');
    if(!id || id === '#') return;

    const target = document.querySelector(id);
    if(!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.pushState(null, '', id);
  });
})();

