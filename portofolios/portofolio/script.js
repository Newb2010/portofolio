// ============================================
// CUSTOM CURSOR LOGIC
// ============================================

const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

// Posisi target (mengikuti mouse langsung) dan posisi outline (mengikuti dengan lag)
let mouseX = 0, mouseY = 0;       // posisi mouse saat ini
let outlineX = 0, outlineY = 0;   // posisi outline (lambat/smooth)

// Update posisi mouse setiap kali digerakkan
window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  // Dot mengikuti mouse secara instan (tanpa delay)
  cursorDot.style.left = `${mouseX}px`;
  cursorDot.style.top = `${mouseY}px`;
});

// Fungsi animasi untuk membuat outer ring "mengejar" posisi mouse
// Ini menciptakan efek lag/smooth yang khas pada custom cursor
function animateOutline() {
  // Interpolasi linear (lerp): outline bergerak sebagian jarak menuju posisi mouse tiap frame
  const speed = 0.15; // semakin kecil, semakin "lambat/smooth" efeknya
  outlineX += (mouseX - outlineX) * speed;
  outlineY += (mouseY - outlineY) * speed;

  cursorOutline.style.left = `${outlineX}px`;
  cursorOutline.style.top = `${outlineY}px`;

  requestAnimationFrame(animateOutline); // loop animasi terus-menerus
}
animateOutline();

// Sembunyikan cursor saat keluar dari halaman (viewport)
document.addEventListener('mouseleave', () => {
  cursorDot.style.opacity = '0';
  cursorOutline.style.opacity = '0';
});
document.addEventListener('mouseenter', () => {
  cursorDot.style.opacity = '1';
  cursorOutline.style.opacity = '1';
});

// ============================================
// EFEK HOVER PADA ELEMEN INTERAKTIF
// ============================================
// Semua elemen dengan class "hoverable" (tombol, link, kartu project, dsb)
// akan memicu cursor membesar & berubah warna saat di-hover

const hoverables = document.querySelectorAll('.hoverable');

hoverables.forEach((el) => {
  el.addEventListener('mouseenter', () => {
    cursorDot.classList.add('hover-active');
    cursorOutline.classList.add('hover-active');
  });

  el.addEventListener('mouseleave', () => {
    cursorDot.classList.remove('hover-active');
    cursorOutline.classList.remove('hover-active');
  });
});

// ============================================
// NAVBAR: MENU MOBILE (BURGER)
// ============================================

const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  burger.classList.toggle('active');
});

// Tutup menu mobile saat salah satu link diklik
document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// ============================================
// FORM CONTACT (SIMULASI SUBMIT)
// ============================================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Terima kasih! Pesan Anda telah terkirim (simulasi). Hubungkan form ini ke backend/email service untuk fungsi nyata.');
  contactForm.reset();
});