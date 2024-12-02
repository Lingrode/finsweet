import { observeButtonUp } from '../main';

const observeListener = section => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        window.addEventListener('resize', observeButtonUp);
      } else window.removeEventListener('resize', observeButtonUp);
    },
    {
      root: document,
      threshold: 0.1,
    }
  );

  observer.observe(section);
};

export { observeListener };
