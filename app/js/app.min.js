document.addEventListener('DOMContentLoaded', () => {

	/* Fix header on scroll */

	/* window.addEventListener("scroll", function () {
		var headerHeight = document.querySelector(".hero").offsetHeight;
		var headerOffset = document.documentElement.scrollTop;
		var headerNav = document.querySelector(".header");
	
		if (headerHeight < headerOffset) {
		  headerNav.classList.add('sticky');
		} else {
		  headerNav.classList.remove('sticky');
		}
	}); */

	/* ScrollTo */

	$('.nav__link').on('click', function (e) {
		if (this.hash !== '') {
		  e.preventDefault();
		  var hash = this.hash;
		  $('html, body').animate({
			scrollTop: $(hash).offset().top
		  }, 300);
		}
	});

	/* About Project Badge clicker */
	$('.info-card__header').on('click', function (e) {
		
		/* Show content */
		$(".info-card__body").not($(this).next()).slideUp("fast");
		$(this).next(".info-card__body").slideToggle("fast");
		
		/* Fix z-index */
		$(".info-card").removeClass("active");
		$(this).closest(".info-card").toggleClass("active");
	});



	/* Click outside badge */
	$(document).on('click', function (e) {
		if ($(e.target).closest(".info-card").length === 0) {
			/* Hide all content */
			$(".info-card__body").slideUp("fast");
			/* Remove fix */
			$(".info-card").removeClass("active");
		}
	});


	const flatsSlider = new Swiper('.flat-slider', {
		// Optional parameters
		autoHeight: true,
		spaceBetween: 30,
		slidesPerView: 2,
		watchSlidesProgress: true,

		breakpoints: {
			// when window width is >= 320px
			375: {
			  slidesPerView: 1,
			},
			// when window width is >= 480px
			850: {
			  slidesPerView: 2,
			}
		},
		// If we need pagination
		pagination: {
			el: '.flats-pagination',
			dynamicBullets: true,
		},
	  
		// Navigation arrows
		navigation: {
		  nextEl: '.flats-button-prev',
		  prevEl: '.flats-button-next',
		},
	  
	});
	const flatsNavSlider = new Swiper('.nav-slider', {
		// Optional parameters
		autoHeight: true,
		spaceBetween: 30,
		slidesPerView: 'auto',
		freeMode: true,

		observer: true,
		observeParents: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,

		breakpoints: {
			// when window width is >= 320px
			375: {
				slidesPerView: 1,
				freeMode: false,
			},
			// when window width is >= 480px
			450: {
				slidesPerView: 'auto',
			}
		},


		// If we need pagination
		pagination: {
			el: '.flats-nav-pagination',
			dynamicBullets: true,
			clickable: true
		},
	  
	});

	/* Filter show flats */
	$('.flats-nav__link').on('click', function () {

		var filter = $(this).attr('data-filter');
		$('.flat-slider .swiper-slide').css('display', 'none');
		$('.flat-slider .swiper-slide.' + filter).css('display', 'block');

		flatsSlider.updateSize();
		flatsSlider.updateSlides();
		flatsSlider.updateSlidesClasses();
		flatsSlider.slideTo(0, 1000, false);
		return false;
	});
	/* Show all flats */
	$('.flats-show').on('click', function () {
		$('.flat-slider .swiper-slide').css('display', 'block');

		flatsSlider.updateSize();
		flatsSlider.updateSlides();
		flatsSlider.updateSlidesClasses();
		flatsSlider.slideTo(0, 1000, false);
		return false;
	});


	const bankSlider = new Swiper('.bank-slider', {
		// Optional parameters
		/* autoHeight: true, */
		spaceBetween: 50,
		slidesPerView: 'auto',
		freeMode: true,

		observer: true,
		observeParents: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,


		// Navigation arrows
		navigation: {
			nextEl: '.banks-button-next',
			prevEl: '.banks-button-prev',
		},
		// If we need pagination
		pagination: {
			el: '.banks-pagination',
			dynamicBullets: true,
			clickable: true
		},
	  
	});

	const methodsSlider = new Swiper('.methods-slider', {
		// Optional parameters
		autoHeight: true,
		spaceBetween: 30,
		slidesPerView: 'auto',
		freeMode: true,

		observer: true,
		observeParents: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,


		// Navigation arrows
		navigation: {
			nextEl: '.payment-methods-button-next',
			prevEl: '.payment-methods-button-prev',
		},
	  
	});

	const galleryNav = new Swiper('.gallery-nav', {
		// Optional parameters
		autoHeight: true,
		spaceBetween: 105,
		slidesPerView: 'auto',
		freeMode: true,

		observer: true,
		observeParents: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,

		// If we need pagination
		pagination: {
			el: '.gallery-nav-pagination',
			dynamicBullets: true,
			clickable: true
		},
	  
	});

	const InfaFilterSlider = new Swiper('.filter-slider', {
		// Optional parameters
		spaceBetween: 30,
		slidesPerView: 'auto',
		freeMode: true,

		observer: true,
		observeParents: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,

		// If we need pagination
		pagination: {
			el: '.filter-slider-pagination',
			dynamicBullets: true,
			clickable: true
		},
	  
	});

	


	$('.gallery-nav__link').click(function (e) {
		e.preventDefault();
		$('.gallery-nav__link').removeClass('gallery-nav__link_active');
		$('.gallery-tabs__tab').removeClass('gallery-tabs__tab_active');
		var href = $(this).attr('href');
		$(this).addClass('gallery-nav__link_active');
		$(href).addClass('gallery-tabs__tab_active');
	});


	var BigGallery = document.querySelectorAll('.big-gallery');
	BigGallery.forEach(function (el) {
		var swiper = new Swiper(el, {
		/* init slider when parant is hidden */
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		// If we need pagination
		pagination: {
			el: '.custom-swiper-pagination',
			type: 'fraction',
			renderFraction: function renderFraction(currentClass, totalClass) {
			return ' Фото ' +'<span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>';
			}
		},
		// Navigation arrows
		navigation: {
			nextEl: '.big-gallery-button-next',
			prevEl: '.big-gallery-button-prev'
		},
		});
	});

	/* Build progress filter by years*/

	$('.build-progress-nav').on('click', 'a', function () {
		var filter = $(this).attr('data-filter');
		$('.build-progress-nav__link').removeClass('build-progress-nav__link_active');
		$('.build-progress-slider .swiper-slide').css('display', 'none');
		$('.build-progress-slider .swiper-slide.' + filter).css('display', 'block');
	
		var year = filter.replace("filter", "");
		if (year == "all"){
			$('#filter-month option').css("display", "block");
		} else {
			$("#filter-month option[value*=" + year + "]").css("display", "block");
			$("#filter-month option:not([value*=" + year + "])").not("[value=filterall]").css("display", "none");
		}
		
		$("#filter-month option").attr("selected", false);
		
		$(this).addClass('build-progress-nav__link_active');
		buildProgress.updateSize();
		buildProgress.updateSlides();
		buildProgress.updateSlidesClasses();
		buildProgress.slideTo(0, 1000, false);
		return false;
	});
	/* Build progress filter by month*/
	
	$('#filter-month').on('change', function () {
		var sel = this.value;
		$('.build-progress-slider .swiper-slide').css('display', 'none');
		$('.build-progress-slider .swiper-slide' + '.' + sel).css('display', '');
		buildProgress.updateSize();
		buildProgress.updateSlides();
		buildProgress.updateSlidesClasses();
		buildProgress.slideTo(0, 1000, false);
		return false;
	});

	var buildProgress = new Swiper('.build-progress-slider', {
		observer: true,
		observeParents: true,
		slidesPerView: 3,
		spaceBetween: 30,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		navigation: {
		  nextEl: '.build-progress-button-next',
		  prevEl: '.build-progress-button-prev'
		},
		breakpoints: {
		  320: {
			slidesPerView: 1
		  },
		  576: {
			slidesPerView: 1.5,
			spaceBetween: 30
		  },
		  // when window width is >= 480px
		  1000: {
			slidesPerView: 2.2,
			spaceBetween: 30
		  },
		  // when window width is >= 640px
		  1200: {
			slidesPerView: 2.4,
			spaceBetween: 30
		  },
		  1500: {
			slidesPerView: 3,
			spaceBetween: 30
		  }
		},
	});

	$(document).ready(function () {
		if ($("#filter-month").length > 0) {
			$("#filter-month option").eq(0).attr("selected", true)
			$("#filter-month").trigger("change");
		}
	});

})
