$(document).ready(function () {
  var urlParams = new URLSearchParams(window.location.search);
  var searchTerm = urlParams.get('query');

  $.getJSON("../Json/cars.json", function (cars) {

    var searchContainer = $("#searchContainer");
    var searchInput = $("#searchInput");

    searchInput.val(searchTerm);

    function updateSearchResults() {

      searchContainer.empty();      

      var filteredCars = cars.filter(function (car) {
        var lowerCaseSearchTerm = searchTerm.toLowerCase();

        return Object.values(car).some(function (value) {
          if (typeof value === 'string') {
            return value.toLowerCase().includes(lowerCaseSearchTerm);
          }

          return false;
        });
      });

      if (searchTerm === "") {
        searchContainer.append("<div class=\"container\" id=\"noResultMessageContainer\"><h1>No search term entered.</h1></div>");
      } else if (filteredCars.length === 0) {
        searchContainer.append("<div class=\"container\" id=\"noResultMessageContainer\"><h1>No matching cars found.</h1></div>");
      } else {
        filteredCars.forEach(function (car, index) {
          var cardHtml = `
              <div class="col-sm-12 col-md-4 col-lg-4 car-col">
                <div class="card" style="width: 18rem;">
                  <img class="card-img-top" src="/Images/Cars/${car.image}" width="286" height="215">
                  <div class="card-body">
                    <h5 class="card-title">${car.make} ${car.model}</h5>
                    <p class="card-text">Year: ${car.year} 
                    <br>Price: €${car.price}</p>
                    <a href="/Pages/car.html?carIndex=${car.index}" class="btn car-link">More Details</a>
                  </div>
                </div>
              </div>
            `;

          if (index % 3 === 0) {
            searchContainer.append('<div class="row car-row"></div>');
          }

          searchContainer.find('.row.car-row:last').append(cardHtml);
        });
      }
    }

    searchInput.on("input", function () {
      searchTerm = $(this).val().toLowerCase();
      updateSearchResults();
    });

    updateSearchResults();
  });
});
