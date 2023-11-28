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
    var navBrand = document.querySelectorAll('.navbar-brand');

    navBrand.forEach(function (link) {
        link.addEventListener('click', function (event) {
            var navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(function (link) {
                link.classList.remove('current');
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var contentContainer = document.getElementById("contentDiv");
    console.log("contentDiv listener added");


    // Add a click event listener to the content container
    contentContainer.addEventListener("click", function (event) {
        if (event.target.tagName.toLowerCase() === "a" || event.target.tagName.toLowerCase() === "button") {
            console.log("Link Clicked!");
        }
    });
});
