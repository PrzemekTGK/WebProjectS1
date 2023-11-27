$(document).ready(function () {
    loadPage('/Pages/home.html');
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
            },
            error: function (error) {
                console.error(`Failed to fetch: ${url}`, error);
            }
        });
    });
}