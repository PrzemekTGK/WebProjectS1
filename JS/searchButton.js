document.addEventListener("DOMContentLoaded", function () {
    
    console.log("Adding Search Button Event listener");
    // Get references to the search button and input field
    var searchBtn = document.getElementById("searchBtn");
    var searchInput = document.getElementById("searchInput");

    // Add click event listener to the search button
    searchBtn.addEventListener("click", function () {
        console.log("Search Button clicked! ");
        // Get the user's input from the search input field
        var userInput = searchInput.value;

        // Construct the URL for the search page with the user's input
        var searchUrl = "../Pages/search.html?query=" + encodeURIComponent(userInput);

        // Redirect the user to the search page
        window.location.href = searchUrl;
    });
});
