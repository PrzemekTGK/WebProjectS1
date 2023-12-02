document.addEventListener('DOMContentLoaded', function () {
    function getQueryParam(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }
    
    const carIndex = getQueryParam('carIndex');

    console.log(carIndex)

    const container = document.getElementById('carDetailsContainer');

    container.addEventListener('click', function (event) {
        const target = event.target;

        if (target.id === 'contactUsLinkButton') {
            window.location.href = '../Pages/contact.html';
        } else if (target.id === 'carToFinanceLink') {
            window.location.href = '../Pages/finance.html?carIndex=' + carIndex;
        } else if (target.id === 'carslinkButton') {
            window.location.href = '../Pages/cars.html';
        }
    });
});