document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navList = document.querySelector('.nav-list');
  
    hamburgerMenu.addEventListener('click', function() {
      navList.classList.toggle('active');
      const expanded = hamburgerMenu.getAttribute('aria-expanded') === 'true' || false;
      hamburgerMenu.setAttribute('aria-expanded', !expanded);
    });
  });
  