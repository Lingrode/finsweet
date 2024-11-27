import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
