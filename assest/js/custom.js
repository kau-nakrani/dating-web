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



let mybutton = document.getElementById("btn-back-to-top");


// window.onscroll = function () {
//   scrollFunction();
// };

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}





document.addEventListener('scroll', () => {
  const sticky = document.getElementsByClassName('header-sticky')[0];
    var scroll = document.documentElement.scrollTop;
    ;
    if (scroll < 300) {
        sticky.classList.remove('sticky-top');
    }else{
        sticky.classList.add('sticky-top');
    }
});




