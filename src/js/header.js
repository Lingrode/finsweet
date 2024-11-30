const burgerBtn = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');

const onBurgerBtnClick = () => {
  mobileMenu.classList.toggle('visible');
  burgerBtn.classList.toggle('active');

  mobileMenu.classList.contains('visible')
    ? document.body.classList.add('blocked')
    : document.body.classList.remove('blocked');
};

burgerBtn.addEventListener('click', onBurgerBtnClick);
