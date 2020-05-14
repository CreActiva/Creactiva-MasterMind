// Activar contador
var contador = new CountDown('#clock', 'May 19 2020 14:00:00 GMT-0400', '¡Comenzamos!', true);
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
  if (this.value.lenght > 30) this.value = this.value.slice(0,30);
  if(!(/^\+/.test(this.value)) && (this.value.length <= 1)) { // Verifica el primer caracter
   this.value = this.value.slice(0,(this.value.length - 1));
  }
  if (!(/^\+(\d*$)/.test(this.value)) && (this.value.length > 1) ){ // Verifica el segundo caracter
     this.value = this.value.slice(0,(this.value.length - 1));
  }
});

// ====================================================
var input = document.querySelector("#master-input-3");
window.intlTelInput(input, {
  initialCountry: 've',
  nationalMode: false,
  utilsScript: './vendors/intl-tel-input/js/utils.js',
  preferredCountries: ['ve', 'us'],
  preventInvalidDialCodes: true,
  customPlaceholder: function(selectedCountryPlaceholder, selectedCountryData) {
    selectedCountryPlaceholder = selectedCountryPlaceholder.replace(/ |-|(|)/g, '');
    return  selectedCountryPlaceholder;
  },
  // separateDialCode: true
});
// Verificar y luego realizar envio en formulario
form.addEventListener('submit', e =>{
  e.preventDefault();
  input.value = input.value.replace(/ |-|(|)/g, '');
  form.submit();
});
// =============================================