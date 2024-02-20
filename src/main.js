import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { refs } from './js/refs';
import { pixabayApi } from './js/pixabayApi';
import { onFormSubmit } from './js/onFormSubmit';
import { markup } from './js/markup';

refs.form.addEventListener('submit', onFormSubmit);
