$(function () {


    /* ----- Main Menu ----- */

    if ($().mobileMenu) {
        $('#header nav').mobileMenu();
    }


    /* ----- Carousels & Sliders ----- */

    // default flex parameters
    if ($().flexslider) {
        $('.flexslider').flexslider({
            controlNav: true,
            directionalNav: true,
            slideshow: false
        });
    }


    /* ----- Twitter Feed ----- */

    if ($().tweet) {
        $(".widget-twitter .widget-content > div").tweet({
            username: "envato",
            join_text: "auto",
            avatar_size: 0,
            count: 2,
            auto_join_text_default: "",
            auto_join_text_ed: "",
            auto_join_text_ing: "",
            auto_join_text_reply: "",
            auto_join_text_url: "",
            loading_text: "loading tweets..."
        });
    }


    /* ----- Navigation Scroll ----- */

    $('#header nav, .page-title, #copyright').localScroll({
        // offset: {left: 0, top: -99}
        offset: {left: 0, top: 0}
    });

    //Detecting user's scroll
    $(window).scroll(function () {

        offsetTolerance = 50;

        headerWrapper = parseInt($('#header').outerHeight());

        //Check scroll position
        scrollPosition = parseInt($(this).scrollTop());

        //Move trough each menu and check its position with scroll position then add current class
        $('#header nav a').each(function () {

            thisHref = $(this).attr('href');

            if ($(thisHref).offset() == null) {
                return;
            }

            thisTruePosition = parseInt($(thisHref).offset().top);
            thisPosition = thisTruePosition - headerWrapper - offsetTolerance;

            if (scrollPosition >= thisPosition) {

                $('.current-menu-item').removeClass('current-menu-item');
                $('#header nav a[href=' + thisHref + ']').parent('li').addClass('current-menu-item');

            }
        });

        //If we're at the bottom of the page, move pointer to the last section
        bottomPage = parseInt($(document).height()) - parseInt($(window).height());

        if (scrollPosition == bottomPage || scrollPosition >= bottomPage) {

            $('.current-menu-item').removeClass('current-menu-item');
            $('#header nav a:last').parent('li').addClass('current-menu-item');
        }
    });



    /* ----- Modal Window ----- */

    $("a[data-toggle=modal]").click(function (event) {
        event.preventDefault();
        $(this).next().modal({
            maxWidth: 940,
            opacity: 65,
            closeClass: "close",
            overlayCss: {background: "#000"},
            autoResize: true
        });
    });


    /* ----- Hide Header on Scroll Up ----- */

    var topPosPrev = $(document).scrollTop();
    var header_height = $('.yapiskan').outerHeight();
    var count = 0;

    $(window).scroll(function () {

        var current = $(document).scrollTop();

        if (current > header_height) {
            $('.yapiskan').addClass('hide');
        }
        else {
            $('.yapiskan').removeClass('hide');
        }

        if (current > topPosPrev) {
            $('.yapiskan').removeClass('show');
            count = 0;
        } else {
            // $('.yapiskan').addClass('show');
            count++;
        }
        if (count > 20) {
            $('.yapiskan').addClass('show');
        }

        topPosPrev = $(document).scrollTop();
    });


    /* -------- Gridder -------- */

    $(".gridder").gridderExpander({
        scroll: true,
        scrollOffset: 60,
        scrollTo: "panel", // panel or listitem
        animationSpeed: 400,
        animationEasing: "easeInOutExpo",
        showNav: true,
        nextText: "<i class=\"fa fa-arrow-right\"></i>",
        prevText: "<i class=\"fa fa-arrow-left\"></i>",
        closeText: "<i class=\"fa fa-times\"></i>",
    });

});
