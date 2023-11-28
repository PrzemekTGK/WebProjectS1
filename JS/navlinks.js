// Scroll to top of the window when clicking a link
document.addEventListener("DOMContentLoaded", function () {
    var allLinks = document.querySelectorAll('a');

    // Interact with links directly from index.html
    allLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });

    var contentContainer = document.getElementById("contentDiv");

    // Interact with links from within #contendDiv container
    contentContainer.addEventListener("click", function (event) {
        if (event.target.tagName.toLowerCase() === "a" || event.target.tagName.toLowerCase() === "button") {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });
});

// Add 'current' class to nav-link elements by interacting with them directly
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

// Remove 'current' class from all nav-link after clicking logo .navbar-brand
$(function () {
    var navBrand = document.querySelectorAll('.navbar-brand');

    navBrand.forEach(function (link) {
        link.addEventListener('click', function (event) {
            var navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(function (link) {
                link.classList.remove('current');
                if(link.id == "navLinkHome"){
                    link.classList.add('current');
                }
            });
        });
    });
});

// Add 'current' class to nav-link elements by interacting with links from within contentDiv container
$(function () {
    var contentContainer = $("#contentDiv");

    contentContainer.on("click", function (event) {
        var clickedElement = $(event.target);
        console.log(clickedElement);
        var clickedLinkId = clickedElement.attr("id");

        if (clickedLinkId) {
            clickedLinkId = clickedLinkId.slice(0, -10);
            clickedLinkId = clickedLinkId.charAt(0).toUpperCase() + clickedLinkId.slice(1);

            if(clickedLinkId.toLowerCase() == "card"){
                clickedLinkId = clickedLinkId.slice(0, -1) + 's';
            }

            var clickedLink = $('.nav-link[id="navLink' + clickedLinkId + '"]');
            $('.nav-link').removeClass('current');
            clickedLink.addClass('current');

            event.preventDefault();
        }
    });
});
