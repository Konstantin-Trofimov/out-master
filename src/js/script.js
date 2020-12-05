'use strict'; // import menu from "./modules/menu.js"; 
// import  search from './modules/search.js';
// import  from './modules/';
// import  from './modules/';
// import  from './modules/';

require("core-js/modules/es.array.for-each");

require("core-js/modules/web.dom-collections.for-each");

window.addEventListener('DOMContentLoaded', function () {
  var menu = function menu() {
    var hamburger = document.querySelector('.left-menu'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close');
    hamburger.addEventListener('click', function () {
      menu.classList.add('active');
    });
    closeElem.addEventListener('click', function () {
      menu.classList.remove('active');
    });
  };

  var search = function search() {
    var loupe = [document.querySelector('.search__wrapper'), document.querySelector('.search__input')],
        search = document.querySelector('.search');
    var nav = document.querySelector('.header__menu');

    var shift = function shift(elem, className) {
      elem.classList.toggle(className);
    };

    document.querySelector('.loupe').addEventListener('click', function () {
      loupe.forEach(function (i) {
        return shift(i, 'loupe_active');
      });
      loupe[1].focus();
      shift(search, 'search_shift');
      shift(nav, 'header__menu_shift');
    });
  };

  menu();
  search();
});