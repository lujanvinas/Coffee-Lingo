
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


    // video and moreInfo will not display at first 
    $('.videoPopup').hide();
    $('.moreInfo').hide();

    // listen to a click event to show video (it will autoplay with no sound)
    $('.fa-video').on('click', function(){
        $('.videoPopup').show();
        $('.description').hide();
        $('.buttons').hide();
        $('.next').hide();
        $('title').css('width', "100%");
    });

    $('.close').on('click', function(){
        $('.videoPopup').hide();
        $('.description').show();
        $('.buttons').show();
        $('.next').show();
    })
    // listen to a click event that will display more info
    $('.fa-info').on('click', function(){
        $('.moreInfo').toggle();
    });

    // listen to a click event that will take the user back to the home page
    $('.fa-home').on('click', function(){
        $('.home').addClass('active').css('display', "block");
    });
    
    
}); 


