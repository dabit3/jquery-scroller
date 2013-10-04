$(document).ready(function() {
    $(document).scroll(function () {

    var body =   $("body");
    var top = body.scrollTop();
    if (top > 140) {
        $("#NDOneH").addClass('NDOneHShow');
    }
    else  {
            $("#NDOneH").removeClass('NDOneHShow');
    }

    if (top < 964) {
        $(".wrappedNav li a").removeClass('NDNavActive');
        $(".wrappedNav2 li a").removeClass('NDNavActive');
        $("#servicesAnchor").addClass('NDNavActive');
        $("#servicesAnchor2").addClass('NDNavActive');
    };

    if ((top > 965) && (top <= 1650  )) {
        $(".wrappedNav li a").removeClass('NDNavActive');
        $(".wrappedNav2 li a").removeClass('NDNavActive');
        $("#testimonialsAnchor").addClass('NDNavActive');
    };

    if ((top > 1650) && (top < 2549  )) {
        $(".wrappedNav li a").removeClass('NDNavActive');
        $(".wrappedNav2 li a").removeClass('NDNavActive');
        $("#spAnchor").addClass('NDNavActive');
        $("#spAnchor2").addClass('NDNavActive');
    };

    if ((top >= 2550) && (top < 4000  )) {
        $(".wrappedNav li a").removeClass('NDNavActive');
        $(".wrappedNav2 li a").removeClass('NDNavActive');
        $("#contactAnchor").addClass('NDNavActive');
        $("#contactAnchor2").addClass('NDNavActive');
    };

    });


    $("#CMSAnchor").click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: '600px'}, 500);
    })

    $("#servicesAnchor").click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: '0px'}, 500);
    })

    $("#servicesAnchor2").click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: '0px'}, 500);
    })

    $("#testimonialsAnchor").click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: '1000px'}, 500);
    })

    $("#testimonialsAnchor2").click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: '1000px'}, 500);
    })

    $("#spAnchor").click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: '1819px'}, 500);
    })

    $("#spAnchor2").click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: '1819px'}, 500);
    })

    $("#contactAnchor").click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: '2614px'}, 500);
    })

    $("#contactAnchor2").click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: '2614px'}, 500);
    })

    $("#NDClose").click(function(e) {
        e.preventDefault();
        window.parent.Shadowbox.close();
    })


});
