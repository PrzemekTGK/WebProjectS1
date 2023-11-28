$(function () {
    var savedState = JSON.parse(localStorage.getItem('pageState'));

    if (savedState && savedState.lastLoadedPage) {
        loadPage(savedState.lastLoadedPage, savedState.lastCarIndex);
    } else {
        loadPage('../Pages/home.html', null);
    }
});

function loadPage(url, carIndex) {
    $.getScript("../Js/carDetails.js", function () {
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'html',
            success: function (html) {
                $('#contentDiv').html(html);
                updateCarDetails(carIndex);

                var pageState = {
                    lastLoadedPage: url,
                    lastCarIndex: carIndex
                };
                localStorage.setItem('pageState', JSON.stringify(pageState));
            },
            error: function (error) {
                console.error(`Failed to fetch: ${url}`, error);
            }
        });
    });
}

$(function(){
    var navLinkHome = $('.nav-link[id="navLinkHome"]');
    navLinkHome.addClass('current');
})