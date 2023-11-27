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
    console.log("inside check loaded page");

    const childElements = contentDiv.children;

    for (const child of childElements) {
        console.log('Child element:', child);
        if(child.classList.contains("carousel-container")){
            console.log('Home !!!');
        } else if (child.classList.contains("cars-container")){
            console.log('Cars !!!');
        } else if (child.classList.contains("finanace-container")){
            console.log('Finance !!!');
        } else if (child.classList.contains("about-container")){
            console.log('About !!!');
        } else if (child.classList.contains("contact-container")){
            console.log('Contact !!!');
        }
    }

}

var observer = new MutationObserver(function () {
    checkLoadedPage();
});

var config = { childList: true, subtree: true };

observer.observe(document.getElementById('contentDiv'), config);