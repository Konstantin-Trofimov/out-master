'use strict';

// import menu from "./modules/menu.js"; 
// import  search from './modules/search.js';
// import  from './modules/';
// import  from './modules/';
// import  from './modules/';

window.addEventListener('DOMContentLoaded', function () {

  //? Menu

  const menu = () => {
    const hamburger = document.querySelector('.left-menu'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

    hamburger.addEventListener('click', () => {
      menu.classList.add('active');
    });

    closeElem.addEventListener('click', () => {
      menu.classList.remove('active');
    }); 
  }   

  //? Search

  const search = () => { 
    const loupe = [document.querySelector('.search__wrapper'), document.querySelector('.search__input')],
      search = document.querySelector('.search'),
      nav = document.querySelector('.header__menu');

    const shift = (elem, className) => {
      elem.classList.toggle(className);
    }

    document.querySelector('.loupe').addEventListener('click', () => {
      loupe.forEach(i => shift(i, 'loupe_active'));
      loupe[1].focus();
      shift(search, 'search_shift');
      shift(nav, 'header__menu_shift');
    });

  }
 

  menu();
  search();
});