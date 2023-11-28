function highlightCurrentPage() {
    // Get the current page name
    var currentPage = window.location.pathname.split('/').pop();

    // Find the corresponding link in the navigation bar
    var navLinks = $('.navbar-container').find('.nav-link');
    navLinks.each(function () {
        var linkPage = $(this).attr('href').split('/').pop();
        if (linkPage === currentPage) {
            // Add the "current" class to the corresponding link
            $(this).addClass('current');
        }
    });
}

// Highlight the current page when the document is ready
$(function () {
    highlightCurrentPage();
});
