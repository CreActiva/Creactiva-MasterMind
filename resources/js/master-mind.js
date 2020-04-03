var contador = new CountDown('#clock', 'Apr 07 2020 19:00:00 GMT-0400', '¡Comenzamos!', true);

var carouselHTML = document.querySelector('.carousel');
// var boolControl = true; // opcional
var boolControl = false; // opcional
var boolIndicator = true;  // opcional
// var numSlideItem = [1, 2, 3, 4, 5]; // opcional
var numSlideItem = [1, 1, 1, 3, 3];
var breakPoint = [0, 576, 768, 992, 1200]; // opcional
var boolNumIndicator = false; // opcional

var carousel = new Carousel(carouselHTML, boolControl, boolIndicator, numSlideItem, breakPoint, boolNumIndicator);
