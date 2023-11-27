$(document).ready(function () {
    var lastLoadedPage = localStorage.getItem('lastLoadedPage');

    if (lastLoadedPage) {
        loadPage(lastLoadedPage);
    } else {
        loadPage('/Pages/home.html');
    }
});

function loadPage(url, carIndex, callback) {
    $.getScript("../Js/carDetails.js", function () {
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'html',
            success: function (html) {
                $('#contentDiv').html(html);
                updateCarDetails(carIndex);
                localStorage.setItem('lastLoadedPage', url);
            },
            error: function (error) {
                console.error(`Failed to fetch: ${url}`, error);
            }
        });
    });
}