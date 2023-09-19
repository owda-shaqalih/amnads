$(window).on("load", function() {
    $("#preloader").fadeOut();
    AOS.init({
        easing: 'ease-out-back',
        duration: 1000,
        once:true,
    });
});

$(document).ready(function(){
    var rtl = false;
    if($("html").attr("lang") == 'ar'){
         rtl = true;
    }

    /*header-fixed*/
    $(window).scroll(function(){
            
        if ($(window).scrollTop() >= 200) {
            $('#header').addClass('fixed-header');
        }
        else {
            $('#header').removeClass('fixed-header');
        }
              
    });
    
    $(document).on('hidden.bs.modal', function (event) {
      if ($('.modal:visible').length) {
        $('body').addClass('modal-open');
      }
    });

    $(".js-select").each(function(i,v){
        var that = $(this);
        var placeholder = $(that).attr("data-placeholder");
        $(that).select2({
            placeholder:placeholder,
            minimumResultsForSearch: Infinity,
        });
    });
    
    /*open menu*/
    $(".menu-trigger").click(function(){
        $("body,html").addClass('menu-toggle');
        $(".menu-trigger").addClass('active');
    });
    $(".m-overlay").click(function(){
        $("body,html").removeClass('menu-toggle');
        $(".menu-trigger").removeClass('active');
    });

	$("#client_slider").owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        rtl:rtl,
        responsive:{
            0:{
                items:2,
            },
            575:{
                items:3,
            },
            768:{
                items:2,
            },
            992:{
                items:5,
            }

        },
        dots:true,
        nav:true,
        autoplay:false,
        navText:['<i class="fal fa-long-arrow-left"></i>',
            '<i class="fal fa-long-arrow-right"></i>'],

    })
})