// logo carousel
$(document).ready(function () {
    var currentIndex = 0;
    var items = $('.carousel-item');
    var totalItems = items.length;
    var dotsContainer = $('.carousel-dots');
    var dots = [];

    // Generate dots
    for (var i = 0; i < totalItems; i++) {
        dotsContainer.append('<span class="dot"></span>');
    }
    dots = $('.dot');


    $('.next').click(function () {
        moveToNextSlide();
    });

    $('.prev').click(function () {
        moveToPrevSlide();
    });

    dots.click(function () {
        var index = $(this).index();
        currentIndex = index;
        updateCarousel();
    });

    function moveToNextSlide() {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    }

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
        $('.carousel-inner').css('transform', 'translateX(' + newMargin + ')');
        dots.removeClass('active');
        dots.eq(currentIndex).addClass('active');
    }
});
