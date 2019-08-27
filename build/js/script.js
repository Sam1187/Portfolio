'use strict';

// Initialize WOW JS
new WOW().init();

// Initialize Slick Slider for section Works
$(document).ready(function(){
    $('.hero__slider').slick({
        dots: true,
        arrows: true,
        nextArrow: '<i class="fa fa-angle-right hero__arrowright" aria-hidden="true"></i>',
        prevArrow: '<i class="fa fa-angle-left hero__arrowleft" aria-hidden="true"></i>',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              arrows: true
            }
          }
        ]
    });
  });

// Menu mobile
  $('.header__menu--open').click(function (e) {
    e.preventDefault();
    $('.header__mobile').toggleClass('header__mobile--visible');
});

  // Tabs in main
  $('.js-tab-trigger').click(function() {
    var id = $(this).attr('data-tab'),
        content = $('.js-tab-content[data-tab="'+ id +'"]');
    
    $('.js-tab-trigger.active').removeClass('active');
    $(this).addClass('active');
    
    $('.js-tab-content.active').removeClass('active');
    content.addClass('active');
 });

 // Smooth scroll
 $('a[href^="#"]').click(function () {
  var target = $(this).attr('href');
  $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
  return false;
});

 // Modal ouibounce
 var _ouibounce = ouibounce(document.getElementById('ouibounce-modal'), {
  aggressive: true,
  timer: 0,
  callback: function() { console.log('ouibounce fired!'); }
});

$('body').on('click', function() {
  $('#ouibounce-modal').hide();
});

$('#ouibounce-modal .modal-footer').on('click', function() {
  $('#ouibounce-modal').hide();
});

$('#ouibounce-modal .modal').on('click', function(e) {
  e.stopPropagation();
});