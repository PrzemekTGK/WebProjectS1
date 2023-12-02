//#region

//--------------------------------------COUNT FINANCE FIELDS---------------------------------------------------
//VARS
let carPrice = document.getElementById("carFullPrice");
let priceOfCredit = document.getElementById("priceOfCredit");
let deposit = document.getElementById("deposit");
let leftToPay = document.getElementById("leftToPay");
let interestRate = document.getElementById("interstRate");
let remainingBalance = document.getElementById("remainingBalance");
let creaditYears = document.getElementById("creaditYears").value;

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
    creaditYears = document.getElementById("creaditYears").value;
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

    //FINAL PRICE INPUT BOX
    function remainingBalanceFun() {

        priceOfCredit.value = parseInt(creaditYears * leftToPay.value / 100 * interest);
        let remainingBalanceFloat = (parseFloat(leftToPay.value) + parseFloat(priceOfCredit.value));
        //console.log("remBla" + remainingBalance.value);
        //let a = parseInt(remainingBalance.value);
        remainingBalance.value = remainingBalanceFloat.toLocaleString("ie-IE", { style: "currency", currency: "EUR" });
    }
}

//#endregion
//--------------------------------------VALIDATION---------------------------------------------------

//CONST AND VARS
const form = document.getElementById('form');
const txt_Mr = document.getElementById('Mr');
const txt_name = document.getElementById('txt_name');
const txt_street = document.getElementById('txt_street');
const txt_town = document.getElementById('txt_town');
const txt_county = document.getElementById('txt_county');
const txt_email = document.getElementById('txt_email');
const txt_prefix = document.getElementById('txt_prefix')
const txt_phone = document.getElementById('txt_phone');
const txt_deposit = document.getElementById('deposit');
const txt_creditSelect = document.getElementById('creaditYears');
const myModal = new bootstrap.Modal("#myModal");
let valid = true;

//EVENT LISTENER ON CLICK WHILE MODAL IS DISPLAYED - RELOAD THE PAGE
document.addEventListener("click", e => {

    if (e.target.closest(".modal")) {

        window.location.reload();
    }
});

//EVENT LISTENING ON SIBMIT BUTTON CLICK - STARTS VALIDATION AND SHOWS MODAL IF VALIDATION IS OK
form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();

    if (valid) {
        myModalTxt();
        myModal.show();
    }
});

//DISMIS MODAL IF BUTTON OR X IS CLICKED ON MODAL
function dismissModal() {

    myModal.hide();
    window.location.reload();
};

//SETS CLASS ERROR TO INPUT
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

//SETS CLASS SUCCESS TO INPUT
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

//FUNCTION VALIDATES INPUTS
const validateInputs = () => {

    const mrValue = txt_Mr.value;
    const nameValue = txt_name.value.trim();
    const streetValue = txt_street.value.trim();
    const townValue = txt_town.value.trim();
    const countyValue = txt_county.value.trim();
    const emailValue = txt_email.value.trim();
    //REG EXP. TO CHECK EMAIL FORMAT
    const isValidEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const prefixValue = txt_prefix.value;
    const phoneValue = txt_phone.value.trim();

    valid = true;

    // VALIDATE NAME - has to have at least 4 signs and space between words
    if (nameValue.length < 5 || (nameValue.indexOf(" ") < 0)) {

        setError(txt_name, 'Name and surname are required with a space between');
        valid = false;
    } else {
        setSuccess(txt_name);
    }

    // VALIDATE STREET - Reg Exp.
    if (streetValue.length < 3) {

        setError(txt_street, 'Enter 3 letters at least');
        valid = false;
    } else {
        setSuccess(txt_street);
    }

    // VALIDATE TOWN - Reg Exp.
    if (townValue.length < 3) {

        setError(txt_town, 'Enter 3 letters at least');
        valid = false;
    } else {
        setSuccess(txt_town);
    }

    // VALIDATE COUNTY 
    if (countyValue.length < 3) {

        setError(txt_county, 'Enter 3 letters at least');
        valid = false;
    } else {
        setSuccess(txt_county);
    }

    // VALIDATE EMAIL - Reg Exp.
    if (!isValidEmail(emailValue)) {

        setError(txt_email, 'Enter a valid E-mail');
        valid = false;
    } else {
        setSuccess(txt_email);
    }

    // VALIDATE PHONE NUMBER -  has to be 7 numbers long
    if (phoneValue.length != 7 || prefixValue == 0) {

        setError(document.getElementById('phone'), 'Prefix and 7 digit number has to be entered');
        valid = false;
    } else {
        setSuccess(document.getElementById('phone'));
    }

    // VALIDATE DEPOSIT 
    if (txt_deposit.value == "") {

        setError(txt_deposit, 'Enter a number');
        valid = false;
    } else {
        setSuccess(txt_deposit);
    }

    // VALIDATE CREDIT SELECT 
    if (txt_creditSelect.value == -1) {

        setError(txt_creditSelect, 'Select an option');
        valid = false;
    } else {
        setSuccess(txt_creditSelect);
    }
};

//CREATES TEXT IN MODAL WINDOW
function myModalTxt() {

    document.getElementById("myModalTxt").innerHTML = "<p>You have just applied for finance to buy a car.  </p>";

    let cp = parseFloat(carPrice.value);
    cp = cp.toLocaleString("ie-IE", { style: "currency", currency: "EUR" });
    let dep = parseFloat(deposit.value);
    dep = dep.toLocaleString("ie-IE", { style: "currency", currency: "EUR" });

    if (creaditYears == 0) {

        document.getElementById("myModalTxt2").innerHTML = "<p>A price of the car is: " + cp + "</p>" +
            "<p>You are going to pay a full amout.</p>" +
            "</p><p>The remaining balance to pay is: " + remainingBalance.value +
            "</p><p>Please, contact directly AutoTrade within 7 days to secure your purchase. After 7 days the offer expires.</p>";

    } else {

        document.getElementById("myModalTxt2").innerHTML = "<p>A price of the car is: " + cp + "</p>" +
            "<p>Deposit paid: " + dep + "</p>" +
            "<p>You are taking a credit for " + creaditYears + " year(s)</p>" +
            "<p>The remaining balance to pay is: " + remainingBalance.value +
            "</p><p>Please, contact directly AutoTrade within 7 days to secure your purchase. After 7 days the offer expires.</p>";
    }
}
