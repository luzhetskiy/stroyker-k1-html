$(document).ready(function () {

  // Пример анимации для заголовков h1:
  $("h1").attr({
    "data-aos": "fade", //тип анимации 
    "data-aos-delay": "100", // задержка
    "data-aos-duration": "1000", // продолжительность
  });
  
  // анимация слайда
  $(".slide-content").attr({
    "data-aos": "fade",
    "data-aos-delay": "100",
    "data-aos-duration": "1000",
  });
  // анимация больших слайдов
  $(".owl-item").attr({
    "data-aos": "fade",
    "data-aos-delay": "100",
    "data-aos-duration": "1000",
  });
  // анимация карточек продуктов
  $(".product-item").attr({
    "data-aos": "fade",
    "data-aos-delay": "100",
    "data-aos-duration": "1000",
  });
  // анимация карточек продуктов v2
  $(".product-card-v2").attr({
    "data-aos": "fade",
    "data-aos-delay": "100",
    "data-aos-duration": "1000",
  });
  // анимация контента банера
  $(".content-standard-box").attr({
    "data-aos": "fade",
    "data-aos-delay": "100",
    "data-aos-duration": "1000",
  });
  // анимация формы в подвале
  $(".question-form").attr({
    "data-aos": "fade",
    "data-aos-delay": "100",
    "data-aos-duration": "1000",
  });

});
