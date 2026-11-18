// ===== Меню для телефона: открыть/закрыть =====
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('open');
  burger.classList.toggle('open');
  document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
});

// Закрыть меню после клика по пункту
nav.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    burger.classList.remove('open');
    document.body.style.overflow = '';
  })
);

// ===== Шапка становится белой при прокрутке + кнопка «наверх» =====
const header = document.getElementById('header');
const toTop = document.getElementById('toTop');
function onScroll() {
  header.classList.toggle('scrolled', window.scrollY > 40);
  toTop.classList.toggle('show', window.scrollY > 600);
}
window.addEventListener('scroll', onScroll);
onScroll();

// ===== Плавное появление блоков при прокрутке =====
const items = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach((el, i) => {
    el.style.transitionDelay = (i % 3) * 0.08 + 's'; // небольшая «волна»
    observer.observe(el);
  });
} else {
  items.forEach(el => el.classList.add('visible'));
}

// ===== Текущий год в подвале — обновляется сам =====
document.getElementById('year').textContent = new Date().getFullYear();
