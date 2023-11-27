$(document).ready(function () {
  // Fetch car data from JSON file
  $.getJSON("../Json/cars.json", function (cars) {
    // Reference to the cars container
    var carsContainer = $("#carsContainer");

    // Iterate through each car in the JSON data
    cars.forEach(function (car, index) {
      // Check if the car object is defined
      if (!car) {
        console.error("Undefined car object at index:", index);
        return; // Skip to the next iteration
      }

      // Create HTML for each card
      var cardHtml = `
                  <div class="col-sm-12 col-md-4 col-lg-4 car-col">
                      <div class="card" style="width: 18rem;">
                          <img class="card-img-top" src="/Images/Cards/${car.image}" alt="Card image cap">
                          <div class="card-body">
                              <h5 class="card-title">${car.make} ${car.model}</h5>
                              <p class="card-text">Year: ${car.year} 
                              <br>Price: €${car.price}</p>
                              <a href="#" class="btn car-link" data-car-index="${car.index}">More Details</a>
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

    // Add click event handler to the "More Details" links
    $('.car-link').on('click', function (e) {
      e.preventDefault();
      var carIndex = $(this).data('car-index');
      console.log('Clicked car link. Car Index:', carIndex);

      loadPage('/Pages/car.html', carIndex);
    });
  });
});