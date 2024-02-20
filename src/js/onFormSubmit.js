export async function onFormSubmit(event) {
  event.preventDefault();

  refs.gallery.innerHTML = '';
  userTag = event.target.elements.search.value.trim();
  console.log(userTag);

  if (userTag === '') {
    iziToast.error({
      icon: '',
      position: 'bottomCenter',
      message: 'Write something',
    });
    return;
  }
}
