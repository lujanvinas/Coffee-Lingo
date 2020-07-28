
// document ready
$(document).ready(function(){
    $('.next').on('click', function(){
    const currentSlide = $('.active');
    const nextSlide = currentSlide.next();


      
    if(nextSlide.length){
        currentSlide.removeClass('active').css('display', "none");
        nextSlide.addClass('active').css('display', "block");
        }
    });

    $('.prev').on('click', function(){
    const currentSlide = $('.active');
    const prevSlide = currentSlide.prev();
    
    if(prevSlide.length){
        currentSlide.removeClass('active').css('display', "none");
        prevSlide.addClass('active').css('display', "block");
        }
    });


    // video pop up and details: hidden first
    $('.videoPopup').hide();
    $('.moreInfo').hide();

    // listen to a click event to show video (it will autoplay with no sound)
    $('.fa-video').on('click', function(){
        $('.videoPopup').show();
        $('.description').hide();
        $('.buttons').hide();
        $('.next').hide();
        $('.prev').hide();
        $('h2').hide();
    });

    $('.close').on('click', function(){
        $('.videoPopup').hide();
        $('.description').show();
        $('.buttons').show();
        $('.next').show();
        $('.prev').show();
        $('h2').show();
    })
    // listen to a click event that will display details
    $('.fa-info').on('click', function(){
        $('.moreInfo').show();
        $('.description').hide();
        $('.buttons').hide();
        $('.next').hide();
        $('.prev').hide();
        $('h2').hide();


    $('.closeInfo').on('click', function(){
        $('.moreInfo').hide();
        $('.description').show();
        $('.buttons').show();
        $('.next').show();
        $('.prev').show();
        $('h2').show();
    })
});

    // listen to a click event that will take the user back to the home page
    $('.fa-home').on('click', function(){
        $('.home').addClass('active').css('display', "block");
    });
    
    
}); 


