document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            navLinks.forEach(function (link) {
                link.classList.remove('current');
            });

            event.target.classList.add('current');
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Get all <a> elements
    var allLinks = document.querySelectorAll('a');

    // Add click event listener to each link
    allLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            // Scroll to the top of the page
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
});