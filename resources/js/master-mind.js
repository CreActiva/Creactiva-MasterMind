// Activar contador
var contador = new CountDown('#clock', 'Apr 28 2020 18:00:00 GMT-0400', '¡Comenzamos!', true);
// ================
// Carousel
var carouselHTML = document.querySelector('.carousel');
var boolControl = true;
var boolIndicator = true;
var numSlideItem = [1, 1, 1, 3, 3];
var breakPoint = [0, 576, 768, 992, 1200];
var boolNumIndicator = false;
var carousel = new Carousel(carouselHTML, boolControl, boolIndicator, numSlideItem, breakPoint, boolNumIndicator);

carouselHTML = document.querySelector('.carousel--participantes');
var carousel = new Carousel(carouselHTML, boolControl, boolIndicator, numSlideItem, breakPoint, boolNumIndicator);
// ========

// Escucha formulario numérico no mayor a 30 caracteres
var form = document.forms['FormularioMasterMind'];
var input=  form.elements[2];
input.addEventListener('input', function(){
  if (this.value.length > 30) this.value = this.value.slice(0,30); 
})
// ====================================================