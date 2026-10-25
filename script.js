/*jslint browser */
/*global $ */
$(document).ready(function () {
    "use strict";

    const slider = $(".gallery-slider");
    const pager = $("#pager-info");

    function updatePager(slick, currentSlide) {
        const toScroll = slick.options.slidesToScroll || 1;
        const totalPages = Math.ceil(slick.slideCount / toScroll);
        const currentPage = Math.floor(currentSlide / toScroll) + 1;
        pager.text("Страница " + currentPage + " из " + totalPages);
    }

    slider.on("init", function (ignore, slick) {
        updatePager(slick, 0);
    });

    slider.on(
        "afterChange breakpoint",
        function (ignore, slick, currentSlide) {
            updatePager(slick, currentSlide || 0);
        }
    );

    slider.slick({
        adaptiveHeight: false,
        dots: false,
        infinite: false,
        nextArrow: $("#btn-next"),
        prevArrow: $("#btn-prev"),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1
                }
            }
        ],
        slidesToScroll: 3,
        slidesToShow: 3,
        speed: 300
    });
});
