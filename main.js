// document ready
$(document).ready(function(){
    const rightArrow = $('.arrowRight')
    const leftArrow = $('.arrowLeft')
    const first = $('.containerSlider').children().first();
    const last = $('.containerSlider').children().last();
    const home = $('#home');
    
    if(home.hasClass('active')) {
        hideArrows();
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


    // hide all slides
    const allSlides = $('.containerSlider').children()

    function hideAll() {
        hidePopUp();
        allSlides.css('display', 'none');
        allSlides.removeClass('active');
    }


    // Go to selected slide
    const option = $('#coffeeTypes').children();
    
    const slide = $('.containerSlider').children();

    
    let selectedOption;
    
    // selected coffee type
    option.on('click', function(e){
        selectedOption = e.target.innerHTML;

        // Check if slide id matches id of selected coffee
        for(i = 0; i < slide.length; i++) {
            if(slide[i].id === selectedOption){
                console.log(slide[i].id)
                hideAll();
                showArrows();
                slide[i].style.display = 'block';
                slide[i].classList.add('active');
            }
        }
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
        let currentSlide = $('.active');
        const nextSlide = currentSlide.next();

        if(nextSlide.length){
            showArrows()
            currentSlide.removeClass('active').css('display', 'none');
            nextSlide.addClass('active').css('display', 'block');
        } else {
            currentSlide = $('.home')
            currentSlide.addClass('active').css('display', 'block');
            hideArrows();
        }
    }
    

    // Previous slide- left 
    $('.prev').on('click', prevSlide);
    
    function prevSlide() {
        let currentSlide = $('.active');
        const prevSlide = currentSlide.prev();
        
        if(prevSlide.length){         
            currentSlide.removeClass('active').css('display', 'none');
            prevSlide.addClass('active').css('display', 'block');
        }  else {
            currentSlide = $('.home')
            currentSlide.addClass('active').css('display', 'block');
            hideArrows();
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



    // click event that will take the user back to the home page
    $('.fa-home').on('click', function(){
        $('.home').addClass('active').css('display', "block");
    });
    

    
}); 


