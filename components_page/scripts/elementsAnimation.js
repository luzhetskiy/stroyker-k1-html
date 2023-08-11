$(document).ready(function () {
    // анимация для слайдов
    $('.slick-slide').attr({
        "data-aos": "zoom-in",
        "data-aos-delay": "100",
        "data-aos-duration": "500"
    });

    // анимация больших слайдов
    $('.owl-item').attr({
        "data-aos": "zoom-in",
        "data-aos-delay": "100",
        "data-aos-duration": "500"
    });

    // анимация контента много строчных банеров
    $('.content-background-box').attr({
        "data-aos": "zoom-in",
        "data-aos-delay": "100",
        "data-aos-duration": "500"
    });

    


    AOS.init({
        once: true
    });
});