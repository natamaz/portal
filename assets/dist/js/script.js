$(document).ready(function(){
    // Mobile menu

    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('active');
    });


    $('.icon-user').on('click', function(){
        $('.sub-text').toggleClass('clik');
    });
    $('.icon-user-male-black-shape').on('click', function(){
        $('.sub-text').toggleClass('clik');
    });

    $(".user_info").click(function() {
        $(".sub-text").toggleClass("info");
        $(".close_polis").toggleClass("active");

    });
    $(".close_polis").click(function() {
        $(".sub-text").removeClass("info");
        $(".close_polis").removeClass("active");

    });
    jcf.replaceAll();

    $(function() {
        jcf.replaceAll();
    });
    $('.partners-item').matchHeight({
        byRow: false
    });
    $('.tabs img').matchHeight({

    });

    $(document).mouseup(function (e) {
		if (!menuList.is(e.target)
			&& menuList.has(e.target).length === 0) {
			menuList.removeClass('active');
		}
	});


    $('.overlay-signIn,.invalid_popup, .close').on("click", function () {
        $('.invalid_popup').css("display","none");
    });
    $('.open-checkIn').on("click", function () {
        $('.overlay-checkIn').addClass('active');
        $('body').css('overflow', 'hidden');
    });
    $('.overlay-checkIn .closeBtn, .overlay-checkIn .close').on("click", function () {
        $('.overlay-checkIn').removeClass('active');
        $('body').css('overflow', 'auto');
    });
    $('.open-signIn').on("click", function () {
        $('.overlay-signIn').addClass('active');
        $('body').css('overflow', 'hidden');
    });
    $('.overlay-signIn .closeBtn, .overlay-signIn .close').on("click", function () {
        $('.overlay-signIn').removeClass('active');
        $('body').css('overflow', 'auto');
    });
    $('.overlay-link .closeBtn, .overlay-link .close').on("click", function () {
        $('.overlay-link ').removeClass('active');
        $('body').css('overflow', 'auto');
    });
    $('.overlay-authorization .closeBtn, .overlay-authorization .close').on("click", function () {
        $('.overlay-authorization').removeClass('active');
        $('body').css('overflow', 'auto');
    });

    $('.overlay-link2 .closeBtn, .overlay-link2 .close').on("click", function () {
        $('.overlay-link2 ').removeClass('active');
        $('body').css('overflow', 'auto');
    });

    $('.error_popup .close_popup').on("click", function () {
        $('.error_popup').removeClass('active');

    });



    $('.open-checkIn2').on("click", function () {
        $('.overlay-checkIn2').addClass('active');
        $('body').css('overflow', 'hidden');
    });
    $('.overlay-checkIn2 .closeBtn').on("click", function () {
        $('.overlay-checkIn2').removeClass('active');
        $('body').css('overflow', 'auto');
    });

    $('.overlay-signIn2 .signIn__popup .closeBtn').on("click", function () {
        $('.overlay-signIn2').removeClass('active');
        $('body').css('overflow', 'auto');
     });
    $('.open-signIn2').on("click", function () {
        $('.overlay-signIn2').addClass('active');
        $('body').css('overflow', 'hidden');
    });



    $('.open-password').on("click", function () {
        $('.password-signIn').addClass('active');
        $('body').css('overflow', 'hidden');
    });
    $('.password-signIn .password__popup .closeBtn').on("click", function () {
        $('.password-signIn').removeClass('active');
        $('body').css('overflow', 'auto');
    });



    //slider
    $('.reviews-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><span></span></button>',
        prevArrow: '<button class="slick-arrow prev"><span></span></button>',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    vertical: true,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]

    });

    $('.news-slider').slick({
        infinite: true,
        draggable:true,
        arrows:false,
        variableWidth: true,
        variableHeight: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1260,
                settings: {
                    centerMode:true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

            {
                breakpoint: 1024,
                settings: {
                    centerMode:true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode:true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode:true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    centerMode:true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $('.partners-slider').slick({
        infinite: true,
        draggable:true,
        arrows:false,
        variableWidth: true,
        variableHeight: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1260,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {

                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 340,
                settings: {
                    centerMode:true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $('.career-slider').slick({
        infinite: true,
        draggable:true,
        arrows:false,
        variableWidth: true,
        variableHeight: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1260,
                settings: {
                    centerMode:true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

            {
                breakpoint: 1024,
                settings: {
                    centerMode:true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode:true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode:true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    centerMode:true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $('.polis_slider').slick({
        draggable:true,
        arrows:false,
        variableWidth: true,
        variableHeight: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 1260,
                settings: {
                    centerMode:true,
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },

            {
                breakpoint: 1024,
                settings: {
                    centerMode:true,
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode:true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    centerMode:true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });


    $( function() {
        $( ".datepicker" ).datepicker();
    } );
    $('#phone').mask('+7 (000) 000 00 00', {placeholder: "+7 900 --- -- --"});
    $('#phone2').mask('+7 (000) 000 00 00', {placeholder: "+7 900 --- -- --"});
    $('.phone').mask('+7 (000) 000 00 00', {placeholder: "+7 900 --- -- --"});
    $('#tabs-box').responsiveTabs({
        startCollapsed: false,
        animation: 'slide',
        animationQueue: 'accordion',
    });
});


! function(i) {
    var o, n;
    i(".title_block").on("click", function() {
        o = i(this).parents(".accordion_item"), n = o.find(".info"),
            o.hasClass("active_block") ? (o.removeClass("active_block"),
                n.slideUp()) : (o.addClass("active_block"), n.stop(!0, !0).slideDown(),
                o.siblings(".active_block").removeClass("active_block").children(
                    ".info").stop(!0, !0).slideUp())
    })
}(jQuery);




//question_accordion


$(".tab_content_career").hide();
$(".tab_content_career:first").show();
$("ul.tabs_career li").click(function () {
    $(".tab_content_career").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();
    $("ul.tabs_career li").removeClass("active");
    $(this).addClass("active");
});




$(function() {

    $('ul.tabs__chart').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

});




var res = $(".dropdown-menu");
$('[rel^="b"]').on("click", funk);

$(document).click(function(e) {
    if ($(e.target).closest(res).length || $(e.target).closest('.btn').length) return;
    res.fadeOut(100);
    // e.stopPropagation();
});

function funk(){
    var link = $(this).attr('rel'),
        el = $('.dropdown-menu.'+link);
    if(el.css("display") == "none"){
        res.hide();
        el.fadeIn(100);
    }
    else{
        el.fadeOut(100);
    }
}







$(document).mouseup(function(e) {
    var $target = $(e.target);
    if ($target.closest(".wrapper").length == 0) {
        $(".icon-user-male-black-shape").removeClass("open_menu");
    }
});
//about_us_accordion
$(".tab_content").hide();
$(".tab_content:first").show();
$("ul.tabs li").click(function () {
    $(".tab_content").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();
    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");
    $(".tab_accordion").removeClass("d_active");
    $(".tab_accordion[rel^='" + activeTab + "']").addClass("d_active");
});
