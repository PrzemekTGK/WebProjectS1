function highlightCurrentPage() {
    var currentPage = window.location.pathname.split('/').pop();

    var navLinks = $('.navbar-container').find('.nav-link');
    navLinks.each(function () {
        var linkPage = $(this).attr('href').split('/').pop();
        if (linkPage === currentPage) {
            $(this).addClass('current');
        }
    });
}

$(function () {
    if (window.location.pathname.endsWith('index.html')) {
        setTimeout(function () {
            highlightCurrentPage();
        }, 500);
    } else {
        highlightCurrentPage();
    }
});