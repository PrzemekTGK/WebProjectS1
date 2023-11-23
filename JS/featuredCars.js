$(document).ready(function() {
    // Fetch car data from JSON file
    $.getJSON("/Json/cars.json", function(cars) {
      // Reference to the cars container
      var carsContainer = $("#featuredCarsContainer");
  
      // Use a for loop with 4 iterations
      for (var i = 0; i < 3; i++) {
        // Generate a random index within the range of the remaining array length
        var randomIndex = Math.floor(Math.random() * cars.length);
        
        // Get the car at the random index
        var car = cars[randomIndex];

        // Create HTML for each card
        var cardHtml = 
        `<div class="col-sm-12 col-md-4 col-lg-4 car-col">
            <div class="card" id="featuredCard" style="width: 18rem;">
                <img class="card-img-top" src="/Images/Cards/${car.image}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${car.make} ${car.model}</h5>
                    <p class="card-text">Year: ${car.year} 
                    <br>Price: €${car.price}</p>
                    <a href="/Pages/car.html?carIndex=${car.index}" class="btn car-link">More Details</a>
                </div>
            </div>
         </div>`;
  
        // Append the card to the current row
        carsContainer.find('.row.featured-cars:last').append(cardHtml);

        // Remove the selected car from the array
        cars.splice(randomIndex, 1);
      }
    });
  });