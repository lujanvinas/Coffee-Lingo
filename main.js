
// document ready
$(document).ready(function(){
    $('.next').on('click', function(){
    const currentSlide = $('.active');
    const nextSlide = currentSlide.next();
      
    if(nextSlide.length){
        currentSlide.removeClass('active').css('display', "none");
        nextSlide.addClass('active').css('display', "block");
        }
    })

    $('.prev').on('click', function(){
        const currentSlide = $('.active');
        const prevSlide = currentSlide.prev();
        
        if(prevSlide.length){
            currentSlide.removeClass('active').css('display', "none");
            prevSlide.addClass('active').css('display', "block");
            }
        })

        $('.slideContent').click(function() {
            $(this).toggleClass('open');
        });
}); 