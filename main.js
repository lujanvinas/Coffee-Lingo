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
    const popUp = $('.popUp')
    const coffeeSelection = $('#coffeeSelection');
    const background = $('.background');

    popUp.hide();

    // show coffee pop up
    function showPopUp() {
        popUp.fadeIn(500);
        background.addClass('overlay');
    };

    // hide coffee pop up
    function hidePopUp() {
        popUp.hide();
        background.removeClass('overlay');
    }

    const closePopUp = $('.closePopUp')

    coffeeSelection.on('click', showPopUp);
    closePopUp.on('click', hidePopUp);


    // go to selected coffee

    // hide home page
    function hideAll() {
        hidePopUp();
        $('.home').css('display', 'none');
        $('.slide1').css('display', 'none');
        $('.slide2').css('display', 'none');
        $('.slide3').css('display', 'none');
        $('.slide4').css('display', 'none');
        $('.slide5').css('display', 'none');

    }


    // coffee options- menu
    $('.option1').on('click', function(){
        hideAll();
        $('.slide1').css('display', 'block');
    })

    $('.option2').on('click', function(){
        hideAll();
        $('.slide2').css('display', 'block');
    })

    $('.option3').on('click', function(){
        hideAll();
        $('.slide3').css('display', 'block');
    })

    $('.option4').on('click', function(){
        hideAll();
        $('.slide4').css('display', 'block');
    })
    $('.option5').on('click', function(){
        hideAll();
        $('.slide5').css('display', 'block');
    })


    // Show arrows
    function showArrows() {
        rightArrow.show();
        leftArrow.show();
    }
   
     // Hide arrows
    function hideArrows() {
        rightArrow.hide();
        leftArrow.hide();
    }

     // Event listener: next slide
    $('.next').on('click', nextSlide);


    // Next Slide - Right
    function nextSlide(){
        const currentSlide = $('.active');
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
    

    // Previous slide- left 
    $('.prev').on('click', prevSlide);
    
    function prevSlide() {
        const currentSlide = $('.active');
        const prevSlide = currentSlide.prev();
        
        if(prevSlide.length){         
            currentSlide.removeClass('active').css('display', 'none');
            prevSlide.addClass('active').css('display', 'block');
            } 
        }

    //  more info
    const info = $('.fa-info');

    info.on('click', showPopUp);
    closePopUp.on('click', hidePopUp);
    

    // Video
    const video = $('.fa-video');
    const videoContainer = $('.videoContainer');
    const videoBackground = $('.videoBackground');
    
    videoContainer.hide();
    function showVideo(){
        videoContainer.fadeIn(500);
        videoBackground.addClass('overlay');
    }
    function hideVideo(){
        videoContainer.hide();
        videoBackground.removeClass('overlay');
    }

    const closeVideo = $('.closeVideo')
    video.on('click', showVideo);
    closeVideo.on('click', hideVideo);


    // $('.fa-video').on('click', function(){
    //     $('.videoPopup').show();
    //     $('.description').hide();
    //     $('.icon').hide();
    //     $('.next').hide();
    //     $('.prev').hide();
    //     $('h2').hide();

    // }); 
    

    // // close video
    // $('.close').on('click', function(){
    //     $('.videoPopup').hide();
    //     $('.description').show();
    //     $('.icon').show();
    //     $('.next').show();
    //     $('.prev').show();
    //     $('h2').show();
    // });



    // more info- show
//     $('.fa-info').on('click', function(){
//         $('.moreInfo').show();
//         $('.description').hide();
//         $('.icon').hide();
//         $('.next').hide();
//         $('.prev').hide();
//         $('h2').hide();


//     $('.closeInfo').on('click', function(){
//         $('.moreInfo').hide();
//         $('.description').show();
//         $('.icon').show();
//         $('.next').show();
//         $('.prev').show();
//         $('h2').show();
//     })
// });

    // listen to a click event that will take the user back to the home page
    $('.fa-home').on('click', function(){
        $('.home').addClass('active').css('display', "block");
    });
    
    
}); 


