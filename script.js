
  // navbar
  $(window).on('scroll load',()=>{
    //sticky navbar
 if(this.scrollY>20){
    $('.navbar-s').addClass('sticky');
 }
 else{
    $('.navbar-s').removeClass('sticky');
 }
 //scroll btn show/hide
 if(this.scrollY>500){
    $('.scroll-up-btn').addClass('show');
 }
 else{
    $('.scroll-up-btn').removeClass('show');
 }
  });
//slide-up
$('.scroll-up-btn').click(()=>{
    $('html').animate({scrollTop:0});
    $('html').css('scrollBehavior , auto');
});
$('.navbar .menu li a').click(() => {
    // applying again smooth scroll on menu items click
    $('html').css('scrollBehavior', 'smooth');
  });


  AOS.init({
    duration: 1200,
    delay: 400,
  });
// scroll spy
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar-s ul li a');

window.onscroll = () => {
  section.forEach((sec) => {
    var top = window.scrollY;
    var id = sec.getAttribute('id');
    var height = sec.offsetHeight;
    var offset = sec.offsetTop - 20;

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove('active');
        document
          .querySelector('.navbar-s ul li a[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });
};
  //toggle
  $('.menu-btn').click(()=>{
    $('.navbar-s .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('active');
  });
