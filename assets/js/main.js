$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('.main-menu').addClass('sticky');
        $('.main-menu ul').addClass('pt-5');
        $('.navbar-brand').removeClass('d-lg-none');
        $('.brand').removeClass('d-lg-block');
    } else {
        $('.main-menu').removeClass('sticky');
        $('.brand').addClass('d-lg-block');
        $('.navbar-brand').removeClass('d-block');
        $('.navbar-brand').addClass('d-lg-none');
        $('.main-menu ul').removeClass('pt-5');
    }
});

// ADS SLIDER
$(document).ready(function () {
    "use strict";
    $('.ads-slider').owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 400,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplayHoverPause: true,
        loop: true,
        nav: true,
        merge: true,
        rtl: true,
        dots: false,
        navText: ['<i class="fas fa-angle-right"></i>', '<i class="fas fa-angle-left"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            340: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 3,
            }
        }
    });
});


// SCROLL TOP
$.scrollUp({
    scrollText: '<span><i class="fa fa-angle-up"></i></span>',
    easingType: 'easeInOutExpo',
    scrollSpeed: 900,
    animation: 'fade'
});