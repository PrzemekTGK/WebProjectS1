$(document).ready(function () {
  // Fetch car data from JSON file
  $.getJSON("../Json/cars.json", function (cars) {
    // Reference to the cars container
    var carsContainer = $("#carsContainer");

    // Iterate through each car in the JSON data
    cars.forEach(function (car, index) {
      // Create HTML for each card
      var cardHtml = `
          <div class="col-sm-12 col-md-4 col-lg-4 car-col">
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="/Images/Cars/${car.image}" alt="${car.make} ${car.model}" width="286" height="215">
              <div class="card-body">
                <h5 class="card-title">${car.make} ${car.model}</h5>
                <p class="card-text">Year: ${car.year} 
                <br>Price: €${car.price}</p>
                <a href="/Pages/car.html?carIndex=${car.index}" class="btn car-link">More Details</a>
              </div>
            </div>
          </div>
        `;

      // Check if it's the first card in a new row
      if (index % 3 === 0) {
        // Create a new row div
        carsContainer.append('<div class="row car-row"></div>');
      }

      // Append the card to the current row
      carsContainer.find('.row.car-row:last').append(cardHtml);
    });
  });
});