const navHeader=document.querySelector('.header-nav');
const wrapList=document.querySelector('.list-wrapper');
const navToggle=document.querySelector('.header-nav__toggle');

  navHeader.classList.remove('header-nav--nojs');

  navToggle.addEventListener('click', function () {
       if ( navHeader.classList.contains('header-nav--closed')){
            navHeader.classList.remove('header-nav--closed');
            navHeader.classList.add('header-nav--opened');
            wrapList.classList.remove('header-nav--closed');
            wrapList.classList.add('header-nav--opened');

              }
        else{
                navHeader.classList.remove('header-nav--opened');
                navHeader.classList.add('header-nav--closed');
                wrapList.classList.remove('header-nav--opened');
                wrapList.classList.add('header-nav--closed');
              }
            });
