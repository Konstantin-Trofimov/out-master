'use strict'; // import  from './modules/';
// import  from './modules/';
// import  from './modules/';
// import  from './modules/';
// import  from './modules/';

window.addEventListener('DOMContentLoaded', function () {
  var hamburger = document.querySelector('.left-menu'),
      wrap = document.querySelector('.header__wrapper'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');
  hamburger.addEventListener('click', function () {
    menu.classList.add('active');
    wrap.classList.add('shift');
  });
  closeElem.addEventListener('click', function () {
    menu.classList.remove('active');
    wrap.classList.remove('shift');
  });
});