// document ready
$(document).ready(function(){
    const coffeeTypes = $('#coffeeTypes');
    const coffeeSelection = $('#coffeeSelection');

    coffeeTypes.hide();

    coffeeSelection.on('click', function(){
        coffeeTypes.slideToggle(500);
        coffeeSelection.css('border-radius', '10px 10px 0 0');
    })

    const slider = $('.slide');
    const home = slider[0];
    console.log(home)

    
    

    // next slide
    // const currentSlide = $('.active');
    // const nextSlide = currentSlide.next();
    // const prevSlide = currentSlide.prev();
    const nextArr = $('.next');
    const prevArr = $('.prev');

    // Right arrow click
    nextArr.on('click', function() {
        const currentSlide = $('.active');
        const nextSlide = currentSlide.next();

        if(nextSlide.length){
            currentSlide.removeClass('active').css('display', 'none');
            nextSlide.addClass('active').css('display', 'block');
        }
    });

    // prev slide
    prevArr.on('click', function() {
        const currentSlide = $('.active');
        const prevSlide = currentSlide.prev();
        
        if(prevSlide.length){         
            currentSlide.removeClass('active').css('display', 'none');
            prevSlide.addClass('active').css('display', 'block');
            }

    });


    // video pop up / more info
    $('.videoPopup').hide();
    $('.moreInfo').hide();


    $('.fa-video').on('click', function(){
        $('.videoPopup').show();
        $('.description').hide();
        $('.icons').hide();
        $('.next').hide();
        $('.prev').hide();
        $('h2').hide();

    }); 
    

    // close video
    $('.close').on('click', function(){
        $('.videoPopup').hide();
        $('.description').show();
        $('.icons').show();
        $('.next').show();
        $('.prev').show();
        $('h2').show();
    });

    // more info- show
    $('.fa-info').on('click', function(){
        $('.moreInfo').show();
        $('.description').hide();
        $('.icons').hide();
        $('.next').hide();
        $('.prev').hide();
        $('h2').hide();


    $('.closeInfo').on('click', function(){
        $('.moreInfo').hide();
        $('.description').show();
        $('.icons').show();
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


