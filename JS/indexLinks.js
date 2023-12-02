const carsButton = document.getElementById('carslinkButton');
const financeButton = document.getElementById('financeLinkButton');
const aboutUsButton = document.getElementById('aboutUsLinkButton');


carsButton.addEventListener('click', function() {
    console.log(carsButton);
    window.location.href = '../Pages/cars.html';
});
financeButton.addEventListener('click', function() {
    console.log(financeButton);
    window.location.href = '../Pages/finance.html';
});
aboutUsButton.addEventListener('click', function() {
    console.log(aboutUsButton);
    window.location.href = '../Pages/about.html';
});
