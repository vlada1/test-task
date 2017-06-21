$(document).ready(function() {

    $('#main-slider').owlCarousel({
        loop: true,
        margin: 15,
        responsiveClass: true,
        nav: true,
        items: 1,
        navText: ["<img src='img/prev.png'>", "<img src='img/next.png'>"]
    });

    $('#team-slider').owlCarousel({
        loop: false,
        margin: 15,
        nav: true,
        navText: ["<img src='img/prev.png'>", "<img src='img/next.png'>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            640: {
                items: 2
            },
            768: {
                items: 3
            },
            980: {
                items: 4,
                mouseDrag: false
            }
        }
    });

    $('#subscribe-slider').owlCarousel({
        loop: false,
        margin: 30,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1170: {
                items: 3,
                mouseDrag: false
            }
        }
    });

    $('.buy__button').hover(
        function() {
            $(this).attr("style", 'background-color: #49cbcd;');
            $(this).parent('.buy').siblings('.subscribe__title').attr("style", 'background-color: #49cbcd;');
        },
        function() {
            $(this).attr("style", 'background-color: #485460;');
            $(this).parent('.buy').siblings('.subscribe__title').attr("style", 'background-color: #485460;');
        }
    );

    var navMain = document.querySelector('.page-nav');
    var navToggle = document.querySelector('.page-nav__toggle');

    navMain.classList.remove('page-nav--nojs');

    navToggle.addEventListener('click', function() {
        if (navMain.classList.contains('page-nav--closed')) {
            navMain.classList.remove('page-nav--closed');
            navMain.classList.add('page-nav--opened');
        } else {
            navMain.classList.add('page-nav--closed');
            navMain.classList.remove('page-nav--opened');
        }
    });

    $(function() {

        $('.page-footer__form').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true
                }
            },
            messages: {
                name: {
                    required: "Please enter your name. Field is required",
                    minlength: "Expected at least 2 characters"
                },
                email: {
                    required: "Please enter your email. Field is required",
                    email: "Please enter valid email"
                },
                message: {
                    required: "Please enter your message. Field is required"
                }
            }
        });


    });

});
