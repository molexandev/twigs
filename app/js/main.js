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
      // fade: true,
      // draggable: true,
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
      // draggable: true,
   });
});
