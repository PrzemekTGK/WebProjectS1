$(document).ready(function () {
  $.getJSON("/Json/cars.json", function (cars) {
    var carsContainer = $("#featuredCarsContainer");

    for (var i = 0; i < 3; i++) {
      var randomIndex = Math.floor(Math.random() * cars.length);

      var car = cars[randomIndex];

      var cardHtml =
        `<div class="col-sm-12 col-md-4 col-lg-4 car-col">
            <div class="card" id="featuredCard" style="width: 18rem;">
                <img class="card-img-top" src="/Images/Cards/${car.image}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${car.make} ${car.model}</h5>
                    <p class="card-text">Year: ${car.year} 
                    <br>Price: €${car.price}</p>
                    <a href="#" class="btn car-link" data-car-index="${car.index}">More Details</a>
                </div>
            </div>
         </div>`;

      carsContainer.find('.row.featured-cars:last').append(cardHtml);

      cars.splice(randomIndex, 1);

      $('.car-link').on('click', function (e) {
        e.preventDefault();
        var carIndex = $(this).data('car-index');
        loadPage('/Pages/car.html', carIndex);
      });
    }
  });
});