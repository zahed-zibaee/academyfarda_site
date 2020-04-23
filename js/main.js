$(document).ready(function() {
    "use strict";

    var window_width = $(window).width(),
        window_height = window.innerHeight,
        header_height = $(".default-header").height(),
        header_height_static = $(".site-header.static").outerHeight(),
        fitscreen = window_height - header_height;

    $(".fullscreen").css("height", window_height)
    $(".fitscreen").css("height", fitscreen);

    //------- Header Scroll Class  js --------//  

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('header-scrolled');
        } else {
            $('#header').removeClass('header-scrolled');
        }
    });

    /*----------------------------------------------------*/
    /*  Custom added on template
    /*----------------------------------------------------*/

    /*----------------------------------------------------*/
    /*  counter up
    /*----------------------------------------------------*/
    $('.counter').counterUp({
		delay: 5,
        time: 1500
	});
    /*----------------------------------------------------*/
    /*  video popup
    /*----------------------------------------------------*/
    $('#html5-videos').lightGallery(); 
    /*----------------------------------------------------*/
    //------- Owl Carusel  js --------//  
    /*----------------------------------------------------*/
    $('.owl-carousel').owlCarousel({
        rtl: true,
        items:2,
        margin: 50,
        loop: true,
        autoplayHoverPause: true,
        dots: true,
        autoplayHoverPause: true,
        smartSpeed:650,
        autoplay: true,      
            responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
            },
            768: {
                items: 2,
            }
        }
    });
    /*----------------------------------------------------*/
    //------- Collapse --------//  
    /*----------------------------------------------------*/
    function a() {
        
        //getting the next element
        var content = $("#collapse1");
        //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
        content.slideToggle();
    
    };
    $("#new-question").click(function () {
        
        var header = $(this);
        //getting the next element
        var content = $("#collapse1");
        //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
        content.slideToggle(500, function () {
            //execute this after slideToggle is done
            //change text of header based on visibility of content div
            header.text(function () {
                //change text based on condition
                return content.is(":visible") ? "-" : "+";
            });
        });
    
    });

});
