'use strict';

// Initialize WOW JS
new WOW().init();

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
