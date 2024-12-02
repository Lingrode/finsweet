const buttonUp = document.querySelector('.button-up');
const footer = document.querySelector('.footer');

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
