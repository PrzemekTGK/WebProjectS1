function highlightCurrentPage() {
    var currentPage = window.location.pathname.split('/').pop();

    var navLinks = $('.navbar-container').find('.nav-link');
    navLinks.each(function () {
        var linkPage = $(this).attr('href').split('/').pop();
        if (linkPage === currentPage) {
            $(this).addClass('current');
        } else if (currentPage === 'car.html') {
            $('.navbar-container #navLinkCars').addClass('current');
        } else if (currentPage === 'finance.html') {
            $('.navbar-container #navLinkFinance').addClass('current');
            updateCarDetails(0);
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

function updateCarDetails(carIndex) {
    $.ajax({
        url: '../Json/cars.json',
        dataType: 'json',
        success: function (data) {
            const selectedCar = data[carIndex];

            const template = $('#carDetailsTemplate').html();

            const filledTemplate = template
                .replace(/{MAKE}/g, selectedCar.make)
                .replace(/{MODEL}/g, selectedCar.model)
                .replace(/{YEAR}/g, selectedCar.year)
                .replace(/{ENGINE_SIZE}/g, selectedCar.engine_size)
                .replace(/{DESCRIPTION}/g, selectedCar.description)
                .replace(/{FUEL_TYPE}/g, selectedCar.fuel_type)
                .replace(/{TRANSMISSION}/g, selectedCar.transmission)
                .replace(/{PRICE}/g, selectedCar.price)
                .replace(/{INDEX}/g, selectedCar.index);

            $('#carDetailsContainer').html(filledTemplate);

            $('#carImage').attr('src', '/Images/Cards/' + selectedCar.image);
        },
        error: function (error) {
            console.error('Error fetching data:', error);
        }
    });
}