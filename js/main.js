$(document).ready(function() {

    var window_width = $(window).width(),
        window_height = window.innerHeight,
        header_height = $(".default-header").height(),
        header_height_static = $(".site-header.static").outerHeight(),
        fitscreen = window_height - header_height;

    $(".fullscreen").css("height", window_height)
    $(".fitscreen").css("height", fitscreen);


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
    $('.aniimated-thumbnials').lightGallery({
        autoplay:true,
        fourceAutoplay:true,
        download:false,
        selector: '.include-in-gallery'
        
    });
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
    //------- Collapse  --------//  
    /*----------------------------------------------------*/
    //------- Collapse QAA Home Page  --------//  
    $("#new-question").click(function () {
        $(this).text($("#collapseExample").hasClass("show") ? '+' : '-');
    });
    /*----------------------------------------------------*/
    //------- Isotope --------//  
    /*----------------------------------------------------*/
    var $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows',
        originLeft: false,
    });
    // bind filter button click
    var filtersElem = document.querySelector('.filters-button-group');
    filtersElem.addEventListener( 'click', function( event ) {
    // only work with buttons
    if ( !matchesSelector( event.target, 'button' ) ) {
        return;
    }
    var filterValue = event.target.getAttribute('data-filter');
    // use matching filter function
    $grid.isotope({ filter: filterValue });
    var felems = $grid.isotope('getFilteredItemElements');
    var elems = $grid.isotope('getItemElements');
    //alert(elems[0].getAttribute("class"));
    for(var i=0 ; i < elems.length ; i++){
        $(elems[i]).removeClass("include-in-gallery");
    }
    for(var i=0 ; i < felems.length ; i++){
        $(felems[i]).addClass("include-in-gallery");
    }
    //reload lightGallery
    var $gallery = $('.aniimated-thumbnials');
    $gallery.data('lightGallery').destroy(true);
    $('.aniimated-thumbnials').lightGallery({
        autoplay:true,
        fourceAutoplay:true,
        download:false,
        selector: '.include-in-gallery'
    }); 
    });
    // change activate class on buttons
    var buttonGroups = document.querySelectorAll('.galery-links');
    for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
    var buttonGroup = buttonGroups[i];
    radioButtonGroup( buttonGroup );
    }

    function radioButtonGroup( buttonGroup ) {
    buttonGroup.addEventListener( 'click', function( event ) {
        // only work with buttons
        if ( !matchesSelector( event.target, 'button' ) ) {
        return;
        }
        buttonGroup.querySelector('.activate').classList.remove('activate');
        event.target.classList.add('activate');
        });
    }
    /*----------------------------------------------------*/
    //------- pre register --------//  
    /*----------------------------------------------------*/
    var name_valid;
    var phone_valid;
    $("#input_name").on("change keyup paste", function(){
        if($(this)[0].value.length < 3){
            $(this).removeClass("is-valid");
            $(this).addClass("is-invalid");
            name_valid = false;
        } else {
            $(this).removeClass("is-invalid");
            $(this).addClass("is-valid");
            name_valid = true;
        }
    });
    $("#input_phone").on("change keyup paste", function(){
        if($(this)[0].value.length < 8 || isNaN($(this)[0].value)){
            $(this).removeClass("is-valid");
            $(this).addClass("is-invalid");
            phone_valid = false;
        } else {
            $(this).removeClass("is-invalid");
            $(this).addClass("is-valid");
            phone_valid = true;
        }
    });
    $(document).on("submit",'#preregister_form',function(e) {
        e.preventDefault();
        var $form = $(this);
        var data  = $form.serializeArray();
        if (name_valid == true && phone_valid == true) {
            data.push({
                name: 'token',
                value: 'OcfLGIGkoex3SDI1o2AeHTBdpwWA1usEuxf04JbiNy9uZHlbzLd6sFaI1U6Qemiy'
                });
            
                $.ajax({
                url: 'https://academyfarda.com/leads/api/submitnew/',
                method: 'POST',
                data: data,
                crossDomain: true,
                success: function(res) {
                    if (res.status == 'submited') {
                        $('#Modalregistersuccess').modal('toggle');
                    } else if (res.status == 'registeration_error') {
                        console.log(res);
                        $('#Modalregistererror').modal('toggle');
                    } else if (res.status == 'phone_number_needed') {
                        console.log(res);
                        $('#Modalregistererror').modal('toggle');
                    } else if (res.status == 'repetitive_ phone_number') {
                        console.log(res);
                        $('#Modalregisterwarning').modal('toggle');
                    } else if (res.status == 'name_needed') {
                        console.log(res);
                        $('#Modalregistererror').modal('toggle');
                    } else if (res.status == 'unknown_error') {
                        console.log(res);
                        $('#Modalregistererror').modal('toggle');
                    } else {
                        console.log(res);
                        $('#Modalregistererror').modal('toggle');
                    }
                },
                error: function(e, v) {
                    console.log(res);
                        $('#Modalregistererror').modal('toggle');
                }
            });  
        }
        
    });

});
