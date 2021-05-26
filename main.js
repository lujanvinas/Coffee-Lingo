// document ready
$(document).ready(function(){
    const rightArrow = $('.arrowRight')
    const leftArrow = $('.arrowLeft')
    const first = $('.containerSlider').children().first();
    const last = $('.containerSlider').children().last();
    
    
    if(first.hasClass('active')) {
        leftArrow.css('display', 'none')
        rightArrow.css('display', 'none')
    }
    
    // Coffee Pop Up 
    const coffeePopUp = $('.coffeePopUp')
    const coffeeSelection = $('#coffeeSelection');
    const overlay = $('#background');

    coffeePopUp.hide();

    // show coffee pop up
    function showCoffeePopUp() {
        coffeePopUp.fadeIn(500);
        overlay.addClass('overlay');
    };

    // hide coffee pop up
    function hideCoffeePopUp() {
        coffeePopUp.hide();
        overlay.removeClass('overlay');
    }

    const closeCoffeePopUp = $('.closePopUp')

    coffeeSelection.on('click', showCoffeePopUp);
    closeCoffeePopUp.on('click', hideCoffeePopUp);


    // go to selected coffee

    // hide home page
    function hideAll() {
        hideCoffeePopUp();
        $('.home').css('display', 'none');
        $('.slide1').css('display', 'none');
        $('.slide2').css('display', 'none');
        $('.slide3').css('display', 'none');
        $('.slide4').css('display', 'none');
        $('.slide5').css('display', 'none');

    }


    $('.option1').on('click', function(){
        hideAll();
        $('.slide1').css('display', 'block');
        // showArrows()
    })

    $('.option2').on('click', function(){
        hideAll();
        $('.slide2').css('display', 'block');
        // showArrows()
    })

    $('.option3').on('click', function(){
        hideAll();
        $('.slide3').css('display', 'block');
        // showArrows()
    })

    $('.option4').on('click', function(){
        hideAll();
        $('.slide4').css('display', 'block');
        // showArrows()
    })
    $('.option5').on('click', function(){
        hideAll();
        $('.slide5').css('display', 'block');
        // showArrows()
    })


    // Show arrows
    function showArrows() {
        rightArrow.show();
        leftArrow.show();
    }
   

    function hideArrows() {
        rightArrow.hide();
        leftArrow.hide();
    }

     // Event listener: next slide
    $('.next').on('click', nextSlide);


    // Next Slide - Right
    function nextSlide(){
        let currentSlide = $('.active');
        const nextSlide = currentSlide.next();

        if(nextSlide.length){
            showArrows()
            currentSlide.removeClass('active').css('display', 'none');
            nextSlide.addClass('active').css('display', 'block');
        } 
        else {
            currentSlide = $('.home')
            currentSlide.addClass('active').css('display', 'block');
            hideArrows();
        }
    }
    
    // Last arrow

    // Previous slide- left 
    $('.prev').on('click', prevSlide);
    
    function prevSlide() {
        let currentSlide = $('.active');
        const prevSlide = currentSlide.prev();
        
        if(prevSlide.length){         
            currentSlide.removeClass('active').css('display', 'none');
            prevSlide.addClass('active').css('display', 'block');
            } 
        }

    // video pop up / more info
    $('.videoPopup').hide();
    $('.moreInfo').hide();


    $('.fa-video').on('click', function(){
        $('.videoPopup').show();
        $('.description').hide();
        $('.icon').hide();
        $('.next').hide();
        $('.prev').hide();
        $('h2').hide();

    }); 
    

    // close video
    $('.close').on('click', function(){
        $('.videoPopup').hide();
        $('.description').show();
        $('.icon').show();
        $('.next').show();
        $('.prev').show();
        $('h2').show();
    });

    // more info- show
    $('.fa-info').on('click', function(){
        $('.moreInfo').show();
        $('.description').hide();
        $('.icon').hide();
        $('.next').hide();
        $('.prev').hide();
        $('h2').hide();


    $('.closeInfo').on('click', function(){
        $('.moreInfo').hide();
        $('.description').show();
        $('.icon').show();
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


