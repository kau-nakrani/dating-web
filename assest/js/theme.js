// JavaScript Document

/*----------------------------------------------------*/
/*	Navigtion Mobile Toggle
/*----------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
  var navToggler = document.querySelector('.navbar-toggler');
  var navbarCollapse = document.querySelector('.navbar-collapse');
  var btnClose = document.querySelector('.btn-close');
  var menuButton = document.querySelector('.navbar-toggler');

  navToggler.addEventListener('click', function () {
    navbarCollapse.classList.toggle('show');
    menuButton.classList.toggle('hidden');
    btnClose.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll');
  });

  btnClose.addEventListener('click', function () {
    navbarCollapse.classList.remove('show');
    menuButton.classList.remove('hidden');
    btnClose.classList.add('hidden');
    document.body.classList.remove('no-scroll');
  });
});


/*----------------------------------------------------*/
/*	Header Sticky Bar
/*----------------------------------------------------*/

document.addEventListener('scroll', () => {
  const classHeaderSticky = document.getElementsByClassName('header-sticky')[0];
  var windowScroll = document.documentElement.scrollTop;
  ;
  if (windowScroll < 300) {
    classHeaderSticky.classList.remove('sticky-top');
  } else {
    classHeaderSticky.classList.add('sticky-top');
  }
});

/*----------------------------------------------------*/
/*	Scroll Up
/*----------------------------------------------------*/
let bottomTopbtn = document.getElementById("scrollUp");

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    bottomTopbtn.style.display = "block";
  } else {
    bottomTopbtn.style.display = "none";
  }
}

bottomTopbtn.addEventListener("click", backToTop);
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}