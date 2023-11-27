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


function checkLoadedPage() {
    var contentDiv = document.getElementById('contentDiv');

    const childElements = contentDiv.children;

    for (const child of childElements) {
        if(child.classList.contains("carousel-container")){
        } else if (child.classList.contains("cars-container")){
        } else if (child.classList.contains("finanace-container")){
        } else if (child.classList.contains("about-container")){
        } else if (child.classList.contains("contact-container")){
        }
    }

}

var observer = new MutationObserver(function () {
    checkLoadedPage();
});

var config = { childList: true, subtree: true };

observer.observe(document.getElementById('contentDiv'), config);