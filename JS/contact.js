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


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateInputs = () => {

    const departmentValue = txt_Department.value;
    const nameValue = txt_name.value.trim();
    const emailValue = txt_email.value.trim();
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
    //Validate Department - check if 0 - no option chosen
    if (departmentValue == 0) {

        setError(txt_Department, 'Choose a department');

    } else {

        setSuccess(txt_Department);
    }

    // Validate Name - has to have at least 4 signs and space between words
    if (nameValue.length < 5 || (nameValue.indexOf(" ") < 0)) {

        setError(txt_name, 'Name and surname are required with a space between');
    } else {
        setSuccess(txt_name);
    }

    // Validate Email - Reg Exp.
    if (!isValidEmail(emailValue)) {

        setError(txt_email, 'Enter a valid E-mail');
    } else {
        setSuccess(txt_email);
        valid = false;
    }

    // Validate Phone number  (has to be 7 numbers long)
    if (phoneValue.length != 7 || prefixValue == 0) {

        setError(document.getElementById('phone'), 'Prefix and 7 digit number has to be entered');
    } else {
        setSuccess(document.getElementById('phone'));
        valid = false;
    }

    // Validate Subject - min. 5 letters (no space in front and back)
    if (subjectValue.length < 5) {

        setError(txt_subject, 'Enter at least 5 letters');
    } else {
        setSuccess(txt_subject);
        valid = false;
    }

    // Validate Message - min. 10 letters (no space in front and back)
    if (messageValue.length < 10) {

        setError(txt_message, 'Enter at least 10 letters');
    } else {
        setSuccess(txt_message);
        valid = false;
    }

    // Validate Checkbox

    if (!tickValue) {

        setError(txt_tick, 'Tick the box');
    } else {
        setSuccess(txt_tick);
        valid = false;
    }

};

