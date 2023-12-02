$(document).ready(function () {
  // Fetch car data from JSON file
  $.getJSON("../Json/cars.json", function (cars) {
    // Reference to the cars container
    var carsContainer = $("#financeCarsContainer");
    var carDetailsContainer = $("#carDetailsContainer");

    // Iterate through each car in the JSON data
    cars.forEach(function (car, index) {
      // Create HTML for each card
      var cardHtml = `
          <div class="col car-col-finance">
            <div class="finance-card mt-4">
              <a href="#" class="car-update-finance" style="text-decoration: none;" data-index="${index}">
                <img class="card-img-top" src="/Images/Cars/Cards/${car.image}" alt="${car.make} ${car.model}" "width="250" height="188">
                <div class="card-body p-2" style="color: rgb(255, 255, 255);">
                  <p class="card-title" style="color: orange; font-weight: bold; font-size: large; text-wrap: wrap;">${car.make} ${car.model}<p>
                  <p class="card-text">Year: ${car.year}
                    <br>Price: €${car.price}
                  </p>
                </div>
              </a>
            </div>
          </div>
        `;

      // Check if it's the first card in a new row
      if (index % 2 === 0) {
        // Create a new row div
        carsContainer.append('<div class="row car-row-finance"></div>');
      }

      // Append the card to the current row
      carsContainer.find('.row.car-row-finance:last').append(cardHtml);
    });

    // Add click event listener to car-update-finance links
    carsContainer.on("click", ".car-update-finance", function (event) {
      event.preventDefault();

      var clickedIndex = $(this).data("index");

      // Remove active class from any previously clicked card
      $(".car-update-finance").parent().removeClass("card-active");
      // Add active class to the clicked card's parent element
      $(this).parent().addClass("card-active");

      updateCarDetails(cars[clickedIndex]);
      var carFullPriceInput = document.getElementById("carFullPrice");
      if (carFullPriceInput) {
        carFullPriceInput.value = cars[clickedIndex].price;
      }
    });

    // Function to update car details in the carDetailsContainer
    function updateCarDetails(car) {
      // Update the content of carDetailsContainer with car details
      var carDetailsHtml = `
        <img class="car-image-finance mt-3 mb-3" id="carImage" alt="${car.make} ${car.model}" src="../Images/Cars/${car.image}">
        <h3>${car.make} ${car.model}</h3>
        <p>
          Year: ${car.year}
          <br>Engine size: ${car.engine_size}
          <br>Fuel Type: ${car.fuel_type}
          <br>Transmission: ${car.transmission}
          <br>Price: €${car.price}
        </p>
        <hr>
      `;
      carDetailsContainer.html(carDetailsHtml);
    }
  });
});