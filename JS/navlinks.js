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
    var allLinks = document.querySelectorAll('a');

    allLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
});