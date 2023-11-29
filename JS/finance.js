
//VARS
let carPrice = document.getElementById("carFullPrice");
let priceOfCredit = document.getElementById("priceOfCredit");
let deposit = document.getElementById("deposit");
let leftToPay = document.getElementById("leftToPay");
let interestRate = document.getElementById("interstRate");
let remainingBalance = document.getElementById("remainingBalance");


//CALCULATE LEFT TO PAY FIELD
function carDeposit() {

    console.log('value changed carPrice Func');
    console.log("car price value" + carPrice.value);

    let leftToPayValue = (carPrice.value - deposit.value);

    leftToPay.value = leftToPayValue;
    console.log(leftToPayValue);

    if (deposit.value == "") {
        deposit.value = 0;
        leftToPay.value = carPrice.value;
    }

    if (deposit.value < 0) {
        deposit.value = 0;
        leftToPay.value = carPrice.value;
    } else if (deposit.value > parseInt(carPrice.value)) {
        deposit.value = parseInt(carPrice.value);
        leftToPay.value = 0;
    }

    console.log("depozyt" + deposit.value);


    chooseCredit();
}

//CALCULATE FULL PRICE LEFT TO PAY
function chooseCredit() {

    let creaditYears = document.getElementById("creaditYears").value;
    let interest = 0;

    console.log("Credit years " + creaditYears);
    if (deposit.value == "") {
        deposit.value = 0;
        leftToPay.value = carPrice.value;
    }


    if (creaditYears == 0) {


        deposit.value = 0;
        interestRate.value = "0%";
        interest = 0;
        leftToPay.value = carPrice.value;
        remainingBalanceFun()



    } else if (creaditYears == 1) {

        interestRate.value = "5%";
        interest = 5;
        remainingBalanceFun()


    } else if (creaditYears == 3) {

        interestRate.value = "7%";
        interest = 7;
        remainingBalanceFun()
    }
    else if (creaditYears == 5) {

        interestRate.value = "10%";
        interest = 10;
        remainingBalanceFun()
    } else {

        interestRate.value = "";
        priceOfCredit.value = "";
        remainingBalance.value = "";

    }

    function remainingBalanceFun() {
        //carDeposit();
        priceOfCredit.value = parseInt(creaditYears * leftToPay.value / 100 * interest);
        let remainingBalanceFloat = (parseFloat(leftToPay.value) + parseFloat(priceOfCredit.value));
        console.log("remBla" + remainingBalance.value);
        let a = parseInt(remainingBalance.value);
        remainingBalance.value = remainingBalanceFloat.toLocaleString("ie-IE", { style: "currency", currency: "EUR" });

    }
}
