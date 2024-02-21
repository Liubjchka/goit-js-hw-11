import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function beError() {
  iziToast.error({
    position: 'topRight',
    icon: '',
    maxWidth: 432,
    message:
      'Sorry, there are no images matching your search query.Please try again!',
  });
}
