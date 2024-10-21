import { fetchImages } from './js/pixabay-api.js';
import { renderImages, initializeLightbox } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refsEl = {
  searchForm: document.querySelector('.search-form'),
  inputForm: document.querySelector('.form-input'),
  searchBtn: document.querySelector('.form-button'),
  gallery: document.querySelector('.gallery'),
  loaderEl: document.querySelector('.loader'),
};

const { searchForm, inputForm, searchBtn, gallery, loaderEl } = refsEl;

searchForm.addEventListener('submit', onSearchFormSubmit);

function onSearchFormSubmit(event) {
  event.preventDefault();
  const query = event.target.elements.search.value.trim();
  if (query === '') {
    gallery.innerHTML = '';
    event.target.reset();
    iziToast.show({
      // title: 'Hey',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
      timeout: 2000,
      backgroundColor: '#EF4040',
      messageColor: '#FAFAFB',
      messageSize: '16px',
      messageLineHeight: '1.5',
      class: 'error',
    });
    return;
  }

  gallery.innerHTML = '';
  loaderEl.classList.remove('is-hidden');

  fetchImages(query)
    .then(imagesData => {
      if (imagesData.total === 0) {
        iziToast.show({
          // title: 'Hey',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          timeout: 2000,
          backgroundColor: '#EF4040',
          messageColor: '#FAFAFB',
          messageSize: '16px',
          messageLineHeight: '1.5',
          class: 'error',
        });
      }
      gallery.innerHTML = renderImages(imagesData.hits);
      initializeLightbox();
      event.target.reset();
    })
    .catch(error => console.log(error))
    .finally(() => {
      event.target.reset();
      loaderEl.classList.add('is-hidden');
    });
}
