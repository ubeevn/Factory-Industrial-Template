
 /**
*
* ---------------------------------------------------------------------------
*
* Template Name : Kudi | Business html5 responsive template
* Template URL :    
* Author : wpthemeshaper
* Version : 1.0
*
* --------------------------------------------------------------------------- 
*
*/


(function($) {

	"use strict";

    /*------------------------------------------
        = Hide Loading Box (Preloader)
    -------------------------------------------*/
    
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}

    /*------------------------------------------
        = Update Scroll to Top
    -------------------------------------------*/

	function headerStyle() {
        if($('.main-header').length){
            var windowpos = $(window).scrollTop();
            var siteHeader = $('.main-header');
            var scrollLink = $('.scroll-to-top');
            if (windowpos > 150) {
                siteHeader.addClass('fixed-header');
                scrollLink.fadeIn(300);
            } else {
                siteHeader.removeClass('fixed-header');
                scrollLink.fadeOut(300);
            }
        }
    }
    
    headerStyle();

    /*------------------------------------------
        = Submenu Dropdown Toggle
    -------------------------------------------*/

    if($('.main-header li.dropdown ul').length){
        $('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="icofont icofont-curved-down"></span></div>');
        
        //Dropdown Button
        $('.main-header li.dropdown .dropdown-btn').on('click', function() {
            $(this).prev('ul').slideToggle(500);
        });
        
        
        //Disable dropdown parent link
        $('.navigation li.dropdown > a').on('click', function(e) {
            e.preventDefault();
        });
    }
    

     /*------------------------------------------
        = RTL Check
    -------------------------------------------*/
    // function rtlcheck() {
    //         if( $( "html" ).attr("dir") == "rtl" ) {
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     }

    /*------------------------------------------
        = Client Logo
    -------------------------------------------*/

	$(".clients-slider-1").owlCarousel({
	  loop: true,
	  items: 1,
	  dots: false,
	  nav: false,
	  autoHeight: false,
	  touchDrag: true,
	  mouseDrag: true,
	  margin: 0,
	  autoplay: true,
	  slideSpeed: 300,
	  navText: ['', ''],
	  responsive: {
	    0: {
	        items: 1,
	        nav: false,
	        dots: false,
	    },
	    600: {
	        items: 1,
	        nav: false,
	        dots: false,
	    },
	    768: {
	        items: 1,
	        nav: false,
	    },
	    1100: {
	        items: 1,
	        nav: false,
	    }
	  }
	});


    

    /* ---------------------------------------------
        Clients SliderThree Column
     --------------------------------------------- */

	if ($('.clients-slider').length) {
		$('.clients-slider').owlCarousel({
			loop:true,
            rtl:true,
			margin:50,
			nav:false,
			dots:false,
			smartSpeed: 500,
			autoplay: 5000,
			responsive:{
				0:{
					items:2
				},
				600:{
					items:3
				},
				1024:{
					items:5
				},
				1200:{
					items:5
				}
			}
		});
	}

    /* ---------------------------------------------
        = Services
     --------------------------------------------- */

    if ($('.services-col-3').length) {
        $('.services-col-3').owlCarousel({
            loop:true,
            margin:50,
            nav:true,
            dots:false,
            smartSpeed: 500,
            navText: [ '<span class="icofont icofont-curved-left"></span>', '<span class="icofont icofont-curved-right"></span>' ],
            autoplay: 5000,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 1
                },
                750: {
                    items: 1
                },
                960: {
                    items: 3
                },
                1170: {
                    items: 3
                },
                1300: {
                    items: 3
                }
            }
        });
    }

    /* ---------------------------------------------
        = Owl Carousel 2 items
     --------------------------------------------- */

    if ($('.carousel-col-2').length) {
        $('.carousel-col-2').owlCarousel({
            loop:true,
            rtl:true,
            margin:50,
            nav:false,
            dots:true,
            smartSpeed: 500,
            autoplay: 5000,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 1
                },
                750: {
                    items: 1
                },
                960: {
                    items: 1
                },
                1170: {
                    items: 2
                },
                1300: {
                    items: 2
                }
            }
        });
    }


    /* ---------------------------------------------
        = Owl Carousel 3 items
     --------------------------------------------- */

    if ($('.carousel-col-3').length) {
        $('.carousel-col-3').owlCarousel({
            loop:true,
            margin:50,
            nav:true,
            dots:false,
            smartSpeed: 500,
            navText: [ '<span class="icofont icofont-curved-left"></span>', '<span class="icofont icofont-curved-right"></span>' ],
            autoplay: 5000,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 1
                },
                750: {
                    items: 1
                },
                960: {
                    items: 3
                },
                1170: {
                    items: 3
                },
                1300: {
                    items: 3
                }
            }
        });
    }

    /* ---------------------------------------------
        = Owl Carousel 5 items
     --------------------------------------------- */

    if ($('.carousel-col-5').length) {
        $('.carousel-col-5').owlCarousel({
            loop:true,
            // rtl:true,
            margin:10,
            nav:false,
            dots:true,
            smartSpeed: 500,
            autoplay: 5000,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 2
                },
                750: {
                    items: 3
                },
                960: {
                    items: 3
                },
                1170: {
                    items: 5
                },
                1300: {
                    items: 5
                }
            }
        });
    }

    /* ---------------------------------------------
        = Owl Carousel 5 items
     --------------------------------------------- */

    if ($('.testimonial-1').length) {
        $('.testimonial-1').owlCarousel({
            loop:true,
            // rtl:true,
            margin:10,
            nav:false,
            dots:true,
            smartSpeed: 500,
            autoplay: 5000,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 1
                },
                750: {
                    items: 1
                },
                960: {
                    items: 1
                },
                1170: {
                    items: 1
                },
                1300: {
                    items: 1
                }
            }
        });
    }
    

    /* ---------------------------------------------
        = Owl Carousel 5 items
     --------------------------------------------- */

    if ($('.testimonial_style_2').length) {
        $('.testimonial_style_2').owlCarousel({
            loop:true,
            // rtl:true,
            margin:10,
            nav:false,
            dots:true,
            smartSpeed: 500,
            autoplay: 5000,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 1
                },
                750: {
                    items: 1
                },
                960: {
                    items: 1
                },
                1170: {
                    items: 1
                },
                1300: {
                    items: 1
                }
            }
        });
    }
	
    /* ---------------------------------------------
        = Light Box
     --------------------------------------------- */

	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'elastic',
			closeEffect : 'elastic',
			helpers : {
				media : {}
			}
		});
	}

    /* ---------------------------------------------
        = Scroll to a Specific Div
     --------------------------------------------- */

	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1000);
	
		});
	}
    
    /* ---------------------------------------------
        = Progressing Bar
     --------------------------------------------- */

    if($('.progress-levels .progress-box .bar-fill').length){
        $(".progress-box .bar-fill").each(function() {
            var progressWidth = $(this).attr('data-percent');
            $(this).css('width',progressWidth+'%');
            $(this).parents('.progress-box').children('.percent').html(progressWidth+'%');
        });
    }
         
    /*------------------------------------------
        = FUNFACT
    -------------------------------------------*/  

    if ($(".fun-fact").length) {

        $('.counter').appear();

        $(document.body).on('appear', '.counter', function(e) {
            var $this = $(this),
            countTo = $this.attr('data-count');

            $({ countNum: $this.text()}).animate({
                countNum: countTo
            }, {
                duration: 3000,
                easing:'linear',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            });
        });
    }
	
    /* ---------------------------------------------
        = Wow Animation
     --------------------------------------------- */

	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}


    /* ---------------------------------------------
        = portfolio filter set active class
     --------------------------------------------- */

    $('.portfolio-filter li').on("click",function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });


    /* ---------------------------------------------
        = portfolio masonry
     --------------------------------------------- */

    $(window).load( function() {

        var $c = $('.portfolio-masonry');
        if(typeof imagesLoaded === 'function') {
            imagesLoaded($c, function () {

                setTimeout(function () {
                    $c.isotope({
                        itemSelector: '.portfolio-item',
                        resizesContainer: false,
                        layoutMode: 'masonry',
                        filter: "*"
                    });
                }, 500);

            });
        }

    });

    /* ---------------------------------------------
        = portfolio gallery
     --------------------------------------------- */

    $('.portfolio-gallery').each(function () { // the containers for all your galleries
        $(this).find(".popup-gallery,.popup-gallery2").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });


    /* ---------------------------------------------
        = portfolio filtering
     --------------------------------------------- */

    $('.portfolio-filter').on('click', 'a', function () {
        $('#filters button').removeClass('current');
        $(this).addClass('current');
        var filterValue = $(this).attr('data-filter');
        $(this).parents(".portfolio-filter-item").next().isotope({filter: filterValue});
    });

    /* ---------------------------------------------
        = popup link
     --------------------------------------------- */

      if($('.popup-link').length){
            $('.popup-link').magnificPopup({
            type: 'image'
        });
      }

    /* ---------------------------------------------------------------------------
	    = Paralex Backgrounds
	* --------------------------------------------------------------------------- */

	var ua = navigator.userAgent,
		  isMobileWebkit = /WebKit/.test(ua) && /Mobile/.test(ua);
		  if( ! isMobileWebkit && jQuery(window).width() >= 768 ){
			$.stellar({
				horizontalScrolling	: false,
				responsive			: true
			});
	}

	// Parallax background
    function bgParallax() {
        if ($(".parallax").length) {
            $(".parallax").each(function() {
                var height = $(this).position().top;
                var resize     = height - $(window).scrollTop();
                var doParallax = -(resize/5);
                var positionValue   = doParallax + "px";
                var img = $(this).data("bg-image");

                $(this).css({
                    backgroundImage: "url(" + img + ")",
                    backgroundPosition: "50%" + positionValue,
                    backgroundSize: "cover"
                });
            });
        }
    }

    /* ---------------------------------------------
        = Full Screen
    ---------------------------------------------- */

    if($('.fullScreen').length){
        $('.fullScreen').css({'height':($(window).height())+'px'});
        $(window).resize(function(){
        $('.fullScreen').css({'height':($(window).height())+'px'});
    });
    } 

    /*------------------------------------------
        = Time Countdown
    -------------------------------------------*/

    if ($('.time-countdown').length) {

        $('.time-countdown').each(function () {
            var Self = $(this);
            var countDate = Self.data('countdown-time'); // getting date

            Self.countdown(countDate, function(event) {
                $(this).html('<li> <div class="box"> <span class="days">'+ event.strftime('%D') +'</span> <span class="timeRef">days</span> </div> </li> <li> <div class="box"> <span class="hours">'+ event.strftime('%H') +'</span> <span class="timeRef">hours</span> </div> </li> <li> <div class="box"> <span class="minutes">'+ event.strftime('%M') +'</span> <span class="timeRef">minutes</span> </div> </li> <li> <div class="box"> <span class="seconds">'+ event.strftime('%S') +'</span> <span class="timeRef">seconds</span> </div> </li>');
            });
        });
    };


/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
        bgParallax();
	});
	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
    $(window).load(function() {
			handlePreloader();
            bgParallax();

    });

})(window.jQuery);



