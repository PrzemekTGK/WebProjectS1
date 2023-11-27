$(document).ready(function () {
    $(document).on('click', '#financeButton', function (e) {
        e.preventDefault();

        var carIndex = $('#carIndex').text().trim().replace('Index: ', '');
        loadPage('/Pages/finance.html', carIndex);
    });
});