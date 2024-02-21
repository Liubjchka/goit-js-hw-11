import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import '../img/Group.png';

export function beError() {
  iziToast.error({
    position: 'topRight',
    iconUrl: '../img/Group.png',
    maxWidth: '432',
    backgroundColor: '#ef4040',
    messageColor: '#fafafb',
    messageSize: '16px',
    message:
      'Sorry, there are no images matching your search query.Please try again!',
  });
}
