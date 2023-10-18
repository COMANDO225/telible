jQuery(function ($) {
	"use strict";

	// -------------------------------------------------------------
	//      Sticky Menu
	// -------------------------------------------------------------

	function menuSticky() {
		var navHeight = $(".top-bar").height();
		var slidersection = $(".slider-section");
		var headertitle = $(".header-title");
		var menutoggle = $(".menu-toggle");
		var extra = $(".extra");

		$(window).scrollTop() > navHeight
			? $(
					"nav,.slider-section,.header-title,.menu-toggle,.extra"
			  ).addClass("sticky")
			: $(
					"nav,.slider-section, .header-title, .menu-toggle, .extra"
			  ).removeClass("sticky");
	}

	// -------------------------------------------------------------
	//      Fixed Menu
	// -------------------------------------------------------------

	function menuFixed() {
		var navHeight = $(".upper").height();
		$(window).scrollTop() > navHeight
			? $(".nav-One").addClass("sticky")
			: $(".nav-One").removeClass("sticky");
	}

	// -------------------------------------------------------------
	//  	Offcanvas Menu
	// -------------------------------------------------------------

	(function () {
		var menutoggle = $(".menu-toggle");
		var offcanvasmenu = $("#offcanvas-menu");
		var closemenu = $(".close-menu");

		menutoggle.on("click", function () {
			offcanvasmenu.addClass("toggled");
			return false;
		});

		closemenu.on("click", function () {
			offcanvasmenu.removeClass("toggled");
			return false;
		});
	})();

	// -------------------------------------------------------------
	//      Single-Page-Menu-Scrolling  Easy Plugin
	// -------------------------------------------------------------

	$(function () {
		$("a.page-scroll").on("click", function (event) {
			var $anchor = $(this);
			$("html, body")
				.stop()
				.animate(
					{
						scrollTop: $($anchor.attr("href")).offset().top,
					},
					1500,
					"easeInOutExpo"
				);
			event.preventDefault();
		});
	});

	// -------------------------------------------------------------
	// Sub-menu
	// -------------------------------------------------------------
	if ($(".dropmenu").length) {
		$(".dropmenu").on("click", function () {
			$(this).parent().find(".dropDown").slideToggle();
			return false;
		});
	}

	if ($(".single-dropmenu").length) {
		$(".single-dropmenu").on("click", function () {
			$(this).parent().find(".single-dropDown").slideToggle();
			return false;
		});
	}

	// -------------------------------------------------------------
	//      Cart-Box-Open/Remove
	// -------------------------------------------------------------

	(function () {
		var openclose = $(".cart-wrapper");
		var openclosetwo = $(".cart-wrapper-two");

		openclose.on("click", function () {
			return $(this).toggleClass("open");
		});

		openclosetwo.on("click", function () {
			return $(this).toggleClass("open");
		});
	})();

	// -------------------------------------------------------------
	//      Search Bar
	// -------------------------------------------------------------

	(function () {
		var openbar = $(".open-bar");
		var searchbar = $("#search-bar");
		var closebar = $(".close-bar");

		openbar.on("click", function () {
			searchbar.addClass("active");
			return false;
		});

		closebar.on("click", function () {
			searchbar.removeClass("active");
			return false;
		});
	})();

	// -------------------------------------------------------------
	//      Map/Contact-Box-Remove
	// -------------------------------------------------------------

	(function () {
		var mapview = $(".map-view");
		var contactsection = $(".contact-section-one");
		var formview = $(".form-view");

		mapview.on("click", function () {
			contactsection.fadeOut("3000");
			return false;
		});

		formview.on("click", function () {
			contactsection.fadeIn("3000");
			return false;
		});
	})();

	// -------------------------------------------------------------
	//      LightBox-Js
	// -------------------------------------------------------------

	if ($("#lightBox, #lightBox-2").length) {
		$("#lightBox, #lightBox-2").poptrox({
			usePopupCaption: true,
			usePopupNav: true,
			popupPadding: 0,
		});
	}

	function funFactCounting() {
		if ($(".counting-section").length) {
			$(".counting-section").on(
				"inview",
				function (event, visible, visiblePartX, visiblePartY) {
					if (visible) {
						$(this)
							.find(".timer")
							.each(function () {
								var $this = $(this);
								$({ Counter: 0 }).animate(
									{ Counter: $this.text() },
									{
										duration: 2000,
										easing: "linear",
										step: function () {
											$this.text(Math.ceil(this.Counter));
										},
									}
								);
							});

						$(this).off("inview");
					}
				}
			);
		}
	}

	function backToTopBtnAppear() {
		if ($("#toTop").length) {
			var windowpos = $(window).scrollTop(),
				backToTopBtn = $("#toTop");

			if (windowpos > 300) {
				backToTopBtn.fadeIn();
			} else {
				backToTopBtn.fadeOut();
			}
		}
	}

	function backToTop() {
		if ($("#toTop").length) {
			var backToTopBtn = $("#toTop");
			backToTopBtn.on("click", function () {
				$("html, body").animate(
					{
						scrollTop: 0,
					},
					1000
				);

				return false;
			});
		}
	}

	// -------------------------------------------------------------
	// 		Preloader
	// -------------------------------------------------------------

	function preloader() {
		if ($("#preloader").length) {
			$("#preloader")
				.delay(100)
				.fadeOut(500, function () {});
		}
	}

	// -------------------------------------------------------------
	//      WHEN WINDOW LOAD
	// -------------------------------------------------------------

	$(window).on("load", function () {
		preloader();

		funFactCounting();

		backToTop();

		new WOW().init();
	});

	// -------------------------------------------------------------
	//      WHEN WINDOW SCROLL
	// -------------------------------------------------------------
	$(window).on("scroll", function () {
		backToTopBtnAppear();

		menuSticky();

		menuFixed();
	});
}); // Jquery-End
