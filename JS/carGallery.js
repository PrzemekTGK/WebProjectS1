$(document).ready(function () {
  $.getJSON("../Json/cars.json", function (cars) {
    var carsContainer = $("#carsContainer");

    cars.forEach(function (car, index) {
      if (!car) {
        return;
      }

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

      if (index % 3 === 0) {
        carsContainer.append('<div class="row car-row"></div>');
      }

      carsContainer.find('.row.car-row:last').append(cardHtml);
    });

    $('.car-link').on('click', function (e) {
      e.preventDefault();
      var carIndex = $(this).data('car-index');
      loadPage('/Pages/car.html', carIndex);
    });
  });
});