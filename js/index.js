
$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
                loop:true,
                margin:10,
                nav:false,
                dots:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:5
                    },
                1000:{
                    items:4
                    }
                }
        })

        $(window).scroll(function(){
            var sticky = $('.sticky'),
                scroll = $(window).scrollTop();
        
            if (scroll >= 300) sticky.addClass('fixed');
            else sticky.removeClass('fixed');
        });
});
