$(document).ready(function () {
    $('#financeButton').on('click', function (e) {
        e.preventDefault();
        var carIndex = $(this).data('car-index');
        loadPage('/Pages/finance.html', carIndex);
    });
});