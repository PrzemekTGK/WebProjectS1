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