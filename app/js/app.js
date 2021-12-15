document.addEventListener('DOMContentLoaded', () => {

	/* Fix header on scroll */

	window.addEventListener("scroll", function () {
		var headerHeight = document.querySelector(".header").offsetHeight;
		var headerOffset = document.documentElement.scrollTop;
		var headerNav = document.querySelector(".header__container");
	
		if (headerHeight < headerOffset) {
		  headerNav.classList.add('sticky');
		} else {
		  headerNav.classList.remove('sticky');
		}
	});

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


	const swiper = new Swiper('.swiper', {
		// Optional parameters
		autoHeight: true,
        spaceBetween: 20,
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			dynamicBullets: true,
		},
	  
		// Navigation arrows
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	  
	});

})
