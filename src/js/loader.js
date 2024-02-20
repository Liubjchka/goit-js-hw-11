import { refs } from './refs';

export function watchLoader() {
  refs.loader.classList.remove('hidden');
}

export async function offLoader() {
  await new Promise(resolve => setTimeout(resolve, 1500));

  refs.loader.classList.add('hidden');
}
