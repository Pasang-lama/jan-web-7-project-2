$(document).ready(function () {
    $(".banner-slider").owlCarousel({
        items: 1,
        autoplay: true
    });
    $(".category-slider").owlCarousel({
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
            },
            575: {
                items: 3,
                margin: 20,

            },
            767: {
                items: 5,
                loop: false,

            },
            991: {
                items: 6,
                margin: 30,
                loop: true,


            }
        }
    });
    $(".popular-product-slider").owlCarousel({
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 2,
            },
            767: {
                items: 3,
                margin: 10,

            },
            991: {
                items: 4,

            },
            1200: {
                items: 5,
                margin: 20,
                loop: true,

            }
        }
    });
});