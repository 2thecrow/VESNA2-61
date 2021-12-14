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

})
