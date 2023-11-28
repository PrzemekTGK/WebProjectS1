$(document).ready(function () {
    loadPage('/Pages/home.html'); // Change the URL to your default subpage
});

function loadPage(url) {
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'html',
        success: function (html) {
            $('#contentDiv').html(html);
        },
        error: function (error) {
            console.error(`Failed to fetch: ${url}`, error);
        }
    });
}

$(function(){
    var navLinkHome = $('.nav-link[id="navLinkHome"]');
    navLinkHome.addClass('current');
})