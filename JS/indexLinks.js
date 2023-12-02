const viewStockButton = document.getElementById('carslinkButton');
const applyNowButton = document.getElementById('financeLinkButton');
const learnMoreButton = document.getElementById('aboutUsLinkButton');


viewStockButton.addEventListener('click', function() {
    console.log(viewStockButton);
    window.location.href = '../Pages/cars.html';
});
applyNowButton.addEventListener('click', function() {
    console.log(applyNowButton);
    window.location.href = '../Pages/finance.html';
});
learnMoreButton.addEventListener('click', function() {
    console.log(learnMoreButton);
    window.location.href = '../Pages/about.html';
});
