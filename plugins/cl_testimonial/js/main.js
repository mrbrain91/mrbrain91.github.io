jQuery(function($) {
	/*-------------------------------------
       Slick Slider jQuery activation code
       -------------------------------------*/
    jQuery('.testimonial-slide').slick({
       centerMode: true,
		  	centerPadding: '0',
		  	slidesToShow: 3,
		  	arrows: true,
		  	dots: true,
		  	responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '0',
		        slidesToShow: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        arrows: false,
		        dots: false,
		        centerMode: true,
		        centerPadding: '0',
		        slidesToShow: 1
		      }
		    }
		  ]
    });

    $('.testimonial-slide2').slick({
       centerMode: true,
		  	centerPadding: '0',
		  	slidesToShow: 1,
		  	arrows: true,
		  	dots: true,
		  	responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '0',
		        slidesToShow: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        arrows: false,
		        dots: false,
		        centerMode: true,
		        centerPadding: '0',
		        slidesToShow: 1
		      }
		    }
		  ]
    });

    jQuery('.testimonial-slide3').slick({
       centerMode: true,
		  	centerPadding: '0',
		  	slidesToShow: 1,
		  	arrows: true,
		  	dots: true,
		  	responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '0',
		        slidesToShow: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        arrows: false,
		        dots: false,
		        centerMode: true,
		        centerPadding: '0',
		        slidesToShow: 1
		      }
		    }
		  ]
    });

    jQuery('.testimonial-slide4').slick({
       centerMode: true,
		  	centerPadding: '0',
		  	slidesToShow: 1,
		  	arrows: true,
		  	dots: true,
		  	responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: true,
		        centerMode: true,
		        centerPadding: '0',
		        slidesToShow: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        arrows: false,
		        dots: false,
		        centerMode: true,
		        centerPadding: '0',
		        slidesToShow: 1
		      }
		    }
		  ]
    });

    jQuery('.testimonial-slide5').slick({
       centerMode: true,
		  	centerPadding: '0',
		  	slidesToShow: 1,
		  	arrows: true,
		  	dots: true,
		  	responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: true,
		        centerMode: true,
		        centerPadding: '0',
		        slidesToShow: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        arrows: false,
		        dots: false,
		        centerMode: true,
		        centerPadding: '0',
		        slidesToShow: 1
		      }
		    }
		  ]
    });

    //Testimonial Js
    if ($('.testimonial-slide7').length) { 
        jQuery('.testimonial-slide7').slick({
            centerMode: true,
            centerPadding: '0',
            slidesToShow: testimonial_data.col_lg,
            arrows: true,
            dots: true,
            responsive: [
            {
              breakpoint: 991,
              settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0',
                slidesToShow: testimonial_data.col_md,
              }
            },
            {
              breakpoint: 767,
              settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0',
                slidesToShow: testimonial_data.col_sm,
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                dots: false,
                centerMode: true,
                centerPadding: '0',
                slidesToShow: testimonial_data.col_xs,
              }
            },
            {
              breakpoint: 320,
              settings: {
                arrows: false,
                dots: false,
                centerMode: true,
                centerPadding: '0',
                slidesToShow: testimonial_data.col_mobile,
              }
            }
          ]
        });
    }

    jQuery('.testimonial-slide9').slick({
       centerMode: true,
		  	centerPadding: '0',
		  	slidesToShow: 3,
		  	arrows: true,
		  	dots: true,
		  	responsive: [
		    {
		      breakpoint: 992,
		      settings: {
		        arrows: true,
		        centerMode: true,
		        centerPadding: '0',
		        slidesToShow: 1
		      }
		    },
		    {
		      breakpoint: 481,
		      settings: {
		        arrows: false,
		        dots: false,
		        centerMode: true,
		        centerPadding: '0',
		        slidesToShow: 1
		      }
		    }
		  ]
    });

 	if ($('.testimonial-slide10').length) { 
	    jQuery('.testimonial-slide10').slick({
	       centerMode: true,
			  	centerPadding: '0',
			  	slidesToShow: testimonial_data.col_lg,
			  	arrows: true,
			  	dots: true,
			  	responsive: [
			    {
			      breakpoint: 991,
			      settings: {
			        arrows: true,
			        centerMode: true,
			        centerPadding: '0',
			        slidesToShow: testimonial_data.col_md
			      }
			    },
			    {
			      breakpoint: 767,
			      settings: {
			        arrows: false,
			        dots: false,
			        centerMode: true,
			        centerPadding: '0',
			        slidesToShow: testimonial_data.col_sm
			      }
			    }
			  ]
	    });
	}


    /*----------------------------
    Testimonial js active
    ------------------------------ */

     jQuery('.testimonials').slick({
       slidesToShow: 1,
       slidesToScroll: 1,
       arrows: false,
       fade: true,
       asNavFor: '.testimonials-nav'
     });
     jQuery('.testimonials-nav').slick({
       slidesToShow: 3,
       slidesToScroll: 1,
       asNavFor: '.testimonials',
       dots: true,
       focusOnSelect: true,
       centerMode:true,
       centerPadding: '0',
     });
});