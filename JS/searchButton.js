document.addEventListener("DOMContentLoaded", function () {
    console.log("Adding Search Button Event listener");

    // Get references to the search button and input field within the navbar
    setTimeout(function(){
        var navbar = document.getElementById("navbarHolder"); // Assuming the navbar has an ID "navbarHolder"
        var searchBtn = navbar.querySelector("#searchBtn"); // Assuming the search button has an ID "searchBtn"
        var searchInput = navbar.querySelector("#searchInput"); // Assuming the search input has an ID "searchInput"

        console.log(searchBtn);
        console.log(searchInput);
    
        // Add click event listener to the search button
        searchBtn.addEventListener("click", function () {
            console.log("Search Button clicked!");
    
            // Get the user's input from the search input field
            var userInput = searchInput.value;
    
            // Construct the URL for the search page with the user's input
            var searchUrl = "../Pages/search.html?query=" + encodeURIComponent(userInput);
    
            // Redirect the user to the search page
            window.location.href = searchUrl;
        });
    }, 200);
});