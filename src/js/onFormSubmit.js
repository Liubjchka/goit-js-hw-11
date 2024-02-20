import { refs } from './refs';
import { pixabayApi } from './pixabayApi';
import { beError } from './beError';
import { watchLoader } from './loader.js';
import { offLoader } from './loader.js';
import { renderGallary } from './renderGallary';

export function onFormSubmit(event) {
  event.preventDefault();

  watchLoader();

  refs.galleryList.innerHTML = '';
  const userTag = event.currentTarget.elements.input.value.trim();
  pixabayApi(userTag).then(renderGallary).catch(beError).finally(offLoader);

  refs.form.reset();
}
