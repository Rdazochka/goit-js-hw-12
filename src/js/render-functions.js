import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  loadMore: document.querySelector('.load-more-btn'),
};

const lightbox = new SimpleLightbox('.gallery a');

export function createGallery(images) {
  const markup = images
    .map(
      image =>
        `<li class="gallery-item">
      <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}" />
      </a>
      <div class="info">
    <div class="info-item">
      <p>Likes</p>
      <p>${image.likes}</p>
    </div>

    <div class="info-item">
      <p>Views</p>
      <p>${image.views}</p>
    </div>

    <div class="info-item">
      <p>Comments</p>
      <p>${image.comments}</p>
    </div>

    <div class="info-item">
      <p>Downloads</p>
      <p>${image.downloads}</p>
    </div>
  </div>
</li>`
    )
    .join('');

  refs.gallery.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}

export function clearGallery() {
  refs.gallery.innerHTML = '';
}

export function showLoader() {
  refs.loader.classList.remove('hidden');
}
export function hideLoader() {
  refs.loader.classList.add('hidden');
}

// Ця функція нічого не приймає, повинна додавати
// клас для відображення кнопки Load more.Нічого не повертає.
export function showLoadMoreButton() {
  refs.loadMore.classList.remove('hidden');
}

// Ця функція нічого не приймає, повинна прибирати
// клас для відображення кнопки Load more.Нічого не повертає.
export function hideLoadMoreButton() {
  refs.loadMore.classList.add('hidden');
}
