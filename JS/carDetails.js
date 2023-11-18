function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

const carIndex = getQueryParam('carIndex');

jQuery(document).ready(function($) {
    function updateCarDetails() {

        $.ajax({
            url: '/Json/cars.json',
            dataType: 'json',
            success: function(data) {
                const selectedCar = data[carIndex];

                const template = $('#carDetailsTemplate').html();

                const filledTemplate = template
                    .replace(/{MAKE}/g, selectedCar.make)
                    .replace(/{MODEL}/g, selectedCar.model)
                    .replace(/{YEAR}/g, selectedCar.year)
                    .replace(/{PRICE}/g, selectedCar.price);

                $('#carDetailsContainer').html(filledTemplate);

                $('#carImage').attr('src', '/Images/Cards/' + selectedCar.image);
            },
            error: function(error) {
                console.error('Error fetching data:', error);
            }
        });
    }

    updateCarDetails();
});