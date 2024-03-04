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
        if ($(window).width() >= 900) {
            if (currentIndex < totalItems - 5) {
                currentIndex++;
            }
            else {
                currentIndex = 0;
            }
            updateCarousel();
        }
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

    function moveToPrevSlide() {
        if ($(window).width() >= 900) {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = totalItems - 5;
            }
            updateCarousel();
        }

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
            $('.carousel-inner').css('transform', 'translateX(' + newMargin + ')');
        }
        // mobile scroll
        else {
            var newMargin = -currentIndex * 100 + '%';
            $('.carousel-inner').css('transform', 'translateX(' + newMargin + ')');
            dots.removeClass('active');
            dots.eq(currentIndex).addClass('active');
        }

    }
});
