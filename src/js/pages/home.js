import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { observeListener } from '../observe';

const mindSection = document.querySelector('.mind');

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

observeListener(mindSection);
