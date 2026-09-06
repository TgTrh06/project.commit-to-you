const dialog = document.querySelector('#reply-dialog');
const openButton = document.querySelector('[data-open-dialog]');
const closeButton = document.querySelector('[data-close-dialog]');

openButton.addEventListener('click', () => dialog.showModal());
closeButton.addEventListener('click', () => dialog.close());

dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});
