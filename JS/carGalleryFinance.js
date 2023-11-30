$(document).ready(function () {
  // Fetch car data from JSON file
  $.getJSON("../Json/cars.json", function (cars) {
    // Reference to the cars container
    var carsContainer = $("#financeCarsContainer");

    // Iterate through each car in the JSON data
    cars.forEach(function (car, index) {
      // Create HTML for each card
      var cardHtml = `
          <div class="col car-col-finance">
            <div class="finance-card mt-4">
              <a href="#" style="text-decoration: none;">
                <img class="card-img-top" src="/Images/Cards/${car.image}" alt="Card image cap">
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
  });
});