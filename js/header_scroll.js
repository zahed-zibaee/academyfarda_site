
$(document).ready(function() {
    //------- Header Scroll Class  js --------//  

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('header-scrolled');
        } else {
            $('#header').removeClass('header-scrolled');
        }
    });
    if ($(this).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
    } else {
        $('#header').removeClass('header-scrolled');
    }
});