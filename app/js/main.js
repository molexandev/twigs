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
