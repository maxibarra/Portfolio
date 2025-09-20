window.addEventListener('load', () => {
  const heroText = document.querySelector('.hero-text');
  const socialLinks = document.querySelector('.social-links');

  // Texto aparece primero
  heroText.classList.add('show');

  // Íconos aparecen después con pequeño delay
  setTimeout(() => {
    socialLinks.classList.add('show');
  }, 500); // 0.5s de retraso
});

 document.getElementById('year').textContent = new Date().getFullYear();