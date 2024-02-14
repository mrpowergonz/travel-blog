document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;
    let showSlidesTimeout;

    showSlides();
    document.getElementById('prevSlideBtn').addEventListener('click', function() {
        prevSlide();
    });

    document.getElementById('nextSlideBtn').addEventListener('click', function() {
        nextSlide();
    });

    function showSlides() {
        let slides = document.querySelectorAll('.slide');
        if (slideIndex >= slides.length) { slideIndex = 0 }
        if (slideIndex < 0) { slideIndex = slides.length - 1 }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slides[slideIndex].style.display = 'flex';
        slides[slideIndex].classList.add('center-items'); 
        slideIndex++;

        // Clear existing timeout before starting a new one
        clearTimeout(showSlidesTimeout);
        showSlidesTimeout = setTimeout(showSlides, 3000); // Change image every 3 seconds
    }

    function prevSlide() {
        slideIndex -= 2;
        showSlides();
    }

    function nextSlide() {
        showSlides();
    }
});
