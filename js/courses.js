$(document).ready(function() {
    //------- Header Scroll Class  js --------//  
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('header-scrolled');
        } else {
            $('#header').removeClass('header-scrolled');
        }
    });

    /*----------------------------------------------------*/
    //------- Isotope --------//  
    /*----------------------------------------------------*/
    var $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows',
        originLeft: false,
    });
    $grid.isotope({ filter: " .is_active " });
    $("#search-course001 :input").change(function() {
        setTimeout(function () {
            filter($("#search-course001"));
        }, 100);
        
      });
    function filter(element){
        var thisform = element.serialize()
        $urlParam = function (name) {
            var results = new RegExp(name + "=([^&#]*)").exec(
                thisform
            );
            if (results != null) {
              return results[1] || 0;
            } else {
              return null;
            }
        };
        var ex_str = ""
        if ($urlParam("active") == "on"){
            ex_str += " .is_active "
        }
        if ($urlParam("master_mj") == "on"){
            ex_str += " .master_mj "
        }
        if ($urlParam("master_ba") == "on"){
            ex_str += " .master_ba "
        }
        if ($urlParam("classtime_912") == "on"){
            ex_str += " .classtime_912 "
        }
        if ($urlParam("classtime_1316") == "on"){
            ex_str += " .classtime_1316 "
        }
        if ($urlParam("classtime_1820") == "on"){
            ex_str += " .classtime_1820 "
        }
        if ($urlParam("classtype_i") == "on"){
            ex_str += " .classtype_i "
        }
        if ($urlParam("classtype_r") == "on"){
            ex_str += " .classtype_r "
        }
        if ($urlParam("location_e") == "on"){
            ex_str += " .location_e "
        }
        if ($urlParam("location_v") == "on"){
            ex_str += " .location_v "
        }
        $grid.isotope({ filter: ex_str });
    }
});