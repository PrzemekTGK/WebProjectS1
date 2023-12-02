document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function(){
        var navbar = document.getElementById("navbarHolder"); 
        var searchBtn = navbar.querySelector("#searchBtn");
        var searchInput = navbar.querySelector("#searchInput");
    
        searchBtn.addEventListener("click", function () {
            console.log("Search Button clicked!");
    
            var userInput = searchInput.value;
            var searchUrl = "../Pages/search.html?query=" + encodeURIComponent(userInput);
            
            window.location.href = searchUrl;
        });
    }, 500);
});