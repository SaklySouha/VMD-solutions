$(document).ready(function () {

    $("#home_carousel").owlCarousel({

        navigation: true, // Show next and prev buttons
        dots: true,
        nav: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true,
        items: 1,
        itemsDesktop: false,
        itemsDesktopSmall: false,
        itemsTablet: false,
        itemsMobile: false

    });

    $("#section_solutions").owlCarousel({

        nav: true,
        navigation: true, // Show next and prev buttons
        dots: false,
        navText: ["<img src='/assets/images/svgs/arrow1-left.svg'>", "<img src='/assets/images/svgs/arrow1-right.svg'>"],
        slideSpeed: 300,
        loop: true,
        autoplay: true,
        autoplaySpeed: 2200,
        autoplayTimeout: 2200,
        autoplayHoverPause: true,
        slideTransition: 'linear',
        margin: 20,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }


    });

    $("#section_product_oil").owlCarousel({

        nav: true,
        navigation: true, // Show next and prev buttons
        dots: false,
        navText: ["<img src='/assets/images/svgs/arrow1-left.svg'>", "<img src='/assets/images/svgs/arrow1-right.svg'>"],
        slideSpeed: 300,
        loop: true,
        margin: 20,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }

    });
    $("#section_sector").owlCarousel({

        nav: true,
        navigation: true, // Show next and prev buttons
        dots: false,
        navText: ["<img src='/assets/images/svgs/arrow1-left.svg'>", "<img src='/assets/images/svgs/arrow1-right.svg'>"],
        slideSpeed: 300,
        loop: true,
        margin: 20,
        items: 1,
    });

    $("#section_logo").owlCarousel({

        nav: false,
        navigation: true, // Show next and prev buttons
        dots: false,
        loop: true,
        autoplay: true,
        autoplaySpeed: 2200,
        autoplayTimeout: 2200,
        autoplayHoverPause: true,
        slideTransition: 'linear',
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }


    });

});