
//CONST AND VARS
const form = document.getElementById('form');
const txt_Department = document.getElementById('txt_Department');
const txt_name = document.getElementById('txt_name');
const txt_email = document.getElementById('txt_email');
const txt_prefix = document.getElementById('txt_prefix');
const txt_phone = document.getElementById('txt_phone');
const txt_subject = document.getElementById('txt_subject');
const txt_message = document.getElementById('txt_message')
const txt_tick = document.getElementById('txt_tick');
let valid = true;
const myModal = new bootstrap.Modal("#myModal");

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

    const departmentValue = txt_Department.value;
    const nameValue = txt_name.value.trim();
    const emailValue = txt_email.value.trim();
    //REG EXP. TO CHECK EMAIL FORMAT
    const isValidEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const prefixValue = txt_prefix.value;
    const phoneValue = txt_phone.value.trim();
    const subjectValue = txt_subject.value.trim();
    const messageValue = txt_message.value.trim();
    const tickValue = txt_tick.checked;

    valid = true;

    //VALIDATE DEPARTMENT - check if 0 - no option chosen
    if (departmentValue == 0) {

        setError(txt_Department, 'Choose a department');
        valid = false;
    } else {

        setSuccess(txt_Department);
    }

    // VALIDATE NAME - has to have at least 4 signs and space between words
    if (nameValue.length < 5 || (nameValue.indexOf(" ") < 0)) {

        setError(txt_name, 'Name and surname are required with a space between');
        valid = false;
    } else {
        setSuccess(txt_name);
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

    // VALIDATE SUBJECT - min. 5 letters (no space in front and back)
    if (subjectValue.length < 5) {

        setError(txt_subject, 'Enter at least 5 letters');
        valid = false;
    } else {
        setSuccess(txt_subject);

    }

    // VALIDATE MESSAGE - min. 10 letters (no space in front and back)
    if (messageValue.length < 10) {

        setError(txt_message, 'Enter at least 10 letters');
        valid = false;
    } else {
        setSuccess(txt_message);

    }

    // VALIDATE CHECKBOX

    if (!tickValue) {

        setError(txt_tick, 'Tick the box');
        valid = false;
    } else {
        setSuccess(txt_tick);

    }

};

//CREATES TEXT IN MODAL WINDOW
function myModalTxt() {
    document.getElementById("myModalTxt").innerHTML = "<p>You have just sent a message to: <br>The " + txt_Department.value
        + " Department.</p><p>We will contact you soon on:<br> <b>(" + txt_prefix.value + ") " + txt_phone.value + "</b><br>"
        + "A copy of the message, was sent to the provided e-mail: <b>" + txt_email.value + "</b>"
        + "</p><p><br>Best regards,</p>The " + txt_Department.value + " Department team. </p>";
}
