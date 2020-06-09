const mobileNavContainer = document.querySelector('#mobile-nav');


document.querySelector('.menu-icon-wrapper').onclick = function(){
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
    mobileNavContainer.classList.toggle('mobile-nav-active');
  }