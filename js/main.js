$(window).on("load", function () {
  $(".preloader").fadeOut();

  // main swiper

  const mainSwiper = new Swiper(".mainBanner .swiper", {
    loop: true,
    draggable: true,
    autoplay: true,
    speed: 1000,
    navigation: {
      nextEl: " .mainBanner .swiper-button-next",
      prevEl: ".mainBanner .swiper-button-prev",
    },

    pagination: {
      el: ".mainBanner .swiper-pagination",
      clickable: true,
    },

    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  });

  // Products Swiper
  if ($(window).width() < 768) {
    const productsSwiper = new Swiper(".products .swiper", {
      loop: true,
      draggable: true,
      autoplay: true,
      speed: 1000,
      pagination: {
        el: ".products .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      },
    });
  }

  // News Swiper
  if ($(window).width() < 768) {
    const newsSwiper = new Swiper(".news .swiper", {
      loop: true,
      draggable: true,
      autoplay: true,
      speed: 1000,
      pagination: {
        el: ".news .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    });
  }
});

$(document).ready(function () {
  /**************************************************************************************************** */

  // open and close sideBar

  $(".open-nav-btn").click(function () {
    $(".navigation").addClass("reset-left");
    $("body").addClass("overflow-hidden");
  });
  $(".close-nav-btn").click(function () {
    $(".navigation").removeClass("reset-left");
    $("body").removeClass("overflow-hidden");
  });

  /************************************************************************************************** */

  // totop Button

  $(window).scroll(function () {
    if ($(window).scrollTop() > 150) {
      $(".toTop").addClass("showToTop");
    } else {
      $(".toTop").removeClass("showToTop");
    }
  });

  $(".toTop").click(function () {
    $(window).scrollTop(0);
  });

  /************************************************************************************************** */

  // nav nested menu

  if ($(window).width() <= 992) {
    $(".menu-item-has-children").click(function () {
      $(this).children(".sub-menu").slideToggle(300);
      $(this).children(".item-anchor").toggleClass("icon-rotate");
      $(".menu-item-has-children")
        .not($(this))
        .children(".sub-menu")
        .slideUp(300);
      $(".menu-item-has-children")
        .not($(this))
        .children(".item-anchor")
        .removeClass("icon-rotate");
    });
  }

  /************************************************************************************************** */

  // fixed header

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 1) {
      $("header").addClass("fixed-header");
    }
    if ($(window).scrollTop() == 0) {
      $("header").removeClass("fixed-header");
    }
  });

  /************************************************************************************************** */

  //  nested menus in footer

  if ($(window).width() < 768) {
    $(".footer-title").click(function () {
      $(this).next(".quick-drop").slideToggle(300);
      $(this).toggleClass("arrow-rotate");
      $(".footer-title").not($(this)).next(".quick-drop").slideUp(300);
      $(".footer-title").not($(this)).removeClass("arrow-rotate");
    });
  }
}); // End document ready
