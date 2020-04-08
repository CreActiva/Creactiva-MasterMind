// Carousel
var contador = new CountDown('#clock', 'Apr 14 2020 19:00:00 GMT-0400', '¡Comenzamos!', true);

var carouselHTML = document.querySelector('.carousel');
// var boolControl = true; // opcional
var boolControl = false; // opcional
var boolIndicator = true;  // opcional
// var numSlideItem = [1, 2, 3, 4, 5]; // opcional
var numSlideItem = [1, 1, 1, 3, 3];
var breakPoint = [0, 576, 768, 992, 1200]; // opcional
var boolNumIndicator = false; // opcional
var carousel = new Carousel(carouselHTML, boolControl, boolIndicator, numSlideItem, breakPoint, boolNumIndicator);

carouselHTML = document.querySelector('.carousel--participantes');
var carousel = new Carousel(carouselHTML, boolControl, boolIndicator, numSlideItem, breakPoint, boolNumIndicator);

// ========
// Form To Google Sheet
var formSection = document.querySelector('.modal__item:nth-child(3)');
var formSmall = document.getElementById('form__small');
const scriptURL = 'https://script.google.com/macros/s/AKfycbzyOie2uvy6qOouk_Eqq2InSGteUp7tk5XWbIGz-f1GQB9MIw8/exec'
const form = document.forms['FormularioMasterMind'];

form.addEventListener('submit', e => {
  e.preventDefault()
  form.elements[3].disabled = true;
  formSmall.classList.replace('d-none','d-block')
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      console.log('Success!', response);
      formSection.innerHTML = '<h3 class="text-orange text-center px-2 pb-2">¡Gracias por suscribirte!</h3><p class="px-2">Próximamente, te estaremos contactado para confirmar tu asistencia.</p>';
    })
    .catch(error => {
      console.error('Error!', error.message)
      formSection.innerHTML = '<h3 class="text-orange text-center p-2">Ha ocurrido un error, recargue la página e inténtelo nuevamente.</h3>';
    });
});
// ====================
// Escucha formulario numérico no mayor a 30 caracteres
var input=  form.elements[2];
input.addEventListener('input', function(){
  if (this.value.length > 30) this.value = this.value.slice(0,30); 
})
