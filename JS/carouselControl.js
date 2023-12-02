document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = new bootstrap.Carousel(document.getElementById('myCarousel'));

    // Lazy load images starting from the second one
    var lazyImages = document.querySelectorAll('.carousel-item:not(.active) img');

    lazyImages.forEach(function (img) {
        img.setAttribute('loading', 'lazy');
    });

    // Add an event listener to change the loading attribute when a new slide is shown
    myCarousel._element.addEventListener('slid.bs.carousel', function () {
        var activeImage = myCarousel._element.querySelector('.carousel-item.active img');
        var inactiveImages = myCarousel._element.querySelectorAll('.carousel-item:not(.active) img');

        activeImage.setAttribute('loading', 'eager');

        inactiveImages.forEach(function (img) {
            img.setAttribute('loading', 'lazy');
        });
    });
});