const burgerBtn = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');

const onBurgerBtnClick = () => {
  mobileMenu.classList.toggle('visible');
  burgerBtn.classList.toggle('active');
};

burgerBtn.addEventListener('click', onBurgerBtnClick);
