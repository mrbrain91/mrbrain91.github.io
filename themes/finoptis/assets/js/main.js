/**
*
* --------------------------------------------------------------------
*
* Template : Finoptis - Business WordPress Theme
* Author : rs-theme
* Author URI : http://www.rstheme.com/
*
* --------------------------------------------------------------------
*
**/

(function($) {
    "use strict";
    // sticky menu
    var header = $('.menu-sticky');
    var win = $(window);
    var headerinnerHeight = $(".header-inner").innerHeight();

    win.on('scroll', function() {
       var scroll = win.scrollTop();
       if (scroll < headerinnerHeight) {
           header.removeClass("sticky");
       } else {
           header.addClass("sticky");
       }
    });

    $('.header-inner').waypoint('sticky', {
      offset: -10
    });

    $(".widget_nav_menu li a").filter(function(){
        return $.trim($(this).html()) == '';
    }).hide();

    // Canvas Menu Js
    $( ".nav-link-container > a" ).off("click").on("click", function(event){
        event.preventDefault();
        $(".nav-link-container").toggleClass("nav-inactive-menu-link-container");
        $(".sidenav").toggleClass("nav-active-menu-container");
    });
    
    $(".nav-close-menu-li > a").on('click', function(event){
        $(".sidenav").toggleClass("nav-active-menu-container");
        $(".content").toggleClass("inactive-body");
    });

    // Smooth About
    if ($('.smoothAbout').length){
        $(".smoothAbout").on(' click ', function() {
            $('html, body').animate({
                scrollTop: $("#rs-about").offset().top
            }, 1000);
        });
    }

    // collapse hidden
    $(function(){ 
        var navMain = $(".navbar-collapse"); 
         navMain.on("click", "a:not([data-toggle])", null, function () {
             navMain.collapse('hide');
        });
     });


    // video 
    if ($('.player').length) {
        $(".player").YTPlayer();
    }

    //Flicker

    if ($('ul#rsflicker').length) { 
        $('ul#rsflicker').jflickrfeed({        
            limit: flicker_data.limit_f,
            qstrings: {
                id: flicker_data.flicker_id
            },
            itemTemplate: '<li><a href=\"http://www.flickr.com/photos/'+flicker_data.flicker_id+'"\"><img src=\"{{image_s}}\" alt=\"{{title}}\" /></a></li>'
        });
    }
      
    //Feature Left
    $('.image-carousel').owlCarousel({
        loop: true,
        items: 1,
        mouseDrag: true,
        dotsContainer: '#item-thumb',  
    });


    $('.slider-service-slick').slick({
       slidesToShow: 1,
       slidesToScroll: 1,
       arrows: false,
       fade: true,
       asNavFor: '.slider-nav'
     });
    if($('.slider-service-slick').length){
       $('.slider-nav').slick({
         slidesToShow: service3_slider_data.col_lg,
         slidesToScroll: 1,
         asNavFor: '.slider-service-slick',
         dots: false,
         arrows: true,
         mouseDrag : true,
         vertical: true,
         centerMode:true,
         centerPadding:0,
         focusOnSelect: true
      });
    }

    //search 

     $('.sticky_search').on('click', function(event) {        

        $('.sticky_form').toggle('show');

    });

    //One page menu js
    if ($('.page-template-page-single-php .nav').length) {
        $('#single-menu li:first-child').addClass('active');
        $('#single-menu a').on('click', function(){
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              $('#single-menu li').removeClass('active');
              $(this).parent('li').addClass('active');
              if (target.length) {
                $('html, body').animate({
                  scrollTop: (target.offset().top - 70)
                }, 1000, "easeInOutExpo");
                return false;
              }
            }
        });

        var navChildren = $("#single-menu li.menu-item").children("a");
        var aArray = [];
        for (var i = 0; i < navChildren.length; i++) {
            var aChild = navChildren[i];
            var ahref = $(aChild).attr('href');
            aArray.push(ahref);
        }

        $(window).on("scroll", function(){
            var windowPos = $(window).scrollTop();
            var windowHeight = $(window).height();
            var docHeight = $(document).height();
            for (var i = 0; i < aArray.length; i++) {
                var theID = aArray[i];
                var secPosition = $(theID).offset().top;
                secPosition = secPosition - 135;
                var divHeight = $(theID).height();
                divHeight = divHeight + 90;
                if (windowPos >= secPosition && windowPos < (secPosition + divHeight)) {
                    $("#single-menu a[href='" + theID + "']").parent().addClass("active");
                } else {
                    $("#single-menu a[href='" + theID + "']").parent().removeClass("active");
                }
            }
        });
    }

    // Get a quote popup

    $('.popup-quote').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#qname',
        removalDelay: 500, 
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#qname';
                }
            }
        }
    });


    $(".rs-heading h3").each(function() {
  
      // Some Vars
      var elText,
          openSpan = '<span class="first-word">',
          closeSpan = '</span>';
      
      // Make the text into array
      elText = $(this).text().split(" ");
      
      // Adding the open span to the beginning of the array
      elText.unshift(openSpan);
      
      // Adding span closing after the first word in each sentence
      elText.splice(2, 0, closeSpan);
      
      // Make the array into string 
      elText = elText.join(" ");
      
      // Change the html of each element to style it
      $(this).html(elText);
    });

    $('.latest-news-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        asNavFor: '.latest-news-nav'
    });
    $('.latest-news-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.latest-news-slider',
        dots: false,
        centerMode: false,
        centerPadding: '0',
        focusOnSelect: true
    });
    

     // team init
    $(".team-carousel").each(function() {
        var options = $(this).data('carousel-options');
        $(this).owlCarousel(options); 
    });



        // partner init

    $(".partner-carousel").each(function() {
        var options = $(this).data('carousel-options');
        $(this).owlCarousel(options); 
    });
    
     // partner init

       $('.gallery-slider').slick({
       slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        dots: false,
        centerPadding: '228px',
        arrows: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                centerPadding: '188px',
            }
        }, {
            breakpoint: 970,
            settings: {
                arrows: true,
                centerPadding: '144px',
            }
        }, {
            breakpoint: 767,
            settings: {
                arrows: true,
                centerPadding: '0px',
            }
        }, {
            breakpoint: 350,
            settings: {
                arrows: false,
                centerPadding: '0px',
                dots: true,
                slidesToShow: 1,
            }
        }, ]
    });



    // testimonial init   
    $('.testi-carousel').slick({
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 3,
          focusOnSelect: true,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1
              }
            }
          ]
        });
        
    
    $(".testi-item  a.tab").on('click', function(e){
          e.preventDefault();
          slideIndex = $(this).index();
          $( '.testi-carousel' ).slickGoTo( parseInt(slideIndex) );
    });

    // Portfolio Single Carousel
    if ($('.cdev').length) {
         $(".cdev").circlos();
    }

    // Portfolio Single Carousel
    if ($('.portfolio-carousel').length) {
        $('.portfolio-carousel').owlCarousel({
            loop: true,
            nav:true,
            autoHeight:true,
            items:1
        })
    }
    
    // blog init

     $(".blog-carousel").each(function() {
        var options = $(this).data('carousel-options');
        $(this).owlCarousel(options); 
    });

    $(function(){ 
        $( "ul.children" ).addClass( "sub-menu" );
    });
    
     //Videos popup jQuery activation code
    $('.popup-videos').magnificPopup({
        disableOn: 10,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    }); 
    //type writer
        $(".rs-banner .cd-words-wrapper p:first-child").addClass("is-visible");


    // collapse hidden
    $(function(){ 
         var navMain = $(".navbar-collapse"); 
         navMain.on("click", "a:not([data-toggle])", null, function () {
             navMain.collapse('hide');
         });

     });


    //CountDown Timer
    var CountTimer = $('.CountDownTimer');
    if(CountTimer.length){ 
        $(".CountDownTimer").TimeCircles({
            fg_width: 0.030,
            bg_width: 0.8,
            circle_bg_color: "#ffffff",
            circle_fg_color: "#ffffff",
            time: {
                Days:{
                    color: "#fff"
                },
                Hours:{
                    color: "#fff"
                },
                Minutes:{
                    color: "#fff"
                },
                Seconds:{
                    color: "#fff"
                }
            }
        }); 
    }


    //Start horizontal timeline js
        var $index = $('#index'),
          $wrap = $('#wrap-list'),
          $wrap_index = $('#wrap-index'),
          $list = $('#list'),
          $items = $('> li', $list),
          n = $items.length,
          $btn_prev = $('[data-toggle=prev]'),
          $btn_next = $('[data-toggle=next]');

      // modify style
      $items.css({
        width: (100/n) + '%'
      });
      $list.css({
        width: n*100 + '%'
      }).removeClass('hide');
      var i_padding = $wrap_index.width();
      $index.css({
        width: n*200 + i_padding*2 + 'px',
        'padding-left': i_padding + 'px',
        'padding-right': i_padding + 'px',
      });

      function goToStep(step){
        var $i_active = $('li', $index).removeClass('active').eq(step).addClass('active');
        $items.removeClass('show-me').eq(step).addClass('show-me');
        $list.css({
          'margin-left': -step*100 + '%'
        });
        $('html, body').scrollLeft(0);

        //
        $btn_prev.add($btn_next).removeClass('disabled');
        if (step == 0){
          $btn_prev.addClass('disabled');
        }
        if (step == n - 1){
          $btn_next.addClass('disabled');
        }
        
        // scroll wrap index to center active
        $wrap_index.animate({
          scrollLeft: $i_active.position().left - $wrap_index.width()/2 + 100
        }, 300);
      }

      // events
      $('a', $index).on("click", function(){
        var $li = $(this).parent();
        if ($li.hasClass('active')){
          return false;
        }
        // step want to go next
        var step  = $('li', $index).index($li);
        goToStep(step);
        return false;
      }).eq(0).trigger('click');

      $btn_prev.on("click", function(){
        var $li = $('li.active', $index).prev('li');
        if ($li.length){
          $('a', $li).trigger('click');
        }
        return false;
      });

      $btn_next.on("click", function(){
        var $li = $('li.active', $index).next('li');
        if ($li.length){
          $('a', $li).trigger('click');
        }
        return false;
      });
  //End horizontal timeline js


    //CountDown Timer
    var CountTimer = $('.CountDownTimer3');
    if(CountTimer.length){ 
        $(".CountDownTimer3").TimeCircles({
            fg_width: 0.030,
            bg_width: 0.8,
            circle_bg_color: events_data.ev_circle_bg_color,
            time: {
                Days:{
                    color: events_data.ev_days_color
                },
                Hours:{
                    color: events_data.ev_hours_color
                },
                Minutes:{
                    color: events_data.ev_min_color
                },
                Seconds:{
                    color: events_data.ev_sec_color
                }
            }
        }); 
    } 


    //CountDown Timer
    var CountTimer = $('.CountDownTimer4');
    if(CountTimer.length){ 
        $(".CountDownTimer4").TimeCircles({
            
        }); 
    }

  //preloader
    $(window).on( 'load', function() {
        $("#loading").delay(1500).fadeOut(500);
        $("#loading-center").on( 'click', function() {
        $("#loading").fadeOut(500);
        })

    if($(window).width() < 992) {
      $('.rs-menu').css('height', '0');
      $('.rs-menu').css('opacity', '0');
      $('.rs-menu').css('z-index', '-1');
      $('.rs-menu-toggle').on( 'click', function(){
         $('.rs-menu').css('opacity', '1');
         $('.rs-menu').css('z-index', '1');
     });
    }
    })

    // image loaded portfolio init
    $('.grid').imagesLoaded(function() {
        $('.portfolio-filter').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-item',
            }
        });
    });
            
    // portfolio Filter
    $('.portfolio-filter button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });
    

     // magnificPopup init
    $('.image-popup').magnificPopup({
        type: 'image',
        callbacks: {
            beforeOpen: function() {
               this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure animated zoomInDown');
            }
        },
        gallery: {
            enabled: true
        }
    });

    //woocommerce quantity style
    if ( ! String.prototype.getDecimals ) {
          String.prototype.getDecimals = function() {
              var num = this,
                  match = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
              if ( ! match ) {
                  return 0;
              }
              return Math.max( 0, ( match[1] ? match[1].length : 0 ) - ( match[2] ? +match[2] : 0 ) );
          }
      }
    // Quantity "plus" and "minus" buttons
    $( document.body ).on( 'click', '.plus, .minus', function() {
        var $qty        = $( this ).closest( '.quantity' ).find( '.qty'),
            currentVal  = parseFloat( $qty.val() ),
            max         = parseFloat( $qty.attr( 'max' ) ),
            min         = parseFloat( $qty.attr( 'min' ) ),
            step        = $qty.attr( 'step' );

        // Format values
        if ( ! currentVal || currentVal === '' || currentVal === 'NaN' ) currentVal = 0;
        if ( max === '' || max === 'NaN' ) max = '';
        if ( min === '' || min === 'NaN' ) min = 0;
        if ( step === 'any' || step === '' || step === undefined || parseFloat( step ) === 'NaN' ) step = 1;

        // Change the value
        if ( $( this ).is( '.plus' ) ) {
            if ( max && ( currentVal >= max ) ) {
                $qty.val( max );
            } else {
                $qty.val( ( currentVal + parseFloat( step )).toFixed( step.getDecimals() ) );
            }
        } else {
            if ( min && ( currentVal <= min ) ) {
                $qty.val( min );
            } else if ( currentVal > 0 ) {
                $qty.val( ( currentVal - parseFloat( step )).toFixed( step.getDecimals() ) );
            }
        }

        // Trigger change event
        $qty.trigger( 'change' );
    });

    //service carousel
    if ($('.service-carousel').length) {
        $('.service-carousel').owlCarousel({
            loop:true,
            margin:10,
            arrows: false,
            nav:false,
            dots: service_slider_data.slider_dots,
            responsive:{
                0:{
                    items:service_slider_data.col_mobile
                },
                767:{
                    items:service_slider_data.col_sm
                },
                991:{
                    items:service_slider_data.col_md
                },
                1199:{
                    items:service_slider_data.col_lg
                }
            }
        });
    }
        
    // Counter Up  
    $('.rs-counter').counterUp({
        delay: 20,
        time: 1500
    });
    
    // scrollTop init
    var win=$(window);
    var totop = $('#scrollUp');    
    win.on('scroll', function() {
        if (win.scrollTop() > 150) {
            totop.fadeIn();
        } else {
            totop.fadeOut();
        }
    });
    totop.on('click', function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    }); 

    $(".skew-style2, .skew-style3").prepend('<div class="sppb-row-overlay"></div>');
    $(".skew-style2, .skew-style3").append('<div class="vc_clearfix"></div>');
    
    $(".skew-style-curve").prepend('<div class="sppb-row-overlay"></div>');

    $(function(){ 
        $( "ul.children" ).addClass( "sub-menu" );
    });

    $(".sidenav .menu li").on('click', function() {
        $(this).children("ul.sub-menu").slideToggle();
    }); 
    $( ".comment-body, .comment-respond" ).wrap( "<div class='comment-full'></div>" ); 



    //services style js

    $(".services-main").on({
       mouseenter: function(){
            var icon_hover = $(this).data('icon-hover');
            var icon_hover_bg = $(this).data('icon-hoverbg');
            var title_hover_color = $(this).data('title-hover');

            var readmore_color = $(this).data('readmore-hovercolor');

            $(this).find(".services-icon i").css('color', icon_hover);
            $(this).find(".services-icon i").css('background-color', icon_hover_bg );
            $(this).find(".services-icon h2 a").css('color', title_hover_color);

            $(this).find(".services-item .read_more a").css('color', readmore_color);


        },
        mouseleave: function(){
            var icon_color = $(this).data('icon-color');
            var icon_bg = $(this).data('icon-bg');  
            var title_color = $(this).data('title-color');

            var readmore_hover_color = $(this).data('readmore-color'); 

            $(this).find(".services-icon i").css('color', icon_color); 
            $(this).find(".services-icon i").css('background-color', icon_bg);  
            $(this).find(".services-icon h2 a").css('color', title_color);  

            $(this).find(".services-item .read_more a").css('color', readmore_hover_color);    
        }      
  }, this);

  //services 2 style
  $(".services-style-2").on({
     mouseenter: function(){
          var title_hover = $(this).data('icon-hover');           
          $(this).find(".services-title a").css('color', title_hover);            
      },
      mouseleave: function(){
          var title_color = $(this).data('icon-color'); 
          $(this).find(".services-title a").css('color', title_color);    
      }      
  }, this);

  //title hover for sevices
  $('.rs-services1 .services-title a, .rs-services-style4 .services-title a, .rs-services-style6 .services-title a, .services-style-7 .services-title a, .services-style-8 .services-title a').on('hover', function() {
      $(this).css({
        'color': $(this).data('onhovercolor')
        });

    }, function() {
      $(this).css({
        'color': $(this).data('onleavecolor')
      
    });   
  }); 

 $('.rs-blog .blog-item').last().addClass('last-blog-item');

  //for button
  $('.rs-btn a').on('hover', function() {
    $(this).css({
      'color': $(this).data('onhovercolor'),
      'background-color': $(this).data('onhoverbg')
    });
  },
  function() {
    $(this).css({
      'color': $(this).data('onleavecolor'),
      'background-color': $(this).data('onleavebg')
    });   
  });

  $('.rs-btn2 a, .rs-cta .button-wrap a ').on('hover', function() {
  $(this).css({
    'color': $(this).data('onhovercolor'),
    'border-color': $(this).data('bordercolor'),
    'background-color': $(this).data('onhoverbg')
  });

  }, function() {
    $(this).css({
      'color': $(this).data('onleavecolor'),
      'border-color': $(this).data('bordercolor'),
      'background-color': $(this).data('onleavebg')

    });
  });
  
 $( ".page-links" ).wrap( "<div class='link-clear'></div>" );

})(jQuery);  