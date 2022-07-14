$(document).ready(function () {
    const btnnav = document.querySelector('.btn-nav');
    btnnav.addEventListener('click', (event) => {
        btnnav.classList.toggle('open');
    });

    $('.main-banner-wrapper .btn-nav').click(function () {
        $('.main-banner-wrapper .navigation-menu').toggleClass('active');
    });

    $('.slider-container').slick({
        mobileFirst: true,
        slidesToScroll: 2,
        slidesToShow: 3,
        arrows: true,
        dots: true,
        prevArrow: `<span class="prev-arrow"><img src="images/arrow-left.png" alt="arrow"></span>`,
        nextArrow: `<span class="next-arrow"><img src="images/arrow-right.png" alt="arrow"></span>`,
        responsive: [
            {
                breakpoint: 576.98,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 991.98,
                settings: {
                    slidesToShow: 6,
                }
            },
        ]
    });

    $('.services-slider').slick({
        mobileFirst: true,
        slidesToScroll: 2,
        slidesToShow: 2,
        arrows: true,
        dots: true,
        prevArrow: `<span class="prev-arrow"><img src="images/arrow-left.png" alt="arrow"></span>`,
        nextArrow: `<span class="next-arrow"><img src="images/arrow-right.png" alt="arrow"></span>`,
        responsive: [
            {
                breakpoint: 576.98,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 991.98,
                settings: "unslick"

            },
        ]
    });
    $('.customer-slider').slick({
        mobileFirst: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows: true,
        dots: false,
        prevArrow: `<span class="p-arrow"><img src="images/a-left.svg" alt="arrow"></span>`,
        nextArrow: `<span class="n-arrow"><img src="images/a-right.svg" alt="arrow"></span>`,

    });
    $('.tabs-wrapper .tabs-item').click(function () {
        let tabID = $(this).attr('data-tab');

        $('.tabs-wrapper .tabs-item').removeClass('active');
        $('.t-wrapper .tabs-container').removeClass('active');

        $(this).addClass('active');
        $("#" + tabID).addClass('active');
    });
    $('.h-container').click(function () {
        $(this).siblings('.p-container').slideToggle(300);
        $(this).children().children().siblings().toggleClass('active');
    });
    $(function () {
        $('[data-popup-open]').on('click', function (e) {
            var targeted = jQuery(this).attr('data-popup-open');
            $('[data-popup="' + targeted + '"]').fadeIn(350);

            e.preventDefault();
        });
        $('[data-popup-close]').on('click', function (e) {
            var targeted = jQuery(this).attr('data-popup-close');
            $('[data-popup="' + targeted + '"]').fadeOut(350);

            e.preventDefault();
        });
    });

    $('.v-icon').click(function () {
        $('body').addClass('active');


    });
    $('.popup-close').click(function () {
        $('body').removeClass('active');
    });

});;

