import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';


const formEl = document.querySelector('.form');
const loadMoreBtnEl = document.querySelector('.load-more-btn');
let page = 1;
let currentQuery = '';

// submit
formEl.addEventListener('submit', async e => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const searchQuery = formData.get('search-text').trim();
  
  if (searchQuery === '') {
    iziToast.error({
      title: 'Помилка',
      message: 'Введіть текст для пошуку',
    });
    return;
  }
  currentQuery = searchQuery;
  clearGallery();
  page = 1;
  showLoader();
  hideLoadMoreButton();
  try {
    const images = await getImagesByQuery(searchQuery, page);
    if (images.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }
    createGallery(images.hits);
    if (images.totalHits <= 15) {
      hideLoadMoreButton();
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
    });
  } finally {
    hideLoader();
  }
});

// loadMore
loadMoreBtnEl.addEventListener('click', async () => {
  page += 1;
  if (!currentQuery) return;
  showLoader();
  try {
    const images = await getImagesByQuery(currentQuery, page);

    if (images.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    createGallery(images.hits);
    const card = document.querySelector('.gallery-item');
    const cardHeight = card.getBoundingClientRect().height;
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
      if (images.totalHits <= page * 15) {
        hideLoadMoreButton();
        iziToast.error({
          message: "We're sorry, but you've reached the end of search results.",
        });
      }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
    });
  } finally {
    hideLoader();
  }
});

