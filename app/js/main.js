$(function () {
   // Слайдер

   $(".best-sellers__slider").slick({
      infinite: true,
      arrows: true,
      dots: false,
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplaySpeed: 3000,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
            },
         },
         {
            breakpoint: 620,
            settings: {
               slidesToShow: 2,
            },
         },
         {
            breakpoint: 430,
            settings: {
               slidesToShow: 1,
            },
         },
         {
            breakpoint: 380,
            settings: {
               slidesToShow: 1,
               arrows: false,
            },
         },
      ],
   });

   $(".reviews__slider").slick({
      infinite: true,
      arrows: false,
      dots: true,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 3000,
      fade: true,
      draggable: true,
   });

   // menu burger

   $(".menu__btn, .menu a").on("click", function () {
      $(".menu__list").toggleClass("active");
      $(".menu__btn").toggleClass("active");
      $("body").toggleClass("lock");
   });

   // footer slider nav

   $(".footer-nav__title").on("click", function () {
      // $("footer-nav__list").toggleClass("footer-nav__list--active");
      $(".footer-nav__title").toggleClass("footer-nav__title--active");
      $(this).next().slideToggle();
   });
});

// Плавний скрол

$("#menu").on("click", "a", function (e) {
   e.preventDefault();
   var id = $(this).attr("href"),
      target = $(id),
      header = $("#menu"), // Замініть на відповідний селектор
      headerHeight = header.outerHeight(),
      offset = 120; // Замініть це на бажану величину в пікселях

   if (target.length) {
      var top = target.offset().top - headerHeight - offset;
      $("body, html").animate({ scrollTop: top }, 1500);
   }
});

// Функція для прокрутки сторінки наверх
function scrollToTop() {
   // Прокрутити сторінку до верху з плавністю
   window.scrollTo({
      top: 0,
      behavior: "smooth",
   });
}

// Отримати елемент кнопки
var scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Додати обробник подій для події прокрутки
window.addEventListener("scroll", function () {
   // Визначити, чи користувач почав скролити сторінку
   if (
      document.body.scrollTop > 93 ||
      document.documentElement.scrollTop > 93
   ) {
      scrollToTopBtn.style.display = "flex";
   } else {
      scrollToTopBtn.style.display = "none";
   }
});

// wow animation
wow = new WOW({
   boxClass: "wow",
   animateClass: "animate__animated",
   offset: 25,
   mobile: true,
   live: true,
});
wow.init();
