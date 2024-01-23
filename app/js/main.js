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
