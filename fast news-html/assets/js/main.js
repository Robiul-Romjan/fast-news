(function ($) {
  "use strict"

  /* 1. Proloder */
  $(window).on('load', function () {
    $('#preloader-active').delay(450).fadeOut('slow');
    $('body').delay(450).css({
      'overflow': 'visible'
    });
  });

  jQuery(document).ready(function ($) {
    $('.my-news-ticker').AcmeTicker({
        type:'marquee',/*horizontal/horizontal/Marquee/type*/
        direction: 'left',/*up/down/left/right*/
        speed: 0.09,/*true/false/number*/ /*For vertical/horizontal 600*//*For marquee 0.05*//*For typewriter 50*/
        controls: {
            toggle: $('.acme-news-ticker-pause'),/*Can be used for horizontal/horizontal/typewriter*//*not work for marquee*/
        }
    });
})

  
  /* 2. slick Nav */
  // mobile_menu
  var menu = $('ul#navigation');
  if (menu.length) {
    menu.slicknav({
      prependTo: ".mobile_menu",
      closedSymbol: '+',
      openedSymbol: '-'
    });
  };

  // Weekly-2 Acticve
  $('.weekly-news-active').slick({
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 3,
    loop: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // Weekly-2 Acticve
  $('.weekly2-news-active').slick({
    dots: true,
    infinite: true,
    speed: 600,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 3,
    loop: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



  // recent-active
  $('.recent-active').slick({
    dots: true,
    infinite: true,
    speed: 600,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"> <span class="flaticon-arrow"></span></button>',
    nextArrow: '<button type="button" class="slick-next"> <span class="flaticon-arrow"><span></button>',
    autoplay: true,
    initialSlide: 3,
    loop: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  /* 5. Video area Active */
  $('.video-items-active').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.testmonial-nav'
  });
  $('.testmonial-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.video-items-active',
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"><span class="ti-arrow-left"></<span></button>',
    nextArrow: '<button type="button" class="slick-next"><span class="ti-arrow-right"></span></button>',
    centerMode: true,
    focusOnSelect: true,
    centerPadding: 0,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  });

  /**
Youtube video
*/
$.fn.createYoutube = function (options) {
  var defaultOptions = {width: 250,height:150};
  var opt = $.extend({}, defaultOptions, options);
  var width = opt.width;
  var height = opt.height;
  $(this).each(function(){
    var code = $(this).data('code');
    if( !code){
      return false;
    }
    var paramStr = '?showinfo=0&rel=0&wmode=transparent';
    var html = '<div style="margin: 10px 0"><iframe title="YouTube video player" width="' 
     + width + '" height="' + height 
     + '" src="https://www.youtube.com/embed/' + code + paramStr
     + '" frameborder="0" allowfullscreen></iframe></div>';  
    $(this).append(html);
  })
}

$(document).ready(function(){
  $(".youtube").createYoutube({
    // width:300,
    // height:250,
  });
  $("#play").createYoutube();
});



  /* 6. Nice Selectorp  */
  var nice_Select = $('select');
  if (nice_Select.length) {
    nice_Select.niceSelect();
  }

  /* 7.  Custom Sticky Menu  */
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $(".header-sticky ").removeClass("sticky-bar");
    } else {
      $(".header-sticky").addClass("sticky-bar");
    }
  });

  /*   Show img flex  */
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $(".header-flex").removeClass("sticky-flex");
    } else {
      $(".header-flex").addClass("sticky-flex");
    }
  });

  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $(".header-sticky").removeClass("sticky");
    } else {
      $(".header-sticky").addClass("sticky");
    }
  });



  /* 8. sildeBar scroll */
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="ti-arrow-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });


  /* 9. data-background */
  $("[data-background]").each(function () {
    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
  });


  // 12 Pop Up Img
  var popUp = $('.single_gallery_part, .img-pop-up');
  if (popUp.length) {
    popUp.magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  }

  // Add class




  $('.sticky-logo').addClass('info-open');


  // Remove clas
  $('.close-icon').click(function () {
    $('.extra-inofo-bar').removeClass('info-open');
  })



})(jQuery);