!(function ($) {
  "use strict";

  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  var scrolltoOffset = $('#header').outerHeight() - 21;

  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function (e) {
    var target = $(this.hash);

    var scrollto = target.offset().top - scrolltoOffset;



    $('html, body').animate({
      scrollTop: scrollto
    }, 1500, 'easeInOutExpo');

    if ($(this).parents('.nav-menu, .mobile-nav').length) {
      $('.nav-menu .active, .mobile-nav .active').removeClass('active');
      $(this).closest('li').addClass('active');
    }

    if ($('body').hasClass('mobile-nav-active')) {
      $('body').removeClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').fadeOut();
    }
    return false;

  });

  var nav_sections = $('section');
  var main_nav = $('.nav-menu, .mobile-nav');

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function () {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first, .mobile-menu ul:first li:first").addClass('active');
      }
    });
  });

  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function (e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });
    
  } {

    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
        $('#topbar').addClass('topbar-scrolled');
      } else {
        $('#header').removeClass('header-scrolled');
        $('#topbar').removeClass('topbar-scrolled');
      }
    });


    $(".testimonials-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      items: 1
    });

    $(document).ready(function () {
      $('.venobox').venobox();
    });

    $(window).on('load', function () {
      var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item'
      });

      $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({
          filter: $(this).data('filter')
        });
      });

      aos_init();

    });

    function aos_init() {
      AOS.init({
        duration: 1000,
        once: true
      });
    }


  }







})(jQuery);