import axios from 'axios';
import { observeListener } from '../observe';

const postItems = document.querySelectorAll('.posts__item');

const BASE_URL = 'https://jsonplaceholder.org';

for (const item of postItems) {
  console.log(item);
}

const fetchPosts = async () => {
  const response = await axios(`${BASE_URL}/posts`);

  return response.data;
};

const createMarkup = item => {
  const { title, content, category } = item;

  const text = content.split('.').slice(0, 3).join('.');

  return `
    <div class="posts__item-wrapper">
      <a class="posts__item-subtitle" href="#">${category}</a>
      <h3 class="posts__item-title"><a href="#">${title}</a></h3>
      <p class="posts__item-text">${text}</p>
    </div>
  `;
};

const createPosts = async () => {
  try {
    const result = await fetchPosts();
    const filtered = result.filter(item => item.id <= 5);

    postItems.forEach((item, index) => {
      if (filtered[index]) {
        const markup = createMarkup(filtered[index]);
        item.insertAdjacentHTML('beforeend', markup);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

createPosts();
