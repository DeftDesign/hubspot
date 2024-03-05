// Hide Header on Scroll
$(document).ready(function() {
    $(window).scroll(function() {
        var desktopHeader = $('.desktop-header');
        if ($(this).scrollTop() > 100) {
            desktopHeader.addClass('scrolled');
        } else {
            desktopHeader.removeClass('scrolled');
        }
    });
});

// Show / Hide Footer Accordion
$(document).ready(function(){
    // Function to handle resizing
    function handleResize() {
        if ($(window).width() > 900) {
            $('footer').removeClass('accordion');
        } else {
            $('footer').addClass('accordion');
        }
    }
    // Initial call to handleResize
    handleResize();
    // Resize event listener
    $(window).resize(function() {
        handleResize();
    });
});

// Footer Accordion
$(document).ready(function(){
    $('footer.accordion h3').click(function() {
        $(this).toggleClass("active");
        var panel = $(this).next();
        if (panel.css('max-height') !== '0px') {
            panel.css('max-height', '0px');
        } else {
            panel.css('max-height', panel.prop('scrollHeight') + 'px');
        }
    });
});

// Modal functionality
// Any element with the class .modal-link will open a modal with the same id name and "-modal"
$(document).ready(function(){
    $('.modal-link').click(function(){
        var modalId = $(this).attr('id');
        $('#' + modalId + '-modal').addClass('show');
    });

    // Function to close modal when close button or overlay is clicked
    $('.modal .close, .modal .overlay').click(function(){
        $(this).closest('.modal').removeClass('show');
    });
});




// logo carousel
$(document).ready(function () {
    var currentIndex = 0;
    var items = $('.logo-carousel .carousel-item');
    var totalItems = items.length;
    var dotsContainer = $('.logo-carousel .carousel-dots');
    var dots = [];

    // Generate dots
    for (var i = 0; i < totalItems; i++) {
        dotsContainer.append('<span class="dot"></span>');
    }
    dots = $('.dot');


    $('.logo-carousel .next').click(function () {
        moveToNextSlide();
    });

    $('.logo-carousel .prev').click(function () {
        moveToPrevSlide();
    });

    dots.click(function () {
        var index = $(this).index();
        currentIndex = index;
        updateCarousel();
    });

    // Next button
    function moveToNextSlide() {
        // Scroll to begining in desktop view (5 items showing)
        if ($(window).width() >= 900) {
            if (currentIndex < totalItems - 5) {
                currentIndex++;
            }
            else {
                currentIndex = 0;
            }
            updateCarousel();
        }
        // Single scroll for tablet + mobile
        else {
            if (currentIndex < totalItems - 1) {
                currentIndex++;
            }
            else {
                currentIndex = 0;
            }
            updateCarousel();
        }

    }

    // Prev button
    function moveToPrevSlide() {
        // Scroll to begining in desktop view (5 items showing)
        if ($(window).width() >= 900) {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = totalItems - 5;
            }
            updateCarousel();
        }
        // Single scroll for tablet + mobile
        else {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = totalItems - 1;
            }
            updateCarousel();
        }

    }

    function updateCarousel() {
        // desktop scroll
        if ($(window).width() >= 900) {
            var newMargin = -currentIndex * (100 / 5) + '%';
            $('.logo-carousel .carousel-inner').css('transform', 'translateX(' + newMargin + ')');
        }
        // mobile scroll
        else {
            var newMargin = -currentIndex * 100 + '%';
            $('.logo-carousel .carousel-inner').css('transform', 'translateX(' + newMargin + ')');
            dots.removeClass('active');
            dots.eq(currentIndex).addClass('active');
        }

    }
});

// Whats New Carousel
$(document).ready(function () {
    var currentIndex = 0;
    var items = $('.whats-new-slider .slide');
    var totalItems = items.length;
    var dotsContainer = $('.whats-new-slider .carousel-dots');
    var dots = [];

    // Generate dots
    for (var i = 0; i < totalItems; i++) {
        dotsContainer.append('<span class="what-dot"></span>');
    }
    dots = $('.what-dot');


    $('.whats-new-slider .next').click(function () {
        moveToNextSlide();
    });

    $('.whats-new-slider .prev').click(function () {
        moveToPrevSlide();
    });

    dots.click(function () {
        var index = $(this).index();
        currentIndex = index;
        updateCarousel();
    });

    // Next button
    function moveToNextSlide() {
            if (currentIndex < totalItems - 1) {
                currentIndex++;
            }
            else {
                currentIndex = 0;
            }
            updateCarousel();
    }

    // Prev button
    function moveToPrevSlide() {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = totalItems - 1;
            }
            updateCarousel();
    }

    function updateCarousel() {
            var newMargin = -currentIndex * 100 + '%';
            $('.whats-new-slider .carousel-inner').css('transform', 'translateX(' + newMargin + ')');
            dots.removeClass('active');
            dots.eq(currentIndex).addClass('active');
    }
});