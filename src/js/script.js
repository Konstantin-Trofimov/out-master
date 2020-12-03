'use strict'; // import  from './modules/';
// import  from './modules/';
// import  from './modules/';
// import  from './modules/';
// import  from './modules/';

window.addEventListener('DOMContentLoaded', function () {
  var hamburger = document.querySelector('.left-menu'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');
  hamburger.addEventListener('click', function () {
    menu.classList.add('active');
  });
  closeElem.addEventListener('click', function () {
    menu.classList.remove('active');
  });
});