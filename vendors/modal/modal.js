// https://www.w3docs.com/snippets/javascript/how-to-create-a-modal-dialog-box-with-css-and-javascript.html
var modal = document.querySelector('.modal');
var trigger = document.querySelectorAll('.btn-play');
var closeButton = document.querySelector('.close-button');

function toggleModal() {
  modal.classList.toggle('show-modal');
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}
trigger.forEach(el => el.addEventListener('click', toggleModal));
closeButton.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);