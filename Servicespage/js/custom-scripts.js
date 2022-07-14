$(document).ready(function() {

	/* ========================================== 
	Navigation open/close functions
	========================================== */
	
	const btnnav = document.querySelector('.btn-nav');
    btnnav.addEventListener('click', (event) => {
        btnnav.classList.toggle('open');
    });

    $('.main-banner-wrapper .btn-nav').click(function(){
        $('.main-banner-wrapper .navigation-menu').toggleClass('active');
    });

	// slider container
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

	/* ========================================== 
	Slick Sliders
	========================================== */
	$('.carousel').slick({
		speed: 500,
		dots: false,
		arrows: true,
		autoplay: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplaySpeed: 3000
	});



	/* ==========================================
	testimonials-slider-wrapper
	========================================== */
	$('.testimonials-slides-wrapper').slick({
		speed: 500,
		dots: false,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplaySpeed: 3000,
		// using image instead of arrow
		prevArrow: '<button type="button" class="slick-prev"><img src="../images/left-arrow.jpg" alt="left arrow"></button>',
		nextArrow: '<button type="button" class="slick-prev"><img src="../images/right-arrow.jpg" alt="left arrow"></button>'
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

	/* ==========================================
	faq accordion
	========================================== */

	$('.h-container').click(function(){
        $(this).siblings('.p-container').slideToggle(300);
        $(this).children().children().siblings().toggleClass('active');
    });
    $(function() {
        $('[data-popup-open]').on('click', function(e) {
            var targeted = jQuery(this).attr('data-popup-open');
            $('[data-popup="' + targeted + '"]').fadeIn(350);
    
            e.preventDefault();
        });
        $('[data-popup-close]').on('click', function(e) {
            var targeted = jQuery(this).attr('data-popup-close');
            $('[data-popup="' + targeted + '"]').fadeOut(350);
    
            e.preventDefault();
        });
    });

	/* ==========================================
	our services tabs
	========================================== */
	// Show the first tab and hide the rest
	$('#tabs-nav li:first-child').addClass('active');
	$('.tab-content').hide();
	$('.tab-content:first').show();

	// Click function
	$('#tabs-nav li').click(function(){
	  $('#tabs-nav li').removeClass('active');
	  $(this).addClass('active');
	  $('.tab-content').hide();
	
	  var activeTab = $(this).find('a').attr('href');
	  $(activeTab).fadeIn();
	  return false;
	});

	$('.v-icon').click(function () {
        $('body').addClass('active');


	/* ==========================================
	video testimonials
	========================================== */
    });
    $('.popup-close').click(function () {
        $('body').removeClass('active');
    });

	
});

// banner sliders

$('.c-slide').slick({
	arrows:true,
	dots:false,
	slidesToScroll:1,
	vertical:true,
	centerMode: false,
	slidesToShow:1,
	adaptiveHeight: true,
    infinite: false,
	prevArrow: `<div class="c-up"><img src="images/up-arrow.svg"></div>`,
	nextArrow: `<div class="c-down"><img src="images/down-arrow.svg"></div>`,

});

$('.d-slide').slick({
	arrows:true,
	dots:false,
	slidesToScroll:1,
	vertical:true,
	centerMode: false,
	slidesToShow:1,
	adaptiveHeight: true,
    infinite: false,
	prevArrow: `<div class="c-up"><img src="images/up-arrow.svg"></div>`,
	nextArrow: `<div class="c-down"><img src="images/down-arrow.svg"></div>`,
});