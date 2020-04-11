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
});
