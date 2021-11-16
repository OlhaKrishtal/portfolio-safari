$(function(){
    $('.about__popup-link').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

    $('.gallery__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/prev-arrow.svg" alt=""></a></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/next-arrow.svg" alt=""></a></button>',
    });

    $('.gallery__slider').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});

	$('.menu__btn').on('click', function(){
		$('.menu__list').toggleClass('menu__list--active')
		$('.menu__btn').toggleClass('menu__btn--active')
	});
          
});