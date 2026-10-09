const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
menuToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});
navMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navMenu.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open menu');
}));
document.getElementById('year').textContent = new Date().getFullYear();
const form = document.getElementById('quoteForm');
const status = document.getElementById('formMessage');
form.addEventListener('submit', event => {
  event.preventDefault();
  status.textContent = '';
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const message = [
    'Hello Jumbo Builders, I would like to enquire about a project.', '',
    `Name: ${String(data.get('name')).trim()}`,
    `Phone: ${String(data.get('phone')).trim()}`,
    `Project type: ${String(data.get('projectType')).trim()}`,
    `Project location: ${String(data.get('location')).trim()}`,
    `Project details: ${String(data.get('description')).trim()}`
  ].join('\n');
  status.textContent = 'Your enquiry is prepared. WhatsApp will open with the message ready to send; it is not sent automatically.';
  window.open(`https://wa.me/919442286786?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});
