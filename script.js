// script.js

// Cookie Banner
function acceptCookies() {
  localStorage.setItem('cookiesAccepted', 'true');
  const banner = document.getElementById('cookieBanner');
  if (banner) banner.style.display = 'none';
}

function declineCookies() {
  localStorage.setItem('cookiesAccepted', 'false');
  const banner = document.getElementById('cookieBanner');
  if (banner) banner.style.display = 'none';
}

// Sayfa yüklendiğinde cookie banner'ı kontrol et
document.addEventListener('DOMContentLoaded', function () {
  if (localStorage.getItem('cookiesAccepted') !== null) {
    const banner = document.getElementById('cookieBanner');
    if (banner) banner.style.display = 'none';
  }
});

// Mobil Menü
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('nav ul');

  if (!toggle || !menu) return;

  // Menüyü aç/kapat
  const toggleMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    menu.classList.toggle('show');
  };

  // Hem click hem touch desteği
  toggle.addEventListener('click', toggleMenu);
  toggle.addEventListener('touchstart', toggleMenu);

  // Menü dışına tıklandığında kapat
  const closeMenu = (e) => {
    if (!toggle.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove('show');
    }
  };

  document.addEventListener('click', closeMenu);
  document.addEventListener('touchstart', closeMenu);
});