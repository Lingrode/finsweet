const buttonUp = document.querySelector('.button-up');
const footer = document.querySelector('.footer');
const navLinks = document.querySelectorAll('.nav-link');
const path = window.location.pathname;

document.addEventListener('load', () => {
  window.location.pathname = '/index.html';
});

const pageMap = {
  '/finsweet/index.html': 'Home',
  '/finsweet/blog.html': 'Blog',
};

navLinks.forEach((el, i) => {
  if (pageMap[path] === el.textContent) el.classList.add('active');
});

buttonUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

const observeButtonUp = () => {
  const threshold = window.innerWidth <= 768 ? 0.05 : 0.1;

  const observer = new IntersectionObserver(
    ([entry]) => {
      entry.isIntersecting
        ? buttonUp.classList.add('white')
        : buttonUp.classList.remove('white');
    },
    {
      root: null,
      threshold,
    }
  );

  observer.observe(footer);
};

observeButtonUp();

export { observeButtonUp };
