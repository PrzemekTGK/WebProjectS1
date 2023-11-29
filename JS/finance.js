
function carPrice() {

    let carPrice = document.getElementById("carFullPrice").value;
    console.log('value changed');
    console.log(carPrice);
    let deposit = document.getElementById("deposit");
    let leftToPay = document.getElementById("leftToPay");
    let leftToPayValue = (carPrice - deposit.value);
    document.getElementById("leftToPay").value = leftToPayValue;
    console.log(leftToPayValue);

}

//CALCULATE FULL PRICE LEFT TO PAY
function chooseCredit() {

    const creaditYears = document.getElementById("creaditYears").value;
    console.log(creaditYears);

    if (creaditYears == 0) {
        if (deposit.value == 0) {
            document.getElementById("deposit").value = 0;
            document.getElementById("interstRate").value = 0;
            carPrice();
        }


    } else if (creaditYears == 1) {
        deposit.value = 0;
        document.getElementById("interstRate").value = "5%";
        carPrice();
    } else if (creaditYears == 3) {
        deposit.value = 0;
        document.getElementById("interstRate").value = "7%";
        carPrice();
    }
    else if (creaditYears == 5) {
        deposit.value = 0;
        document.getElementById("interstRate").value = "10%";
        carPrice();
    } else {
        if (deposit.value != "") {

        }
        document.getElementById("interstRate").value = "";
        carPrice();
    }

    document.getElementById("priceOfCredit").value = (7 * document.getElementById("leftToPay").value / 100);
    document.getElementById("remainingBalance").value = (parseFloat(document.getElementById("leftToPay").value) + parseFloat(document.getElementById("priceOfCredit").value));
}


